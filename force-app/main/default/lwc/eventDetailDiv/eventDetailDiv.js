import { LightningElement, api } from 'lwc';

export default class EventDetailDiv extends LightningElement {
    @api detail;
    @api eventName;
    @api className;

    hover() {
        const event = new CustomEvent(this.eventName, {
            detail: this.detail
        });
        this.dispatchEvent(event);

    }

}