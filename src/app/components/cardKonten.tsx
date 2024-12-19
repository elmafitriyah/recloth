import React from 'react';

interface CardProps {
  judul_konten: string;
  image: string | null; 
}

const Card: React.FC<CardProps> = ({ judul_konten, image }) => {
  const imageUrl = image ? image : 'https://via.placeholder.com/150';

  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', backgroundColor: 'white', height:'100%', }}>
      <img src={imageUrl} alt={judul_konten} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h6 style={{ textAlign: 'center', fontSize: '15px', marginTop: '10px' }}>{judul_konten}</h6>
    </div>
  );
};

export default Card;
