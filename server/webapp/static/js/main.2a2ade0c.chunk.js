(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{35:function(e,t,a){e.exports=a(71)},40:function(e,t,a){},41:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),s=(a(40),a(6)),i=a(7),l=a(9),m=a(8),u=a(10),h=a(13),d=a(11),p=(a(41),a(14)),g=a.n(p),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){g.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?a.setState({RedirectToHome:!0}):console.log("error code : ".concat(e.status))})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"Login-User"},r.a.createElement("h1",null,"Login Page"),r.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),r.a.createElement("br",null),this.state.isError?r.a.createElement("p",{style:{color:"red"}},"Login Error"):"",r.a.createElement("button",{disabled:t,onClick:this.login},"Login"))}}]),t}(n.Component),E=a(19),f=a.n(E),b=a(20),w=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("div",{class:"input-group"},r.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))},y=(a(66),function(e){return r.a.createElement("section",null,r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card movie-card"},e.image=r.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.image)}),e.title=r.a.createElement("h6",{className:"card-title"},e.title))))}),j=(a(67),function(e){return r.a.createElement("div",{className:" movies-list"},e.movies.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(y,{key:t,image:e.poster_path,title:e.title}))})))}),O=(a(68),a(34)),k=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.value,n="email"==e.target.type,r=Object(O.a)({},a.state);n?r.userMail=t:r.userPassword=t,a.setState(r)},a.registerUser=function(){console.log(a.state)},a.state={userMail:"",userPassword:"",userPassword2:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"registr-user"},r.a.createElement("h1",null,"Registr Page"),r.a.createElement("input",{type:"email",required:"required",placeholder:"email",onChange:this.onInputChange}),r.a.createElement("input",{type:"password",required:"required",placeholder:"password",onChange:this.onInputChange}),r.a.createElement("input",{type:"password",required:"required",placeholder:"password2"}),r.a.createElement("button",{onClick:this.registerUser()},"\u05d4\u05d9\u05e8\u05e9\u05dd"))}}]),t}(n.Component)),C="d759a614b16c0c1c0295b4313e94aeec",N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(C,"&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(b.a)(e.results),totalResuolts:e.total_results}),console.log("loki")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.nextPage=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(C,"&query=").concat(a.state.searchTerm,"&page=").concat(e)).then((function(e){return e.json()})).then((function(t){console.log(t),a.setState({movies:Object(b.a)(t.results),currentPage:e}),console.log("loki")}))},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1},console.log("constructor"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(g.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),a={moviesTop:t,movies:[],isLoaded:!0,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[]},this.setState(a);case 8:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return r.a.createElement("div",{className:"card movie-card"},r.a.createElement("img",{className:"card-img-top",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path)}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title",key:t},e.title),r.a.createElement("p",{className:"card-text"},e.overview),r.a.createElement("p",{className:"card-text"},e.vote_average),console.log("render")))}));Math.floor(this.state.totalResuolts/20);return r.a.createElement("div",{className:"Home "},r.a.createElement("h1",null,"Welcome To Foxx Movie"),r.a.createElement("div",{className:"container"},r.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),r.a.createElement(j,{movies:this.state.movies})),e)}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"LinkHead"},r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/Login"},"Login"),r.a.createElement(h.b,{to:"/Registr"},"Registr"),r.a.createElement(h.b,{to:"/search_item_results"},"Search")),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:N}),r.a.createElement(d.b,{exact:!0,path:"/Login",component:v}),r.a.createElement(d.b,{exact:!0,path:"/MovieList",component:j}),r.a.createElement(d.b,{exact:!0,path:"/Registr",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2a2ade0c.chunk.js.map