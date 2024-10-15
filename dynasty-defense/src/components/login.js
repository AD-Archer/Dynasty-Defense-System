export default function LoginPage() {
    return (
      <body>
        <div class="container">
          <section class="header">
            <h1>Dynasty Defense Security</h1>
          </section>

          <div class="login-card">
            <h2>Register</h2>
            <form id="registration-form" class="sign-in-form">
              <div class="input-group">
                <input
                  type="text"
                  id="new-username"
                  required
                  placeholder="Username"
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  id="new-password"
                  required
                  placeholder="Password"
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  id="confirm-password"
                  required
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit">Register</button>
              <h6 id="link-to-signin" class="link-to-signin">
                <a href="https://google.com">Sign in</a>
              </h6>
            </form>
          </div>
        </div>
      </body>
    );
}
