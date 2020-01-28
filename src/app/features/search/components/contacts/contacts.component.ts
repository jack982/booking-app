import {Component, EventEmitter, Output} from '@angular/core';
import {Contact} from '../../../../model/contact';

@Component({
  selector: 'app-contacts',
  template: `
      <form #contactForm="ngForm" (submit)="sendEmail.emit( contactForm.value )">
        <input type="text" placeholder="Your email*" [ngModel] name="email" required>
        <textarea cols="20" rows="6" placeholder="Your message*"  [ngModel] name="message" required></textarea>
        <button type="submit" [disabled]="contactForm.invalid">SEND</button>
      </form>
  `,
  styles: []
})
export class ContactsComponent {
  @Output() sendEmail: EventEmitter<Contact> = new EventEmitter<Contact>();

}
