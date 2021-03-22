
axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAABv35jsFcxE5Kin7oMUAZB4f7OXVpiB1508R27Fofza6bZAynjluEe99AZCuAET7ZBaf3ABFwcmizlSBalTtZAUmrAfXYEUdOcLg3LZCqrsr7dZCmTidfQWmRCAuPOirfEzaSYpZA7U7pMOuhh2L4ZBMzKA6uHQjZALGtmXicjGHvCsnRLp5YRVQZD')
  .then(response => {
      var output = "";

       for(var i = 0; i < 3; i++){
          output += "<span class='title'>Bài viết "+ (i+1) + "</span></br> <span class='link'>Link:</span> " +
          response.data.data[i].actions[0].link + "</br> <span class ='content'>Nội dung:</span> " +
          response.data.data[i].message + "<br/>";
       }
      document.getElementById('output').innerHTML = output;
  })
  .catch(error => console.error(error));

