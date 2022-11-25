
const Search = () => {
    return (
        <div className="flex w-2/4">
            <input type="text" name="search" id="search" className=" w-full border border-gray-300 border-r-0 rounded-l border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 h-10" placeholder={""} />
            <div className="sm:ml-0 w-10 bg-blue-700 border-l-0 h-10 flex items-center cursor-pointer rounded-r border-gray-300 border">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 0 25 24" strokeWidth={1.5} stroke="#ffffff" className="w-8 h-6" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
        </div>
    );
}

export default Search;
