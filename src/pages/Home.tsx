import React, {useEffect, useRef, useState} from 'react';
import { EventClass } from '../model/event';
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import EventList from '../components/EventList';
import AddButton from '../components/AddButton'

const Home: React.FC = () => {
 
  return (
    <IonPage>
      <IonHeader class="ion-title">
        <IonToolbar>
          <IonTitle >My Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle class="ion-padding title">My Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EventList />
        <IonFooter className="ion-no-border">
          <AddButton />
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
