import { TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { ParkComponent } from "./park.component"

it("should create component", () => {
    TestBed.configureTestingModule({
        declarations: [ParkComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(ParkComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
})

it("should render title", () => {
    TestBed.configureTestingModule({
        declarations: [ParkComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(ParkComponent);
    const comp = fixture.componentInstance;
    comp.title = 'National Park';

    //Change Detection
    fixture.detectChanges();

    const elemTree = fixture.nativeElement;
    expect(elemTree.querySelector('#park-title').textContent).toEqual('National Park');

})

it("should return book event", () => {
    TestBed.configureTestingModule({
        declarations: [ParkComponent]
    }).compileComponents();

    let result:string;

    const fixture = TestBed.createComponent(ParkComponent);
    const comp = fixture.componentInstance;
    comp.title = 'National Park';

    comp.book.subscribe((data) => {
        result = data;
    })

    const btnElem = fixture.debugElement.query(By.css('button'));
    btnElem.triggerEventHandler('click', null);

    expect(result).toBe('National Park');
})