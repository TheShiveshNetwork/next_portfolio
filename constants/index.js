export const menuContent = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Projects',
        link: '/projects',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
]

export const githubCodeUrl = 'https://github.com/TheShiveshNetwork/next_portfolio';

export const projectsContent = [
    {
        heading: "Full Stack Social Media App",
        date: "23 Aug 2022",
        isLatest: false,
        image: "/assets/project1.png",
        content: "I created a full stack social media app",
        nativeButton: true,
        hasButton: true,
        customButton: false,
        buttonText: "Get Code",
        buttonAction: "/about",
    },
    {
        heading: "Full Stack Social Media App 2",
        date: "23 Aug 2022",
        isLatest: false,
        image: "/assets/project2.png",
        content: "I created a full stack social media app",
        nativeButton: false,
        hasButton: false,
        customButton: false,
        buttonText: "Get Code",
        buttonAction: "/about",
    },
]

export const dashboardMenu = [
    {
        name: "Dashboard",
        link: "/dashboard",
        image: "/assets/dashboard.png",
    },
    {
        name: "Post",
        link: "/dashboard/create-post",
        image: "/assets/post-create.png",
    },
    {
        name: "Project",
        link: "/dashboard/create-project",
        image: "/assets/project-create.png",
    },
]