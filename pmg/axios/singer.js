import axios from 'axios';

const getSingerByName = async (name) => {
    const response = await axios.get(`https://itunes.apple.com/search?term=${name}&limit=20`);
    return response.data.results;
}

export { getSingerByName }
