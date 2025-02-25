Usage
Registering a User
Navigate to the Register page (or section) of the app.
Fill in the required user details (e.g., first name, last name, email, and password).
When you submit the registration form, the application calls the AuthService.register() method. This method:
Saves the user data to local storage.
Sets the currentUser signal with the new user.
Updates the loggedIn signal to true.
Logging In
Navigate to the Login page.
Enter your email and password.
When you submit the login form, the application calls the AuthService.login() method. This method:
Retrieves the stored user from local storage.
Compares the provided credentials with the stored user data.
If the credentials match, sets loggedIn to true and updates currentUser with the stored data.
If the credentials do not match, an error message is logged to the console.
Logging Out
To log out, the AuthService.logout() method can be called. This method:
Sets loggedIn to false.
Clears the currentUser signal.
The user dashboard or other protected views will no longer display user-specific information.
