import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<span>scalar.io test app &copy; Alex Frentsel {{year}}</span>',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
