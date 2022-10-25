import React, {useEffect, useRef, useState} from 'react';
import { EventClass } from '../model/event';
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import EventList from '../components/EventList';
import AddButton from '../components/AddButton';
import { add,save, exit} from 'ionicons/icons';
import EventDetailsPopUp from '../components/EventDetailsPopUp';

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const [eventSelected, setEventSelected] = useState(false)
  const [event, setEvent] = useState(new EventClass(0, "", "", ""))

  const handleEditAddClick = (event?:EventClass) => {
      setShow(!show)
      if(event!==undefined){
         setEvent(event)
      }
  }

 
  const saveEvent = (id:number, name:string, location:string, time:string) => {
    setEvent(new EventClass(id, name, location, time))
  }

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
            <EventDetailsPopUp event={event} method={handleEditAddClick}/>
            
          </div>
        )}
        
        {!show && (
        <div>
          <EventList method={handleEditAddClick} />
          
          <IonFooter className="ion-no-border">
            <IonButton className="ion-padding" shape="round" onClick={()=>handleEditAddClick(undefined)}>
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
