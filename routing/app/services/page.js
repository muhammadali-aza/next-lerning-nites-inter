import Link from "next/link";

export default function Services() {
    return (
        <>
            <h1>Services</h1>
            <p><Link href="/services/webdev">Web Developement</Link></p>
            <p><Link href="/">App Developement</Link></p>
            <p><Link href="/">Web Design</Link></p>
            <p><Link href="/">App Design</Link></p>
        </>
    )
}