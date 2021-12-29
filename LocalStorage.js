var employeeArray = [];//  initialization function init() to initialize empObj
var selectedIndex = -1;

function init()
{
    document.getElementById("tablerows").innerHTML = ""; // innerHtml returns all text, including html tags, that is contained by an element
    if (localStorage.employeedetails)
    {
        employeeArray = JSON.parse(localStorage.employeedetails); // It parses a JSON string, constructing the javascript value
        for (var i = 0; i < employeeArray.length; i++)
        {
            prepareTableCell(i, employeeArray[i].eid, employeeArray[i].ename, employeeArray[i].eage, employeeArray[i].esalary, employeeArray[i].eaddress);
        }
    }
}		
function add()
{
    var eid = document.getElementById("eid").value;
    var ename = document.getElementById("ename").value;
    var eage = document.getElementById("eage").value;
    var esalary = document.getElementById("esalary").value;
    var eaddress = document.getElementById("eaddress").value;

    var empObj = { eid: eid, ename: ename, eage: eage, esalary: esalary, eaddress: eaddress };
    if (selectedIndex === -1) //(===) It is a strict equality comparision, Strict equality === checks that two values are the same or not. 
    {
        employeeArray.push(empObj);
    }
    else
    {
        employeeArray.splice(selectedIndex, 1, empObj); // (Splice) Add's and/or removes elements from an array
    }
    localStorage.employeedetails = JSON.stringify(employeeArray); // The JSON.stringify() method converts JavaScript Array or Object into string.

    init();
    clear();
    document.getElementById("submit").innerHTML = "Register";
    alert("Successfully Comppleted");
}
function prepareTableCell(index, eid, ename, eage, esalary, eaddress)
{
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var eidCell = row.insertCell(0);
    var enameCell = row.insertCell(1);
    var eageCell = row.insertCell(2);
    var esalaryCell = row.insertCell(3);
    var eaddressCell = row.insertCell(4);
    var actionCell = row.insertCell(5);

    eidCell.innerHTML = eid;
    enameCell.innerHTML = ename;
    eageCell.innerHTML = eage;
    esalaryCell.innerHTML = esalary;
    eaddressCell.innerHTML = eaddress;
    actionCell.innerHTML = '<button onclick="editTableRow(' + index + ')">Edit</button>\t<button onclick="deleteTableRow(' + index + ')">Delete</button>\t<button onclick="view(' + index + ')">View</button>';
}
function deleteTableRow(index)
{
    employeeArray.splice(index, 1);
    localStorage.employeedetails = JSON.stringify(employeeArray); 
    init();
    alert("your Details is Successfully Deleted");
}
function clear()
{
    selectedIndex = -1;
    document.getElementById("eid").value = "";
    document.getElementById("ename").value = "";
    document.getElementById("eage").value = "";
    document.getElementById("esalary").value = "";
    document.getElementById("eaddress").value = "";
}

function editTableRow(index)
{
    selectedIndex = index;
    var empObj = employeeArray[index];
	// document.getElementById("eid").style.display = "none"; // hide by eid
    document.getElementById("eid").value = empObj.eid;
    document.getElementById("ename").value = empObj.ename;
    document.getElementById("eage").value = empObj.eage;
    document.getElementById("esalary").value = empObj.esalary;
    document.getElementById("eaddress").value = empObj.eaddress;
    document.getElementById("submit").innerHTML = "Update";
    alert("Edit Your Details");
}
function view(index)
{
    selectedIndex = index;
    var empObj = employeeArray[index];
    document.getElementById("eid").value = empObj.eid;
    document.getElementById("ename").value = empObj.ename;
    document.getElementById("eage").value = empObj.eage;
    document.getElementById("esalary").value = empObj.esalary;
    document.getElementById("eaddress").value = empObj.eaddress;
    document.getElementById("clear").innerHTML = "Cancel View";
    alert(" View Your Details");
}
