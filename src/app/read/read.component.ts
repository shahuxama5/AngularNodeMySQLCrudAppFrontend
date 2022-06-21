import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  readData: any;
  successMessage: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
   this.getAllUser();
  }

  getAllUser () {
    this.api.getAllData().subscribe( res => {
      this.readData = res.data;
    });
  }

  deleteUser (id: any) {
    this.api.deleteData(id).subscribe(res => {
      this.successMessage = res.message;
      this.getAllUser();
    });
  }

}
