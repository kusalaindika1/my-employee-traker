-- DEPARTMENT SEEDS -----
INSERT INTO department (name)
VALUE ("sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- EMPLOYEE ROLE SEEDS -------
INSERT INTO role (title, salary, department_id)
VALUE (" Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE (" Team Lead1", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales officer", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Tec Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("company Lawyer", 190000, 4);

-- EMPLOYEE SEEDS -------
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("lian", "wain", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Thara", "meghan", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Miaann","linee",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("kumara", "Laosam", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Chrissam", "white", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jason", "iran", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tom", "Nice", 2, 7);
