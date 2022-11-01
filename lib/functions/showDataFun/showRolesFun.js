const connection = require("../../db/connection.js");

const showRolesFun = async (selectOption) => {
  const sql = `SELECT role.id, role.title, role.salary, department.name AS department
                 FROM role
                 INNER JOIN department ON role.department_id = department.id`;

  const [roleDataRows] = await connection.promise().query(sql);

  if (roleDataRows) {
    console.table(roleDataRows);
    selectOption();
  }
};

module.exports = showRolesFun;
