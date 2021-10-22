import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<p>
  <mat-toolbar color="primary"> 
    <span>Deasde Store</span>
    <span class="spacer"> </span>
    <app-cart></app-cart>
  </mat-toolbar>
</p>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  

}
