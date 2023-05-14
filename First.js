 
function AddToObg() {
    let obg1 = {};
    let getu = localStorage.getItem("users");
    getu = JSON.parse(getu)
    console.log(getu);
    if(getu){
        obg1 = getu
    }
    else{
        obg1 = {}
    }
    
    let user = document.getElementById("fname").value;
    let pass = document.getElementById("num").value;
    let newUser = {
        password : pass,
        name : user,
        wins:0
    }
    obg1[user] = newUser;
    console.log(obg1);

    localStorage.setItem("users",JSON.stringify(obg1));
    localStorage.setItem("currentUser", JSON.stringify(obg1[user]))
    alert("חשבונך נוצר - אשר כדי להמשיך !");
    location.href = "./index.html"

}


