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
  DataFromApp1: any = '';
  valueState: any;
  someState$: Observable<string> | undefined;
  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<{ someFeature: State }>
  ) { }

  Datacustombus: any
  ngOnInit(): void {
    //click Custom Events
    window.addEventListener('app1Event', (event: any) => {
      console.log('Received event from App 1:', event?.detail);
      this.DataFromApp1 = event?.detail?.message
      console.log(this.DataFromApp1)
      this.cdr.detectChanges();

      // custom bus
      window.addEventListener('message', (event) => {
        if (event.origin !== 'http://localhost:9000') {
          return; // Ignore messages from unexpected origins
        }
        const message = event.data?.message;
        if (message) {
          console.log('Received message---------------:', message);
          this.Datacustombus = message
          this.cdr.detectChanges();
        }
      });
    });




  }





  //   this.someState$ = this.store.pipe(select(selectSomeState));
  // this.someState$?.subscribe((state)=>{console.log(state)})
}

// updateState() {
//   this.store.dispatch(updateSomeState({ newValue: this.valueState }));
// }
