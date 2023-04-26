import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponent } from '../../../src/app/pages/clients/clients.component';
import { ClientService } from '../../../src/app/services/client.service';
import { TitleSectionComponent } from '../../../src/app/components/title-section/title-section.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsComponent, TitleSectionComponent ], 
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [ClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
