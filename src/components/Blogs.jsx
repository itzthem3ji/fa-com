import React from 'react'
import intro from '../assets/intro.jpg';
import finsec from '../assets/finsec.jpg';
import busstrat from '../assets/busstrat.jpg';

const Blogs = () => {

    const blogs=[
        {
            "id":1,
            "title":"Financial Insights: Navigating Business Strategy for Success",
            "desc":"In this blog, Feyi, a seasoned finance leader, shares valuable insights on financial management and business strategy. Discover practical tips and expert advice to navigate the complex world of finance and drive your business towards success.",
            "coverImg":intro
        },
        {
            "id":2,
            "title":"Financial Risk Management: Safeguarding Your Business in an Uncertain World",
            "desc":"In this blog, Feyi dives into the critical topic of financial risk management. Discover essential strategies, tools, and best practices to protect your business against potential financial risks and navigate uncertainties effectively.",
            "coverImg":finsec
        },
        {
            "id":3,
            "title":"Optimizing Working Capital: Maximizing Efficiency and Cash Flow for Your Business",
            "desc":"In this blog, Feyi explores the critical topic of optimizing working capital to enhance business efficiency and cash flow. Discover strategies, techniques, and best practices to manage inventory, receivables, and payables effectively, ultimately driving financial stability and growth.",
            "coverImg":busstrat
        }
    ]






  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>
                {blogs.map((blog)=>
                    <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={blog.coverImg} alt="intro image" />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                            <p className='text-gray-600 text-xl'>{blog.desc}</p>

                        </div>

                    </div>
                )}

            </div>

        </div>

    </div>
  )
}

export default Blogs