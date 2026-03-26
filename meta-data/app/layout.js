import Link from "next/link";

export const metadata = {
  title: {
    template: "%s | Coding",
    default: "Coding"
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {children}</body>
    </html>
  );
}
