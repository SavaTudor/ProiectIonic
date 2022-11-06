import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList, IonLoading,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { add } from 'ionicons/icons';
import Event from './event';
import { getLogger } from '../core';
import { ItemContext } from './eventsProvider';

const log = getLogger('EventList');


const EventsList: React.FC<RouteComponentProps> = ({ history }) => {
  log('render');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ItemContext.Consumer>
        {({items, fetching, fetchingError}) => (
          <IonContent>
            <IonLoading isOpen={fetching} message="Fetching items" />
            {items && (
                <IonList>
                  {items.map(({ id, name, date, location }) =>
                      <Event key={id} id={id} name={name} date={date} location={location} onEdit={id => history.push(`/events/${id}`)} />)}
                </IonList>
            )}
            {fetchingError && (
                <div>{fetchingError.message || 'Failed to fetch items'}</div>
            )}
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton onClick={() => history.push('/item')}>
                <IonIcon icon={add} />
              </IonFabButton>
            </IonFab>
          </IonContent>
        )}
      </ItemContext.Consumer>
    </IonPage>
  );
};

export default EventsList;
