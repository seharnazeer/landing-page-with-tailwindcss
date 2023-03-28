import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-500 w-full h-full p-6 text-white flex flex-col items-center mt-10'>
        <div className='w-10/12 bg-slate-100 h-16 p-4 rounded-md -mt-16 flex justify-center items-center text-black'>
        <span className="pr-2 animate-pulse text-slate-600 font-extrabold text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 drop-shadow-2xl"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
            <p className='text-xl font-semibold'>
               Lorem ipsum dolor sit amet 
            </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row sm:flex-row self-start w-full md:justify-between xl:justify-between lg:justify-between sm:justify-between justify-center items-center'>
       <div className='flex flex-col self-start pt-10'>
        <p className=' text-xl font-extrabold pb-4 '>Important Links</p>
          <li>
            Home
          </li>
          <li>
            Our Products
          </li>
          <li>
            Services
          </li>
          <li>
           Gallery
          </li>
       </div>
       <div className='self-end pt-6 ml-6'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32125.227382057943!2d4.412541378355029!3d52.00662402868764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cb09d1de9fb5%3A0xacf21c08069ce1e0!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1679915050020!5m2!1sen!2s"  className='h-[300px] md:w-[450px]
       lg:w-[450px] xl:w-[450px] sm:w-[450px] w-[280px]' 
    //    {{"border":"0","allowfullscreen":"" ,"loading":"lazy", "referrerpolicy":"no-referrer-when-downgrade"}}

       ></iframe>
       </div>
       </div>
    </div>
  )
}

export default Footer