$(document).ready(function () {
  var api = "https://sky-frontend.herokuapp.com/movies";

  $.ajax({
    url: api,
    type: "get",
    dataType: "json",
    success: function (data) {
      var pos = data[2].movies;
      updateDOM(pos)

      function updateDOM(data) {
        for (let i = 0; i <= 10; i++) {
          let suspense = data[i].categories;
          if (suspense.match(/Aventura/)) {
            let imageUrl = data[i].images[0].url;
            $('.').append("<div class='carousel-cell'><a href='#'><img src='" + imageUrl + "'/><br/>" + suspense + "</a></div>");

            console.log(imageUrl);
          }
        };
      }
    },
  })

})