(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(29),r=a.n(o),l=(a(39),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),h=a(13),d=a(6),p=(a(40),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).email="",a.password="",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Login-User"},c.a.createElement("h1",null,"Login Page"),c.a.createElement("input",{type:"email",required:"required",placeholder:"email"}),c.a.createElement("input",{type:"password",required:"required",placeholder:"password"}))}}]),t}(n.Component)),v=a(16),g=a.n(v),E=a(33),f=a(30),b=a.n(f),w=function(e){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},c.a.createElement("form",{action:"",onSubmit:e.handleSubmit},c.a.createElement("div",{class:"input-group"},c.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))},y=(a(60),function(e){return c.a.createElement("div",{className:"card movie-card"},e.image=c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.image),alt:"Card image cap"}),c.a.createElement("div",{className:"card-body"},e.title=c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"})))}),j=(a(61),function(e){return c.a.createElement("div",{className:" movies-list-container"},e.movies.map((function(e,t){return c.a.createElement("div",null,c.a.createElement(y,{key:t,image:e.poster_path}),c.a.createElement(y,{key:t,title:e.title}))})))}),N=(a(62),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(E.a)(e.results)}),console.log("loki")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},console.log("constructor"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(b.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,movies:[],isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return c.a.createElement("div",{className:"card movie-card"},c.a.createElement("img",{className:"card-img-top",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title",key:t},e.title),c.a.createElement("p",{className:"card-text"},e.overview),c.a.createElement("p",{className:"card-text"},e.vote_average),console.log("render")))}));return c.a.createElement("div",{className:"Home "},c.a.createElement("h1",null,"Welcome To Foxx Movie"),c.a.createElement("div",{className:"container"},c.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),c.a.createElement(j,{movies:this.state.movies})),e)}}]),t}(n.Component)),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"LinkHead"},c.a.createElement(h.b,{to:"/"},"Home"),c.a.createElement(h.b,{to:"/Login"},"Login"),c.a.createElement(h.b,{to:"/Registr"},"Registr"),c.a.createElement(h.b,{to:"/search_item_results"},"Search")),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:N}),c.a.createElement(d.a,{exact:!0,path:"/Login",component:p}),c.a.createElement(d.a,{exact:!0,path:"/MovieList",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);r.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.98e83c76.chunk.js.map