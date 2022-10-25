import React, {useEffect, useRef, useState} from 'react';
import {
    IonRow,
    IonCol,
    IonItemSliding,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonButton,
    IonIcon,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonInput,
    IonLabel,
    IonDatetime
} from '@ionic/react';
import { EventClass } from '../model/event';
import NameField from '../components/NameField'
import LocationField from '../components/LocationField'
import TimeField from '../components/TimeField'
import DateField from '../components/DateField'
import { add,save, exit} from 'ionicons/icons';
interface ContainerProps {
    event?: EventClass,
    method?:any
}
const EventDetailsPopUp: React.FC<ContainerProps> = (props) => {
    const [name, setName] = useState(props?.event?.name)
    const [location, setLocation] = useState(props?.event?.location)
    const [time, setTime] = useState(props.event?.time)

    const sendPostRequest = () =>{
       
        if(name!==undefined && location!==undefined && time!==undefined){
            console.log(JSON.stringify(new EventClass(0, name, location, time)));
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "http://localhost:8080/events");
        
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
        
        
            xhr.send(JSON.stringify(new EventClass(0, name, time, location)));
        }
    }

    

    return(
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{(props.event!==undefined)
                    ?   "Details"
                    :   "New Event"
            }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Name</h2></IonLabel>
                <IonInput value={name} onIonChange={(e:any) =>setName(e.target.value)}></IonInput>
            </IonItem>
            </div>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Location</h2></IonLabel>
                <IonInput value={location} onIonChange={(e:any) =>setLocation(e.target.value)}></IonInput>
            </IonItem>
            </div>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Time</h2></IonLabel>
                <IonDatetime value={time} onIonChange={(e:any) =>setTime(e.target.value)}></IonDatetime>
            </IonItem>
            </div>
             <IonFooter className="ion-no-border">
              <IonButton className="ion-padding item-start" shape="round" onClick={()=>{
               sendPostRequest()
              }}>
              <IonIcon slot="icon-only" icon={save}></IonIcon>
              </IonButton>
              <IonButton className="ion-padding ion-float-right" shape="round" onClick={()=>{props?.method()}}>
              <IonIcon slot="icon-only" icon={exit}></IonIcon>
              </IonButton>
            </IonFooter>
        </div>
    )
}

export default EventDetailsPopUp