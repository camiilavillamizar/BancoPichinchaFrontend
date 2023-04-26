import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ClientService } from 'src/app/services/client.service';


describe('ClientService', () => {
  
  beforeEach(async() => 
  TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
  );

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });
});
