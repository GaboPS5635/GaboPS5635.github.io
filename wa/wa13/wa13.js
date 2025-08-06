// First problem
let employees = [
    {firstName: 'Sam', department: 'Tech', position: 'Manager', salary: 40000, raiseEligible: true},
    {firstName: 'Mary', department: 'Finance', position: 'Trainee', salary: 18500, raiseEligible: true},
    {firstName: 'Bill', department: 'HR', position: 'Executive', salary: 21200, raiseEligible: false}
];
console.log("Problem 1:", employees);

// Second problem
let company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site', 
    employees: employees
};
console.log('Problem 2:', company);

// Third problem
let newEmployee = {firstName:'Anna', department: 'Tech', position: 'Executive', salary: 25600, raiseEligible: false};
company.employees.push(newEmployee);
console.log("Problem 3:", company);

// Fourth problem
let totalSalary = company.employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Problem 4:", totalSalary);

// Fifth problem
function applyRaises(company) {
  company.employees.forEach(emp => {
    if (emp.raiseEligible) {
      emp.salary *= 1.10; // 10% raise
      emp.raiseEligible = false;
    }
  });
}
applyRaises(company);
console.log("Problem 5: After Raises", company);

// Sixth problem
let wfhEmployees = ["Anna", "Sam"];
company.employees.forEach(emp => {
  emp.wfh = wfhEmployees.includes(emp.firstName);
});
console.log("Problem 6: Work From Home Status", company);
