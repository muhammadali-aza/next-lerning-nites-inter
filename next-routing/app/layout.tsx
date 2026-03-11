import Link from "next/link";

export const metadata = {
  title: "My App",
  description: "This is my app built with Next.js",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My App</h1>
          <nav>
            <Link href="/">Home</Link>
             | 
            <Link href="/about">About</Link>
              |
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}