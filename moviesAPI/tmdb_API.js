const key = "25d24d1520034e04feefd9a13fd840ae";

export default [
    {
        id:"0",
        name:"Top Rated",
        url:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}language=en-US&page=1`
    },
    {
        id:"1",
        name:"Action Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,

    },
    {
        id:"2",
        name:"Hindi Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_original_language=hi&year=2022`
    },
    {
        id:"3",
        name:"Comedy Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`
    },
    {
        id:"4",
        name:"Horror Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`
    },
    {
        id:"5",
        name:"Kannada Block Busters",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_original_language=kn&year=2022`
    },
    {
        id:"6",
        name:"Romance Movies",
        url:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`
    },
    {
        id:"5",
        name:"Netflix Orginals",
        url:`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`
    }
]