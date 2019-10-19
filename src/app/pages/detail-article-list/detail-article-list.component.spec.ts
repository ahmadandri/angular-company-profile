import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleListComponent } from './detail-article-list.component';

describe('DetailArticleListComponent', () => {
  let component: DetailArticleListComponent;
  let fixture: ComponentFixture<DetailArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
