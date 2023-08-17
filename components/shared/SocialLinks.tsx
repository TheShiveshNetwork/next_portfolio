import Link from "next/link"
import Image from "next/image"
import { SocialData } from "@/constants"

const SocialLinks = ({ className }: { className?: string }) => {
    return (
        <div className={`${className} flex gap-3`}>
            {SocialData.map((item) => (
                <Link
                    target='_blank'
                    href={item.url}
                >
                    <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                    />
                </Link>
            ))}
        </div>
    )
}

export default SocialLinks