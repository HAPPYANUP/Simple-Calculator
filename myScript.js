
function values(val){
document.getElementById("Screen").innerHTML=val;
}
function myvalues(val)
{
document.getElementById("Screen").innerHTML+=val
}
function result()
{
    let x=document.getElementById("Screen").innerHTML;
    let y=eval(x);
    document.getElementById("Screen").innerHTML=y;
}
