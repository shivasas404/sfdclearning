import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubB extends LightningElement {
    message = 'Hello from PubsubB!';
    constructor() {
        super();
        pubsub.subscribe('messageEvent', this.handleMessage.bind(this));
    }

    handleMessage(payload) {
        this.message = payload.message;
    }

    disconnectedCallback() {
        pubsub.unsubscribe('messageEvent', this.handleMessage.bind(this));
    }
}