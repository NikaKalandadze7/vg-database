import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'user';
  loggedIn = signal<boolean>(false);
  currentUser = signal<User | null>(null);

  constructor() {
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      const user = JSON.parse(storedUser) as User;
      this.currentUser.set(user);
      this.loggedIn.set(true);
    }
  }

  register(userData: User) {
    localStorage.setItem(this.userKey, JSON.stringify(userData));
    this.currentUser.set(userData);
    this.loggedIn.set(true);
    console.log('User registered:', userData);
  }

  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      if (parsedUser.email === email && parsedUser.password === password) {
        this.loggedIn.set(true);
        this.currentUser.set(parsedUser);
        console.log('Login successful');
        return true;
      }
    }
    console.log('Invalid email or password');
    return false;
  }

  logout() {
    this.loggedIn.set(false);
    this.currentUser.set(null);
    console.log('User logged out');
  }
}
