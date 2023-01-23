import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiComponent } from './ui.component';

describe('Area UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call area method', () => {
    
  let result = 0;
  component.a = 3.5;
  component.b = 9.5;
  component.h = 4;

  
  component.ecuacion();
  result = component.result;

  expect(result).toBe(26);

  });

  it('Should set base menor model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;

    inputElement.value = '3.5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.a).toEqual(3.5);
  });

  it('Should set base mayor model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;

    inputElement.value = '9.5';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.b).toEqual(9.5);
  });

  it('Should set altura model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="h"]')).nativeElement;

    inputElement.value = '4';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.h).toEqual(4);
  });

  it('should add a, b and h when i click the area button ', () => {

    component.a = 6;
    component.b = 8;
    component.h = 4;
    let areaButton = fixture.debugElement.query(By.css('.btn-green'));

    areaButton.triggerEventHandler('click', null);

    expect(component.result).toBe(28);

  });

  it('Should render area in result div', () => {
    
    component.a = 3;
    component.b = 6;
    component.h = 4;

    component.ecuacion();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.resultE'));
    let el : HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('18');
  });

});