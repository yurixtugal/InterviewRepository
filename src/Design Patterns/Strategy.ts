interface Strategy {
  login (username: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(username: string, password: string): boolean {
    return this.strategy.login(username, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(username: string, password: string): boolean {
    console.log(`Logging with DB strategy`);
    return true;
  }
}

class LoginWithGoogleStrategy implements Strategy {
  login(username: string, password: string): boolean {
    console.log(`Logging with Google strategy`);
    return true;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('user', 'password');

const auth2 = new LoginContext(new LoginWithGoogleStrategy());
auth2.login('user', 'password');