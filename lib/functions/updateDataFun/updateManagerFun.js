const connection = require("../../db/connection.js");
const inquirer = require("inquirer");

const updateManagerFun = async (showEmployeesFun, selectOption) => {
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

  const selectManager = await inquirer.prompt([
    {
      type: "list",
      name: "manager",
      message: "Who is the employee's manager?",
      choices: employees,
    },
  ]);

  params.push(selectManager.manager);

  const sql = `UPDATE employee SET manager_id = ${params[1]} WHERE id = ${params[0]}`;

  connection
    .promise()
    .query(sql)
    .then(([rows, fields]) => {
      console.log("Employee has been updated!");
      showEmployeesFun(selectOption);
    });
};

module.exports = updateManagerFun;
