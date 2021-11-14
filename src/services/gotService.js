import {useHttp} from '../hooks/http.hook';

const GotService = () => {
    const {loading, request, error} = useHttp();

    const _apiBase = 'https://www.anapioficeandfire.com/api';

    const getAllBooks = async () => {
        const res = await request(`${_apiBase}/books/`);
        return res.map(_transformBook);
    }
    
    const getBook = async (id) => {
        const book = await request(`${_apiBase}/books/${id}/`);
        return _transformBook(book);
    }
    
    const getAllCharacters = async () => {
        const res = await request(`${_apiBase}/characters?page=5&pageSize=10`);
        return res.map(_transformCharacter);
    }
    
    const getCharacter = async (id) => {
        const character = await request(`${_apiBase}/characters/${id}`);
        return _transformCharacter(character);
    }
    
    const getAllHouses = async () => {
        const res = await request(`${_apiBase}/houses/`);
        return res.map(_transformHouse);
    }
    
    const getHouse = async (id) => {
        const house = await request(`${_apiBase}/houses/${id}/`);
        return _transformHouse(house);
    }

    const isSet = (data) => {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    const _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    const _transformCharacter = (char) => {
        return {
            id: _extractId(char),
            name: isSet(char.name),
            gender: isSet(char.gender),
            born: isSet(char.born),
            died: isSet(char.died), 
            culture: isSet(char.culture)
        };
    }

    const _transformHouse = (house) => {
        return {
            id: _extractId(house),
            name: isSet(house.name),
            region: isSet(house.region),
            words: isSet(house.words),
            coatOfArms: isSet(house.coatOfArms),
            founded: isSet(house.founded)
        };
    }
    
    const _transformBook = (book) => {
        return {
            id: _extractId(book),
            name: isSet(book.name),
            numberOfPages: isSet(book.numberOfPages),
            publisher: isSet(book.publisher),
            released: isSet(book.released)
        };
    }

    return {loading, error, getAllBooks, getBook, getAllCharacters, getCharacter, getAllHouses, getHouse}
}

export default GotService;