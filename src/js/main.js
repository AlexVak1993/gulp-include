function delayPromise(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time)
  })
}

function userReg() {
  return new Promise(function(resolve, reject) {
    delayPromise(500).then(() => {
      if (Math.random() > 0.2) {
        resolve({
          msg: `User registration success`,
          id: 1,
        })
      } else {
        reject({msg: `user registration error`})
      }
    })
  })
}

function userAuth(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() > 0.2) {
        resolve({
          msg: `Auth user #${id}`,
          token: `asdkjcjh111`
        })
      } else {
        reject({msg: `authentificaion error`})
      }
    }, 500)
  })
}

function userData(token) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() > 0.2) {
        resolve({
          msg: `Get token data: ${token}`,
          data: {
            id: 1,
            name: `Some`
          }
        })
      } else {
        reject({msg: `get user data failed`})
      }
    }, 500)
  })
}

userReg().then((regRes) => {
  console.log(regRes);
  return userAuth(regRes.id)
}).then((userAuth) => {
  console.log(userAuth);
  return userData(userAuth.token)
}).then((userData) => {
  console.log(userData);
}).catch((err) => console.log(err));