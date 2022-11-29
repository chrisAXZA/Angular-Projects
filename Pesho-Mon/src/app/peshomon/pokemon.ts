export default class Pokemon {
    id: number;

    constructor(
        public name: string = 'Peshomon',
        public hp: number = 100,
        public cp: number = 10,
        public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        public types: Array<string> = ['Normal'],
        public created: Date = new Date(),
    ) {
        // this.id = id;
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }

    // id: number;
    // hp: number;
    // cp: number;
    // name: string;
    // picture: string;
    // types: Array<string>;
    // created: Date;
}