import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const images = [
  'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_640.jpg',
  'https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_640.jpg',
  
  'https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_640.jpg',
  'https://t3.ftcdn.net/jpg/03/24/47/40/360_F_324474083_lTsIcFURraPJ2Y5Y04BZuWNwzkQltgwV.jpg',
  'https://cdnlearnblog.etmoney.com/wp-content/uploads/2023/03/best-practices-for-home-loans.jpg',
  'https://www.indusind.com/iblogs/wp-content/uploads/Best-Car-Loan-Online-IndusInd-Bank.jpg'
];

export default function Coursal() {
  return (
    <div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" style={{ height: '65vh' }}>
          <div className="carousel-inner" style={{ height: '100%' }}>
            {images.map((imageUrl, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} style={{ height: '100%' }}>
                <img className="d-block w-100" src={imageUrl} alt={`Image ${index + 1}`} style={{ height: '100%', width: '100%' }} />
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
