import React from 'react';
import Error from './Error/Error';
import SearchWhether from './Form/SearchWhether';
import Loading from './Loading/Loading';
import Api from './hooks/Api';
import Forcast from './forcast/Forcast';

export default function Whether() {
    const {error,loading,forcasts,submitSearch,search,setSearch}=Api()
    const submit=(find)=>submitSearch(find);
    return (
        <div className="flex justify-center items-center min-h-screen relative flex-col">
          {loading ||  <SearchWhether submit={submit} search={search} setSearch={setSearch}/>}
            {/* error */}
            {error && <Error  isError={"No result from search"}/>}
            {/* loading */}
            {loading && <Loading  isLoading={"...loading"}/>}
            {/* foracst */}
            <Forcast forcasts={forcasts}/>
        </div>
    )
}
