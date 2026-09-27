import { LightningElement, api } from 'lwc';

export default class CommunicationChild extends LightningElement {
    @api message;
    @api userDetails = {};
    @api loading;

    handleClick() {
        const event = new CustomEvent('childclick', {
            detail: { message: 'Hello from Child Component' }
        });
        this.dispatchEvent(event);
    }
}