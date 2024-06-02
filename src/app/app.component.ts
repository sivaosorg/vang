import { Component } from '@angular/core';
import { AppService } from './app.service';
import { environment } from '@env/environment';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public key;
  constructor(private appService: AppService) {
    console.log(appService.getHello());
    if (environment.production) {
      console.log('Production mode');
      console.log('API Key:', environment.apiKey); // Should log 'your-production-api-key'
      this.key = environment.apiKey;
    } else {
      console.log('Development mode');
      console.log('API Key:', environment.apiKey); // Should log 'your-api-key' from .env file
      this.key = environment.apiKey;
    }
  }
}
