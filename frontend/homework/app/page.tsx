import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      Checking app 
      <Link href='/users'>Users</Link>
    </main>
  )
}