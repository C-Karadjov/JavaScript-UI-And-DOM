/* globals $ */

/*

 Create a function that takes an id or DOM element and an array of contents

 * if an id is provided, select the element
 * Add divs to the element
 * Each div's content must be one of the items from the contents array
 * The function must remove all previous content from the DOM element provided
 * Throws if:
 * The provided first parameter is neither string or existing DOM element
 * The provided id does not select anything (there is no element that has such an id)
 * Any of the function params is missing
 * Any of the function params is not as described
 * Any of the contents is neight `string` or `number`
 * In that case, the content of the element **must not be** changed
 */


function getElement(element, contents) {
    if (typeof (element) === 'string') {
        element = document.getElementById(element);
        if (!element) {
            throw 'Error';
        }
    }
    else if (!(element instanceof HTMLElement)) {
        throw 'Error';
    }
    if (!contents || contents.some(function (x) {
            return typeof x !== 'string' && typeof x !== 'number'
        })) {
        throw 'Error';
    }


    var fragment = document.createDocumentFragment(),
        content = contents.length,
        div = document.createElement('div');

    element.innerHTML = '';
    for (var i = 0; i < content; i += 1) {
        var newDiv = div.cloneNode(true);
        if (typeof content !== 'string' && typeof content !== 'number') {
            throw 'Error';
        }
        newDiv.innerHTML = contents[i];
        fragment.appendChild(newDiv);
    }
    element.appendChild(fragment);
};


getElement('gosho', ['gosho', 'ceco', 2, 'first', '10']);
