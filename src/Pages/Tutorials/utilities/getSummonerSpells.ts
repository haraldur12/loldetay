export const getSummonerSpells = async (): Promise<any> => {
    return new Promise(resolve => {
        fetch(`https://ddragon.leagueoflegends.com/cdn/9.23.1/data/tr_TR/summoner.json`)
            .then(response => response.json())
            .then(body => {
                resolve(body.data);
            });
    });
};
