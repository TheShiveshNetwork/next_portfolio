import ContactForm from "@/components/forms/ContactForm"

const Page = () => {
    return (
        <div className='flex flex-col items-center mt-10 px-10 lg:px-64'>
            <ContactForm
                className="rounded-lg w-full shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-slate-950"
            />
        </div>
    )
}

export default Page