(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(30),o=a.n(s),c=(a(39),a(7)),l=a(8),i=a(10),m=a(9),u=a(11),d=a(5),h=a(12),p=(a(40),a(14)),v=a.n(p),g=(a(59),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),v.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser(e.data)):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{disabled:t,onClick:this.login},"Login"))}}]),t}(r.Component)),E=a(19),f=a.n(E),b=a(33),w=function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{class:"input-group"},n.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))},y=function(e){return n.a.createElement("div",{className:"card movie-card"},e.myImage=n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement("div",{className:"card-body"},e.myTitle=n.a.createElement("h4",{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement("p",{className:"card-text"},e.myOverview),e.userVote=n.a.createElement("p",{className:"card-text"},e.userVote)))},j=(a(66),function(e){return n.a.createElement("div",{className:" movie-card"},e.movies.map((function(e,t){return n.a.createElement("div",null,n.a.createElement(y,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average}))})))}),O=(a(67),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(b.a)(e.results),totalResuolts:e.total_results}),console.log("search is done")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1},console.log("constructor"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(v.a.get("http://localhost:8080/home"));case 2:e=a.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),this.setState({moviesTop:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return n.a.createElement("div",{className:"card movie-card"},n.a.createElement("img",{className:"card-img-top",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path),alt:"a"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title",key:t},e.title),n.a.createElement("p",{className:"card-text"},e.overview),n.a.createElement("p",{className:"card-text"},e.vote_average),console.log("render")))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement("div",{className:"container"},n.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),n.a.createElement(j,{movies:this.state.movies})),e)}}]),t}(r.Component)),S=(a(68),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),v.a.post("/users/registr",{email:a.state.email,password:a.state.password}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{disabled:t,onClick:this.registr},"Registr"))}}]),t}(r.Component)),N=function(e){return e.setUser(null),n.a.createElement(h.a,{to:"/"})},T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={user:null},a.setUser=function(e){a.setState({user:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement(d.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(d.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(d.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(d.b,{to:"/search_item_results"},"Search"):"",this.state.user?n.a.createElement(d.b,{to:"/Logout"},"Logout"):""),n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/",component:O}),n.a.createElement(h.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(g,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(S,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/MovieList",component:j}),n.a.createElement(h.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(N,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.bd6bb8c9.chunk.js.map