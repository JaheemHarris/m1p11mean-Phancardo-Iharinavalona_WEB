import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleAvatarIconComponent } from './female-avatar-icon.component';

describe('FemaleAvatarIconComponent', () => {
  let component: FemaleAvatarIconComponent;
  let fixture: ComponentFixture<FemaleAvatarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemaleAvatarIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FemaleAvatarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
