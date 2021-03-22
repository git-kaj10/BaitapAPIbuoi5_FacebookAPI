
axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAABv35jsFcxE5Kin7oMUAZB4f7OXVpiB1508R27Fofza6bZAynjluEe99AZCuAET7ZBaf3ABFwcmizlSBalTtZAUmrAfXYEUdOcLg3LZCqrsr7dZCmTidfQWmRCAuPOirfEzaSYpZA7U7pMOuhh2L4ZBMzKA6uHQjZALGtmXicjGHvCsnRLp5YRVQZD')
  .then(response => {
      var output = "";

      for(var i = 0; i < 3; i++){
        output +=  "<tr><th scope='row'>" + (i + 1) + "</th>" +
            "<td>" + response.data.data[i].actions[0].link + "</td>" +
            "<td>" + response.data.data[i].message + "</td></tr>";
        
       }
      document.getElementById('content').innerHTML = output;
  })
  .catch(error => console.error(error));

