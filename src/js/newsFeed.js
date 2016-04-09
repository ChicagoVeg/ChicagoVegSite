(function ($) {
        $(function () {
            $.ajax({
                url: 'http://www.chicagoveg.org/rss/g/new',
                dataType: 'xml',
                success: function () {
                    alert('success');
                },
                error: function () {
                    alert('error');
                },
                complete: function () {

                }
            });

            /*
            $.get('http://www.chicagoveg.org/rss/g/new', function (data) {
    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        console.log("title      : " + el.find("title").text());
        console.log("author     : " + el.find("author").text());
        console.log("description: " + el.find("description").text());
    });
});
*/
        });
})(window.jQuery);
