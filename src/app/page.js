"use client";
import icon from '../assets/logo.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { TbCopy, TbCopyCheck } from "react-icons/tb"
import { IoIosArrowDroprightCircle, IoLogoGithub } from "react-icons/io"
import Link from 'next/link';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);

      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const pages = [
    { title: 'Global Warming', description: "Crucial indicators of Earth's rising temperatures", link: "/global-warming" },
    { title: 'CO₂ Carbon Dioxide', description: 'Human-induced emissions of CO₂', link: "/co2" },
    { title: 'CH₄ Methane', description: 'Human-induced emissions of CH₄', link: "/methane" },
    { title: 'N₂O Nitrous Oxide', description: 'Human-induced emissions of N₂O', link: "/n2o" },
  ]

  const more = [
    'About us',
    'Privacy & Terms',
  ]

  return (
    <div className="p-6 min-h-screen">
      <header className='flex flex-col max-w-xl mx-auto items-center mb-7'>
          <Image src={icon} className='w-8 h-8' />
          <h1 className='text-xl font-semibold'>Earth Pulse</h1>
          <p className='text-sm text-center'>Track climate change, global warming and greenhouse gas emissions. Explore the latest data and insights. Share and make an impact!</p>
      </header>

      <main className='max-w-2xl mx-auto space-y-8'>
        <section>
          <h2 className="font-semibold text-blue-500 mb-2 px-2">Dashboards with most recent data</h2>
          <div className='grid grid-cols-1 gap-1'>
            {pages.map((page, index) => (
              <Link href={page.link} key={index} className='flex items-center justify-between bg-base-200/75 hover:bg-base-200 rounded-xl py-3 px-4 cursor-pointer'>
                <div className='leading-snug'>
                  <h3 className='text-[0.93rem] font-semibold'>{page.title}</h3>
                  <p className='text-[0.8rem] text-orange-400/85'>{page.description}</p>
                </div>
                <IoIosArrowDroprightCircle className='w-5 h-5 text-blue-500' />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-blue-500 mb-2 px-2">Dashboard for Paris Agreement</h2>
          <div className='grid grid-cols-1 gap-1'>
            <div className='flex items-center justify-between bg-base-200/75 hover:bg-base-200 rounded-xl py-3 px-4 cursor-pointer'>
              <div className='leading-snug'>
                <h3 className='text-[0.93rem] font-semibold'>Indicators of Global Climate Change</h3>
                <p className='text-[0.8rem] text-orange-400/85'>IPCC AR6 consistent, annually updated, by IGCC initiative</p>
              </div>
              <IoIosArrowDroprightCircle className='w-5 h-5 text-blue-500' />
            </div>
          </div>
        </section>

        <section>
          <h2 className='font-semibold text-blue-500 mb-2 px-2'>More</h2>
          <div className='grid grid-cols-2 gap-1'>
            {
              more.map((item, index)=> (
                <div key={index} className='bg-base-200/75 hover:bg-base-200 rounded-xl cursor-pointer flex items-center justify-center p-4'>
                  <h3 className='text-[0.943rem] font-semibold'>{item}</h3>
                </div>
              ))
            }
          </div>
        </section>

        <section className='text-center'>
          <p className='text-gray-400 mb-1 text-sm'>Tell your friends and make an impact!</p>
          <button 
            onClick={() => document.getElementById('modal').showModal()}
            className='bg-blue-600 text-sm text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors'
          >
            Share link 🌍
          </button>
          <dialog id='modal' className='modal'>
            <div className='modal-box'>
              <form>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xs rounded-xl'>✕</button>
              </form>
              <div className='flex flex-col items-start'>
                <h5 className='font-medium mt-2 mb-1 px-1'>Share and make an impact!</h5>
                <div className='bg-base-200 rounded-lg py-3 px-5 w-full flex justify-between cursor-pointer' onClick={handleCopy}>
                  <p className='text-opacity-25'>{currentUrl}</p>
                  <button>{copied ? <TbCopyCheck className='w-5 h-5' /> : <TbCopy className='w-5 h-5' />}</button>
                </div>
              </div>
            </div>
          </dialog>
        </section>
      </main>

      <footer className='flex flex-col justify-center items-center max-w-3xl mx-auto mt-5 pt-5 border-t border-gray-800/50'>
          <div className='flex justify-center space-x-4 mb-2'>
            <a 
              href='https://github.com/michahl' 
              target='_blank'
              className='text-gray-400 hover:text-gray-300 transition-colors'
            >
              <IoLogoGithub className='w-6 h-6' />
            </a>
          </div>
          <p className='text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Earth Pulse. All rights reserved.
          </p>
          <p className='text-sm'>Logo by <a href='https://www.flaticon.com' target='_blank' className='link link-hover'>Freepik - Flaticon</a></p>
      </footer>
    </div>
  );
}
