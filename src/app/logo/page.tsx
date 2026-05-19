export default function LogoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <section className="flex aspect-square w-[min(90vw,90vh)] items-center justify-center border-4 border-border bg-card brutal-shadow">
        <h1 className="select-none font-[family-name:var(--font-display)] text-[clamp(5rem,26vw,15rem)] leading-none tracking-[-0.06em] text-[#240A34] [transform:scaleY(1.38)]">
          <span className="[text-shadow:10px_10px_0_#EABE6C]">S</span>
          <span className="[text-shadow:10px_10px_0_#891652]">&amp;</span>
          <span className="[text-shadow:10px_10px_0_#EABE6C]">L</span>
        </h1>
      </section>
    </main>
  );
}
