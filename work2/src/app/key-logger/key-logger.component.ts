import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit, OnDestroy {
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';
  subscription: Subscription | undefined;

  @Input() numeric = false;

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    this.subscription = logger$
      .pipe(
        map((evt) => evt.key.charCodeAt(0)),
        filter(
          (code) =>
            (this.numeric && code >= 48 && code <= 57) ||
            (!this.numeric && code > 31)
        ),
        tap((code) => console.log('received keycode = ' + code))
      )
      .subscribe((code) => (this.keys += String.fromCharCode(code)));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
