function solve() {
    return function () {
        var template = `
            <ul class="nav">
            {{#logo}}
            <li class="nav-item logo">
                <a href="{{url}}">
                    <img src="{{image}}">
                </a>
                </li>
            {{/logo}}
            {{#each items}}
            <li class="nav-item">
                <a href="{{url}}">{{title}}</a>
                    {{#if items}}
                    <ul class="subnav">
                    {{#each items}}
                    <li class="nav-item">
                        <a href="#{{url}}">{{title}}</a>
                    </li>
                    {{else}}
                    <li class="nav-item">
                    <a href="{{url}}">{{title}}</a> 
                    </li>
                    {{/each}}
                    </ul>
                    {{/if}}
            </li>
            {{/each}}
            </ul>
        `;
        return template;
    };
}

module.exports = solve;