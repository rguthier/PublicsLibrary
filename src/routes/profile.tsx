import React from 'react';
import UserProfile from '../components/UserProfile';

// Dummy data to simulate user data, will be overidden when we put actual data in
const user = {
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    address: '123 Main St',
    favoriteGenres: 'Fantasy, Science Fiction',
    profilePicturePath: '/path/to/profile.jpg',
};

function ProfilePage() {
    return (
        <div>
            <UserProfile 
                username={user.username}
                firstName={user.firstName}
                lastName={user.lastName}
                dateOfBirth={user.dateOfBirth}
                address={user.address}
                favoriteGenres={user.favoriteGenres}
                profilePicturePath={user.profilePicturePath}
            />
        </div>
    );
}

export default ProfilePage;
