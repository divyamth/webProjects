const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-MuW3Qz8BC8Ltw1Cf2ZV1GMgn'
    }
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin%2Ccardano&vs_currencies=inr&include_24hr_change=true', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));