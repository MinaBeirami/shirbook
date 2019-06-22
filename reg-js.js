var flag=true;
function valid(){

    var check_persian=/^[\u0600-\u06FF]+$/;
    var check_email=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    var check_pass=/^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;

    var f=document.getElementById('firstname').value;
    var l=document.getElementById('lastname').value;
    var u=document.getElementById('username').value;
    var p=document.getElementById('pass').value;
    var r=document.getElementById('Rpass').value;
    var e=document.getElementById('email').value;
    document.getElementById('fname-error').innerHTML="&nbsp;";
    if(f==""){
        document.getElementById('fname-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(!check_persian.test(f)){
        flag=false;
        document.getElementById('fname-error').innerHTML="<span>فارسی وارد نمایید</span>"
    }


    if(l==""){
        document.getElementById('lname-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(!check_persian.test(l)){
        flag=false;
        document.getElementById('lname-error').innerHTML="<span>فارسی وارد نمایید</span>"
    }
    else {
        document.getElementById('lname-error').innerHTML="&nbsp;";
    }


    if(u==""){
        document.getElementById('uname-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(check_persian.test(u)){
        flag=false;
        document.getElementById('uname-error').innerHTML="<span>انگلیسی وارد نمایید</span>"
    }
    else {
        document.getElementById('uname-error').innerHTML="&nbsp;";
    }


    if(p==""){
        document.getElementById('pass-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(check_persian.test(p)){
        flag=false;
        document.getElementById('pass-error').innerHTML="<span>انگلیسی وارد نمایید</span>"
    }
    else if(!check_pass.test(p)){
        document.getElementById('pass-error').innerHTML="<span>ضعیف</span>"
    }
    else {
        document.getElementById('pass-error').innerHTML="&nbsp;";
    }


    if(r==""){
        document.getElementById('rpass-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(r!=p){
        flag=false;
        document.getElementById('rpass-error').innerHTML="<span>رمز ها مطابقتی ندارند</span>"
    }
    else {
        document.getElementById('rpass-error').innerHTML="&nbsp;";
    }


    if(e==""){
        document.getElementById('email-error').innerHTML="<span>  تکمیل نمایید</span>"
        flag=false;
    }
    else if(!check_email.test(e)){
        flag=false;
        document.getElementById('email-error').innerHTML="<span>فرمت ایمیل صحیح نیست</span>"
    }
    else {
        document.getElementById('email-error').innerHTML="&nbsp;";
    }
    return flag;
}

function login() {
    document.getElementById('registerForm').style.opacity=0;
    document.getElementById('logInForm').style.opacity=1;

    document.getElementById('parent').style.height='200px';
    document.getElementById('logInForm').style.height='200px';

}
function reg() {
    document.getElementById('registerForm').style.opacity=1;
    document.getElementById('logInForm').style.opacity=0;
    document.getElementById('parent').style.height='400px';
    document.getElementById('registerForm').style.height='400px';

}