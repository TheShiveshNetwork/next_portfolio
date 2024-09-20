import SocialLinks from "@/components/shared/SocialLinks"
import Link from "next/link"
import Image from "next/image"
import config from "@/configs/config"
import AboutMe from "./aboutMe"

const Page = () => {
    return (
        <div className='flex flex-col items-center mt-10 px-10 lg:px-64'>
            <h1 className="text-4xl">About</h1>
            <h1 className="text-3xl font-semibold">{config.name}</h1>

            <SocialLinks className="mt-4" />

            <div className="mt-10 mb-7 text-justify">
                {config.aboutMe ?
                    config.aboutMe
                    :
                    <AboutMe />
                }
            </div>

            <p className="text-sm mb-2">Not necessarily, but in case you like my work, ❤️</p>
            <Link href="https://www.buymeacoffee.com/mrdevknown404" target="_blank" className="mb-10">
                <Image src={"/assets/buy-me-a-coffee.png"} alt="buy me a coffee" height={41} width={174} />
            </Link>
        </div>
    )
}

export default Page