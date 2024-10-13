import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex min-h-screen flex-col'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}