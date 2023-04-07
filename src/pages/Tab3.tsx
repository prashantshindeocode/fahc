import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {
  // IonButton,
  // IonContent,
  // IonHeader,
  // IonPage,
  // IonTitle,
  // IonToolbar,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {logInOutline,searchOutline,listCircleOutline,mailOutline} from "ionicons/icons";

import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    
    <div className="content-section1">
    <div className="working">
     <h2>How It Works</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.llam,
      ex!Lorem ipsum dolor sit amet.
     </p>
     </div>
     
     {/* <div className="icons"> */}
      {/* <div className ="login" >  
     <IonIcon size="large" slot="end" icon={logInOutline}></IonIcon>
     <h6>login</h6>
     </div>
     <div className ="search" >
     <IonIcon size="large"  icon={searchOutline}> </IonIcon>
     <h6>search</h6>
     </div>
     <div className ="contact" >
     <IonIcon size="large" icon={listCircleOutline}> </IonIcon>
     <h6>Contact</h6>
     </div>
     <div className ="response" >
     <IonIcon  size="large"icon={mailOutline}> </IonIcon>
     <h6>Church Response</h6>
     </div> */}
    {/* </div> */}
    {/* <div className="btn2">
        <IonButton
          href="https://www.findahousechurch.com/howitworks"
          color="darken"
          size="large"
          expand="block"
          shape="round"
        >
          <h1>Know More</h1>
        </IonButton>
      </div> */}
      <div className="icon">
      <IonGrid>
        <IonRow>
          <IonCol className="toolbox">
          <IonIcon size="large" icon={logInOutline}></IonIcon>
          <h5>login</h5>
          </IonCol>
          <IonCol className="toolbox">
          <IonIcon size="large"  icon={searchOutline}> </IonIcon>
          <h5>search</h5>
          </IonCol>
          <IonCol className="toolbox">
          <IonIcon size="large" icon={listCircleOutline}> </IonIcon>
          <h5>Contact</h5>
          </IonCol>
          <IonCol className="toolbox">
          <IonIcon  size="large"  icon={mailOutline}> </IonIcon>
          <h5>Church Response</h5>
          </IonCol>
        </IonRow>
      </IonGrid>
      </div >
      <div className="prash">
      <div className="btn2">
       <button type="button"><h2>Know More</h2></button>
        </div>
        </div>
    </div>
  );
};

export default Tab3;
