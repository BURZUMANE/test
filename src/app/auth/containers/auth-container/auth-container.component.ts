import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  getToken(): void {
    this.authService.getToken().subscribe((resp: any) => {
      localStorage.setItem('auth', JSON.stringify(resp));
      this.router.navigate(['gallery']);
    });
  }

  ngOnInit(): any {
  }
}
