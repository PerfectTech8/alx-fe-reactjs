import { useContext } from "react";
import UserContext from "./UserContext";
const UserProfile = () => {
  const userData = useContext(UserContext);
   return (
     <div>
       {/* <h2>{props.name}</h2>
       <p>Age: {props.age}</p>
       <p>Bio: {props.bio}</p> */}
        <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
     </div>
   );
 };

 export default UserProfile;