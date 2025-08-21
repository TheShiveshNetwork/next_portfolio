import Link from "next/link";

export function Footer() {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex justify-between items-center py-4 max-w-4xl w-full text-primary/80 px-6 md:px-0">
                <div className="">
                    &copy; {new Date().getFullYear()} {" "}
                    <Link href="https://shitworks.co" className="underline-offset-4 hover:underline" target="_blank">shitworks.co</Link>
                </div>
                <Link href="/llms.txt" className="underline-offset-4 hover:underline" target="_blank">llms.txt</Link>
            </div>
        </div>
    )
}