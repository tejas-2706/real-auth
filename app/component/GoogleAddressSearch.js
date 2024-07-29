"use client"
import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import ReactGoogleAutocomplete from 'react-google-autocomplete';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import Autocomplete from "react-google-autocomplete";


// const GoogleAddressSearch = () => (
//   <div>
//     <GooglePlacesAutocomplete
//       apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
//     />
//   </div>
// );

// export default GoogleAddressSearch;



// import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// const GoogleAddressSearch = ({ apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY }) => (
//   <div>
//     <GooglePlacesAutocomplete
//       apiKey={apiKey}
//     />
//   </div>
// );

// export default GoogleAddressSearch;





// import { usePlacesWidget } from "react-google-autocomplete";

// export default () => {
//   const { ref, autocompleteRef } = usePlacesWidget({
//     apiKey:`${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}`,
//     onPlaceSelected: (place) => {
//       console.log(place);
//     }
//   });

//   return <AnyInput ref={ref} {...anyOtherProp}/>
// }



import Autocomplete from "react-google-autocomplete";

{/* <Autocomplete
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
  onPlaceSelected={(place) => {
    console.log(place);
  }}
/>; */}



// const GoogleAddressSearch = () => (
//   <div>
// <Autocomplete
//   apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
//   onPlaceSelected={(place) => {
//     console.log(place);
//   }}
// />;
//   </div>
// );

// export default GoogleAddressSearch;








// import { useState } from 'react';

// const GoogleAddressSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (query.trim() === '') return;

//     const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
//     try {
//       const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${accessToken}`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setResults(data.features || []);
//     } catch (error) {
//       console.error("An error occurred while fetching data:", error);
//       setResults([]);
//     }
//   };

//   return (
//     <div>
//       <h1>Place Search</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search for a place..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {results.length > 0 ? (
//           results.map((result) => (
//             <li key={result.id}>
//               {result.place_name}
//             </li>
//           ))
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default GoogleAddressSearch;

















import { useState, useEffect, useCallback } from 'react';

const GoogleAddressSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce function to limit the rate of API calls
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const fetchResults = async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    try {
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${accessToken}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.features || []);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      setError('Failed to fetch results. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Use debounce to prevent excessive API calls
  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  useEffect(() => {
    debouncedFetchResults(query);
  }, [query]);

  return (
    <div>
      <h1>Place Search</h1>
      <input
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleAddressSearch;
