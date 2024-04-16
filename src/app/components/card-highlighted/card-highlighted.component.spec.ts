import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHighlightedComponent } from './card-highlighted.component';

describe('CardHighlightedComponent', () => {
  let component: CardHighlightedComponent;
  let fixture: ComponentFixture<CardHighlightedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHighlightedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHighlightedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
