riot.tag2('app', '<app-header></app-header> <home></home> <symbols></symbols> <app-footer></app-footer>', '', '', function(opts) {
});

riot.tag2('app-footer', '<footer class="footer"> <div class="container"> <div class="content has-text-centered"> <p> <strong>Babel2</strong> by <a href="https://github.com/yanqirenshi">岩崎仁是</a>. </p> <p> The source code is licensed <a href="https://opensource.org/licenses/LGPL-3.0">LGPL 3.0</a>. </p> </div> </div> </footer>', '', '', function(opts) {
});

riot.tag2('app-header', '<section class="hero"> <div class="hero-body"> <div class="container"> <h1 class="title"> BABEL2 </h1> <h2 class="subtitle"></h2> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('app-section', '<section class="section"> <div class="container"> <h1 class="title">{Title}</h1> <yield></yield> </div> </section>', '', '', function(opts) {
});

riot.tag2('symbol-list', '<table class="table is-bordered is-striped is-narrow is-hoverable"> <thead> <tr> <th>type</th> <th>name</th> <th>package</th> <th>file</th> <th>description</th> </tr> </thead> <tbody> <tr each="{this.opts.symbols}"> <td> <a href="#symbols/packages/{package}"> {package} </a> </td> <td> <a href="#symbols/packages/{package}/{type}"> {type} </a> </td> <td> <a href="#symbols/packages/{package}/{type}/{name}"> {name} </a> </td> <td>{file}</td> <td>{description}</td> </tr> </tbody> </table>', '', '', function(opts) {
});

riot.tag2('home-tabs', '<app-section> <div class="tabs"> <ul> <li class="is-active"><a href="#readme">README</a></li> <li><a href="#symbols">Symbols</a></li> </ul> </div> </app-section>', '', '', function(opts) {
});

riot.tag2('home', '<home-tabs></home-tabs> <app-section> <symbol-list symbols="{_SYMBOLS}"></symbol-list> </app-section>', '', '', function(opts) {
});

riot.tag2('symbols', '', '', '', function(opts) {
});
