import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <h1>Blog Page</h1>
            <Link href="/about">Go to About Page </Link>
            <Link href="/">Go to Home Page </Link>
        </div>
    )
}