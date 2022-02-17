var emp = [ ] ;
function Employees(Employee_ID , Full_Name , Department , Level, Image ,Salary )
{
    this.Employee_ID= Employee_ID;
    this.Full_Name=Full_Name;
    this.Department= Department;
    this.Level= Level;
    this.Image=Image;
    this.Salary=0;
    emp.push(this);
}
    
function myFun() {
    let Ghazi_Samer = new Employees (1000 ,"Ghazi Samer" , "Administration ", "Senior" ,"URL");
    let Lana_Ali = new Employees (1001 ,"Lana Ali" , "Finance ", "Senior" ,"URL");
    let Tamara_Ayoub = new Employees (1002 ,"Tamara Ayoub" , "Marketing ", "Senior" ,"URL");
    let Safi_Walid = new Employees (1002 ,"Safi Walid" , "Administration ", "Mid-Senior" ,"URL");
    let Omar_Zaid = new Employees (1004 ,"Omar Zaid" , "Development ", "Senior" ,"URL");
    let Rana_Saleh = new Employees (1005 ,"Rana Saleh" , "Development ", "Junior" ,"URL");
    let Hadi_Ahmad = new Employees (1006 ,"Hadi Ahmad" , "Finance ", "Mid-Senior" ,"URL");
    emp.forEach(Employees => {
        Employees.Salary =  getSalary(Employees);
    });

    emp.forEach(Employees => {
        document.write(`<h2 style ="margin-bottom : 0px ; color: rgb(62, 6, 114) ; "> Employee Name :${Employees.Full_Name} --- Employee salary : ${Employees.Salary}</h2>`);
    });
}
function getSalary(Employees)
{
    debugger;
    let max, min, salary, totalSalary;
    if (Employees.Level == "Junior")
    {
        max = 1000;
        min = 500;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        totalSalary = salary * 0.75;
        return totalSalary;
    }
    else if (Employees.Level == "Mid-Senior")
    {
        max = 1500;
        min = 1000;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        totalSalary = salary * 0.75;
        return totalSalary;
    }

    else {
        max = 2000;
        min = 1500;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        totalSalary = salary * 0.75;
        return totalSalary;
    }
}