import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltHeaderComponent } from './alt-header.component';

describe('AltHeaderComponent', () => {
  let component: AltHeaderComponent;
  let fixture: ComponentFixture<AltHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
