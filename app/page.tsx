import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div>
        <Image 
          alt="Headshot"
          src="/headshot.jpg"
          width={150}
          height={150}
          className="circularImage"
        />
      </div>
      <div className="mb-4"> {} </div>
      <h1 className="mb-3 text-2xl font-semibold tracking-tighter">
        Jackie Wei
      </h1>
      <p className="mb-4">
        {`Hello! My name is Jackie Wei, and I'm an incoming computer science student at Stanford University.`}
      </p>
      <p className="mb-4">
        {`My academic interests include AI/ML, embedded systems, and anthropology. I love to hit the trails, explore new cuisines, engineer niche gadgets, and play with my cat, Artemis! You can learn more about her in the 'artemis' tab :3.`}
      </p>
      <p className="mb-4">
        {`My 'blog' section is just a place for me to ramble and collect my thoughts in my daily living. Please feel free to take a look around! I talk about all kinds of topics, and maybe it will give you a new perspective on life!`}
      </p>
      <div className="my-8">
        <h1 className="mb-3 text-xl font-semibold tracking-tighter">What I'm Listening To</h1>
        <p className="my-3">"one ina million" by Kaden Estantino</p>
        <iframe width="412" height="231" src="https://www.youtube.com/embed/_gdDsGRcSn8?list=OLAK5uy_mw_LdVpQ4dyvNNbwU6l5XMJtV08FiSnxo" title="one ina million" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
      </div>
      <div className="my-8">
        <h1 className="mb-3 text-xl font-semibold tracking-tighter">Blog Posts</h1>
        <BlogPosts />
      </div>
    </section>
  )
}
