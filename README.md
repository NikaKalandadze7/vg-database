## Usage

### Registering a User

1. **Navigate to the Register page (or section) of the app.**
2. **Fill in the required user details:**  
   *Example:* first name, last name, email, and password.
3. **Submit the registration form.** This calls the `AuthService.register()` method, which:
   - **Saves** the user data to local storage.
   - **Sets** the `currentUser` signal with the new user.
   - **Updates** the `loggedIn` signal to `true`.

### Logging In

1. **Navigate to the Login page.**
2. **Enter your email and password.**
3. **Submit the login form.** This calls the `AuthService.login()` method, which:
   - **Retrieves** the stored user from local storage.
   - **Compares** the provided credentials with the stored user data.
   - **If the credentials match:**  
     Sets `loggedIn` to `true` and updates `currentUser` with the stored data.
   - **If the credentials do not match:**  
     Logs an error message to the console.

### Logging Out

- **Call the `AuthService.logout()` method.** This method:
  - **Sets** `loggedIn` to `false`.
  - **Clears** the `currentUser` signal.
- **Result:**  
  The user dashboard or other protected views will no longer display user-specific information.
