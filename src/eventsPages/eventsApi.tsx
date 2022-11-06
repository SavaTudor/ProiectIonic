import axios from 'axios';
import { getLogger } from '../core';
import { EventProps } from './eventProps';

const log = getLogger('itemApi');

const baseUrl = 'localhost:8080';
const eventUrl = `http://${baseUrl}/events`;


interface ResponseProps<T> {
    data: T;
}


function withLogs<T>(promise: Promise<ResponseProps<T>>, fnName: string): Promise<T> {
    log(`${fnName} - started`);
    return promise
        .then(res => {
            log(`${fnName} - succeeded`);
            return Promise.resolve(res.data);
        })
        .catch(err => {
            log(`${fnName} - failed`);
            return Promise.reject(err);
        });
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};


export const getItems: () => Promise<EventProps[]> = () => {
    return withLogs(axios.get(eventUrl, config), 'getItems');
}

export const getItemsWithFetch = () => {
    fetch(eventUrl).then(response => {
        console.log(response);
    });
}


interface MessageData {
    event: string;
    payload: {
        item: EventProps;
    };
}


export const newWebSocket = (onMessage: (data: MessageData) => void) => {
    const ws = new WebSocket(`${baseUrl}`)
    ws.onopen = () => {
        log('web socket onopen');
    };
    ws.onclose = () => {
        log('web socket onclose');
    };
    ws.onerror = error => {
        log('web socket onerror', error);
    };
    ws.onmessage = messageEvent => {
        log('web socket onmessage');
        onMessage(JSON.parse(messageEvent.data));
    };
    return () => {
        ws.close();
    }
}
