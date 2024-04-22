let container = document.getElementById("container");
//console.log(container);
async function fetchUserData() {
  let res = await fetch("https://reqres.in/api/users?page=2");
  let finalRes = await res.json();
  //  console.log(finalRes.data);

  showUserData(finalRes.data);
}
function showUserData(arr) {
  // console.log(arr);
  arr.forEach(function (ele) {
    //console.log(ele);
    let div = document.createElement("div");
    div.className = "user-details";
    let para = document.createElement("p");
    para.innerHTML = ele.email;
    let img = document.createElement("img");
    img.src = ele.avatar;
    let userName = document.createElement("p");
    userName.innerHTML = ele.first_name + " " + ele.last_name;
    div.append(img, userName, para);
    container.append(div);
  });
}
