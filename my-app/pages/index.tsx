import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { TailwindButton } from "@shohamgilad/tailwind-test.ui.button";

const Home: NextPage = () => {
  return (
    <div>
      <TailwindButton text="test" className="bg-red-100" />
    </div>
  )
}

export default Home
