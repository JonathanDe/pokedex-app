import { Injectable } from '@angular/core';
import { UserInfo } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  fakeLocalStorageKey = 'auth_users';

  constructor() {}

  registerUser(user: UserInfo) {
    // let userDataBase = JSON.parse(localStorage.getItem(this.fakeLocalStorageKey)) || [];
    // userDataBase.push(user);
    // localStorage.setItem(this.fakeLocalStorageKey, JSON.stringify(userDataBase));

    let userDataBase = JSON.parse(localStorage.getItem(this.fakeLocalStorageKey)) || [];

    // nuevo

    let userRegistered = userDataBase.some((existingUser) => {
      return user.email === existingUser.email;
    });

    if (!userRegistered) {
      userDataBase.push(user);
      localStorage.setItem(this.fakeLocalStorageKey, JSON.stringify(userDataBase));
    }

    return userRegistered;
  };

  loginUser(user: UserInfo) {
    const userList = JSON.parse(localStorage.getItem(this.fakeLocalStorageKey)) || [];

    let userHasAccess = userList.some((existingUser) => {
      return user.email === existingUser.email && user.password === existingUser.password;
    });
    localStorage.setItem('hasAccess', userHasAccess.toString());

    return userHasAccess;
  };

  isAuth(){
    const hasAccess = localStorage.getItem('hasAccess');

    if (hasAccess == 'true') {
      return true;
    } else {
      return false;
    }
  }

  logoutUser(){
    localStorage.setItem('hasAccess', 'false');
  }



}
