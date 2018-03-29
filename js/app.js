$(document).ready(function(){
    $('#btn').click(function(){
       processLink();
    });
  });

function processLink () {
  var linkText = document.getElementById('link').value;
  var id = linkText.substr(-11, 11);
  console.log(linkText);
  console.log(id);
  var link_res = 'http://api.youtube6download.top/api/?id=' + id;
  console.log(link_res);
  var htmlString = ""
  $.ajax({
    url: link_res,
    crossOrigin: true,
    success: function(result){
        console.log(result);
        var downloadLink = result.data.link;
        console.log(downloadLink);
        var finalLink = downloadLink.substr(9, 49);
        var placeholder = document.getElementById('imported-content');
        placeholder.innerHTML = '<a' + ' href="' + finalLink + '"' + ' class="button button-primary"' + '>' + 'download mp3' + '</a>';
        console.log('<a' + ' href="' + finalLink + '"' + ' class="u-full-width button button-primary"' + '>' + 'download mp3' + '</a>');
    }
  })
}
// https://youtube7.download/mini.php?id=wnJ6LuUFpMo
