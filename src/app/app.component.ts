import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, updateSomeState } from 'shared-state-mylibrary';
import { selectSomeState } from 'shared-state-mylibrary'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project-MF2';
  DataFromApp1:any='';
  valueState:any;
  someState$: Observable<string> | undefined;
constructor(
  private cdr:ChangeDetectorRef,
  private store: Store<{ someFeature: State }>
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
    
  this.someState$ = this.store.pipe(select(selectSomeState));
this.someState$?.subscribe((state)=>{console.log(state)})

    // this.someState$.subscribe(
    //   state => {
    //     console.log('Received state in MF2:', state);
    //     if (state !== undefined) {
    //       console.log('Received state in MF2:', state);
    //       // Handle the state update here
    //     } else {
    //       console.error('State is undefined');
    //     }
    //   },
    //   error => console.error('Error subscribing to someState$: ', error)
    // );
      }

      updateState() {
        this.store.dispatch(updateSomeState({ newValue: this.valueState }));
      }
}
