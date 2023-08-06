import HorizontalTimeline from '@/components/shared/HorizontalTimeline'
import { ScrambleTexts } from '@/components/shared/TextScramble'
import { githubCodeUrl } from '@/constants'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const TextScramble = dynamic(() => import('@/components/shared/TextScramble'), { ssr: false })

export default function Home() {
  const texts: ScrambleTexts = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
  ]

  return (
    <>
      <div className='flex flex-col h-[calc(100vh-7rem)] items-center mt-10 px-10 lg:px-64'>
        <div className='w-full'>
          <h1 className='text-4xl font-semibold'>Crafting Digital Marvels</h1>

          <h1 className='text-3xl mt-5 mb-5'>
            I'M SHIVESH TIWARI
          </h1>
          <p>
            A passionate and versatile Full Stack Web Developer with a knack for turning ideas into immersive online experiences.
            I'm on a mission to create remarkable digital experiences. With a portfolio of exciting
            <Link href={'/projects'} className='text-blue-500 uppercase font-semibold'> projects</Link> showcasing my passion for coding, you can learn more <Link href={'/about'} className='text-blue-500 uppercase font-semibold'> about me</Link>.
            From front-end magic to server-side wizardry, I love blending creativity with code to craft pixel-perfect websites and powerful web applications.
            My work is a reflection of my dedication to seamless user experiences and elegant solutions. Let's collaborate and bring your digital visions to life!
            <Link href={'/contact'} className='text-blue-500 uppercase font-semibold'> contact</Link> me for new ventures, and let's build something amazing together!
          </p>

          <TextScramble
            texts={texts}
            className='text-2xl mt-5 sm:mt-10 md:mt-14 lg:mt-16 text-center'
            pauseTime={2500}
            letterSpeed={10}
          />

          <div className='mt-5 sm:mt-14 lg:mt-16 text-center flex flex-col items-center justify-center'>
            <p>
              See more About me
            </p>
            <Image
              src='/assets/down.svg'
              alt='down'
              height={24}
              width={24}
              className='mt-5 animate-bounce animate-wiggle dark:invert'
            />
          </div>
        </div>
      </div>

      <section className='px-10 lg:px-64'>
        <h1 className='text-3xl font-semibold'>Latest Stuff</h1>

        <HorizontalTimeline
          className='mb-40 mt-10'
        />
      </section>

      <section className='px-10 lg:px-64 flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-center font-semibold'>I created this portfolio using the following tools</h1>

        <p className='max-w-[500px] text-center font-light mt-5'>This is an Open-Source project, so anyone can view the code of this Portfolio.</p>

        <div className='flex items-center justify-center gap-10 my-20 sm:flex-row'>
          <div className='flex flex-col items-center'>
            <svg aria-label="Next.js logomark" className="next-mark_root__iLw9v" height="80" role="img" viewBox="0 0 180 180" width="80"><mask height="180" id=":R0:mask0_408_134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:R0:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:R0:paint0_linear_408_134)"></path><rect fill="url(#:R0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
            <p className='mt-2'>NextJS</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src="/assets/tailwind.svg"
              alt='Tailwind'
              height={80}
              width={80}
              className='object-contain'
            />
            <p className='mt-8'>TailwindCSS</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src="/assets/mongodb.svg"
              alt='Tailwind'
              height={80}
              width={80}
              className='object-contain'
            />
            <p className='mt-2'>MongoDB</p>
          </div>
        </div>

        <Link
          href={githubCodeUrl}
          target='_blank'
          className='px-4 py-2 mb-20 bg-violet-950 text-white rounded-lg hover:animate-bounce'
        >
          View Code
        </Link>
      </section>

      <section className='px-10 pb-10 flex flex-col items-center lg:px-64'>
        <h1 className='text-2xl text-center'>Testimonials</h1>
        <p className='max-w-[500px] text-center font-light mt-5'>Words of Appreciation: Hear What Clients Say About My Work</p>

        <div className="w-full my-10 bg-white shadow-xl dark:bg-gray-950 rounded-xl p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">"Working with Shivesh was a fantastic experience! Their coding skills are exceptional, and their attention to detail is top-notch. They delivered our project on time and exceeded our expectations. Highly recommended!"</p>

          <div className="flex items-center">
            <Image
              className="w-10 h-10 rounded-full mr-4"
              src="/assets/tailwind.svg"
              height={24}
              width={24}
              alt="Testimonial Author"
            />
            <div>
              <h4 className="text-gray-900 dark:text-gray-500 font-semibold">John Doe</h4>
              <p className="text-gray-600 dark:text-gray-400">CEO, TechCo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
