import type React from "react";

export const metadata = {
  title: "PTEF - Coming Soon",
  description:
    "Petroleum Training and Education Fund - Something great is coming",
};

// app/coming-soon/layout.tsx
export default function ComingSoonLayout({
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
