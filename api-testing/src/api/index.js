export const getPosts = async()=>{
    const responsive = await fetch("https://randomuser.me/api/",{
        method: "GET",
    })
    return await responsive.json();
}
export const getData = async()=>{
    const responsive = await fetch("https://api.cricapi.com/v1/players?apikey=32dc96db-5d5a-4c0c-abb9-d9f1fab5f210&offset=0&search",{
        method: "GET",
    })
    return await responsive.json();
}