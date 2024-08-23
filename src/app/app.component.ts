import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project-MF2';
  DataFromApp1:any=''
constructor(
  private cdr:ChangeDetectorRef
) {}


  ngOnInit(): void {
    // In Angular application 2
    window.addEventListener('app1Event', (event:any) => {
      console.log('Received event from App 1:', event?.detail);
      this.DataFromApp1=event?.detail?.message
      console.log(this.DataFromApp1)
      this.cdr.detectChanges();
      // Handle the event or update the UI
    });
    
      }
}
