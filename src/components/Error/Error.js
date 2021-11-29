import React from "react";
import PropTypes from "prop-types"


export default function Error({isError}){

  return(
    <div
  className="text-sm text-left text-white bg-red-500 h-12 flex items-center p-4
 rounded-md sm:w-1/5 mt-3"
  role="alert"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-6 h-6 mx-2 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    ></path>
  </svg>
  {isError}
</div>
  )

}

Error.prototypes={
  isError:PropTypes.string
}
Error.defaultProps={
  isError:"An error occurred"
}