import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Apply } from '../apply/apply';

@Component({
  imports: [RouterLink, Apply],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
