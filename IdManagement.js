var d3=require("d3");
var debug = require('debug')('id-management-module:id-management-module');
//CBT:Method for getting ID number from inserted rules
exports.generateID=function(rules,data){
    var idNumber="";
    rules.forEach(function(d,i){
        if((d["type"]).toLowerCase()=="static"){
          idNumber=idNumber+d["value"];
        }else if((d["type"]).toLowerCase()=="dynamic"){
          idNumber=idNumber+data[d["value"]];
        }else if((d["type"]).toLowerCase()=="currdatetime"){
          var currDate=d3.time.format(d["format"])(new Date());
          idNumber=idNumber+currDate;
        }else if((d["type"]).toLowerCase()=="userdatetime"){
          var currDate=d3.time.format(d["format"])(d["value"]);
          idNumber=idNumber+currDate;
        }

    });
    return idNumber;
}
