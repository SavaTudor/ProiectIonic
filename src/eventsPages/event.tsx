import React, { useCallback } from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { EventProps } from './eventProps';

interface ItemPropsExt extends EventProps {
    onEdit: (id?: string) => void;
}

const Item: React.FC<ItemPropsExt> = ({ id, name, date, location, onEdit }) => {
    const handleEdit = useCallback(() => onEdit(id), [id, onEdit]);
    return (
        <IonItem onClick={handleEdit}>
            <IonLabel>{name}</IonLabel>
            <IonLabel>{date}</IonLabel>
            <IonLabel>{location}</IonLabel>
        </IonItem>
    );
};

export default Item;
