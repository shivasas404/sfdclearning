import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor() {
        super();
        console.log('Child Constructor called');
    }

    connectedCallback() {
        console.log('Child Connected Callback called');
    }

    disconnectedCallback() {
        console.log('Child Disconnected Callback called');
    }

    renderedCallback() {
        console.log('Child Rendered Callback called');
    }
}