//merge arrays inside arrays
const combineArrays = (array) => {
    return array.reduce((result, next) => [...result, ...next], []); 
}

//sorry array by primagryGenreName and releaseDate
const sortArrayByGenereAndReleaseDate = (array) => {
    return array.sort ((firstItem, secondItem) => {
        let genereA = firstItem.primaryGenreName.toLowerCase(),
        genereB = secondItem.primaryGenreName.toLowerCase();

        let releaseDateA = firstItem.releaseDate,
        releaseDateB = secondItem.releaseDate;

        let orderByPrimaryGenreName = genereA.localeCompare(genereB);
        let orderByReleaseDate = new Date(releaseDateA) - new Date(releaseDateB);
        return orderByPrimaryGenreName || orderByReleaseDate;
    });

}

export { 
    combineArrays,
    sortArrayByGenereAndReleaseDate
};