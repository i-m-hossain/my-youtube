import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchSuggestionItem({item}) {
    const handleClick=()=>{
        console.log('first')
    }
    return (
        <div className=" flex space-x-3 items-center  px-4 py-2 hover:bg-gray-200" >
            <div className="pt-2">
                <BiSearch />
            </div>
            <button onClick={handleClick}>{item}</button>
        </div>
    );
}

export default SearchSuggestionItem;
