const apiResponse = {
  Aaa: true,
  Bbb: true,
  Ccc: true,
};

function featureDataCall() {
  return new Promise((resolve, reject) => {
    if (apiResponse) {
      setTimeout(() => {
        resolve(apiResponse);
      }, 2000);
    } else {
      reject();
    }
  });
}

export default featureDataCall;
