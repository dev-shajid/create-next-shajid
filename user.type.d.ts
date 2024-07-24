interface UserType {
    _id: string
    email: string
    password?: string
    username: string
    title: string
    description?: string
    about?: string
    avatar?: string
    skills: string[]
}


interface ExperienceType {
    _id: string
    user_id: string
    organization_name: string,
    title: string
    date: string
    logo?: string
}


interface EducationType {
    _id: string
    user_id: string
    organization_name: string
    title: string
    date: string
    logo?: string
}

interface ProjectType {
    _id?: string
    user_id?: string
    isPublished: boolean
    image: string | File | undefined
    title: string
    date: string
    description: string
    tags: string[] | null
    links: {
        label: string
        href: string
        icon: string | 'globe'
    }[]
}

interface ContactType {
    _id?: string // TODO: Make it Required
    user_id?: string // TODO: Make it Required
    name: string
    href: string
    icon: string
    navbar: boolean
}