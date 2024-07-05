import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPcListComponent } from './componentes-pc-list.component';

describe('ComponentesPcListComponent', () => {
  let component: ComponentesPcListComponent;
  let fixture: ComponentFixture<ComponentesPcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesPcListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesPcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
