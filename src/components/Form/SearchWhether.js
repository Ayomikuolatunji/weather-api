import React from 'react';
import PropTypes from "prop-types";

export default function  SearchWhether({submit,search,setSearch}){
    
    const submitSearch=(e)=>{
        e.preventDefault();
        if(search ==="" || !search || !search.trim()) return console.log("no value");
        submit(search)
    }
    return (
        <div className="bg-black md:w-2/5 p-3 sm:rounded-xl w-full">
            <form action="" onSubmit={submitSearch} className="flex justify-center items-center flex-col">
                <input type="text" name="search" id="search" value={search} onChange={(e)=>setSearch(e.target.value)} className="py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring sm:w-3/5 w-4/5  mx-auto pl-1" placeholder="Search Forcast"/>
                <button onClick={submitSearch} className="   bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mt-3 mb-1 ease-linear transition-all duration-150">Search</button>
            </form>
        </div>
    )
}

SearchWhether.prototypes={
    submit:PropTypes.func.isRequired
}