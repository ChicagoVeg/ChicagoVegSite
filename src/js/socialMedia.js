;(function ($) {
    'use strict';

    $(function () {
        $('.v-data-socialmedia-link').on('click', function () {
            var $this = $(this),
                url = $this.data('url'),
                top = $this.data('top'),
                left = $this.data('left'),
                width = $this.data('width'),
                height = $this.data('height');

                window.open(url + 'http://www.chicagoveg.com',
                '_blank',
            'toolbar=no,' +
            'scrollbars=yes,' +
            'resizable=yes,' +
            'top=' + top + ',' +
            'left=' + left + ',' +
            'width=' + width + ',' +
            'height=' + height);

        });

    });
})(window.jQuery);
