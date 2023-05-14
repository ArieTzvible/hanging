
function AddToObg() {

    let obg1 = {};
    let user = document.getElementById("fname").value;
    let pass = document.getElementById("num").value;
    obg1[user] = pass;
    console.log(obg1);
    localStorage.setItem("users", JSON.stringify(obg1));
    localStorage.setItem("currentUser", JSON.stringify(user))
    alert("חשבונך נוצר - אשר כדי להמשיך !");

}



function enterGame() {
    console.log("fuc");
    let answer = document.getElementById("username").value;
    let answer1 = document.getElementById("password").value;
    let obg1 = JSON.parse(localStorage.getItem("users"))


    if (answer != "" || answer1 != "") {



        if (obg1[answer] && obg1[answer].password === answer1) {

            localStorage.setItem("users", JSON.stringify(obg1));
            window.location.replace("allGames.html");

        }

        else {
            alert("שם המשתמש או הסיסמה שהזנת שגוי ")
            console.log("else");
        }

    }
}
function enterSignIn() {
    window.location.replace("First.html");
}
