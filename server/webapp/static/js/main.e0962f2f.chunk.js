(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{175:function(e,t,a){e.exports=a(385)},180:function(e,t,a){},181:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},233:function(e,t){},234:function(e,t){},238:function(e,t){},240:function(e,t){},279:function(e,t){},284:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=284},286:function(e,t){},288:function(e,t){},320:function(e,t){},321:function(e,t){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(171),c=a.n(r),s=(a(180),a(20)),i=a(21),l=a(23),u=a(22),m=a(24),h=a(38),p=a(25),d=(a(181),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).email="",a.password="",a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Login-User"},o.a.createElement("h1",null,"Login Page"),o.a.createElement("input",{type:"email",required:"required",placeholder:"email"}),o.a.createElement("input",{type:"password",required:"required",placeholder:"password"}))}}]),t}(n.Component)),v=a(89),g=a.n(v),f=a(92),E=a(88),b=a.n(E),w=function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},o.a.createElement("form",{action:"",onSubmit:e.handleSubmit},o.a.createElement("div",{class:"input-group"},o.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))},y=(a(200),function(e){return o.a.createElement("section",null,o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card movie-card"},e.image=o.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.image)}),e.title=o.a.createElement("h6",{className:"card-title"},e.title))))}),j=(a(201),function(e){return o.a.createElement("div",{className:" movies-list"},e.movies.map((function(e,t){return o.a.createElement("div",null,o.a.createElement(y,{key:t,image:e.poster_path,title:e.title}))})))}),O=(a(202),a(174)),N=(a(203),a(204));N().use(N.json());var k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.value,n="email"==e.target.type,o=Object(O.a)({},a.state);n?o.userMail=t:o.userPassword=t,a.setState(o)},a.registerUser=function(){console.log(a.state.userMail)},a.state={userMail:"",userPassword:"",userPassword2:""},a.forum={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"registr-user"},o.a.createElement("h1",null,"Registr Page"),o.a.createElement("input",{type:"email",required:"required",placeholder:"email",onChange:this.onInputChange}),o.a.createElement("input",{type:"password",required:"required",placeholder:"password",onChange:this.onInputChange}),o.a.createElement("input",{type:"password",required:"required",placeholder:"password2"}),o.a.createElement("button",{onClick:this.registerUser()},"\u05d4\u05d9\u05e8\u05e9\u05dd"))}}]),t}(n.Component),C="d759a614b16c0c1c0295b4313e94aeec",S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(C,"&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(f.a)(e.results),totalResuolts:e.total_results}),console.log("loki")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.nextPage=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(C,"&query=").concat(a.state.searchTerm,"&page=").concat(e)).then((function(e){return e.json()})).then((function(t){console.log(t),a.setState({movies:Object(f.a)(t.results),currentPage:e}),console.log("loki")}))},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1},console.log("constructor"),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(b.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,movies:[],isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return o.a.createElement("div",{className:"card movie-card"},o.a.createElement("img",{className:"card-img-top",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title",key:t},e.title),o.a.createElement("p",{className:"card-text"},e.overview),o.a.createElement("p",{className:"card-text"},e.vote_average),console.log("render")))}));Math.floor(this.state.totalResuolts/20);return o.a.createElement("div",{className:"Home "},o.a.createElement("h1",null,"Welcome To Foxx Movie"),o.a.createElement("div",{className:"container"},o.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),o.a.createElement(j,{movies:this.state.movies})),e)}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement(h.b,{to:"/"},"Home"),o.a.createElement(h.b,{to:"/Login"},"Login"),o.a.createElement(h.b,{to:"/Registr"},"Registr"),o.a.createElement(h.b,{to:"/search_item_results"},"Search")),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:S}),o.a.createElement(p.a,{exact:!0,path:"/Login",component:d}),o.a.createElement(p.a,{exact:!0,path:"/MovieList",component:j}),o.a.createElement(p.a,{exact:!0,path:"/Registr",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(384);c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[175,1,2]]]);
//# sourceMappingURL=main.e0962f2f.chunk.js.map