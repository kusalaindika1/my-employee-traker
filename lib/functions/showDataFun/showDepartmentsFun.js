const connection = require("../../db/connection.js");

const showDepartmentsFun = async (selectOption) => {
  const sql = `SELECT department.id, department.name FROM department`;

  const [departmentRows] = await connection.promise().query(sql);

  if (departmentRows) {
    console.table(departmentRows);
    selectOption();
  }
};

module.exports = showDepartmentsFun;
