import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Find My Church",
  description:
    "A nationwide church matching platform that helps seekers discover churches aligned with their beliefs, worship style, and community needs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(93,116,99,0.14),_transparent_42%)]" />
          <div className="absolute inset-x-0 top-24 -z-10 h-[20rem] bg-[radial-gradient(circle_at_center,_rgba(95,129,144,0.12),_transparent_50%)]" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
