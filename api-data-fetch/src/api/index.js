export const getData = async()=>{
const response = await fetch("https://api.restful-api.dev/objects",{
    method: "GET",
})
return await response.json();
}