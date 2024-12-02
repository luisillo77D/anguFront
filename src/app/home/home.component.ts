import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any[] = [];

  constructor(private api: ApiService) {
  }

  llenaData() {
    this.api.get('clientes').subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.llenaData();
  }
}
