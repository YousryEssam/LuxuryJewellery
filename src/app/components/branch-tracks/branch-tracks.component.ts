import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-tracks',
  imports: [FormsModule],
  templateUrl: './branch-tracks.component.html',
  styleUrl: './branch-tracks.component.css'
})



export class BranchTracksComponent {
  branch : string = "AllBranchs";
  
  tracks: {name : string , branch : string , description : string}[] = [
  { name: "PWD", branch: "Branch 1", description: "Description for Track 1" },
  { name: "OS", branch: "Branch 2", description: "Description for Track 2" },
  { name: "UI/UX", branch: "Branch 3", description: "Description for Track 3" },
  { name: "Game Devolpment", branch: "Branch 3", description: "Description for Track 4" },
  { name: "Track 5", branch: "Branch 2", description: "Description for Track 5" },
  { name: "Track 6", branch: "Branch 1", description: "Description for Track 6" },
  { name: "Track 7", branch: "Branch 1", description: "Description for Track 7" },
  { name: "Track 8", branch: "Branch 1", description: "Description for Track 8" },
  { name: "AI", branch: "Branch 2", description: "Introductory level" },
  { name: "Web", branch: "Branch 3", description: "Hands-on training" },
  { name: "Mobile", branch: "Branch 3", description: "Project-based learning" },
  { name: "Cloud", branch: "Branch 2", description: "Advanced concepts" },
  { name: "Security", branch: "Branch 2", description: "Theory and practice" }
  ];

}
