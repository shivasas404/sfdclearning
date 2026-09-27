import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Auddi", "Maruti", "BMW", "Mercedes", "Tata", "Mahindra"];
    getIndex(index) {
        return index + 1;
    }
}