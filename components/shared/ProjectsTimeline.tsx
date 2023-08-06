import Image from "next/image";
import Link from "next/link";

interface Props {
    image?: string;
    date: string;
    heading: string;
    content: string;
    isLatest?: boolean;
    nativeButton?: boolean;
    customButton: boolean;
    hasButton: boolean;
    buttonText?: string;
    buttonAction?: string | "/";
}

const ProjectsTimeline = ({ image, date, heading, content, isLatest, nativeButton, customButton, hasButton, buttonAction, buttonText }: Props) => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
                <span className="absolute dark:animate-pulse flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </span>

                {image && (
                    <div className="mb-5">
                        <Image
                            src={image}
                            alt="image"
                            height={300}
                            width={300}
                            className="shadow-xl"
                        />
                    </div>
                )}

                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {heading}
                    {isLatest &&
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Latest
                        </span>
                    }
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on {date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {content}
                </p>

                {hasButton && nativeButton && (
                    <Link
                    href={`${buttonAction}`}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        {buttonText}
                    </Link>
                )}

                {hasButton && customButton && (
                    <Link
                        href={`${buttonAction}`}
                        target='_blank'
                        className='px-4 py-2 mb-20 bg-violet-950 text-white rounded-lg hover:animate-bounce'
                    >
                        {buttonText}
                    </Link>
                )}
            </li>
        </ol>
    )
}

export default ProjectsTimeline