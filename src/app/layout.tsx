import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={inter.className} >
        <body style={{ margin: 0 }}>{children}</body>
        </html>
    );
}
