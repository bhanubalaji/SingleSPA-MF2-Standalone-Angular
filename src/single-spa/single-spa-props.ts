import { ReplaySubject } from 'rxjs';
import { AppProps } from 'single-spa';

export const singleSpaPropsSubject = new ReplaySubject<SingleSpaProps>(1);            

// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
export type SingleSpaProps = AppProps & {};
   




//In summary, this code sets up a ReplaySubject that emits values of type SingleSpaProps. 
//It also defines the SingleSpaProps type which extends the AppProps type provided by Single SPA,
// allowing you to add your own custom properties. This setup can be used to communicate and share data between different parts of your Single SPA application.


