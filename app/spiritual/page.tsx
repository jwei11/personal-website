import { BlogPosts } from 'app/components/spiritualposts'

export const metadata = {
  title: 'My Spiritual Experiences',
  description: 'Learn about my experiences with Christ.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">My Spiritual Experiences</h1>
      <h1 className="mb-2 tracking-tighter italicized">Jehovah is my strength and my song, / And He has become my salvation.</h1>
      <h1 className="mb-2 tracking-tighter">~ Psalm 118:14</h1>
      <BlogPosts />
    </section>
  )
}