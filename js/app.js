var id = 1001;
var Obj ={
    Name:'',
    Dept:'',
    Level:'',
    Image:''
}
function Finish ()
{
    fullName();
    employeeId();
    department();
    level();
    image();
   var confrem= valdaiton();
   if(confrem==='ok')
   render();
    console.log(Obj);
}
function render(){


  var mainDiv  =document.getElementById('Card');
  var Image = document.createElement('img');
  var Name = document.createElement('h3');
  var department=document.createElement('h3');
  var level = document.createElement('h3');
  var Id =document.createElement('h3');
  Image.classList='imageCard'
  Image.src=Obj.Image;
  Name.innerText=Obj.Name
  department.innerText=Obj.Dept
  level.innerText=Obj.Level
  Id.innerText=id
  mainDiv.appendChild(Image); 
 var newDiv= document.createElement('div');
 newDiv.append(Id);
 newDiv.append(Name);
 newDiv.append(department);
 newDiv.append(level);
 mainDiv.append(newDiv);

}
function valdaiton()
{ 
    var err= false;
    var Error=[];
  Object.keys(Obj).forEach(key=>{
     if(Obj[key]===""){
        Error.push(key);
        err=true; 
     }
  });
  if(err){
    var errMessage='';
    Error.map((d)=>errMessage+=d+',')
    alert(errMessage+' is required')
    return false;  
}
return'ok';
}
function employeeId()
{
    return id++;
}
function fullName() {
   Obj.Name = document.getElementById("name").value;
    return Obj.Name;
    
}
function department() {
    var select = document.getElementById('department');
    Obj.Dept = select.options[select.selectedIndex].value;
}
function level()
{
    var select = document.getElementById('level');
    Obj.Level = select.options[select.selectedIndex].value;
}
function image()
{
    Obj.Image = document.getElementById("image").value;
}