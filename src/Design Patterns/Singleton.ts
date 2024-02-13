class Singleton {
  private static dbConnection: Singleton;
  private  random: number = Math.random();
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.dbConnection){
      // Simulate a DB connection
      this.dbConnection = new Singleton();
    }

    return this.dbConnection;
  }

  public query(query: string) {
    console.log(`Random number: ${this.random}`)
    console.log(`Querying ${query}`);
  }
}

const db = Singleton.getInstance();

db.query('SELECT * FROM users');

const db2 = Singleton.getInstance();

db2.query('SELECT * FROM posts');

console.log(db === db2)