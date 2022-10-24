import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-type-select',
  templateUrl: './vehicle-type-select.component.html',
  styleUrls: ['./vehicle-type-select.component.css'],
})
export class VehicleTypeComponent {
  selectedVehicleType = '';
  onSelected(value: string) {
    this.selectedVehicleType = value;
  }
}
