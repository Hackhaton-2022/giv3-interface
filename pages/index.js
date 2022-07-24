import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen text-[#1E0536]">
      <Head>
        <title>Giv3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
        <div className="grid grid-cols-1 gap-6">
          <div className="h-96 py-5 px-20">
            <div className="text-5xl font-bold w-[45%] py-3">Unleash your inner hero and help a community today!</div>
            <div className="grid grid-cols-2 divide-x-0 w-96 py-5">
              <div className="">
                <div>
                  <div className="font-bold text-xl">67</div>
                  <div>Organisations</div>
                </div>
              </div>
              <div className="">
                <div className="font-bold text-xl">12,090 ETH</div>
                <div>Raised</div>
              </div>
            </div>
            <div className="py-5">
                <a href="../create" className="text-white text-md">
                  <button className="rounded-md bg-[#FAAA39] w-80 py-3"> Create A DAO</button>
                </a>
            </div>
          </div>

          <div className="bg-white py-5 px-20 backdrop-filter backdrop-blur-sm bg-opacity-10">
            <span className="text-2xl font-bold">Explore Organizations</span>
            <div className="flex space-x-10 py-5">
                <Card status={false}></Card>
                <Card status={true}></Card>
                <Card status={true}></Card>
                <Card status={true}></Card>
            </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
