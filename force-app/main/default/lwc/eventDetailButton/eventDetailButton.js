import { LightningElement, api } from 'lwc';

export default class EventDetailButton extends LightningElement {
    @api detail;
    @api eventName;
    @api name;
    @api value;
    @api label;
    @api variant;
    @api iconName;
    @api iconPosition;
    @api type;

    buttonClick() {
        const event = new CustomEvent(this.eventName, {
            detail: this.detail
        });
        this.dispatchEvent(event);

    }
}