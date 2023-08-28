import faker from "@faker-js/faker";



export function createMedia() {
    const username = faker.datatype.string();
    const title = faker.datatype.string();
    return { username, title }
}