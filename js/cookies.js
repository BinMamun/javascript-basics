// function setCookie(cname, cvalue, exdays) {
//   let date = new Date();
//   date.setDate(date.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${cname}=${cvalue};${expires};path=/`;
// }

// function deleteCookie(name) {
//   document.cookie = `${name}= ''; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"`;
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split("; ");
//   let result = "";
//   ca.forEach((element) => {
//     if (element.indexOf(name) === 0) {
//       result = element.substring(name.length);
//     }
//   });
//   return result;
// }

// const userName = document.querySelector("#userName");
// const email = document.querySelector("#email");
// const submitBtn = document.querySelector("#submitBtn");
// const getCookieBtn = document.querySelector("#getCookieBtn");


// submitBtn.addEventListener("click", function(){
//     setCookie("userName", userName.value, 1);
//     setCookie("email", email.value, 1);
// });

// getCookieBtn.addEventListener("click",function(){
//     userName.value = getCookie("userName");
//     email.value = getCookie("email");
// })

// //deleteCookie("userName=''");

// document.cookie = `expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"`;
// console.log(document.cookie);