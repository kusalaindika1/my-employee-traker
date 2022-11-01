const inquirer = require("inquirer");
const connection = require("../../db/connection.js");

const addRoleFun = async (showRolesFun, selectOption) => {
  const roleData = await inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What role do you want to add?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of this role?",
    },
  ]);

  if (roleData) {
    const params = [roleData.role, roleData.salary];
    const depSql = `SELECT name, id FROM department`;

    const [depRows] = await connection.promise().query(depSql);

    const dep = depRows.map(({ name, id }) => ({ name: name, value: id }));

    const depSelect = await inquirer.prompt({
      type: "list",
      name: "dep",
      message: "What department is this role in?",
      choices: dep,
    });

    params.push(depSelect.dep);

    const sql = `INSERT INTO role (title, salary, department_id)
                          VALUES ('${params[0]}', '${params[1]}', '${params[2]}')`;

    connection
      .promise()
      .query(sql)
      .then(([rows, fields]) => {
        console.log("Added" + roleData.role + " to roles!");
        showRolesFun(selectOption);
      });
  }
};

module.exports = addRoleFun;
