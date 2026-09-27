import { LightningElement, track } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    displayText = 'Hello World';
    @track myUserDetils = {
        Name: 'John Doe',
        Email: 'emailId@gmal.com',
        City: 'New York'
    }
    syncValue(event) {
        this.displayText = event.target.value;
    }

    setUserDetails(event) {
        const fieldName = event.target.name;
        this.myUserDetils[fieldName] = event.target.value;
        //this.myUserDetils = { ...this.myUserDetils, [fieldName]: event.target.value };
    }
    
}