// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from "react";
// import ReactStars from "react-rating-stars-component";

const Tab6: React.FC = () => {
  return (
    <div className="content-section5">
      <div className="review">
        <h2>Reviews</h2>
        <h3>4.5</h3>
        <h3>star</h3>
      </div>
      <div className="prash5">
        <div className="writeReview">
          <button type="button">
            <h2>Write Review</h2>
          </button>
        </div>
      </div>
      <div className="namedetail">
        <h4>Nedra Tanksley</h4>
        <p>
          Friendly people, lively spiritual worship, Biblical teaching. Pastor
          Roam is friendly, caring, and culturally relevant. This is a diverse,
          vibrant church!.........
        </p>
      </div>

      {/* 
        <div>
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div> */}
    </div>
  );
};

export default Tab6;
