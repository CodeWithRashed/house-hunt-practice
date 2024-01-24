import Image from 'next/image'
import HomepageData from './components/homepage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
      <HomepageData/>
    </main>
  )
}
