import React, {useContext} from 'react'
import Link from 'next/link'

const catgories = [{name: 'React', slug: "react"},
{name: "Web Development", slug: "web-dev"}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-4'>
        <div className='border-b w-full inline-block border-blue-400 py-6'>
            <div className="md:float-left block">
                <Link href="/">
                    <span className='cursor-pointer font-bold text-2xl text-white'>
                        Graph CMS
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {catgories.map((category) =>(
                    <Link key={category.slug} 
                    href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-1 align-middle text-white cursor-pointer ml-4'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header