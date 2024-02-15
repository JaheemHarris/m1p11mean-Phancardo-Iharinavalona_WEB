import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleAvatarIconComponent } from './male-avatar-icon.component';

describe('MaleAvatarIconComponent', () => {
  let component: MaleAvatarIconComponent;
  let fixture: ComponentFixture<MaleAvatarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaleAvatarIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaleAvatarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
