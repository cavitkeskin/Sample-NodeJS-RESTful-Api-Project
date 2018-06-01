Sample NodeJS RESTful Api Project
=================================
 

Install
-------

```
npm install
```

Start
-----
```
npm start
```

Test
----

Get all 
```
curl -X GET http://localhost:3000/employee/ -H 'signature: abc'
```

Get by id
```
curl -X GET http://localhost:3000/employee/1 -H 'signature: abc'
```

Search
```
curl -X GET 'http://localhost:3000/employee/?q=smith' -H 'signature: abc'
```

Insert
```
curl -X POST http://localhost:3000/employee/ -H 'signature: abc' \
  -d 'name=Taylor%20Swift&dob=1999-12-31'
```

Update
```
curl -X PUT http://localhost:3000/employee/2 -H 'signature: abc' \
  -d 'name=Taylor%20Swift&dob=1999-12-31'
```

Delete 
```
curl -X DELETE http://localhost:3000/employee/2 -H 'signature: abc'
```
