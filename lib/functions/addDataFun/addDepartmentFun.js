const connection = require("../../db/connection.js");
const inquirer = require("inquirer");

const addDepartmentFun = async (showDepartments, selectOption) => {
  const newDep = await inquirer.prompt({
    type: "input",
    name: "addDep",
    message: "What department do you want to add?",
  });

  if (newDep.addDep) {
    const sql = `INSERT INTO department (name)
      VALUES ('${newDep.addDep}')`;

    connection
      .promise()
      .query(sql)
      .then(([rows, fields]) => {
        console.log("Added " + newDep.addDep + " to departments!");
        showDepartments(selectOption);
      })
      .catch((err) => console.log(err));
  }
};

module.exports = addDepartmentFun;
