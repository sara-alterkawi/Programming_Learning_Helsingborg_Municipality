////////////////Holiday JS////////////////
//API's from website https://www.calendarindex.com/api/v1/holidays

$(function () {
    //Selcting country
    var country = $("#Country");
    $('#Country').change(function (e) {
        e.preventDefault();
        var searchTerm = $('#Country').val();
        displayHoliday(searchTerm);
    });

    function displayHoliday() {
        //Store country from html selection
        var country = $("#Country").val(),
        //Store my API key
        myApiKey= "47c92ba8b3cc4713c45fd6756c3c47a4bc8f588e",
        holi_url = "https://www.calendarindex.com/api/v1/holidays?country=" + country + "&year=2018&api_key="+myApiKey,
        records;
        //Ask to get response from API url
        $.get(holi_url, function (data) {
            //Store the data
            records = data;
            var r_r_h = (records.response.holidays);
            //Condition when country have no holidays
            if (r_r_h.length == 0) {
                $("#holiday").html(`<h3>Sorry no information to show for this country just now<hr></h3>`);
            }
            else {
                $("#holiday").html(
                    `<div class="holiday">
                    <h5>The ${country} holidays = ${r_r_h.length} days</h5> 
                    <div class="row">
                    <div class="col-3"><h3>Name</h3></div>
                    <div class="col-3"><h3>Date</h3></div>
                    <div class="col-3"><h3>Day</h3></div>
                    <div class="col-3"><h3>Type</h3></div>
                    </div>
                    </div>
                    `);
                //Display each holiday in separate row
                $.each(r_r_h, function (i, v) {
                    //Calculate the date 
                    var year = (v.date).slice(0, 4),
                    month = ((v.date).slice(5, 7)) - 1,
                    day = (v.date).slice(8, 10);
                    //Store the date
                    var dateCalculate = new Date(year, month, day, 0);
                    //Find the particular date
                    var dayCount = dateCalculate.getDay();
                    //Fitshing the day value to print begining from Sunday
                    switch (dayCount) {
                        case 0:
                            var dayDisplay = "Sunday";
                            break;
                        case 1:
                            var dayDisplay = "Monday";
                            break;
                        case 2:
                            var dayDisplay = "Tuesday";
                            break;
                        case 3:
                            var dayDisplay = "Wednesday";
                            break;
                        case 4:
                            var dayDisplay = "Thursday";
                            break;
                        case 5:
                            var dayDisplay = "Friday";
                            break;
                        case 6:
                            var dayDisplay = "Saturday";
                            break;
                    }
                    $("#holiday").append(
                        `<div class="holiday">
                        <div class="row">
                        <div class="col-3">${v.name}</div>
                        <div class="col-3">${(v.date).slice(0, 10)}</div>
                        <div class="col-3">${dayDisplay}</div>
                        <div class="col-3">${v.type}</div>
                        </div>
                        </div>`);
                });
                $("#holiday").append(`</div>`);
            }
        });
    };
});

////////////////NEWS JS////////////////
$(function () {
    //Selcting country
    var country = $("#Country");
    $('#Country').change(function (e) {
        e.preventDefault();
        var searchTerm = $('#Country').val();
        getRequest(searchTerm);
    });
    // Get Api from google news
    function getRequest(country) {
        var news_url = 'https://newsapi.org/v2/top-headlines?country=' + country
        var regel = {
            apiKey: '7e6f27bd5db84c04b561f66e3f21046f',
            s: country,
            r: 'json'
        };
        // To get JSON data
        $.getJSON(news_url, regel, function (response) {
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
            <a href="${article.news_url}">${article.title}</a>
            <p>${article.description}</p>
            </div>`;

        $('#show').append(template);
    }
});