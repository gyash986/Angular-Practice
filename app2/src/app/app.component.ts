import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReversePipe } from './reverse.pipe';
import { Form1Component } from "./form1/form1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
  textSample='Hi this is test string';
}
