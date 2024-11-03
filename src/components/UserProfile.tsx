import React from 'react';
import { Outlet, Link } from "react-router-dom";

interface UserProfileProps {
    username: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: string;
    favoriteGenres: string;
    profilePicturePath: string;
}

function UserProfile(props: UserProfileProps) {
    return (
        <div>
            <h2>User Profile</h2>
            <img src={props.profilePicturePath} alt="Profile Picture" width="150" height="150" /><br /><br />

            <p><strong>Username:</strong> {props.username}</p>
            <p><strong>First Name:</strong> {props.firstName}</p>
            <p><strong>Last Name:</strong> {props.lastName}</p>
            <p><strong>Date of Birth:</strong> {props.dateOfBirth}</p>
            <p><strong>Address:</strong> {props.address}</p>
            <p><strong>Favorite Book Genres:</strong> {props.favoriteGenres}</p>

            <Link to="/registration">
                <button>Edit Profile</button>
            </Link>
        </div>
    );
}

export default UserProfile;
