const connection = require("../db/connection.js");

const viewBudgetFun = async (selectOption) => {
  const sql = `SELECT department_id AS id, 
                        department.name AS department,
                        SUM(salary) AS budget
                 FROM  role  
                 JOIN department ON role.department_id = department.id GROUP BY  department_id`;

  const [dataRows] = await connection.promise().query(sql);

  if (dataRows) {
    console.table(dataRows);
    selectOption();
  }
};

module.exports = viewBudgetFun;
