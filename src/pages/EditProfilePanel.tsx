


import React, { useState } from 'react';
import './EditProfilePanel.css';

function EditProfilePanel({ profileData, onClose, onSave }) {
    const [displayName, setDisplayName] = useState(profileData.name || '');
    const [pronouns, setPronouns] = useState(profileData.pronouns || '');
    const [about, setAbout] = useState(profileData.about || '');
    const [photo, setPhoto] = useState(profileData.photo || '');

    const handleSave = () => {
        onSave({ name: displayName, pronouns, about, photo });
        onClose();
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="edit-profile-panel">
            {/* <button className="close-panel" onClick={onClose}>
                ×
            </button> */}
            <div className="profile-photo-edit">
                <img src={photo || '/default-avatar.png'} alt="Profile" />
                <input type="file" onChange={handlePhotoChange} />
                <a className="change-photo-link">Change profile photo</a>
            </div>
            <form>
                <label>Display name</label>
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    maxLength={30}
                />
                <label>Pronouns</label>
                <input
                    type="text"
                    value={pronouns}
                    onChange={(e) => setPronouns(e.target.value)}
                    maxLength={20}
                />
                <label>About you</label>
                <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <div className="form-buttons">
                    <button type="button" className="save-button" onClick={handleSave}>
                        Save
                    </button>
                    <button type="button" className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfilePanel;
