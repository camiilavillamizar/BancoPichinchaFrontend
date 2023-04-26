import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TransactionService } from 'src/app/services/transaction.service';


describe('TransactionService', () => {
  beforeEach(async() => 
  TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
  );

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    expect(service).toBeTruthy();
  });
});
