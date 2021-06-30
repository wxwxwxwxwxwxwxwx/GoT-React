// import { ThemeConsumer } from "styled-components";

export default class GotServiee {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}`);
    
        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
    
        return await result.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllBooks = async () => {
        const res = await this.getResource(`/books/`)
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this.getResource(book);
    }
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformCharacter(house);
    }

    _transformCharacter(char) {
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
        if (book.name === '') {
            book.name = 'no data :(' 
        }
        if (book.numberOfPages === '') {
            book.numberOfPages = 'no data :(' 
        }
        if (book.publiser === '') {
            book.publiser = 'no data :(' 
        }
        if (book.released === '') {
            book.released = 'no data :(' 
        }
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}