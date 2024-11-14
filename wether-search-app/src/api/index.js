const baseURL = "https://api.weatherapi.com/v1/current.json?key=6dd02a304a414f378c9105903240908"

export const getData = async(city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}