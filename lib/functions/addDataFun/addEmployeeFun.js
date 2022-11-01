const inquirer = require("inquirer");
const connection = require("../../db/connection.js");

const addEmployeeFun = async (showEmployeesFun, selectOption) => {
  const empData = await inquirer.prompt([
    {
      type: "input",
      name: "fistName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
  ]);

  const params = [empData.fistName, empData.lastName];
  const roleSql = `SELECT role.id, role.title FROM role`;

  const [roleRows, rolefields] = await connection.promise().query(roleSql);

  const roles = roleRows.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const roleData = await inquirer.prompt({
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: roles,
  });

  params.push(roleData.role);

  const managerSql = `SELECT * FROM employee`;

  const [managersRows, managerfields] = await connection
    .promise()
    .query(managerSql);

  const managers = managersRows.map(({ id, first_name, last_name }) => ({
    name: first_name + " " + last_name,
    value: id,
  }));

  const manData = await inquirer.prompt({
    type: "list",
    name: "manager",
    message: "Who is the employee's manager?",
    choices: managers,
  });

  params.push(manData.manager);

  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ('${params[0]}', '${params[1]}', ${params[2]}, ${params[3]})`;

  connection
    .promise()
    .query(sql)
    .then(([rows, fields]) => {
      console.log("Employee has been added!");

      showEmployeesFun(selectOption);
    })
    .catch((err) => console.log(err));
};

module.exports = addEmployeeFun;
