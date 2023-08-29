import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../fetchPexelsApi'; // assuming fetchData.js is in the same directory
import "../styles/Options.css"

const Photos = ({ photos }) => (
  <div className="photos">
    {photos.map((photo, index) => (
      <div className="photo" key={index}>
        <img src={photo.src.medium} alt={photo.url} />
      </div>
    ))}
  </div>
);

export const Options = () => {
  const [usersPhotos, setUsersPhotos] = useState([]);
  const [taggedPhotos, setTaggedPhotos] = useState([]);
  const [selected, setSelected] = useState('users-photos');

  const options = [
    { id: 'users-photos', icon: 'fa-solid fa-table-cells', photos: usersPhotos },
    { id: 'tagged-photos', icon: 'fa-regular fa-user', photos: taggedPhotos },
  ];

  useEffect(() => {
    // Fetch users' photos
    fetchPhotos(1, 'coding').then(photos => {
      setUsersPhotos(photos);
    });

    // Fetch tagged photos
    fetchPhotos(1, 'hacking').then(photos => {
      setTaggedPhotos(photos);
    });
  }, []);

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
