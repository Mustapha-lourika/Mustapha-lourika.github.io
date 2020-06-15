import axios from 'axios';
const url="https://covid19.mathdro.id/api";
 export const fetchData=async (country)=>{
     let urlUpdated=url;
     if(country){
         urlUpdated=`${url}/countries/${country}`
     }
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(urlUpdated);
        const modifierData= {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifierData;

    }
    catch(error  ){
    }

}
export const fetchDailyData=async ()=>{
    try{
         
    const {data}=await axios.get(`${url}/daily`); 
    const modifierData=data.map((dailyData)=>({
        confirmed: dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
    }))
    return modifierData;
    }
    catch(error){
        console.log(error);

    }

} 

export  const  countries =async ()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);

    }
    catch(error){
        console.log(error);
    }
}