import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from './card/card.component';

// Import the HighlightPipe
import { HighlightPipe } from './pipes/highlight.pipe';  // Adjust path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  // Add HighlightPipe to imports
  imports: [RouterOutlet, FontAwesomeModule, HeaderComponent, HomeComponent, CardComponent, HighlightPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Fix this line (styleUrls instead of styleUrl)
})
export class AppComponent {
  title = 'first-angular-app';
}
