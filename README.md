# keystone - react - node - express boilerplate

## Prerequisites

* ReactJS
* NodeJS
* MongoDB
* Express
* SASS/SCSS


## Installing

Install all the Prerequisites with NodeJS:
```
npm install
```


Setup MongoDB:
* create a mongodb named 'your_app_name'
```
use your_app_name
```
* create an admin user of that database named 'your_app_name'
```
db.createUser({
	user: "your_app_name",
	pwd: "__PASSWORD__",
	roles: [ { role: "dbOwner", db: "your_app_name" } ]
})
```
* add the following line to the .env file
```
MONGO_URI="mongodb://your_app_name:__PASSWORD__@localhost:27017/your_app_name"
```

## Running the server

Run the server, compile, and watch
```
npm run dev
```

Run the server, and compile
```
npm run prod
```

Access keystone at the following URL:
```
http://localhost:3000/
```

## Built With

* [KeystoneJS](https://keystonejs.com/) - the framework used
* [Bootstrap](https://getbootstrap.com/) - the CSS framework (included in Keystone)
* [jQuery](https://jquery.com/) - the JS lib
* [MongoDB](https://www.mongodb.com/) - the document database (required by Keystone)

## Versioning

use GitFlow

## Authors
Steven Kulesza
