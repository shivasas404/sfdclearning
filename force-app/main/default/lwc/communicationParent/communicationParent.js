import { LightningElement } from 'lwc';

export default class CommunicationParent extends LightningElement {
    userInfo = {
        name: 'John Doe',
        email: 'support@mail.com',
        phone: '123-456-7890'
    };
    isLoading = false;
    handleClick() {
        this.isLoading = !this.isLoading;
    }

    handleChildClick(event) {
        const messageFromChild = event.detail.message;
       alert('Message from Child: ' + messageFromChild);
    }
}