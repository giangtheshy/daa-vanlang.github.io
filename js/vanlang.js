function myFuntion(){
    if(document.getElementById("id").value==""| document.getElementById("pw").value=="")
    {
        alert('ID & Password incorrect');
        alert('Please Enter ID & Password to Login :D')
        for (let index = 1; index < 100; index++) {
            let count=0;
            count=100-index;
            alert('If you want return Home ,You must click this task : '+count)  
        }
        alert('Don\'t forget enter your account !')
    }
    else
    {
        alert('Đăng Nhập Thành Công !');
    }
}

function click(){
    alert("ko");
}
document.getElementById("btn0").onclick =function(){click()};
document.getElementById("temp").onmouseover = function() {mouse()};
function mouse(){
    document.getElementById("temp").style.color="blue";
}



