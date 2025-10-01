import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {}
