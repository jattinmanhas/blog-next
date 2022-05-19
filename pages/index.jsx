// import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

// const posts = [
//   {title: 'React Testing', excerpt: "Learn React Testing"},
//   {title: 'React with Tailwind', excerpt: "Learn React with Tailwind"}
// ]

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>BL Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="lg: relative sticky top-8">
            <PostWidget categories={posts.categories} slug={posts.slug} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { 
       posts 
    },
  }
}
