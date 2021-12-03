import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'AngularOutputChallenge';
  public onomatopias: string[] = new Array<string>();

  onReceiveNewOnomatopia($event:string){
    this.onomatopias.push($event);

  }

  ngOnInit(): void {
    this.onomatopias.push("Raaaaaaaah");
  }
}
