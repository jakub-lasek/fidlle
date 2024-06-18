import { NgStyle } from "@angular/common";
import { Component, InputSignal, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'fab-button-atom',
  templateUrl: './fab-button.component.html',
  styleUrl: './fab-button.component.scss',
  standalone: true,
  imports: [MatButtonModule, NgStyle, MatIconModule]
})
export class FabButtonAtomComponent {
  ariaLabel: InputSignal<string> = input.required<string>();
  text: InputSignal<string> = input.required<string>();
  iconName: InputSignal<string> = input.required<string>();
  textColor: InputSignal<string> = input<string>('');
}
