import React from "react"
import Image from "next/image"

import Posts from "@/components/Posts"
import profilePic from "@/images/photo.jpg"

const HomeContainer = () => {
  return (
    <main className="bg-stone-400">
      <section className="p-7 flex flex-col">
        <Image
          src={profilePic}
          width={200}
          height={200}
          alt="Atalay Ferit Özdemir JPG"
          className="border-slate-700 border-2 rounded-full mx-auto"
        />

        <p className="text-center text-slate-700">Atalay Ferit Özdemir</p>
      </section>
      <section className="p-7 text-center">
        <Posts />
      </section>
    </main>
  )
}

export default HomeContainer
