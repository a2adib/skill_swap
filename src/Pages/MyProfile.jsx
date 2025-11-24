import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { setUser, user } = useContext(AuthContext);
  const [ isOpen, setIsOpen ] = useState(false);

   const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl
        })
          .then(() => {
            setUser({...user, photoURL:photoUrl, displayName:name});
            
          })
          .catch((error) => {
            console.log(error)
          });
  }

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p className="mt-5">{user?.displayName}</p>
      <p className="mt-5">{user?.email}</p>
      <button onClick={handleOpenForm} className="btn mt-5">
        Update Profile
      </button>
      {isOpen && (
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input
            defaultValue={user?.displayName}
            name="name"
            type="text"
            className="input"
            placeholder="Email"
          />
          <label className="label">Photo URL</label>
          <input
            defaultValue={user?.photoURL}
            name="photoUrl"
            type="text"
            className="input"
            placeholder="New Url"
          />
          <button className="btn btn-neutral mt-4">Update</button>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
