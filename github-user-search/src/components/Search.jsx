import React, { useState } from "react";
import fetchUserData from "../services/githubService";
//const [user, setUser] = useState(null);
// loading: boolean used to display the "Loading..." state
//const [loading, setLoading] = useState(false);
// error: string or null used to display friendly error messages
//const [error, setError] = useState(null);

const SearchComponent = () => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [query, setQuery] = useState("");

// Handle form submit
const handleSubmit = async (e) => {

e.preventDefault();
// basic validation
if (!query.trim()) {
setError("Please enter a GitHub username.");
setUser(null);
return;
}


setLoading(true);
setError(null);
setUser(null);


try {
const data = await fetchUserData(query.trim());
setUser(data);
} catch (err) {
// When user is not found, show the specified friendly message
if (err.status === 404 || err.message === 'Not Found') {
setError("Looks like we cant find the user");
} else {
setError("Looks like we cant find the user");
}
} finally {
setLoading(false);
}
};


return (
<div className="search-component" style={{ maxWidth: 600, margin: "0 auto" }}>
<form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 12 }}>
<input
aria-label="GitHub username"
placeholder="Search GitHub username..."
value={query}
onChange={(e) => setQuery(e.target.value)}
style={{ flex: 1, padding: 8 }}
/>
<button type="submit" style={{ padding: "8px 12px" }}>Search</button>
</form>


{/* conditional rendering based on loading / error / user */}
{loading && <p>Loading...</p>}


{error && !loading && <p style={{ color: "red" }}>{error}</p>}


{user && !loading && !error && (
<div className="user-card" style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
<p style={{ color: "green" }}>User found successfully ✔</p>
<img src={user.avatar_url} alt={`${user.login} avatar`} width={80} height={80} style={{ borderRadius: 8 }} />
<div>
<h3 style={{ margin: 0 }}>{user.name || user.login}</h3>
{user.bio && <p style={{ margin: 2 }}>{user.bio}</p>}
<p style={{ margin: 2 }}>
<a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
</p>
</div>
</div>
)}
</div>
);
}

export default SearchComponent;