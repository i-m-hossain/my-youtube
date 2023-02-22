import React from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchSuggestionItem({ item }) {
    const navigate = useNavigate();
    const handleNavigation = (e, item) => {
        navigate("/results?search_query=" + item.split(" ").join("+"));
    };
    return (
        <div
            className=" flex space-x-3 items-center  px-4 py-2 hover:bg-gray-200"
            onMouseDown={(e) => handleNavigation(e, item)}
        >
            <div className="pt-2">
                <BiSearch />
            </div>
            <button>{item}</button>
        </div>
    );
}

export default SearchSuggestionItem;
