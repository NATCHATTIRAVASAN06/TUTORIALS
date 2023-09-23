import React from 'react';

export default function Props2({ person, size }) {
  const imageUrl = getImageUrl(person);

  return (
    <img
      className="avatar"
      src={imageUrl}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
