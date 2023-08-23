import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, ExampleService } from '../services/example.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  data$: Observable<Data> | undefined;

  constructor(private exampleService: ExampleService) {}

  onClick() {
    this.data$ = this.exampleService.getData();
  }
}
