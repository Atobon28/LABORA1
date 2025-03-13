import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";


export default function noticiasImag() {
    return [
        {
            "imagen": "https://picsum.photos/800/450?random=1",
            "categoria": faker.commerce.department(),
            "titulo": faker.word.adjective(),
            "descripcion": faker.person.bio(),
            "autor-imgen": faker.image.avatar(),
            "autor": faker.person.fullName(), 
            "fecha": faker.date.past(),
        }, 
        {
            "imagen": "https://picsum.photos/800/450?random=2",
            "categoria": faker.commerce.department(),
            "titulo": faker.word.adjective(),
            "descripcion": faker.person.bio(),
            "autor-imgen": faker.image.avatar(),
            "autor": faker.person.fullName(), 
            "fecha": faker.date.past(),
        }, 
        {
            "imagen": "https://picsum.photos/800/450?random=3",
            "categoria": faker.commerce.department(),
            "titulo": faker.word.adjective(),
            "descripcion": faker.person.bio(),
            "autor-imgen": faker.image.avatar(),
            "autor": faker.person.fullName(), 
            "fecha": faker.date.past(),
        }, 
        {
            "imagen": "https://picsum.photos/800/450?random=4",
            "categoria": faker.commerce.department(),
            "titulo": faker.word.adjective(),
            "descripcion": faker.person.bio(),
            "autor-imgen": faker.image.avatar(),
            "autor": faker.person.fullName(), 
            "fecha": faker.date.past(),
        }, 
    ]
}

