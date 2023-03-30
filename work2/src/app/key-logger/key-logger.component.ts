import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit, OnDestroy {
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';
  subscription: Subscription | undefined;

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    this.subscription = logger$.subscribe((evt) => (this.keys += evt.key));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
