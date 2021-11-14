import { singers } from '../data';
import { singerAPICalls } from '../axios';
import { helper } from '../utils';

//get all the details by singers name
const getSingersByName = async (req, res) => {

    const { combineArrays, sortArrayByGenereAndReleaseDate }  = helper;

    const singerPromises = singers.map( singer => singerAPICalls.getSingerByName(singer));
    //resolving returned promises
    const singersDataResult = await Promise.all(singerPromises);
    //combine nested arrays
    const combinedSingersDataResult = combineArrays(singersDataResult);
    //sorting array by primaryGenreName and release date
    sortArrayByGenereAndReleaseDate(combinedSingersDataResult);

    res.send(combinedSingersDataResult);
}   

export {
    getSingersByName
}