import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root',
})

export class CounterStore {
    count = signal(0);

    increment() {
        this.count.update(value => value + 1);
    }

    decrement() {
        this.count.update(value => value - 1);
    }

    reset() {
        this.count.set(0);
    }
}