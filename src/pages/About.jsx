import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center p-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className=' flex flex-col lg:flex-row gap-16 '>
        <img
          className='w-full lg:max-w-[280px] shadow-xl rounded-xl'
          src={assets.about_img}
          alt='Smiling woman with glowing skin — Miy skincare lifestyle photo'
        />

        <div className='flex flex-col justify-center text-xl text-gray-600'>
          <p>
            <span className='niconne-regular text-4xl  text-red-start block mb-2'>
              Miy. Skin Care
            </span>
            Born in Britain, made for every skin — we craft luxury skincare that
            doesn’t just sit on your shelf, it transforms your ritual.
          </p>
          <p className='pt-2'>
            We created our line with a clear vision — to craft high-performance,
            beautifully packaged products that feel indulgent, smell incredible,
            and are accessible to everyone. Our formulas are designed to suit
            all skin types, so whether you’re treating yourself or your clients,
            you can trust in skincare that works and feels extraordinary.
          </p>
          <h2 className='text-xl italic pt-2 text-gray-700'>
            Every product we create is:
          </h2>
          <ul className=' pl-6'>
            <li>✨ Vegan Friendly, Cruelty Free</li>
            <li>✨ Smelt unreal, Unisex</li>
            <li>✨ Rich in natural ingredients</li>
            <li>✨ Affordable yet luxurious</li>
            <li>✨ Housed in gorgeous packaging</li>
          </ul>
        </div>
      </div>

      <p className='text-gray-600 text-xl my-10'>
        From the nourishing textures to the unforgettable scents, each item in
        our range is made to elevate your skincare routine — while staying kind
        to your skin, your wallet, and the planet. We believe confidence begins
        with feeling good in your skin. With us, you can walk in that confidence
        every day.
      </p>

      <div className='flex flex-col-reverse lg:flex-row gap-10 px-10'>
        <div className='flex flex-col justify-center flex-1 text-xl text-gray-600'>
          <p className='text-xl  text-gray-600'>
            <strong className=' italic text-gray-700'>
              It's Where Pure Meets Powerful.
            </strong>{' '}
            Have you ever felt let down by skincare that promises more than it
            gives? In a world full of harsh chemicals and one-size-fits-all
            routines, your skin, body, and hair deserve more than the basics.
            The real issue? Products that only work on the surface — leaving
            your skin stressed, your glow faded, and your confidence shaken.
          </p>
          <p>
            <strong className='text-xl italic text-gray-700'>
              You Deserve Better.
            </strong>{' '}
            We believe skincare should feel like a ritual, not a routine. You
            deserve care that’s both indulgent and effective. Think textures
            that melt into your skin, calming natural scents, and ingredients
            that truly make a difference — every single day. That’s what Miy
            delivers.
          </p>
          <p>
            <strong className='text-xl italic text-gray-700'>
              Welcome to Miy Skin Care.
            </strong>{' '}
            Thoughtfully formulated for your face, body, and hair — powered by
            nature, perfected by science. Each product blends high-performance
            actives with clean ingredients and a touch of elegance, turning
            everyday care into a self-love ritual. Your glow-up starts here.
            Because when you feel good in your skin, everything changes.
          </p>
          <p>
            <strong className='text-xl italic text-gray-700'>
              A Brand You Can Fall in Love With.
            </strong>{' '}
            Miy Skin Care is a premium, conscious beauty brand. We create
            luxurious, clean essentials for those who believe in treating their
            skin — and themselves — with care and intention.
          </p>
        </div>
        <img
          className='w-full lg:max-w-[450px] shadow-xl rounded-xl'
          src={assets.hero_img2}
          alt='Face of girl'
        />
      </div>

      <div className='text-xl pt-10 pb-2'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <p className='text-xl text-gray-600'>
        Our mission is simple: to provide results-driven products that are
        affordable, vegan, cruelty-free, and made to suit all skin types. From
        the packaging to the ingredients, every detail has been carefully
        crafted to ensure you feel confident in your skin. With naturally
        powerful ingredients, unforgettable scents, and unisex formulas that
        truly deliver, we’re here to raise your skincare expectations — and then
        exceed them.
      </p>

      <div className='flex flex-col md:flex-row text-xl m-8 '>
        <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 shadow-xl rounded-xl'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select and test every product to ensure it meets the
            highest standards of performance, safety, and care — because your
            skin deserves nothing less.
          </p>
        </div>
        <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 shadow-xl rounded-xl'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With our user-friendly website and seamless ordering process,
            finding your perfect skincare match has never been easier.
          </p>
        </div>
        <div className='border px-5 md:px-8 py-4 sm:py-8 flex flex-col gap-5 shadow-xl rounded-xl'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated support team is here to guide, support, and answer
            every question — because great skincare starts with great people.
          </p>
        </div>
      </div>

      <div className='w-full flex justify-center mt-16 mb-3'>
        <div className='flex items-center gap-4'>
          <p className='text-2xl text-gray-600 font-medium'>Ready to glow?</p>
          <Link
            to='/collection'
            className='bg-red-end text-white px-8 py-3 text-sm hover:bg-red-start active:bg-red-end uppercase tracking-wider transition duration-300 ease-in-out transform hover:scale-105'
          >
            Explore our collection
          </Link>
        </div>
      </div>
      <p className=' text-xs sm:text-sm md:text-base text-center text-gray-600'>
        Explore our range designed to elevate your daily skincare ritual.
      </p>
    </div>
  );
};

export default About;
