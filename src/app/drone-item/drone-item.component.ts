import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomDirective } from '../zoom.directive';

@Component({
  selector: 'app-drone-item',
  standalone: true,
  imports: [CommonModule, ZoomDirective],
  templateUrl: './drone-item.component.html',
  styles: []
})
export class DroneItemComponent {
  @Input() droneName: string = '';

  energyLevel: number = 0;

  increaseEnergy() {
    if (this.energyLevel < 100) {
      this.energyLevel += 5;
    }
  }
}
