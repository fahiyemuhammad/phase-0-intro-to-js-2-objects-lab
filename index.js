// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddrees:"11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,[key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(employee,key){
const newEmployee = {...employee}
    
       delete newEmployee[key]
       return newEmployee
    
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}


