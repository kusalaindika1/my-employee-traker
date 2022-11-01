const connection = require("../../db/connection.js");

const showEmployeesFun = async (selectOption) => {
  const sql = `SELECT employee.id, 
                        employee.first_name, 
                        employee.last_name, 
                        role.title, 
                        department.name AS department,
                        role.salary, 
                        CONCAT (manager.first_name, " ", manager.last_name) AS manager
                 FROM employee
                        LEFT JOIN role ON employee.role_id = role.id
                        LEFT JOIN department ON role.department_id = department.id
                        LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  const [employeeDataRows] = await connection.promise().query(sql);

  if (employeeDataRows) {
    console.table(employeeDataRows);
    selectOption();
  }
};

module.exports = showEmployeesFun;
