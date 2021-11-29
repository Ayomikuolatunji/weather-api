import React from 'react';
import PropTypes from "prop-types"

export default function Loading(){
    return (
        <div className="flex justify-center items-center sm:flex-row flex-col">
            <div className="animate-spin rounded-full h-32 w-32
              border-t-8 border-b-8 border-purple-500">
            </div>
            <div className="text-center sm:text-xl text-sm text-white font-extrabold">
                <h1>Please wait while we fetch forcast data...</h1>
            </div>
      </div>
    )
}


Loading.prototypes={
    isError:PropTypes.string
  }

Loading.defaultProps={
    isLoading:"an error occurred"
}