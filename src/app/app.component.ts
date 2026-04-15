import { Component } from '@angular/core';
import { DroneItemComponent } from './drone-item/drone-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DroneItemComponent],
  styles: []
})
export class AppComponent {
  drones: string[] = ['Dron pierwszy', 'Dron drugi', 'Dron trzeci'];
}
