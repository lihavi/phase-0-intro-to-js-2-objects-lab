// Write your solution in this file!
let employee ={};
function updateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;

}


function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

