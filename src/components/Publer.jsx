import React from 'react'
import { acc_data } from './Acc_Data'
import Accordian from './Accordian'

let Publer = () => {
  return (
    <>
    <header>
      <div className='bg-[#6f42c1] w-100% h-12 flex justify-center items-center gap-8 text-white'>
        <button className='bg-white rounded-2xl w-12 h-8 text-black '>New</button>
        <p>Switch to your Native Language <span className='text-[10px]'><b>ITDEFRES</b></span></p>
      </div>
      <nav className='fixed flex items-center w-400 h-15 bg-[white]'>
        <div className='w-1/2 flex gap-8 items-center ml-30'>
          <img src="https://cdn.publer.com/brand/logos/logo-dark.svg" alt="logo" />
          <p>Features</p>
          <p>Free Tools</p>
          <p>Integrations</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
        <div className='w-1/2 flex gap-8 justify-center items-center'>
          <p>EN</p>
          <button className='bg-[whitesmoke] rounded-3xl w-20 h-10 text-[#113b55] hover:outline-1 '>Login</button>
          <button className='bg-[#00ccc5] rounded-3xl text-white w-40 h-10 text-black hover:outline-1 hover:bg-[#113b55]'>Get Started Now</button>
        </div>
      </nav>
    </header>
    <section className='mt-50'>
      <div className='flex flex-col items-center gap-4 justify-center'>
        <h1 className='text-[40px] font-bold '>Download YouTube Videos</h1>
        <p>Paste the URL of the YouTube video and press to download in HD</p>
      </div>
      <div className='flex items-center gap-4 justify-center h-50 ml-50 mt-20 shadow-xl/30 shadow-whitesmoke-500 w-300'>
        <input className='border-1 w-180 h-20 rounded-2xl border-gray-500' type="text" placeholder='    https://' /> <button className='bg-[#00ccc5] rounded-3xl w-40 h-20 text-white text-[20px] hover:outline-1 '>Download</button>
      </div>
    </section>
    <section className='flex flex-col items-center mt-20 gap-4 text-[18px]'>
      <p>No ads. No watermarks. No registration.</p>
      <p>But if you like this tool, you can always <span className='text-[blue]'>buy us a coffee ☕</span></p>
      <p>Issues?<span className='text-[blue]'> Contact us</span></p>
      <p className='text-[15px]'>Works instantly on mobile or desktop and every browser</p>
    </section>
    <section className='flex flex-col items-center mt-20 gap-4 text-[18px]'>
      <h1 className='text-[30px]'>Share YouTube Videos</h1>
      <p>Join thousands of happy creators who trust Publer's YouTube Videos by sharing it on your favorite social media platforms.</p>

    </section>
    <section className='flex flex-col items-center mt-20 gap-4 text-[18px]'>
      <h1 className='text-[30px]'>Explore Recommended Free Tools</h1>
      <p>Maximize your productivity and manage your content effortlessly with Publer free tools.</p>
      <div className='grid grid-cols-3 gap-4'>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>YouTube AI Title Generator</button>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>YouTube Meta Preview</button>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>YouTube Post Preview</button>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>YouTube AI Caption Generator</button>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>Social Media Scheduler</button>
        <button className='bg-[whitesmoke] h-15 rounded-md text-[gray] border-1 border-[skyblue] w-68 hover:bg-gray-200'>More Free Tools</button>
      </div>
    </section>
    <section className='flex flex-col items-center mt-20 gap-4 text-[18px]'>
      <h1 className='text-[30px]'>Schedule YouTube Videos</h1>
      <p>With a suite of powerful tools and a user-friendly interface, you will be able to craft, preview, schedule, and analyze your social media content with ease.</p>
      <button className='bg-[#00ccc5] rounded-2xl w-45 h-15 text-white hover:bg-blue-400 '>Get started for free  </button>
    </section>
    <div className='mt-20 ml-'>
      <video className='h-250 w-100%' src="../src/assets/Screen Recording 2025-08-22 213502.mp4" controls muted autoPlay></video>
    </div>
    <section className='flex flex-col items-center mt-20 justify-center'>
      <p className='text-[#00ccc5] text-[20px]'>TESTIMONIALS</p>
      <h1 className='text-[40px] w-200 '>Trusted by 520,000+ social media managers, &nbsp;&nbsp; marketing agencies, and global brands</h1>
    </section>
    <section className='flex flex-col items-center gap-2 mt-20 justify-center'>
      <h1 className='text-[40px]'>Frequently Asked Questions</h1>
      <p className='text-[20px]'>Most common questions and answers related to the media downloader.</p>
      <p className='text-[20px]'>If you’re still not finding what you need, <span>chat with us</span> or <span>visit our Help Center</span>.</p>

    </section>
    <section >
      {
        acc_data.map(({id,q,a},i)=>{
          return <>
            <Accordian key={i} id={id} q={q} a={a} />
          </>
        })
      }
    </section>
    <footer className='bg-[#3e4046] mt-20'>
      <div className='flex flex-col items-center p-20 text-white text-[40px]'>
        <h1>Maximize Your Social Media</h1>
        <h1>Impact with Publer</h1> <br />
        <button className='bg-[blue] rounded-full w-45 h-15 text-white text-[22px]'>Try for free</button>
      </div>
      <div className='text-[gray] h-1 w-[1200px] ml-50 mb-20'> <hr /></div>
      <section className='flex items-center'>
        <div className='flex  items-center gap-8 text-white text-[18px] ml-50'>
          <img src="https://cdn.publer.com/brand/logos/logo-white.svg" alt="" />
          <p>The ultimate hub for social media management</p>
        </div>
        <div>
          
        </div>
      </section>
      <section className='grid grid-cols-4 gap-y-8 ml-50 mt-15 text-white'>
        <div className='flex flex-col gap-2'>
          <h1>Features</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>AI Assistant</li>
            <li>Calendar Planner</li>
            <li>Bulk Scheduling</li>
            <li>In-Depth Analytics</li>
            <li>Agency Features</li>
            <li>Browser Extension</li>
            <li>Link in Bio</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Integrations</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Google Business</li>
            <li>Twitter / X</li>
            <li>TikTok</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Resources</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>Blog</li>
            <li>Help Center</li>
            <li>API Docs</li>
            <li>Case Studies</li>
            <li>Product Updates</li>
            <li>Roadmap</li>
            <li>Status</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Company</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Plans & Pricing</li>
            <li>Affiliate Program</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Free Social Media Tools</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>Photo/Video Downloader</li>
            <li>Social Media Holiday Calendar</li>
            <li>Social Media Competitor Analysis</li>
            <li>Social Media Post Preview</li>
            <li>Instagram Feed Planner</li>
            <li>Bold & Italic Text Generator</li>
            <li>AI Post Generator</li>
            <li>Trending Posts Explorer</li>
            <li>Latest News Explorer</li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Compare</h1>
          <ul className='text-[gray] flex flex-col gap-y-1.5'>
            <li>Publer vs. Hootsuite</li>
            <li>Publer vs. Sprout Social</li>
            <li>Publer vs. Later</li>
            <li>Publer vs. Buffer</li>
            <li>Publer vs. Plannable</li>
            <li>Publer vs. SocialPilot</li>
            <li>Publer vs. Metricool</li>
            <li>Publer vs. ContentStudio</li>
            <li>Publer vs. Agorapulse</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h1>Join Our Newsletter!</h1>
          <p className='text-[gray]'>Get the latest social media news & updates straight to your inbox</p>
          <div className='flex gap-4'>
            <input className='w-100 h-10 border-1 border-[gray] rounded-full text-[white]' type="text" name="" id="" placeholder='     enter your email' /> <button className='bg-[#00ccc5] rounded-2xl w-40 h-10 text-white hover:bg-blue-400 '>Subscribe</button>
          
          </div>
          <h1>Download Publer App to manage socials anywhere!</h1>
          <img src="https://apps.apple.com/app/id1571680865" alt="" />
        </div>
      </section>
      <div className='text-[gray] h-1 w-[1200px] mt-20 ml-50 mb-20'> <hr /></div>
      <section className='flex items-center justify-center mt-20 ml-50'>
        <div className='w-1/2 flex items-center text-[white] pb-15'>
          <p>© 2025 Kalemi Code. All rights reserved.</p>
        </div>
        <div className='w-1/2 flex items-center gap-6 text-[gray] pb-15  '>
          <p className='text-[white]'>English</p>
          <p className='hover:text-[white]'>Terms of Service</p>
          <p className='hover:text-[white]'>Privacy Policy</p>
        </div>
      </section>
      {/* <div className='mt-20'></div> */}
    </footer>
    </>
  )
}

export default Publer