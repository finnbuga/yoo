import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DatetimePage } from "./datetime.page";

describe("DatetimePage", () => {
  let component: DatetimePage;
  let fixture: ComponentFixture<DatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatetimePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
