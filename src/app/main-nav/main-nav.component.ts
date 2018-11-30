import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private router: Router, private toastService: ToastService) { }
  showAbout(){
    this.toastService.showToast('success', 5000,'this application was created by Gaby Costilla(c).');
    }
    
  ngOnInit() {
  }

}
