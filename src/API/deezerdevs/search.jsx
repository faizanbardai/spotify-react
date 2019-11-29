const headers = new Headers({
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "986f49e8damsh99c9341f49f5e58p13eb47jsn7fef840e6245"
});


const search = async (searchQuery) => {
    let URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(searchQuery);
        try {
            let response = await fetch(URL, {
                method: "GET",
                headers
            })
            if (response.ok) {
                return await response.json()
            }
        } catch (error) {
            console.log(error);
        }
}

export default search;