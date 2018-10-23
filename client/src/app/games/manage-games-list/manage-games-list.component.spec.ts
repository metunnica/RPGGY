import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGamesListComponent } from './manage-games-list.component';

describe('ManageGamesListComponent', () => {
  let component: ManageGamesListComponent;
  let fixture: ComponentFixture<ManageGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGamesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
