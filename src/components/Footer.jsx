import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe To Our Newsletter</p>
                <p className='py-4'>Get the latest articles, resources, and financial insights delivered to your inbox weekly. Stay informed and up-to-date with valuable content curated by our experts. Join our newsletter community today for exclusive access to industry trends, practical tips, and thought-provoking analysis. Elevate your knowledge and stay ahead of the curve by subscribing to our newsletter now.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email' />
                    <button className='p-2 mb-2 bg-[#00B86E]'>Subscribe</button>
                </form>
                
            </div>

        </div>

    </div>
  )
}

export default Footer