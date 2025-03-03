// how to write promise

function sendReq() {
  const promiseObj = new Promise((resolve, reject) => {
    // heavy operation --> 2 sec

    setTimeout(() => {
      resolve({ msg: "Nothing went wrong!" });
    }, 2000);
  });

  return promiseObj;
}

// const promiseObj = new Prommise((resolve, reject)=>{})

// how to consume / use promise

const p1 = sendReq();

p1.then((data) => console.log(data)).catch((err) => console.log(err));
