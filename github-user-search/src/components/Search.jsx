// import React, { useState } from "react";
// import fetchUserData from "../services/githubService";

// const SearchComponent = () => {

// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
// const [query, setQuery] = useState("");

// Handle form submit

// const handleSubmit = async (e) => {
// e.preventDefault();

// basic validation

// if (!query.trim()) {
// setError("Please enter a GitHub username.");
// setUser(null);
// return;
// }


// setLoading(true);
// setError(null);
// setUser(null);


// try {
// const data = await fetchUserData(query.trim());
// setUser(data);
// } catch (err) {
// When user is not found, show the specified friendly message
// if (err.status === 404 || err.message === 'Not Found') {
// setError("Looks like we cant find the user");
// } else {
// setError("Looks like we cant find the user");
// }
// } finally {
// setLoading(false);
// }
// };


// return (
// <div className="search-component" style={{ maxWidth: 600, margin: "0 auto" }}>
// <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
// <input
// aria-label="GitHub username"
// placeholder="Search GitHub username..."
// value={query}
// onChange={(e) => setQuery(e.target.value)}
// style={{ flex: 1, padding: 8 }}
// />
// <button type="submit" style={{ padding: "8px 12px" }}>Search</button>
// </form>


{/* conditional rendering based on loading / error / user */}
// {loading && <p>Loading...</p>}


// {error && !loading && <p style={{ color: "red" }}>{error}</p>}


// {user && !loading && !error && (
// <div className="user-card" style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
// <p style={{ color: "green" }}>User found successfully ✔</p>
// <img src={user.avatar_url} alt={`${user.login} avatar`} width={80} height={80} style={{ borderRadius: 8 }} />
// <div>
// <h3 style={{ margin: 0 }}>{user.name || user.login}</h3>
// {user.bio && <p style={{ margin: 2 }}>{user.bio}</p>}
// <p style={{ margin: 2 }}>
// <a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
// </p>
// </div>
// </div>
// )}
// </div>
// );
// }

// export default SearchComponent;


// File: components/AdvancedSearch.jsx

import React, { useState } from "react";
import { advancedSearchUsers } from "../services/githubService";

export default function AdvancedSearch() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await advancedSearchUsers({ username, location, minRepos, page: 1 });
      setResults(data.items);
      setTotalCount(data.total_count);
      setPage(1);
    } catch (err) {
      setError("Unable to complete search");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await advancedSearchUsers({ username, location, minRepos, page: nextPage });
      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h1>

      <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 bg-white p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600 font-semibold">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* Display total count above results */}
      {totalCount > 0 && !loading && !error && (
      <p className="mt-4 font-semibold">Total users found: {totalCount}</p>
       )}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="flex items-center gap-4 p-3 bg-gray-100 rounded">
            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded" />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && results.length < totalCount && (
        <button
          onClick={loadMore}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Load More
        </button>
      )}
    </div>
  );
}
