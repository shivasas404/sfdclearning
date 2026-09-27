import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showContentTrue = false;
    showContentFalse = true;
    toggleContent() {
        this.showContentTrue = !this.showContentTrue;
        this.showContentFalse = !this.showContentFalse;
    }
}