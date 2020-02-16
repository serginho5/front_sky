$(document).ready(function () {
  var api = "https://sky-frontend.herokuapp.com/movies";

  $.ajax({
    url: api,
    type: "get",
    dataType: "json",
    success: function (data) {
      var pos = data[2].movies;
      /*function getImagem(pos) {
        var imagem = [pos.images[1]].join(" ");
        console.log(imagem);
        return imagem;
      }
      function addImagem() {
        document.getElementById("banner").innerHTML = pos.map(getImagem);
      }
      addImagem('');
      */
      console.log(pos);
    },
    error: function (error) {
      console.log(error);
    }

  })

})