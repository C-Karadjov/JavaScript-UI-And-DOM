function solve() {
    return function (selector, tabs) {
        var element = document.querySelector(selector);
        var fragment = document.createDocumentFragment();

        var tabsNav = document.createElement('ul');
            tabsNav.className = 'tabs-nav';

        var tabsContent = document.createElement('ul');
            tabsContent.className = 'tabs-content';


        for(var i =0; i < tabs.length; i+=1) {
            var tabClass = 'tab-content';
            if(!i) {
                tabClass +=' visible';
            }

            tabsNav.innerHTML += '<li> <a href="#" class="tab-link" tab-index="'+ i + '">' + tabs[i].title + '</a> </li>';
            tabsContent.innerHTML += '<li class="' + tabClass + '"><p>' + tabs[i].content + '</p> <button class="btn-edit">Edit</button> </li>';
        }

        fragment.appendChild(tabsNav);
        fragment.appendChild(tabsContent);


        var tabs = [].slice.call(tabsContent.getElementsByClassName('tab-content'));

        tabsNav.addEventListener('click', function (ev) {
           var target =+ ev.target.getAttribute('tab-index');

           for (var i =0; i<tabs.length; i+=1) {
               if(target === i) {
                   tabs[i].className = 'tab-content visible';
               } else {
                   tabs[i].className = 'tab-content';
               }
           }
        });

        tabsContent.addEventListener('click', function (event) {

            if (event.target.tagName !== 'BUTTON') {
                return;
            }

            var target = event.target,
                parent = target.parentElement,
                content = parent.firstChild.innerHTML;

            if (target.innerHTML === 'Edit') {

                target.innerHTML = 'Save';

                var editArea = document.createElement('textarea');
                editArea.className += ' edit-content';
                editArea.value = content;
                parent.appendChild(editArea);
            } else if (target.innerHTML === 'Save') {

                target.innerHTML = 'Edit';
                parent.firstChild.innerHTML = parent.lastChild.value;
                parent.lastChild.remove();
            }

        });

        element.appendChild(fragment);

    }
}

// submit the above!

if (typeof module !== 'undefined') {
    module.exports = solve;
}