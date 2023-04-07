import {

  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
 
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import HeaderImage from "../images/header.png";
import logo from "../images/logo.png";
// import {logInOutline,searchOutline,listCircleOutline,mailOutline} from "ionicons/icons";
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab6 from "./Tab6";


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="header">
              <div className="logo">
                <img src={logo} alt="abcd" />
              </div>
              <h3>Register</h3>
              <h3>Login</h3>
              <p> image</p>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="hero-section">
          <div className="header-image">
            <img src={HeaderImage} alt="abcd" />
          </div>
          <div className="container">
            <div className="welcome-sentence">
              <h1> Welcome !!!</h1>
            </div>
            <div className="subwelcome">
              <p>
                ACTS 20:20 You know that I have not hesitated to preach anything
                that would be helpful to you but have taught you
              </p>
            </div>
            {/* <div className="btn1">
              <IonButton
                href="https://www.findahousechurch.com/user/findhousechurch"
                color="primary"
                size="large"
                expand="block"
                shape="round"
              >
           <h1>Find A House Church</h1>
              </IonButton>
            </div> */}
             <div className="prash">
      <div className="btn2">
       <button type="button"><h2>Find A House Church</h2></button>
        </div>
        </div>
          </div>
        </div>
       <Tab3 />
       <Tab4/>
       <Tab5/>
       <Tab6/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
