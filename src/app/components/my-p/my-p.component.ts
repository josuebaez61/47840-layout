import { Component } from '@angular/core';

@Component({
  selector: 'my-p',
  template: `
    <p style="font-weight: 200; text-decoration: underline; font-family: Arial">
      <ng-content></ng-content>
    </p>
  `,
  styles: [
  ]
})
export class MyPComponent {

}
