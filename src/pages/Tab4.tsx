import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import HouseChurch from "../images/house-church.png";

const Tab4: React.FC = () => {
  return (
    <div className="content-section2">
      
        <div className="cs2-container">
          <h1>Some House Church</h1>
          <img
            src={HouseChurch}
            alt="housechurch"
            className="housechurch-img"
          />
          <h2> WESTERN BOSCH HOUSE CHURCH </h2>
          <div className="cs2-member">
            <p>
              <span>200 Members</span>
            </p>
            <p>Created By Western gorge</p>
          </div>
          <div className="prash2">
            <div className="see-more">
              <button type="button">
                <h5>See More</h5>
              </button>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Tab4;
