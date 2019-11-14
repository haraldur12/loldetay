export const getChampion = (name: string): Promise<any> => {
    return new Promise(resolve => {
        fetch(`https://ddragon.leagueoflegends.com/cdn/9.22.1/data/tr_TR/champion/${name}.json`)
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};
