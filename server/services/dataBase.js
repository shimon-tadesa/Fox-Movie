const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/";
const dbName = "dbs",
  collectionName = "users";

function login(req, res) {
  console.log("users login");

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    const dbo = db.db(dbName);

    // -- expecting email and password
    const queryUser = req.body;

    dbo.collection(collectionName).findOne(queryUser, function (err, user) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      if (user) {
        // --- this is post but no document is created so return 200
        return res.status(200).send(user);
      }
      // -- not found
      res.sendStatus(404);
    });
  });
}

function registr(req, res) {
  console.log("users registr");

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    const dbo = db.db(dbName);
    // -- expecting email and password...
    const queryUser = req.body;

    dbo
      .collection(collectionName)
      .findOne({ email: queryUser.email }, function (err, userFound) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        if (userFound) {
          // email is alrady registr ?
          console.log(userFound);
          console.log("try anuoter email");
          return res.sendStatus(400);
        }
        //-- no email match -- soo insert user info
        dbo
          .collection(collectionName)
          .insertOne(queryUser, function (err, results) {
            if (err) {
              console.log(err);
              return res.sendStatus(500);
            }
            res.sendStatus(201);
            console.log(`this is the user info ${results}`);
          });
      });
  });
}

function saveUserCart(req, res) {
  let movieObj = req.body.movie;
  let userId = req.params.userId;
  console.log(
    `the movie name is : ${movieObj.title ? movieObj.title : movieObj.name}`
  );
  console.log(`the user id is : ${userId}`);

  try {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      let dbo = db.db(dbName);
      let myquery = { _id: new ObjectID(userId) };
      let newvalues = { $push: { MyCart: movieObj } };
      dbo
        .collection(collectionName)
        .updateOne(myquery, newvalues, function (err, data) {
          if (err) throw err;
          console.log("1 document updated to user Cart");
          db.close();
          res.sendStatus(200);
        });
    });
  } catch (err) {
    res.sendStatus(500);
  }
}

function findUser_ToAdd_Item(req, res) {
  console.log(" connect To  DataBase ...");
  console.log(`this is the User Id : ${req.params.id}`);

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    let dbo = db.db(dbName);

    dbo
      .collection(collectionName)
      .findOne({ _id: ObjectID(req.params.id) }, function (err, user) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        res.send(user);
        console.log("add item to user list");
        db.close();
      });
  });
}

function findUser_ToDelete_Item(req, res) {
  console.log(" connect To  DataBase ...");
  console.log(`this is the User Id : ${req.params.id}`);

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    let dbo = db.db(dbName);
    let movieId = Number(req.params.movieId);
    let newvalues = { $pull: { MyCart: { id: movieId } } };
    dbo
      .collection(collectionName)
      .updateOne({ _id: ObjectID(req.params.id) }, newvalues, function (
        err,
        user
      ) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        res.send(user);
        console.log("one document in the user deleted");
        db.close();
      });
  });
}
module.exports.registr = registr;
module.exports.login = login;
module.exports.saveUserCart = saveUserCart;
module.exports.findUser_ToAdd_Item = findUser_ToAdd_Item;
module.exports.findUser_ToDelete_Item = findUser_ToDelete_Item;
