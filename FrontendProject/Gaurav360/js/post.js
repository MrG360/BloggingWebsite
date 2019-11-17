var likes =0;
function like() {
    if(likes===0)
    {
      document.getElementById("like").innerHTML ='<i class="fa fa-thumbs-up"></i>&nbsp;Liked!';    
        likes++;
        document.getElementById("liketxt").innerHTML = likes+' person liked this!';
    }
    else 
    {
            likes++;
        document.getElementById("liketxt").innerHTML = likes +' people have liked this!';
    }
}
function comments(comment){
    var par = document.createElement("div");
    var lis = document.createTextNode(comment.value);
    par.appendChild(lis);
    var vs = document.getElementById("listcomments");
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
}
var c=0;
function func()
{
  c=c+1;
   if((c%2)!=0)
   {
     document.getElementById('blogBody').contentEditable = true;
     document.getElementById('btn').innerHTML='Save <i class="fa fa-save"></i>';
   }
   else if((c%2)==0)
   {
     document.getElementById('blogBody').contentEditable = false;
     document.getElementById('btn').innerHTML='Edit <i class="fa fa-edit"></i>';
   }
}