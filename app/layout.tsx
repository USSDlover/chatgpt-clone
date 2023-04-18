import SideBar from '@/components/SideBar';

export const metadata = {
  title: 'ChatGPT Messenger',
  description: 'Generated by Next.js',
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={'flex'}>
          <div className={'bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'}>
            <SideBar />
          </div>

          {/* Client Provider - Notification */}

          <div className={'bg-[#343541] flex-1'}>{children}</div>
        </div>
      </body>
    </html>
  )
}
