export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
    <main>
        Sidebar
        {children}
    </main>
    </body>
    </html>
  )
}