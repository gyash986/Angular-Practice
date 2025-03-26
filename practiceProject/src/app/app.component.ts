import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceProject';
  posts:any[]=[];
  constructor(private service:ServiceService){

  }

  
  getDatafromAPI(){
    this.service.getData().subscribe(data=>{
      this.posts=data;
    })
  }
}
