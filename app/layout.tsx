import "./globals.css";
import getCountdown from "@/utils/getCountdown";

export const metadata = {
  title: "Supabase Album",
  description: `Copple gives Sam 1% of Supabase in: ${getCountdown()}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
