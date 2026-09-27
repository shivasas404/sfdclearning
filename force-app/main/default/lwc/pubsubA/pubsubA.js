import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubA extends LightningElement {
    message = 'Hello from PubsubA!';
    handleClick() {
        pubsub.fire('messageEvent', { message: this.message });
    }


}