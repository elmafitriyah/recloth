import React from 'react';

interface CardProps {
  judul_konten: string;
  image: string | null; 
}

const Card: React.FC<CardProps> = ({ judul_konten, image }) => {
  const imageUrl = image ? image : 'https://via.placeholder.com/150';

  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '5%', borderRadius: '8px', backgroundColor: 'white', height:'100%', margin: '0% 3% 0% 3%', boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", transition: "box-shadow 0.3s ease",}}>
      <img src={imageUrl} alt={judul_konten} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h6 style={{ textAlign: 'center', fontSize: '17px', marginTop: '10px', fontWeight: '400' }}>{judul_konten}</h6>
    </div>
  );
};

export default Card;
