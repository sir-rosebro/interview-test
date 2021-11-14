import { singers } from '../data';
import { singerAPICalls } from '../axios';
import { helper } from '../utils';

//get all the details by singers name
const getSingersByName = async (req, res) => {
    try {
        const { combineArrays, sortArrayByGenereAndReleaseDate }  = helper;

        const singerPromises = singers.map( singer => singerAPICalls.getSingerByName(singer));
        //resolving returned promises
        const singersDataResult = await Promise.all(singerPromises);
        //combine nested arrays
        const combinedSingersDataResult = combineArrays(singersDataResult);
        //sorting array by primaryGenreName and release date
        sortArrayByGenereAndReleaseDate(combinedSingersDataResult);

        return res.status(200).send({
            status: "OK",
            singerData: combinedSingersDataResult,
          });
    }
    catch (error) {
        console.log({ error });
        return res.status(500).send({
          status: "ERROR",
          message: "There was problem in the server. Contact adminstrator!!",
        });
    }
}   

export {
    getSingersByName
}