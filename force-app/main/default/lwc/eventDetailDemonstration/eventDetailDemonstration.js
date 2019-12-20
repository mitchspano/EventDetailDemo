import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class EventDetailDemonstration extends LightningElement {

    get people () {
        let returnValue = [];
        returnValue.push({firstName : 'Lucas', lastName : 'SkieWalker', profession : 'Jedeye'});
        returnValue.push({firstName : 'Hans', lastName : 'Swolo', profession : 'Smuggler'});
        returnValue.push({firstName : 'Freya', lastName : 'Smorgana', profession : 'Princess'});
        returnValue.push({firstName : 'Old Ben', lastName : 'Kinobeye', profession : 'Teacher'});
        returnValue.push({firstName : 'Bob', lastName : 'Frett', profession : 'Bounty Hunter'});
        return returnValue;
    }

    handleButtonClick(event) {
        let profession = event.detail;
        const toastEvent = new ShowToastEvent({
            title: 'Profession',
            message: 'The profession of the selected person is ' + profession,
        });
        this.dispatchEvent(toastEvent);
    }

    handleDivHover(event) {
        let detail = event.detail;
        const toastEvent = new ShowToastEvent({
            title: 'Hovered',
            message: 'You have hovered over ' + detail,
        });
        this.dispatchEvent(toastEvent);
    }

}