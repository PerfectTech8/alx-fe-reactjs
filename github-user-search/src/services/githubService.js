import axios from "axios";


// fetchUserData: fetches a single GitHub user by username
// Returns the response.data object on success or throws an error
 async function fetchUserData(username) {
if (!username) throw new Error("Missing username");
const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
try {
const res = await axios.get(url);
return res.data;
} catch (err) {
// Normalize error so callers can treat it easily
const message = err.response && err.response.status === 404
? 'Not Found'
: err.message || 'Request failed';
const e = new Error(message);
e.status = err.response ? err.response.status : null;
throw e;
}
}

export default fetchUserData;