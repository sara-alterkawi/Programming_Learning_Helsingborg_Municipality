////////////////NEWS JS////////////////
$(function(){
    //Selcting country
    var country = $("#Country");
    $('#Country').change(function(e){
        e.preventDefault();
        var searchTerm = $('#Country').val();
        getRequest(searchTerm);
    });
    // Get Api from google news
    function getRequest(country){
        var url = 'https://newsapi.org/v2/top-headlines?country='+country 
        var regel = {
            apiKey: '7e6f27bd5db84c04b561f66e3f21046f',
            s: country,
            r: 'json'
        };
    // To get JSON data
        $.getJSON(url, regel, function(response){
            $('#show').html('');
            for (var i in response.articles) {
                createNewsItem(response.articles[i]);
            }
        });
    }
    // CSS Using Javascript 
    var niv = "NewsView";
    var ni = "NewsImg";
    // Creat Items to show the news from google news in the Html page
    function createNewsItem(article) {
        var template =
         `<div class="${niv}">
            <img class="${ni}" src="${article.urlToImage}"/>
            <a href="${article.url}">${article.title}</a>
            <p>${article.description}</p>
            </div>`;

        $('#show').append(template);
    }
});