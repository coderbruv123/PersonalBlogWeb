import { Code, Briefcase, Newspaper, Video } from "lucide-react";

const categories = [
  { name: "Experience", description: "My daily experiences.", icon: <Briefcase size={36} className="text-blue-800" /> },
  { name: "Coding", description: "My coding journey & projects.", icon: <Code size={36} className="text-blue-800" /> },
  { name: "News", description: "Latest updates & news.", icon: <Newspaper size={36} className="text-blue-800" /> },
  { name: "Vlogs", description: "Videos and personal vlogs.", icon: <Video size={36} className="text-blue-800" /> },
];

const Category = () => {
  return (
    <>
    <h1 className="text-white py-5 text-4xl"> Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10 px-10">
      {categories.map((category, index) => (
          <div 
          key={index} 
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white flex items-center gap-6 p-7 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="bg-white rounded-full p-5 flex items-center justify-center shadow-md">
            {category.icon}
          </div>

          <div>
            <a className="text-2xl font-bold">{category.name}</a>
            <p className="text-lg opacity-90 mt-1">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
      </>
  );
};

export default Category;
