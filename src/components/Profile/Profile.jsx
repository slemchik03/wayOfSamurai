import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts store={props.store} />
        </div>
    )
}

export default Profile;