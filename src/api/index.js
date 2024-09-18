import axios from 'axios'
const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (sw,ne)=>{
    try{
        const {data :{ data }} = await axios.get(url,{
            method: 'GET',
            params: {
              bl_latitude:sw.lat,
              tr_latitude: sw.lng,
              bl_longitude: ne.lat,
              tr_longitude: ne.lng,
          
            },
            headers: {
              'x-rapidapi-key': '3227ef37f5msh5691e5eed3dbf2fp111b32jsn156cc78ec597',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          })
        return data
    } catch(err){
        console.log("error ",err)   
    }
}