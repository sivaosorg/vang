import 'zone.js'; // Importing zone.js for Angular's zone.js support
import { bootstrapApplication } from '@angular/platform-browser'; // Importing bootstrapApplication for Angular application initialization
import { HttpClientModule } from '@angular/common/http'; // Importing HttpClientModule for HTTP client functionality
import { AppComponent } from './app/app.component'; // Importing the root component of the Angular application
import { importProvidersFrom } from '@angular/core'; // Importing importProvidersFrom for dynamic module importing
import { AppService } from './app/app.service';

// Bootstrapping the Angular application with AppComponent as the root component
bootstrapApplication(AppComponent, {
  // Providing necessary dependencies and services
  providers: [AppService, importProvidersFrom(HttpClientModule)],
});
