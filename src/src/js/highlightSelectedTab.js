// this code is neccessary because #include files does not auto twitter bootstrap's highlight selected tab
;(function () {
    'use strict';

    $(function () {
        var $selected =  $('[data-highlightselectedtabbyid]'),
            selectedId = $selected.data('highlightselectedtabbyid'),
            $element = $('#' + selectedId);

            $element.siblings().removeClass('active');
            $element.addClass('active');
    });
})();
