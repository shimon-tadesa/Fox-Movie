(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),l=(a(39),a(8)),i=a(9),s=a(11),m=a(10),u=a(12),h=a(13),p=a(6),d=(a(40),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).email="",a.password="",a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Login-User"},o.a.createElement("h1",null,"Login Page"),o.a.createElement("input",{type:"email",required:"required",placeholder:"email"}),o.a.createElement("input",{type:"password",required:"required",placeholder:"password"}))}}]),t}(n.Component)),v=a(16),g=a.n(v),E=a(33),b=a(30),f=a.n(b),w=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},o.a.createElement("form",{action:"",onSubmit:e.handleSubmit},o.a.createElement("div",{class:"input-group"},o.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange}))))))},y=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"myimg"},e.movies.map((function(e,t){return o.a.createElement("div",null,e.poster_path)})))))},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(E.a)(e.results)}),console.log("loki")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},console.log("constructor"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(f.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,movies:[],isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){this.state.moviesTop.map((function(e,t){return o.a.createElement("div",null,o.a.createElement("h4",{key:t},e.title),o.a.createElement("p",null,e.overview),o.a.createElement("p",null,e.vote_average),o.a.createElement("img",{style:{width:"400px",height:"200px",borderRadius:"5px"},src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),console.log("render"))}));return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",null,"Welcome To Foxx Movie"),o.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),o.a.createElement(y,{movies:this.state.movies}))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement(h.b,{to:"/"},"Home"),o.a.createElement(h.b,{to:"/Login"},"Login"),o.a.createElement(h.b,{to:"/Registr"},"Registr"),o.a.createElement(h.b,{to:"/search_item_results"},"Search")),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:j}),o.a.createElement(p.a,{exact:!0,path:"/Login",component:d}),o.a.createElement(p.a,{exact:!0,path:"/MovieList",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.8bfa54e8.chunk.js.map