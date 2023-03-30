import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private setTitle = () => {
    console.log('invoked setTitle lambda');
    const d = new Date();
    let timestamp = d.getSeconds() + '.' + d.getMilliseconds();
    console.log(`new timestamp = ${timestamp}`);
    this.title = `Learning Angular (${timestamp})`;
  };

  private onComplete() {
    return new Promise<void>((resolve) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  constructor() {
    // this.title$.subscribe(this.setTitle);
    const complete$ = from(this.onComplete());
    complete$.subscribe(this.setTitle);
  }
}
