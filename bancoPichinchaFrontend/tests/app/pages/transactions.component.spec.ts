import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from '../../../src/app/pages/transactions/transactions.component';
import { TitleSectionComponent } from '../../../src/app/components/title-section/title-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../../src/app/services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsComponent , TitleSectionComponent], 
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [TransactionService, CurrencyPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
