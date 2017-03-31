/* globals $ */

/*
 Create a function that takes a selector and:
 * Finds all elements with class `button` or `content` within the provided element
 * Change the content of all `.button` elements with "hide"
 * When a `.button` is clicked:
 * Find the topmost `.content` element, that is before another `.button` and:
 * If the `.content` is visible:
 * Hide the `.content`
 * Change the content of the `.button` to "show"
 * If the `.content` is hidden:
 * Show the `.content`
 * Change the content of the `.button` to "hide"
 * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
 * Throws if:
 * The provided ID is not a **jQuery object** or a `string`

 */

function hideShow(selector) {
    if (typeof selector !== 'string' || !($(selector).length)) {
        throw 'Error';
    }

    var $button = $('.button');
    var $content = $('.content');

    $($button).each(function () {
        $(this).text('hide');
    });

    $button.on('click', function (ev) {
        var $target = $(ev.target);
        var $next = $target.next();

        if (!($target.hasClass('button'))) {
            return;
        }

        while ($next) {
            if ($next.hasClass('content')) {
                break;
            }
            $next = $next.next();
        }

        if ($next.css('display') === 'none') {
            $next.css('display', '');
            $target.text('hide');
        }
        else {
            $next.hide();
            $target.text('show');
        }
    });
}


hideShow('#root');