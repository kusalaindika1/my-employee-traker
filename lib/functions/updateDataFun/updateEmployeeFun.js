const connection = require("../../db/connection.js");
const inquirer = require("inquirer");

const updateEmployeeFun = async (showEmployeesFun, selectOption) => {
  const employeeSql = `SELECT * FROM employee`;

  const [empData] = await connection.promise().query(employeeSql);

  const employees = empData.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const selectEmp = await inquirer.prompt({
    type: "list",
    name: "emp",
    message: "Which employee would you like to update?",
    choices: employees,
  });

  const params = [];
  params.push(selectEmp.emp);

  const roleSql = `SELECT * FROM role`;

  const [roleData] = await connection.promise().query(roleSql);

  const roles = roleData.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const roleSelect = await inquirer.prompt({
    type: "list",
    name: "role",
    message: "What is the employee's new role?",
    choices: roles,
  });

  params.push(roleSelect.role);

  const sql = `UPDATE employee SET role_id = ${params[1]} WHERE id = ${params[0]}`;

  connection
    .promise()
    .query(sql)
    .then(([rows, fields]) => {
      console.log("Employee has been updated!");
      showEmployeesFun(selectOption);
    });
};

module.exports = updateEmployeeFun;
