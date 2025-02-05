//Q4) Given an array of emp, perform the following: Calculate the total salary of all emp. Get the names of all emp in the "IT" dept. Find the empl with the highest salary. const emp = [ { name: "Alice", dept: "IT", salary: 60000 }, { name: "Bob", dept: "HR", salary: 50000 }, { name: "Charlie", dept: "IT", salary: 75000 }, { name: "David", dept: "Finance", salary: 80000 } ];

const emp = [
    { name: "Alice", dept: "IT", salary: 60000 },
    { name: "Bob", dept: "HR", salary: 50000 },
    { name: "Charlie", dept: "IT", salary: 75000 },
    { name: "David", dept: "Finance", salary: 80000 }
  ];
  
 
  const salary_total = emp.reduce((acc, empl) => acc + empl.salary, 0);
  
  
  const itemp = emp.filter(empl => empl.dept === "IT").map(empl => empl.name);
  
  
  const highestPaidempl = emp.reduce((max, empl) => (empl.salary > max.salary ? empl : max), emp[0]);
  

  console.log("Total Salary of all emp:", salary_total);
  console.log("emp in IT dept:", itemp);
  console.log("empl with the highest salary:", highestPaidempl.name, "with a salary of", highestPaidempl.salary);
  