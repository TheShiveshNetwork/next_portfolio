export function getDumnyImageUrl(title: string, orientation:string = "400x300") {
    const t = title.length > 20 ? title.substring(0, 20) + '...' : title;
    return `https://dummyimage.com/${orientation}/8b5cf6/ffffff&text=${encodeURIComponent(t)}`
}