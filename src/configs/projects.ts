import { IProjects } from "@/sections/projects";

{/* 1270x760px images best */}
export const ALL_PROJECTS: IProjects[] = [
    {
        type: "app",
        title: "Pebbl",
        shortDescription: "A short and anonymous microblogging application",
        longDescription:
            "Pebbl is a cross-platform anonymous microblogging application designed for users to express themselves freely without the pressure of personal identity. Built using React Native and powered by Supabase, it provides a secure and real-time backend for seamless interactions. The app focuses on simplicity, minimalism, and privacy—enabling people to share thoughts, stories, and experiences with a community while staying completely anonymous. The core idea is to build a space where authenticity thrives without the fear of judgment.",
        image: "https://ften894tg4.ufs.sh/f/zB6K8wVrTHjYtUULdufoSq807FQT9DUCekNYLzfrbu4icREJ",
        stack: ["React Native", "TypeScript", "Supabase"],
    },
    {
        type: "ml",
        title: "Furtech",
        shortDescription: "AI Powered Pet Care System",
        longDescription:
            "Furtech is an AI-driven pet care platform developed during a 24-hour hackathon. The system integrates multiple machine learning models and AI-powered tools to assist pet owners in providing better care for their pets. It comes with four key features: (1) Personalized Diet Planning using ML algorithms to suggest optimal nutrition, (2) Behaviour Analysis through image classification to detect stress, aggression, or happiness in pets, (3) A Chat with AI assistant for pet-related queries, and (4) Health Analysis that predicts potential health issues based on input data. Some models were trained from scratch, while others were fine-tuned from open-source LLMs like Mistral and multimodal models like Paligemma. Furtech pushes the boundary of practical AI applications by combining vision, NLP, and predictive analytics in one cohesive system.",
        image: "https://ften894tg4.ufs.sh/f/b9434047-488f-42c9-866a-f6d756a44728-ra6pnt.png",
        stack: ["Pytorch", "Python", "React"],
    },
    {
        type: "tool",
        title: "Moye",
        shortDescription: "A meme language",
        longDescription:
            "Moye is a toy programming language designed as a fun exploration into the fundamentals of language design and compiler construction. Inspired by internet meme culture, the language balances humor with technical depth. The project involved building a custom parser from scratch, experimenting with backtracking algorithms, and implementing a working REPL for interactive testing. Moye serves as both a creative expression and a practical deep dive into how interpreters and compilers operate under the hood. It demonstrates the journey of turning an idea—from syntax rules to execution—into a functional programming language.",
        stack: ["Rust"],
    },
    {
        type: "tool",
        title: "create-express-app",
        shortDescription: "A lightweight binary to build heavyweight express applications",
        longDescription:
            "create-express-app is a developer-friendly CLI tool that simplifies the process of bootstrapping Express.js applications. Instead of starting from scratch, developers can spin up a production-ready Express app with sensible defaults, structured folder organization, and best practices already integrated. The tool removes repetitive setup tasks, making it faster to prototype APIs or full-stack applications. Built with Node.js and TypeScript, it emphasizes modularity, scalability, and developer experience—helping both beginners and experienced developers jump straight into building features instead of boilerplate.",
        stack: ["TypeScript", "Node.js", "CLI"],
    },
];