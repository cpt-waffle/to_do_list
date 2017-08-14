$( document ).ready(function() {
  console.log("Ready");

  //Gets the parameter and uses the Google Search API
  $("#search_button").on('click', function(req) {
    console.log($("#search_bar").val());
    $.ajax({
      url: `https://www.googleapis.com/customsearch/v1?q=${$("#search_bar").val()}&cx=001894765995837114362%3Akvwwenzmdci&siteSearchFilter=i&key=AIzaSyAyNVxBsoDzyaxEz_MxwWdlrCibyvJQeqE&gl=ca`,
      success: (res) => {

        let array = [];
        let types = ['Movie/Tv Show', 'Restaraunt', 'Product/Book', 'Other'];
        console.log(res);
        for (let item of res.items) {
          let element = `<p class="title">${item.title}</p>`;
          if (item.displayLink === 'www.imdb.com')
            element = element + `<p>${types[0]}</p>`;
          else if (item.displayLink === 'www.yelp.ca')
            element = element + `<p>${types[1]}</p>`;
          else if (item.displayLink === 'www.amazon.ca')
            element = element + `<p>${types[2]}</p>`;
          else
            element = element + `<p>${types[3]}</p>`;


          array.push(element);
        }
        console.log(array);
        $(".results").text('');
        $(".results").append(array);
        $(".results").slideDown('slow');
      }
    });
  });


});

