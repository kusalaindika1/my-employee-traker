const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = require("./lib/db/connection.js");

const {
  showDepartmentsFun,
  showEmployeesFun,
  showRolesFun,
} = require("./lib/functions/showDataFun");

const {
  addDepartmentFun,
  addRoleFun,
  addEmployeeFun,
} = require("./lib/functions/addDataFun");

const {
  updateEmployeeFun,
  updateManagerFun,
} = require("./lib/functions/updateDataFun");

const { empDepFun, viewBudgetFun } = require("./lib/oppDataFun");

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startView();
  selectOption();
});

const startView = () => {
  console.log("EEEEEEEE EEEE      EEEE EEEEEEE  EEEEEEEE   EEEEEEE");
  console.log("EE       EE EE    EE EE EE    EE EE     EE  EE    EE");
  console.log("EE       EE  EE  EE  EE EE    EE EE      EE EE    EE");
  console.log("EEEEEEEE EE   EEEE   EE EEEEEEEE EE      EE EEEEEEEE");
  console.log("EE       EE          EE EE       EE      EE EE    EE");
  console.log("EE       EE          EE EE       EE     EE  EE    EE");
  console.log("EEEEEEEE EE          EE EE       EEEEEEEE   EEEEEEE");
};

const options = [
  "View all departments",
  "View all roles",
  "View all employees",
  "Add a department",
  "Add a role",
  "Add an employee",
  "Update an employee role",
  "Update an employee manager",
  "View employees by department",
  "View department budgets",
  "No Action",
];

const selectOption = async () => {
  const option = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: options,
  });

  if (option.option === "View all departments") {
    showDepartmentsFun(selectOption);
  } else if (option.option === "View all roles") {
    showRolesFun(selectOption);
  } else if (option.option === "View all employees") {
    showEmployeesFun(selectOption);
  } else if (option.option === "Add a department") {
    addDepartmentFun(showDepartmentsFun, selectOption);
  } else if (option.option === "Add a role") {
    addRoleFun(showRolesFun, selectOption);
  } else if (option.option === "Add an employee") {
    addEmployeeFun(showEmployeesFun, selectOption);
  } else if (option.option === "Update an employee role") {
    updateEmployeeFun(showEmployeesFun, selectOption);
  } else if (option.option === "Update an employee manager") {
    updateManagerFun(showEmployeesFun, selectOption);
  } else if (option.option === "View employees by department") {
    empDepFun(selectOption);
  } else if (option.option === "View department budgets") {
    viewBudgetFun(selectOption);
  } else if (option.option === "No Action") {
    connection.end();
  } else {
    connection.end();
  }
};
