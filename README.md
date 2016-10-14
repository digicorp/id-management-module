## id-management-module
#### Author: Chandrakant Thakkar
##### Created on: 14th Oct 2016

---
###### id-management-module is used to generate unique id(key) based on some rule.This rules are provided as a array of rules JSON.

- This unique key may be consist of from static value,dynamic value,contains current date/time or contains user given date/time and format.

- Rule's array for static value
```javascript  
var keyRule = [{
  type: "static",
  value: "UNIQUEKEY"
}];
var generateUniqueId = require('id-management-module');  
var uniqueKey=generateUniqueId.generateID(keyRule);
```

- Here, it will generate  key with value 'UNIQUEKEY' and return same.

- Rule's array for static value and dynamic value
```javascript  
 var keyRule = [{
   type: "static",
   value: "UNIQUEKEY"
 }, {
   type: "dynamic",
   value: "plantCode"
 }];
 var data={
  plantCode:"3001"
 };
var generateUniqueId = require('id-management-module');  
var uniqueKey=generateUniqueId.generateID(keyRule,data);
```
- Here, it will take static value 'UNIQUEKEY' from static rule and take dynamic value '3001' from plantCode passed into data.And it will return key 'UNIQUEKEY3001'.

- Rule's array for static value and dynamic value with current Date/Time
```javascript  
 var keyRule = [{
   type: "static",
   value: "UNIQUEKEY"
 }, {
   type: "dynamic",
   value: "plantCode"
 }, {
   type: "currdatetime",
   format: "%y%m%d"
 }];
 var data={
  plantCode:"3001"
 };
var generateUniqueId = require('id-management-module');  
var uniqueKey=generateUniqueId.generateID(keyRule,data);
```
- Here, it will take static value 'UNIQUEKEY' from static rule and take dynamic value '3001' from plantCode passed into data and current date/time in YYYYMMDD format.And it will return key 'UNIQUEKEY300120161014'.

- Rule's array for static value and dynamic value with user defined Date/Time
```javascript  
 var keyRule = [{
   type: "static",
   value: "UNIQUEKEY"
 }, {
   type: "dynamic",
   value: "plantCode"
 }, {
   type: "userdatetime",
   format: "%y%m%d",
   value:"2016-10-14"
 }];
 var data={
  plantCode:"3001"
 };
var generateUniqueId = require('id-management-module');  
var uniqueKey=generateUniqueId.generateID(keyRule,data);
```
- Here, it will take static value 'UNIQUEKEY' from static rule and take dynamic value '3001' from plantCode passed into data and user defined date/time in YYYYMMDD format.And it will return key 'UNIQUEKEY300120161014'.
