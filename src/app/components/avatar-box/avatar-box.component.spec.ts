import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarBoxComponent } from './avatar-box.component';

describe('AvatarBoxComponent', () => {
  let component: AvatarBoxComponent;
  let fixture: ComponentFixture<AvatarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
