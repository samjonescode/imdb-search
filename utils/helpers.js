var axios = require('axios');
var helpers = {
// Append: function(){
//   $('#search').on('click', ()=>{
//     console.log('clicked')
//     GetMovie();
//     });
// },

  GetMovie: function(name){
    axios.get('http://www.omdbapi.com/?apikey=2393c630',{
      params:  {
        t: name
    }
  }).then((data)=>{
          console.log(data.data);
          res.render('movie_input', data.data)


    });
  }
};

module.exports = helpers;
