export default class GotServiee {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResource(url) {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
    
        return await result.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllBooks() {
        return this.getResource(`/books/`);
    }
    getBooks(id) {
        return this.getResource(`/books/${id}`);
    }
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    getHouses(id) {
        return this.getResource(`/houses/${id}`);
    }

    _transformCharacter(char) {
        // switch (char) {
        //     case (char.gender === ''):
        //         char.gender = 'no data :('
        //         break
        //     case (char.born === ''):
        //         char.born = 'no data :(' 
        //         break
        //     case (char.died === ''):
        //         char.died = 'no data :('
        //         break
        //     case (char.culture === ''):
        //         char.culture = 'no data :('
        //         break
        // }
        if (char.name === '') {
            char.name = 'no data :(' 
        }
        if (char.gender === '') {
            char.gender = 'no data :(' 
        }
        if (char.born === '') {
            char.born = 'no data :(' 
        }
        if (char.died === '') {
            char.died = 'no data :(' 
        }
        if (char.culture === '') {
            char.culture = 'no data :(' 
        }
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }

    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}