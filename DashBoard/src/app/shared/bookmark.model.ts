import { v4 as uuidv4 } from 'uuid';

export class Bookmark {
    id: string;
    name: string;
    url: URL;

    constructor(name: string, url: string) {
        this.id = uuidv4();
        // url will be received as a string from the input element
        // the constructor can then convert the url-string into a proper url-object
        this.url = new URL(url);
        this.name = name;
    }
}