import { Search } from "lucide-react";

const Searchb = ({ changeSearch, titles, changecatg }) => {
  const handleInputChange = (event) => {
    changeSearch(event.target.value); 
  };

  const handleSelectChange = (event) => {
    changecatg(event.target.value); 
  };

  return (
    <div className="flex justify-center items-center p-4 m-2 mb-6">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md w-full max-w-md">
        <Search className="text-gray-500" size={20} />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-3 flex-1 text-gray-700 text-lg"
        />
      </div>

      <div className="ml-4">
        <select onChange={handleSelectChange}
    
          className="p-2 rounded border"
        >
          <option value="">-- All Posts --</option>
            <option key={0} value={"Coding"}>Coding  </option>
            <option key={0} value={"Blog"}> Blog </option>
            <option key={0} value={"Experience"}>Experience  </option>
       
        </select>
      </div>
    </div>
  );
};

export default Searchb;
