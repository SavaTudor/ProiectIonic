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
    IonToolbar
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { EventClass } from '../model/event';
import NameField from '../components/NameField'
import LocationField from '../components/LocationField'
import TimeField from '../components/TimeField'
import DateField from '../components/DateField'
interface ContainerProps {
    event?: EventClass
}
const EventDetailsPopUp: React.FC<ContainerProps> = (props) => {
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
            <NameField name={(props?.event?.name!==undefined)
                    ?   props.event.name
                    :   ""
            } />
            <LocationField location={(props?.event?.location!==undefined)
                    ?   props.event.location
                    :   ""
            } />
            <TimeField time={(props?.event?.time!==undefined)
                    ?   props.event.time
                    :   ""
            } />
        </div>
    )
}

export default EventDetailsPopUp