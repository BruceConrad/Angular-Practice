import { Component } from "@angular/core";
import { Observable, Observer, Subject, Subscription } from "rxjs";

@Component({
    selector: 'app-observablesample',
    template: 'Temporary'
})


export class ObservableSampleComponent
{
    subscription:Subscription;

    subject = new Subject<number>();


    ngOnInit()
    {
        let count = 0;
        setInterval(() => {
            this.subject.next(count++);
        }, 1000);

        this.subject.subscribe({next:(data) => {
            console.log('sub 1: ' + data)
        }})
        this.subject.subscribe({next:(data) => {
            console.log('sub 2: ' + data)
        }})
        this.subject.subscribe({next:(data) => {
            console.log('sub 3: ' + data)
        }})


        const myObservable = new Observable((observer:Observer<string>) => {
            //next
            setTimeout(() => {
                observer.next('some data');
            }, 1000);

            setTimeout(() => {
                observer.next('some data 2')
            }, 2000);

            //error
            //observer.error('some error');

            //complete

            setTimeout(() => {
                observer.complete();
            }, 3000);

            this.subscription = myObservable.subscribe((data:string) => {
                console.log(data)
            }, (error) => {
                console.log('received error: '+error)
            }, () => {
                console.log('completed')
            })
            
        })
    }

    ngOnDestroy()
    {

    }
}