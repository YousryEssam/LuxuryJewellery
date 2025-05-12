import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-tracks',
  imports: [FormsModule],
  templateUrl: './branch-tracks.component.html',
  styleUrl: './branch-tracks.component.css'
})
class Track{
  constructor(
    public name: string,
    public branch : string,
    public description: string
  ) {}
}
export class BranchTracksComponent {
  branch : string = "AllBranchs";
  tracks: Track[] = [
    new Track("Track 1", "Branch 1", "Description for Track 1"),
    new Track("Track 2", "Branch 2", "Description for Track 2"),
    new Track("Track 3", "Branch 3", "Description for Track 3"),
    new Track("Track 4", "Branch 4", "Description for Track 4"),
    new Track("Track 5", "Branch 5", "Description for Track 5"),
    new Track("Track 6", "Branch 6", "Description for Track 6"),
    new Track("Track 7", "Branch 7", "Description for Track 7"),
    new Track("Track 8", "Branch 8", "Description for Track 8"),
    new Track("AI", "CS", "Introductory level"),
    new Track("Web", "SE", "Hands-on training"),
    new Track("Mobile", "IS", "Project-based learning"),
    new Track("Cloud", "IT", "Advanced concepts"),
    new Track("Security", "DS", "Theory and practice"),
  ];
}
