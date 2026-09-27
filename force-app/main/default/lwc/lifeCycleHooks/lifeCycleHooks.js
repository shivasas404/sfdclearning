import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    childEnable = true;
    constructor() {
        super();
        console.log('Constructor called');
    }

    connectedCallback() {
        console.log('Connected Callback called');
    }

    renderedCallback() {
        console.log('Rendered Callback called');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback called');
    }

    handleClick() {
        this.childEnable = !this.childEnable;
    }
}