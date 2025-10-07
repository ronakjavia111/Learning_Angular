import { Component, Input } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails {
  name: string | null = '';
  id: number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.name = param['name'];
      this.id = param['id'];
      // console.log(param);
    });
  }
}
