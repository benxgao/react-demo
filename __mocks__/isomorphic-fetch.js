const stub = {
  'iFetchKey': 'iFetchVal'
};

const response = {
  json: () => new Promise(resolve => resolve(stub)),
  status: 200,
};

module.exports = (url) => new Promise((resolve, reject) => {
  if (url === 'success') {
    return resolve(response);
  }
  return reject('failed to fetch data');
});
