"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SubmitState = "idle" | "sending" | "success" | "error";
type Toast = { message: string; tone: "success" | "error" } | null;

const initialData = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialData);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const [toast, setToast] = useState<Toast>(null);

  const canSubmit = useMemo(() => {
    return Boolean(formData.name && formData.email && formData.message);
  }, [formData.email, formData.message, formData.name]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit || submitState === "sending") {
      return;
    }

    setSubmitState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSubmitState("error");
        const message = payload.message ?? "Message failed to send.";
        setFeedback(message);
        setToast({ message, tone: "error" });
        setTimeout(() => setToast(null), 2800);
        return;
      }

      setSubmitState("success");
      setFeedback(
        payload.message ??
          "Thanks. I will get back to you shortly with next steps."
      );
      setToast({
        message:
          payload.message ??
          "Thanks. I will get back to you shortly with next steps.",
        tone: "success",
      });
      setTimeout(() => setToast(null), 2800);
      setFormData(initialData);
    } catch {
      setSubmitState("error");
      const message = "Network issue. Please retry in a minute.";
      setFeedback(message);
      setToast({ message, tone: "error" });
      setTimeout(() => setToast(null), 2800);
    }
  }

  return (
    <Card className="rounded-none border-2 border-border bg-background">
      <CardHeader className="border-b-2 border-border">
        <CardTitle className="font-[family-name:var(--font-display)] text-2xl">
          Tell me what is breaking your workflow.
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.12em]">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    name: event.target.value,
                  }))
                }
                required
                className="h-11 rounded-none border border-border"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.12em]">
                Work Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((previous) => ({
                    ...previous,
                    email: event.target.value,
                  }))
                }
                required
                className="h-11 rounded-none border border-border"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.12em]">
              Company (optional)
            </label>
            <Input
              id="company"
              value={formData.company}
              onChange={(event) =>
                setFormData((previous) => ({
                  ...previous,
                  company: event.target.value,
                }))
              }
              className="h-11 rounded-none border border-border"
              placeholder="Company name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.12em]">
              What should be automated first?
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(event) =>
                setFormData((previous) => ({
                  ...previous,
                  message: event.target.value,
                }))
              }
              required
              className="min-h-40 rounded-none border border-border"
              placeholder="Describe your biggest bottleneck and current tool stack."
            />
          </div>

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                website: event.target.value,
              }))
            }
            className="hidden"
            aria-hidden
          />

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              className="h-11 rounded-none border-2 border-border bg-primary px-5 text-sm font-semibold uppercase tracking-[0.1em]"
              disabled={!canSubmit || submitState === "sending"}
            >
              {submitState === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send Brief
                  <Send className="size-4" />
                </>
              )}
            </Button>
            {feedback ? (
              <p
                className={`text-sm font-medium ${
                  submitState === "error" ? "text-destructive" : "text-foreground"
                }`}
              >
                {feedback}
              </p>
            ) : null}
          </div>
        </form>
      </CardContent>
      {toast ? (
        <div
          className={`fixed bottom-5 right-5 z-[70] max-w-sm border-2 border-border px-4 py-3 text-sm font-semibold brutal-shadow ${
            toast.tone === "success"
              ? "bg-secondary text-secondary-foreground"
              : "bg-primary text-primary-foreground"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.message}
        </div>
      ) : null}
    </Card>
  );
}
