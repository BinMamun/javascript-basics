const get = document.getElementById("get");
const send = document.getElementById("send");
const showData = document.getElementById("showData");

get.addEventListener("click", getData);
send.addEventListener("click", sendData);

function Request(method, url, data) {
  const promise = new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if(this.status >= 400){
        rej(`${this.status}: Application Error occured`);
      }else{
        res(this.response);
      }
    };

    xhr.onerror = function(){
        rej("Error: Fatel error occured");
    }
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.send(data);
  });

  return promise;
}

function getData() {
  Request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
    (resData) => {
      console.log(resData.title);
      showData.innerHTML = resData.title;
    }
  )
  .catch( error => {
    console.log(error);
  });
}

function sendData() {
  Request(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      id: 101,
      title: "foo",
      body: "bar",
      userId: 1,
    })
  ).then((res) => {
    console.log(res);
  });
}
