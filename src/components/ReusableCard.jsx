import React from 'react';
const ReusableCard = ({ title, content, imageUrl, actions }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt="Card" className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        <div className="card-actions">
          {actions && actions.map((action, index) => (
            <button key={index} className="card-button" onClick={action.onClick}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
