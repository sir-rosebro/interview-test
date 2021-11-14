import axios from 'axios';

const getSingerByName = async (name) => {
    const response = await axios.get(`${ process.env.APPLE_ITUNES_API_URL }/search?term=${name}&limit=20`);
    return response.data.results;
}

export { getSingerByName }
