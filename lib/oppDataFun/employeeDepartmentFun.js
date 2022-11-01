const connection = require("../db/connection.js");

const empDepFun = async (selectOption) => {
  const sql = `SELECT employee.first_name, 
                        employee.last_name, 
                        department.name AS department
                 FROM employee 
                 LEFT JOIN role ON employee.role_id = role.id 
                 LEFT JOIN department ON role.department_id = department.id`;

  const [dataRows] = await connection.promise().query(sql);

  if (dataRows) {
    console.table(dataRows);
    selectOption();
  }
};

module.exports = empDepFun;
