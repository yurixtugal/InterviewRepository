class OrderService {
    database: MYSQLDatabase;

    constructor(database: MYSQLDatabase){
        this.database = database;
    }

    saveOrder(){
        this.database.insertMysql();
    }
}

class MYSQLDatabase {
    insertMysql(){
      console.log('Inserting data into MYSQL database');
    }

    updateMysql(){
      console.log('Updating data into MYSQL database');
    }
}

class MongoDBDatabase {
    insertMongo(){
      console.log('Inserting data into MongoDB database');
    }

    updateMongo(){
      console.log('Updating data into MongoDB database');
    }
}

const mysqlDatabase = new MYSQLDatabase();
const orderService = new OrderService(mysqlDatabase);
orderService.saveOrder(); // Inserting data into MYSQL database
console.log("If we want to change the database, we need to change the OrderService class")
// const mongoDBDatabase = new MongoDBDatabase();
// const orderService2 = new OrderService(mongoDBDatabase);
// orderService2.saveOrder(); // Inserting data into MongoDB database

// Now we can change the database without changing the OrderService class

interface Database {
  insert(): void;
  update(): void;
}

class MYSQLDatabaseDI implements Database {
  insert(){
    console.log('Inserting data into MYSQL database with Dependency Inversion Principle');
  }

  update(){
    console.log('Updating data into MYSQL database with Dependency Inversion Principle');
  }
}

class MongoDBDatabaseDI implements Database {
  insert(){
    console.log('Inserting data into MongoDB database with Dependency Inversion Principle');
  }

  update(){
    console.log('Updating data into MongoDB database with Dependency Inversion Principle');
  }
}

class OrderServiceDI {
  database: Database;

  constructor(database: Database){
      this.database = database;
  }

  saveOrder(){
      this.database.insert();
  }
}

const mysqlDatabaseDI = new MYSQLDatabaseDI();
const orderServiceDI = new OrderServiceDI(mysqlDatabaseDI);
orderServiceDI.saveOrder(); // Inserting data into MYSQL database
console.log("Now we can change the database without changing the OrderService class")
const mongoDBDatabaseDI = new MongoDBDatabaseDI();
const orderService2DI = new OrderServiceDI(mongoDBDatabaseDI);
orderService2DI.saveOrder(); // Inserting data into MongoDB database