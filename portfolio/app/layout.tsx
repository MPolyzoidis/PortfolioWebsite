import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Marios Polyzoidis",
    description: "Marios Polyzoidis Portfolio",
    icons: {
        icon: "/file.svg",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
