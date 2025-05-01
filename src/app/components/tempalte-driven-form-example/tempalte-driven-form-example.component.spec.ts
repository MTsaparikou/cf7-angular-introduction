import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalteDrivenFormExampleComponent } from './tempalte-driven-form-example.component';

describe('TempalteDrivenFormExampleComponent', () => {
  let component: TempalteDrivenFormExampleComponent;
  let fixture: ComponentFixture<TempalteDrivenFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempalteDrivenFormExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempalteDrivenFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
