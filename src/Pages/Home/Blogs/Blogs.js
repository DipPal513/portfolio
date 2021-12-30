import React from 'react'
import Blog from './Blog'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='container'>
            <h1 className='text-center text-uppercase my-5'>my blog</h1>
                <div className='row'>
                    <Blog />
                </div>
            </div>
        </div>
    )
}

export default Blogs
