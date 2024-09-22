import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}  />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16' >
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consequatur quo aliquid fuga reiciendis et delectus cum porro unde in voluptates eaque, possimus ex ab saepe, velit maiores molestias ducimus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis delectus praesentium corrupti nobis ab dolore sapiente ipsam velit! Nobis eos, nemo maiores quisquam tempore mollitia eligendi possimus excepturi delectus.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium quam culpa dolorum perferendis dignissimos incidunt eius sint, laboriosam ipsum animi repellendus accusamus esse doloremque enim aut voluptatibus hic dolore!</p>
         </div>
      </div>

      <div className='text-xl py-4' >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
         
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptates. Dicta, mollitia cum omnis voluptatum, autem quibusdam suscipit vel maiores sed quae incidunt beatae! Dolorem facilis impedit optio commodi modi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptates. Dicta, mollitia cum omnis voluptatum, autem quibusdam suscipit vel maiores sed quae incidunt beatae! Dolorem facilis impedit optio commodi modi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptates. Dicta, mollitia cum omnis voluptatum, autem quibusdam suscipit vel maiores sed quae incidunt beatae! Dolorem facilis impedit optio commodi modi.</p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
