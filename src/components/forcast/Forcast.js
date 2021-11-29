import React from "react"
import { Days } from "./Days";
import { Month } from "./Months";
import Dates from "./Dates";


export default function Forcast({forcasts}){
    if(forcasts){
    const {location,current,forecast}=forcasts;
    console.log(forcasts)
    const time=location.localtime;
    const newday=new Date(time).getDate()
    const newMonth=new Date(time).getMonth()
    const singleforcast=forecast.forecastday[0]

   return (
       <>
       <div className="flex sm:w-2/5 bg-green-200 sm:rounded-xl w-full flex-wrap  mt-5 md:flex-row flex-col">
         {/* first  */}
          <div className="info sm:rounded-l-xl p-2 justify-between flex flex-col">
            <div className="">
              <img src={current.condition.icon} alt="img" className="sm:w-3/5 w-2/5"/>
               <h1 className="text-white font-extrabold text-lg my-3"> <span>{Month[newMonth]}</span><span className="ml-2">{Dates(newday)}</span></h1>
               <h1 className="text-white font-extrabold text-2xl">{location.name},</h1>
               <h1 className="text-white font-extrabold text-2xl">{location.country}</h1>
            </div>
            <div className="my-4">
              <h1 className="text-white font-extrabold text-xl">{current.condition.text}</h1>
              <h1 className="text-white font-extrabold text-xl">{current.temp_c}<span>&#8451;</span></h1>
            </div>
          </div>
          {/* second phase*/}
          <div className="forecast sm:rounded-r-xl p-2 flex flex-col justify-between">
            <div className="first">
               {/* start */}
                <div className="right-forecast flex justify-between my-2">
                <h1 className="text-white font-extrabold text-xl">HUMIDITY</h1>
                <h2 className="text-white font-extrabold text-xl">{current.humidity}%</h2>
                </div>
                {/*  end*/}
                {/* start */}
                <div className="right-forecast flex justify-between my-2">
                <h1 className="text-white font-extrabold text-xl">WIND</h1>
                <h2 className="text-white font-extrabold text-xl">{Math.round(current.wind_kph)}%</h2>
                </div>
                {/* start */}
                {/*  start*/}
                <div className="right-forecast flex justify-between my-2">
                <h1 className="text-white font-extrabold text-xl">AIR PRESSURE</h1>
                <h2 className="text-white font-extrabold text-xl">{current.pressure_mb}mb</h2>
                </div>
                {/* ends */}
                 {/*  start*/}
                 <div className="right-forecast flex justify-between my-2">
                <h1 className="text-white font-extrabold text-xl">Max Temperature</h1>
                <h2 className="text-white font-extrabold text-xl">{singleforcast.day.maxtemp_c}%</h2>
                </div>
                {/* ends */}
                </div>
                 {/* start */}
                <div className="second grid md:grid-cols-4 grid-cols-2 gap-4 p-2 bg-gray-400">
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-white font-extrabold text-xl">sunrise</h1>
                            <p className="text-white font-extrabold text-sm">{singleforcast.astro.sunrise}</p>
                        </div>
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-white font-extrabold text-xl">sunset</h1>
                            <p className="text-white font-extrabold text-sm">{singleforcast.astro.sunset}</p>
                        </div>
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-white font-extrabold text-xl">moonrise</h1>
                            <p className="text-white font-extrabold text-sm">{singleforcast.astro.moonrise}</p>
                        </div>
                        <div className="flex-col flex justify-center items-center">
                            <h1 className="text-white font-extrabold text-xl">moonset</h1>
                            <p className="text-white font-extrabold text-sm">{singleforcast.astro.moonset}</p>
                        </div>
                </div>
                {/* ends */}
                {/* start */}
            <div className="second grid grid-cols-5 gap-7 p-2">
            {
                forecast.forecastday.map((value,index)=>{
                  const day=new Date(value.date).getDay();
                    return(
                      <div className="each-forcast-day" key={index}>
                          <div className="flex-col flex justify-center items-center">
                              <h1 className="text-white font-extrabold text-sm">{Days[day]}</h1>
                              <img src={value.day.condition.icon} alt="icon" />
                              <p className="text-white font-extrabold text-sm"><span>{value.day.maxtemp_c}<span>&#8451;</span>,</span></p>
                          </div>
                      </div>
                    )
                })
              }
             </div>
           {/* ends */}
          </div>

       </div>
       </>
   )
 }else{
     return null
 }
}