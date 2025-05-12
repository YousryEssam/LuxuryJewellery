import { Component } from '@angular/core';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { BranchTracksComponent } from './components/branch-tracks/branch-tracks.component';

@Component({
  selector: 'app-root',
  imports: [WelcomePageComponent , BranchTracksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuxuryJewellery';
}
