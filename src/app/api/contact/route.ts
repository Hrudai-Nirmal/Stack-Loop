import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(20).max(3000),
  website: z.string().optional().default(""),
});

type RateRecord = {
  count: number;
  resetAt: number;
};

const MAX_REQUESTS = 4;
const WINDOW_MS = 10 * 60 * 1000;
const rateLimits = new Map<string, RateRecord>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimits.get(ip);

  if (!record || now > record.resetAt) {
    rateLimits.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return false;
  }

  record.count += 1;
  rateLimits.set(ip, record);
  return record.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { message: "Too many requests. Please retry in a few minutes." },
      { status: 429 }
    );
  }

  try {
    const rawPayload = await request.json();
    const payload = contactSchema.parse(rawPayload);

    if (payload.website) {
      return Response.json({ message: "Thanks for reaching out." }, { status: 200 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return Response.json(
        {
          message:
            "Contact service is not configured. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Stack and Loop Inquiry from ${payload.name}`,
      replyTo: payload.email,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || "Not provided"}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { message: "Could not send message right now. Please retry shortly." },
        { status: 502 }
      );
    }

    return Response.json(
      { message: "Message sent. I will reply with next steps soon." },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { message: "Invalid form data. Please check your inputs." },
      { status: 400 }
    );
  }
}

