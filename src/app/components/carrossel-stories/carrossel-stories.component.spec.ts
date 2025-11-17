import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselStoriesComponent } from './carrossel-stories.component';

describe('CarrosselStoriesComponent', () => {
  let component: CarrosselStoriesComponent;
  let fixture: ComponentFixture<CarrosselStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
