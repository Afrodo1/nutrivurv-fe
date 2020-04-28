import { useState } from "react";
import { foodDbSearch } from "../../lib/edamam.js";
import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_RESULTS } from "../../gql/queries.js";

export default function FoodSearchBox() {
  const [item, setItem] = useState("");
  const { data, client } = useQuery(GET_SEARCH_RESULTS); //  Pull in the client so result data can be written to the cache

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  
  const query = item.replace(" ", "%20"); // Format the entered food item for the API call
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //  Hit the foodDB API
    const list = await foodDbSearch(query);
    // Change the needed data to a string
    const searchResults = JSON.stringify(list.hints);
    console.log(list)
    // Reset the input
    setItem('');
    // Write the searchResults to the cache, change the dash component to search results
    client.writeData({
      data: {
        ...data,
        lowerNav: "searchResults",
        searchResults: searchResults,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border border-purple-400 rounded focus:border-purple-200 px-4 py-2"
        type="text"
        placeholder="Search Food Item"
        name="food"
        onChange={handleChange}
      />
    </form>
  );
}
