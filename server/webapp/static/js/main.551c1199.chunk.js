(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{39:function(e,t,a){e.exports=a(76)},44:function(e,t,a){},63:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(32),s=a.n(o),c=a(6),l=a(7),i=a(11),m=a(8),u=a(12),h=a(10),d=a(16),p=(a(44),a(14)),v=a.n(p),g=(a(63),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),v.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser(e.data)):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(d.a,{to:"/"}):n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{disabled:t,onClick:this.login},"Login"))}}]),t}(r.Component)),E=a(18),f=a.n(E),b=a(37),y=(a(70),function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),w=a(77),j=a(80),C=(a(71),function(e){return n.a.createElement(w.a,{md:"3"},n.a.createElement(j.a,null,e.myImage=n.a.createElement(j.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement(j.a.Body,null,e.myTitle=n.a.createElement(j.a.Title,{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement(j.a.Text,null,e.myOverview),e.userVote=n.a.createElement(j.a.Text,null,e.userVote))))}),O=function(e){return e.movies.map((function(e,t){return n.a.createElement(C,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average})}))},S=(a(72),a(78)),T=a(79),k="https://image.tmdb.org/t/p/w500",x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),v.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){if(console.log(e.id,e.title),e.id==e.id){var t=v.a.get("http://localhost:8080/cart/id");console.log(t);var r=t.data.movie_id;console.log(a.movieId),console.log("yes it work"),console.log(a.userList),a.setState({userList:r})}},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,userList:[]},console.log("constructor is working"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(v.a.get("http://localhost:8080/home"));case 2:return e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount is working"),this.setState({moviesTop:t}),n.next=9,f.a.awrap(v.a.get("http://localhost:8080/home/tv"));case 9:a=n.sent,r=a.data.tvshow,console.log(r),console.log("componentDidMount2 is working"),this.setState({tvShowsPopular:r});case 14:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return n.a.createElement(d.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});var t=this.state.moviesTop.map((function(t,a){return n.a.createElement(w.a,{md:"3"},n.a.createElement(j.a,{className:"movie-card"},n.a.createElement(j.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(k,"/").concat(t.poster_path),alt:"a"}),n.a.createElement(j.a.Body,null,n.a.createElement(j.a.Title,{className:"card-title",key:a},t.title),n.a.createElement(j.a.Text,{className:"card-text"},t.overview),n.a.createElement(j.a.Text,{className:"card-text"},t.vote_average),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))})),a=this.state.tvShowsPopular.map((function(t,a){return n.a.createElement(w.a,{md:"3"},n.a.createElement(j.a,{className:"movie-card"},n.a.createElement(j.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(k,"/").concat(t.poster_path),alt:"a"}),n.a.createElement(j.a.Body,null,n.a.createElement(j.a.Title,{className:"card-title",key:a},t.name),n.a.createElement(j.a.Text,{className:"card-text"},t.overview),n.a.createElement(j.a.Text,{className:"card-text"},t.vote_average))))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement(S.a,null,n.a.createElement(y,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),n.a.createElement(S.a,null,n.a.createElement(T.a,null,n.a.createElement(O,{movies:this.state.movies}))),n.a.createElement("div",{className:"allMovies"},n.a.createElement(S.a,null,n.a.createElement(T.a,null,this.state.totalResuolts?"":t,this.state.totalResuolts?"":a))))}}]),t}(r.Component),N=(a(73),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),v.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(d.a,{to:"/"}):n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{disabled:t,onClick:this.registr},"Registr"))}}]),t}(r.Component)),L=function(e){return e.setUser(null),n.a.createElement(d.a,{to:"/"})},R=(a(74),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).movie=a.props.location.movie,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("this movie click : ".concat(this.movie.title)),n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},n.a.createElement("div",{className:"movieContent"},n.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path)}),n.a.createElement("h4",null,this.movie.title?this.movie.title:this.movie.name),n.a.createElement("p",{className:"movieText"},this.movie.overview),n.a.createElement("p",{className:"movieVote"},this.movie.vote_average)))}}]),t}(r.Component)),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={isError:!1,RedirectToCart:!1,MyCart:[]},a.cart=function(){v.a.post("/cart",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.RedirectToCart?n.a.createElement(d.a,{to:"/cart"}):n.a.createElement("div",null,n.a.createElement("h1",null,"Cart page"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("ul",null," User List",n.a.createElement("li",null,this.props.movie.title)))}}]),t}(r.Component),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={user:null},a.setUser=function(e){a.setState({user:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg"}),n.a.createElement(h.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(h.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(h.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(h.b,{to:"/Cart"},"MyCart"):"",this.state.user?n.a.createElement(h.b,{to:"/Logout"},"Logout"):""),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/",component:x}),n.a.createElement(d.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(g,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(N,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/MovieList",component:O}),n.a.createElement(d.b,{exact:!0,path:"/showPage",component:R}),n.a.createElement(d.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(L,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/Cart",render:function(){return n.a.createElement(U,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);s.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.551c1199.chunk.js.map