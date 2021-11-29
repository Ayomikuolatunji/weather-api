import axios from 'axios';
import React from 'react';


const BASE_URL="https://api.weatherapi.com/v1/";
const key="a4738470ee3d4debab3212802212611";
export default function Api() {
     const [error,seterror]=React.useState(false);
     const [loading,setloading]=React.useState(false);
     const [forcasts,setForcast]=React.useState(null);
     const [search,setSearch]=React.useState("");

     const Forcast=async(find)=>{
      // setting loader to be true as you search for a particular forcast
        setloading(true)
        // setforcast value to empty string when you search for a forcast
        setForcast("")
        // seterror to false as you search for forcast
        seterror(false)
      //   fetching data from weatherapi.com
         try {
            const response=await axios.get(`${BASE_URL}forecast.json?key=${key}&q=${find.toUpperCase()}&days=7&aqi=yes&alerts=yes`);
            // returing the response
            return response;
            
         } catch (error) {
            // setting error value to error to see the error effect
             seterror(error)
            //  setting loading to false as we search if there is error
             setloading(false)
             if(error){
               //  if there is error set forcast value null empty
                setForcast(null)
               //  setsearch input to empty if we find error
                setSearch("")
             }
         }
     }
     const submitSearch=async(find)=>{
        // seterror to false as you search for forcast
        seterror(false)
      //   receive the response from the Forcast
        const response=await Forcast(find)
      //   if no reposne return 
        if(!response) return
      //   and if response status is 200 we do something
        if(response.status===200) {
         //   set forcast value to receive to receive the data we fetch from the api
         setForcast(response.data)
         // set search to empty string as we set our  data
           setSearch("");
         //   set error to false as we set our data
           seterror(false)
         //   set laoder to false to as we find data
           setloading(false)
        }else{
         //   if response is not equal to 200 we set our forcast to empty space
         setForcast(null)
        }
     }

     return {error,loading,forcasts,submitSearch,search,setSearch}
}
