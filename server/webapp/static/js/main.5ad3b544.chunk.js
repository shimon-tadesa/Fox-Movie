(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{39:function(e,t,a){e.exports=a(75)},44:function(e,t,a){},45:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(32),s=a.n(o),c=(a(44),a(10)),l=a(11),i=a(13),u=a(12),m=a(14),h=a(8),p=a(15),d=(a(45),a(16)),v=a.n(d),E=(a(64),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),v.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser(e.data)):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(p.a,{to:"/"}):n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{disabled:t,onClick:this.login},"Login"))}}]),t}(r.Component)),g=a(18),f=a.n(g),b=a(37),w=function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{class:"input-group"},n.a.createElement("input",{class:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))},y=a(80),S=function(e){return n.a.createElement(y.a,null,e.myImage=n.a.createElement(y.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement(y.a.Body,null,e.myTitle=n.a.createElement(y.a.Title,{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement(y.a.Text,null,e.myOverview),e.userVote=n.a.createElement(y.a.Text,null,e.userVote)))},j=(a(71),function(e){return n.a.createElement("div",{className:" movie-card"},e.movies.map((function(e,t){return n.a.createElement("div",null,n.a.createElement(S,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average}))})))}),O=(a(72),a(77)),T=a(78),x=a(79),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(b.a)(e.results),totalResuolts:e.total_results}),console.log("search is done")}))},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1},console.log("constructor"),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(v.a.get("http://localhost:8080/home"));case 2:e=a.sent,t=e.data.movies,console.log(t),console.log("componentDidMount"),this.setState({moviesTop:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"aaa",value:function(){var e,t;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(v.a.get("http://localhost:8080/home"));case 2:e=a.sent,t=e.data.name,console.log(t),console.log("componentDidMount2"),this.setState({tvShowsPopular:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return n.a.createElement(O.a,null,n.a.createElement(T.a,null,n.a.createElement(x.a,null,n.a.createElement(y.a,{className:"movie-card"},n.a.createElement(y.a.Img,{variant:"top ",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(e.poster_path),alt:"a"}),n.a.createElement(y.a.Body,null,n.a.createElement(y.a.Title,{className:"card-title",key:t},e.title),n.a.createElement(y.a.Text,{className:"card-text"},e.overview),n.a.createElement(y.a.Text,{className:"card-text"},e.vote_average))))))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement("div",{className:"container"},n.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),n.a.createElement(j,{movies:this.state.movies}),this.state.totalResuolts?"":e)}}]),t}(r.Component),C=(a(73),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),v.a.post("/users/registr",{email:a.state.email,password:a.state.password}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(p.a,{to:"/"}):n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{disabled:t,onClick:this.registr},"Registr"))}}]),t}(r.Component)),R=function(e){return e.setUser(null),n.a.createElement(p.a,{to:"/"})},L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={user:null},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement(h.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(h.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(h.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(h.b,{to:"/search_item_results"},"Search"):"",this.state.user?n.a.createElement(h.b,{to:"/Logout"},"Logout"):""),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",component:k}),n.a.createElement(p.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(E,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(C,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/MovieList",component:j}),n.a.createElement(p.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(R,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);s.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.5ad3b544.chunk.js.map