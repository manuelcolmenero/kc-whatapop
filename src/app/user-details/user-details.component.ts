import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnDestroy, OnInit {

  user: User;
  private _userSubscription: Subscription;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this._route.data.forEach((data: { user: User }) => this.user = data.user);
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    if (this._userSubscription) {
      this._userSubscription.unsubscribe();
    }
  }

}