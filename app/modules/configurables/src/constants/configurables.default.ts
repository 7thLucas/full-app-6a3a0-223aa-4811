/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  // Base
  background: string;
  foreground: string;
  // Card
  card: string;
  cardForeground: string;
  // Popover
  popover: string;
  popoverForeground: string;
  // Primary
  primary: string;
  primaryForeground: string;
  // Secondary
  secondary: string;
  secondaryForeground: string;
  // Muted
  muted: string;
  mutedForeground: string;
  // Accent
  accent: string;
  accentForeground: string;
  // Destructive
  destructive: string;
  destructiveForeground: string;
  // Border / Input / Ring
  border: string;
  input: string;
  ring: string;
  // Charts
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;
  // Navbar
  navbarBackground: string;
  // Sidebar
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

export type TFont = {
  headingFont: string;
  textFont: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  showLogo?: boolean;
  headline: string;
  subtext?: string;
  eyebrow?: string;
  showAccentDot?: boolean;
  footerText?: string;
  brandColor: TBrandColor;
  font: TFont;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Hello World",
  logoUrl: "",
  showLogo: false,
  headline: "Hello World",
  subtext: "Something sharp is on the way. A quiet, minimal start.",
  eyebrow: "Coming soon",
  showAccentDot: true,
  footerText: "© 2026 Hello World",
  brandColor: {
    // Base — near-black, high-contrast minimal
    background:        "#0a0a0a",
    foreground:        "#fafafa",
    // Card
    card:              "#0f0f0f",
    cardForeground:    "#fafafa",
    // Popover
    popover:           "#0f0f0f",
    popoverForeground: "#fafafa",
    // Primary — restrained accent
    primary:           "#6366f1",
    primaryForeground: "#ffffff",
    // Secondary
    secondary:           "#1a1a1a",
    secondaryForeground: "#fafafa",
    // Muted
    muted:           "#1a1a1a",
    mutedForeground: "#8a8a8a",
    // Accent
    accent:           "#6366f1",
    accentForeground: "#ffffff",
    // Destructive
    destructive:           "#ef4444",
    destructiveForeground: "#fafafa",
    // Border / Input / Ring
    border: "#1f1f1f",
    input:  "#1f1f1f",
    ring:   "#6366f1",
    // Charts
    chart1: "#6366f1",
    chart2: "#0d9488",
    chart3: "#1e3a5f",
    chart4: "#d4a017",
    chart5: "#ea580c",
    // Navbar
    navbarBackground: "#0a0a0a",
    // Sidebar
    sidebarBackground:        "#0a0a0a",
    sidebarForeground:        "#fafafa",
    sidebarPrimary:           "#6366f1",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent:            "#1a1a1a",
    sidebarAccentForeground:  "#fafafa",
    sidebarBorder:            "#1f1f1f",
    sidebarRing:              "#6366f1",
  },
  font: {
    headingFont: "Space Grotesk",
    textFont: "Inter",
  },
};
