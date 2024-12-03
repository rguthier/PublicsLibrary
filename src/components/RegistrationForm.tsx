import React from 'react';

function RegistrationForm() {
    return (
        <div>
            <h2>User Registration</h2>
            {/* // replace the your_server_endpoint with actual database once we've set it up example "http://localhost:5000/api/register" */}
            <form action="your_server_endpoint" method="POST" encType="multipart/form-data">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br /><br />

                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" required /><br /><br />

                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" required /><br /><br />

                <label htmlFor="date_of_birth">Date of Birth:</label>
                <input type="date" id="date_of_birth" name="date_of_birth" required /><br /><br />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required /><br /><br />

                <label htmlFor="favorite_genres">Favorite Book Genres:</label>
                <input type="text" id="favorite_genres" name="favorite_genres" /><br /><br />

                <label htmlFor="profile_picture">Profile Picture:</label>
                <input type="file" id="profile_picture" name="profile_picture" /><br /><br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
