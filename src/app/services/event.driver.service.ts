import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "../state/product.state";

@Injectable({providedIn:"root"})
export class EventDriverService{
  sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  // Il est possible de différencier les différents types d'événement
  // exemple : ActionCommandEvent, ActionQueryEvent, etc.
  //sourceEventSubject2:Subject<ActionCommandEvent> = new Subject<ActionCommandEvent>();
  //sourceEventSubjectObservable2 = this.sourceEventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
