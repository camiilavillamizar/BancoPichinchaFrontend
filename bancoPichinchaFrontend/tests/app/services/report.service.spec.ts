import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReportService } from 'src/app/services/report.service';

describe('ReportService', () => {
  
  beforeEach(async() => 
  TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
  );

  it('should be created', () => {
    const service: ReportService = TestBed.get(ReportService);
    expect(service).toBeTruthy();
  });
});
