import { TestBed } from '@angular/core/testing';

import { AccountService } from '../../../src/app/services/account.service';
import { HttpClientModule } from '@angular/common/http';


describe('AccountService', () => {

  
  
  beforeEach(async() => 
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ]
      })
  );

  it('should be created', () => {
    const service = TestBed.get(AccountService)
    expect(service).toBeTruthy();
  });

  
});
