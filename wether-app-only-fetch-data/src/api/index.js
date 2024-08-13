export const wethercard = async()=>{
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=6dd02a304a414f378c9105903240908&q=jaipur&aqi=no',{method:"GET",});

    return await response.json();
}