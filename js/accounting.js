ObjSal =(
    totalAdministration = 0,
    totalMarketing = 0,
    totalDevelopment = 0,
    totalFinance = 0
)
ObjNum =(
    numAdministration = 0,
    numMarketing = 0,
    numDevelopment = 0,
    numFinance = 0
)
var empSalary = 0;
var totalSalary = 0;
function myFunction()
{
    sortDepartment();

}

function getData()
{

    //dataGET = localStorage.getItem("emp");
    //let parseEmployees = JSON.parse(dataGET);
    //return parseEmployees;
    var stored = JSON.parse(localStorage.getItem("emp"));
    console.log(stored);
    return stored;
}
function render(data , number, Total, avg)
{

    let table = document.getElementById("myTable");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = data;
    tr.appendChild(columnName);

    let num = document.createElement('th');
    num.textContent = number;
    tr.appendChild(num);

    let avar = document.createElement('th');
    avar.textContent = avg;
    tr.appendChild(avar);

    let totalSala = document.createElement('th');
    totalSala.textContent = Total;
    tr.appendChild(totalSala);

}
function getTotal(salary)
{
    totalSalary += salary;
    return totalSalary;
}
function getAvg (totalSal, numMarketing)
{
    debugger;
    let avg = parseInt(totalSal / numMarketing);
    return avg;
}
function sortDepartment()
{
    data = getData();
    debugger;
    for(i=0 ; i< data.length ; i++){

        
            if(data[i][1] == "administration")
            {
                numAdministration++;
                salaryAdmin = getSalary(data[i]);
                TotalAdmin = getTotal(salaryAdmin);
                avgAdmin = getAvg(TotalAdmin, numAdministration);
                
            }
            else if (data[i][1] == "marketing")
            {
                numMarketing++;
                salaryMarket = getSalary(data[i]);
                TotalMarket = getTotal(salaryMarket);
                avgMarket = getAvg(TotalMarket, numMarketingMarket);
            }
            else if (data[i][1] == "development")
            {
                numDevelopment++;
                salaryDevelopment = getSalary(data[i]);
                TotalDevelopment = getTotal(salaryDevelopment);
                avgDevelopment = getAvg(TotalDevelopment, numDevelopment);
            } else {
                numFinance++;
                salaryFinance = getSalary(data[i]);
                TotalFinance = getTotal(salaryFinance);
                avgFinance = getAvg(TotalFinance, numFinance  );
            }

    }
    render("Administration", numAdministration, TotalAdmin, avgAdmin);
    render("Marketing", numMarketing, salaryMarket, TotalMarket, avgMarket);
    render("Development", numDevelopment, salaryDevelopment, TotalDevelopment, avgDevelopment);
    render("Finance", numFinance, salaryFinance, TotalFinance, avgFinance);


}
function getSalary(data)
{
    if (data.Level == "Junior")
    {
        max = 1000;
        min = 500;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        return salary;
    }
    else if (data.Level == "Mid-Senior")
    {
        max = 1500;
        min = 1000;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        return salary;
    }

    else {
        max = 2000;
        min = 1500;
        salary = Math.floor(Math.random() * (max- min +1) + min);
        return salary;
    }
}