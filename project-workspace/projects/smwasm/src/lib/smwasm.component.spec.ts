import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmwasmComponent } from './smwasm.component';

describe('SmwasmComponent', () => {
  let component: SmwasmComponent;
  let fixture: ComponentFixture<SmwasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmwasmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmwasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
