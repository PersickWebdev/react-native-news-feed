export interface INews {
    id: string;
    title: string;
    preview: string;
    content: string;
    image: string;
}

export interface IContacts {
    country: string;
    city: string;
    phone: string;
    email: string;
    website: string;
}

export interface ILoginFormData {
    email: string;
    password: string;
}