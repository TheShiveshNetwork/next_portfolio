import SocialLinks from "@/components/shared/SocialLinks"
import Link from "next/link"
import Image from "next/image"

const Page = () => {
    return (
        <div className='flex flex-col items-center mt-10 px-10 lg:px-64'>
            <h1 className="text-4xl">About</h1>
            <h1 className="text-3xl font-semibold">Shivesh Tiwari</h1>

            <SocialLinks className="mt-4" />

            <div className="mt-10 mb-7 text-justify">
                <p>
                    Hey there! I'm Shivesh, a dedicated and enthusiastic Full Stack Developer with a lifelong passion for coding. My journey into the world of programming began when I was just 11 years old, tinkering with Visual Basic and realizing the incredible power of bringing ideas to life through code. Since then, I've embarked on an exciting learning adventure, exploring languages like Python, Java, and JavaScript, honing my skills to create immersive digital experiences.
                </p>
                <br />
                <p>
                    Throughout my coding odyssey, I've taken on diverse <Link href={'/projects'} className='text-blue-500 uppercase font-semibold'> projects</Link> that have enriched my expertise in both front-end and back-end development. Building full-stack websites has become my forte, and I've delighted in crafting interactive social media platforms, engaging blog applications, and even website clones, where I challenged myself to recreate some of the web's most popular destinations.
                </p>
                <br />
                <p>
                    With an insatiable appetite for innovation, I'm always eager to embrace the latest technologies and best practices, ensuring that every project I undertake is a seamless blend of creativity and cutting-edge functionality. My eye for detail and passion for user-centered design enables me to create visually appealing interfaces that prioritize a smooth and intuitive user experience.
                </p>
                <br />
                <p>
                    I thrive on collaboration and believe in the power of teamwork. Partnering with like-minded individuals and businesses has exposed me to a wide array of perspectives, sparking fresh ideas and pushing the boundaries of what's possible in the digital realm. I am continually seeking opportunities to collaborate on exciting projects that challenge me to grow as a developer and contribute positively to the tech community.
                </p>
                <br />
                <p>
                    If you're looking to bring your digital vision to life, I'd love to be a part of your journey! Check out my projects to see some of my recent endeavors, and feel free to get in touch using the <Link href={'/contact'} className='text-blue-500 uppercase font-semibold'> contact</Link> form below. Let's collaborate on something extraordinary that leaves a lasting impact on the web world!
                </p>
                <br />
                <br />
                <p>
                    Thank you for visiting my <Link href={'/'} className='text-blue-500 uppercase font-semibold'> portfolio</Link>, and I'm excited to embark on this coding adventure with you!
                </p>
            </div>

            <p className="text-sm mb-2">Not necessarily, but in case you like my work, ❤️</p>
            <Link href="https://www.buymeacoffee.com/mrdevknown404" target="_blank" className="mb-10">
                <Image src={"/assets/buy-me-a-coffee.png"} alt="buy me a coffee" height={41} width={174} />
            </Link>
        </div>
    )
}

export default Page