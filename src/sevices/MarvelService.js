import { Component } from "react";

class MarvelAPI extends Component {
    _apiKey = '&apikey=cf07323661709fc11bd4020b0e4e4655';
    _apiUrl = 'https://gateway.marvel.com:443/v1/public/';

    getChars = async (url) => {
        let res = await fetch(url);
        return res.json()
    }

    getAll = async () => {
        const res = await this.getChars(`${this._apiUrl}characters?limit=9&offset=210${this._apiKey}`);
        return await res.data.results;
    }
}

export default MarvelAPI;