export const getPosts = async()=>{
    const responsive = await fetch("https://randomuser.me/api/",{
        method: "GET",
    })
    return await responsive.json();
}