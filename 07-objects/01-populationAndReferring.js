// Objects

//Objects store multiple objetcs that are simliar in structure. This is great for JS logic
//Objects can hold multiple data types
// denoted with { }
// Key - Value Pairs

// example
let netflix = {
    id: 1, 
    name: "Super Store",
    seasons: {
        season1: {
            seasonInfo:{
                episodeInfo: [
                    { episode: 1, episodeName: "Pilot"},
                    { episode: 2, episodeName: "Magizine Profile"},
                    { episode: 3, episodeName: "Shots and Salsa" },
                    { episode: 4, episodeName: "Mannequin"}
                ]
            }
        },
        season2: {
            seasonInfo:{
                episodeInfo: [

                ]
            }
        }
    } 
}













// Dot Notation
//console.log("All Data", netflix)
//console.log('Jus season info', netflix.seasons.season1.seasonInfo)
//console.log('Episode Name: ', netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName)

console.log( netflix.seasons.season1.seasonInfo.episodeInfo[3].episodeName,'episode', netflix.seasons.season1.seasonInfo.episodeInfo[3].episode)