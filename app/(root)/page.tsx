import HorizontalTimeline from '@/components/shared/HorizontalTimeline'
import SocialLinks from '@/components/shared/SocialLinks'
import { ScrambleTexts } from '@/components/shared/TextScramble'
import { githubCodeUrl, satisfy, tilt_prism, toolsUsed, ubuntu } from '@/constants'
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
      <div className='flex flex-col mb-20 sm:h-[calc(100vh-10rem)] sm:mb-10 items-center mt-10 px-10 lg:px-64'>
        <div className='w-full flex flex-col'>
          <h1 className={`${satisfy.className} font-satisfy text-5xl`}>
            Crafting Digital Marvels
          </h1>

          <h1 className='text-3xl mt-5 mb-5 font-extrabold'>
            I'M SHIVESH TIWARI
          </h1>

          <SocialLinks className="mb-4" />

          <div>
            A passionate and versatile Full Stack Web Developer with a knack for turning ideas into immersive online experiences.
            I'm on a mission to create remarkable digital experiences. With a portfolio of exciting
            <Link href={'/projects'} className='text-blue-500 uppercase font-semibold'> projects</Link> showcasing my passion for coding, you can learn more <Link href={'/about'} className='text-blue-500 uppercase font-semibold'> about me</Link>.
            <p className='hidden sm:block'>
              From front-end magic to server-side wizardry, I love blending creativity with code to craft pixel-perfect websites and powerful web applications.
              My work is a reflection of my dedication to seamless user experiences and elegant solutions.
            </p>
            {' '} Let's collaborate and bring your digital visions to life!
            <Link href={'/contact'} className='text-blue-500 uppercase font-semibold'> contact</Link> me for new ventures, and let's build something amazing together!
          </div>

          <div className='sm:bg-white sm:dark:bg-slate-900 mt-5 sm:mt-10 md:mt-14 sm:shadow-lg sm:w-[70%] sm:rounded-t-lg self-center'>
            <div className="hidden sm:flex gap-2 p-2 w-full bg-gray-100 dark:bg-gray-800 rounded-t-lg justify-end">
              <div className="bg-green-300 h-2 w-2 rounded-full" />
              <div className="bg-yellow-300 h-2 w-2 rounded-full" />
              <div className="bg-red-300 h-2 w-2 rounded-full" />
            </div>
            <TextScramble
              texts={texts}
              className={`text-xl p-5 text-center font-bold text-gray-800 dark:text-gray-400 ${ubuntu.className}`}
            />
          </div>

          <div className='mt-5 sm:mt-10 text-center flex flex-col items-center justify-center'>
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

        <p className='max-w-[500px] text-center font-light mt-5'>
          Are you interested in reading the code of this Portfolio? Or do you want to create your own portfolio like this? Welcome! The code of this Portfolio website is openly available. 🎉
        </p>

        <div className='flex items-center justify-center gap-5 sm:gap-10 my-20 flex-row'>
          {toolsUsed.map((tool) => (
            <div key={`tool-${tool.name}`} className='flex flex-col justify-between items-center h-[120px]'>
              <Image
                src={tool.image}
                alt='icon'
                height={80}
                width={80}
                className='object-contain'
              />
              <p className='font-semibold text-sm'>{tool.name}</p>
            </div>
          ))}
        </div>

        <Link
          href={githubCodeUrl}
          target='_blank'
          className='px-4 py-2 bg-violet-950 text-white rounded-lg hover:animate-bounce'
        >
          View Code
        </Link>

        <p className="text-sm my-2">OR</p>

            <Link href="https://www.buymeacoffee.com/mrdevknown404" target="_blank" className="mb-20">
                <Image src={"/assets/buy-me-a-coffee.png"} alt="buy me a coffee" height={41} width={174} />
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
              src="/assets/user.svg"
              height={24}
              width={24}
              alt="Testimonial Author"
            />
            <div>
              <h4 className="text-gray-900 dark:text-gray-500 font-semibold">Anonymous</h4>
              <p className="text-gray-600 dark:text-gray-400">Front-end Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
