import React, {useEffect, useRef, useState} from 'react';
import { EventClass } from '../model/event';
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import EventList from '../components/EventList';
import AddButton from '../components/AddButton';
import { add } from 'ionicons/icons';
import EventDetailsPopUp from '../components/EventDetailsPopUp';

const Home: React.FC = () => {
  const [show, setShow] = useState(false);


  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle class="ion-padding title">My Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        {show && (
          <div>
            <EventDetailsPopUp event={undefined}/>

            <IonFooter className="ion-no-border">
              <IonButton className="ion-padding" shape="round" onClick={()=>{setShow(!show)}}>
              <IonIcon slot="icon-only" icon={add}></IonIcon>
              </IonButton>
            </IonFooter>
          </div>
        )}
        {!show && (
        <div>
          <EventList />
          
          <IonFooter className="ion-no-border">
            <IonButton className="ion-padding" shape="round" onClick={()=>{setShow(!show)}}>
             <IonIcon slot="icon-only" icon={add}></IonIcon>
           </IonButton>
          </IonFooter>
        </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
