import type { Metadata } from 'next'
import './globals.css'
import { fontVariables } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'Taskify',
  description: 'TASKIFY GETS IT DONE!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontVariables}>
        {children}
      </body>
    </html>
  );
}
