(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),i=(a(39),a(8)),l=a(9),s=a(11),m=a(10),u=a(12),h=a(13),p=a(6),d=(a(40),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).email="",a.password="",a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login-User"},r.a.createElement("h1",null,"Login Page"),r.a.createElement("input",{type:"email",required:"required",placeholder:"email"}),r.a.createElement("input",{type:"password",required:"required",placeholder:"password"}))}}]),t}(n.Component)),v=a(16),g=a.n(v),E=a(33),b=a(30),f=a.n(b),w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange}))))))},y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card",style:"width: 18rem;"},e.image=r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.image),alt:"Card image cap",style:{width:"100%",height:360}})))},j=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",null,e.movies.map((function(e,t){return r.a.createElement(y,{key:t,image:e.poster_path})})))))},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(E.a)(e.results)})}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},console.log("constructor"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(f.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,movies:[],isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h4",{key:t},e.title),r.a.createElement("p",null,e.overview),r.a.createElement("p",null,e.vote_average),r.a.createElement("img",{style:{width:"400px",height:"200px",borderRadius:"5px"},src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),console.log("render"),"}")}));return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Welcome To Foxx Movie"),r.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),r.a.createElement(j,{movies:this.state.movies}),e)}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"LinkHead"},r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/Login"},"Login"),r.a.createElement(h.b,{to:"/Registr"},"Registr"),r.a.createElement(h.b,{to:"/search_item_results"},"Search")),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{exact:!0,path:"/Login",component:d}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.efc8afe3.chunk.js.map