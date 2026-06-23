import type { MetaFunction } from "react-router";
import { useConfigurables } from "~/modules/configurables";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello World" },
    {
      name: "description",
      content: "A minimal, fast-loading coming-soon landing page.",
    },
  ];
};

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  const appName = config?.appName ?? "";
  const headline = config?.headline ?? "";
  const subtext = config?.subtext ?? "";
  const eyebrow = config?.eyebrow ?? "";
  const footerText = config?.footerText ?? "";
  const logoUrl = config?.logoUrl ?? "";
  const showLogo = config?.showLogo ?? false;
  const showAccentDot = config?.showAccentDot ?? false;

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      {/* Soft radial accent glow — subtle, restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />

      <section
        className={[
          "relative z-10 flex w-full max-w-xl flex-col items-center text-center",
          "transition-all duration-700 ease-out",
          loading
            ? "translate-y-2 opacity-0"
            : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        {showLogo && logoUrl ? (
          <img
            src={logoUrl}
            alt={appName || "Logo"}
            className="mb-8 h-12 w-auto select-none"
            draggable={false}
          />
        ) : null}

        {eyebrow ? (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5">
            {showAccentDot ? (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            ) : null}
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </span>
          </div>
        ) : null}

        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          {headline}
        </h1>

        {subtext ? (
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtext}
          </p>
        ) : null}
      </section>

      {footerText ? (
        <footer
          className={[
            "absolute inset-x-0 bottom-8 z-10 flex justify-center px-6",
            "transition-opacity duration-700 ease-out delay-150",
            loading ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <p className="text-xs tracking-wide text-muted-foreground/70">
            {footerText}
          </p>
        </footer>
      ) : null}
    </main>
  );
}
