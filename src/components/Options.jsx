import React, { useState } from 'react';
import UsersPhoto from '/users-photo.jpg';
import TaggedPhoto from '/tagged-photo.jpg';
import "../styles/Options.css"

const Photos = ({ photos }) => (
  <div className="photos">
    {photos.map((photo, index) => (
      <div className="photo" key={index}>
        <img src={photo} alt="photo" />
      </div>
    ))}
  </div>
);

export const Options = () => {
  const usersPhotos = Array(6).fill(UsersPhoto);
  const taggedPhotos = Array(6).fill(TaggedPhoto);

  const options = [
    { id: 'users-photos', icon: 'fa-solid fa-table-cells', photos: usersPhotos },
    { id: 'tagged-photos', icon: 'fa-regular fa-user', photos: taggedPhotos },
  ];

  const [selected, setSelected] = useState(options[0].id);

  return (
    <section className="grid">
      <div className="options">
        {options.map((option) => (
          <div
            className={`${selected === option.id ? 'selected' : ''}`}
            onClick={() => setSelected(option.id)}
            key={option.id}
          >
            <i className={option.icon}></i>
          </div>
        ))}
      </div>
      <Photos photos={selected === 'users-photos' ? usersPhotos : taggedPhotos} />
    </section>
  );
};
