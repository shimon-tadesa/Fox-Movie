(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(44),s=a.n(o),c=a(4),i=a(5),l=a(7),m=a(6),u=a(8),d=a(3),h=a(17),p=(a(55),a(15)),g=a.n(p),E=(a(73),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),g.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(sessionStorage.setItem("user",JSON.stringify(e.data)),a.props.setUser(e.data),a.setState({RedirectToHome:!0})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{id:"login-page"},n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.login},"Login")))}}]),t}(r.Component)),v=a(20),f=a.n(v),b=a(49),y=a(19),w=a.n(y),O=(a(96),function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),S=a(105),C=a(108),j=(a(97),function(e){return n.a.createElement(S.a,{md:"3"},n.a.createElement(C.a,null,e.myImage=n.a.createElement(C.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement(C.a.Body,null,e.myTitle=n.a.createElement(C.a.Title,{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement(C.a.Text,null,e.myOverview),e.userVote=n.a.createElement(C.a.Text,null,e.userVote))))}),k=function(e){return e.movies.map((function(e,t){return n.a.createElement(j,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average})}))},T=(a(98),a(106)),N=a(107),R="https://image.tmdb.org/t/p/w500",x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),w.a.get("https://api.themoviedb.org/3/search/multi?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){console.log(e,a.state.user._id),w.a.post("/cart/".concat(a.state.user._id),{movie:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,user:JSON.parse(sessionStorage.getItem("user")||null)},console.log("constructor is working"),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(w.a.get("http://localhost:8080/home"));case 2:return e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount is working"),this.setState({moviesTop:t}),n.next=9,f.a.awrap(w.a.get("http://localhost:8080/home/tv"));case 9:a=n.sent,r=a.data.tvshow,console.log(r),console.log("componentDidMount2 is working"),this.setState({tvShowsPopular:r});case 14:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return n.a.createElement(h.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});var t=this.state.moviesTop.map((function(t,a){return n.a.createElement(S.a,{md:"3"},n.a.createElement(C.a,{className:"movie-card"},n.a.createElement(C.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(R,"/").concat(t.poster_path)}),n.a.createElement(C.a.Body,null,n.a.createElement(C.a.Title,{className:"card-title",key:a},t.title),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))})),a=this.state.tvShowsPopular.map((function(t,a){return n.a.createElement(S.a,{md:"3"},n.a.createElement(C.a,{className:"movie-card"},n.a.createElement(C.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(R,"/").concat(t.poster_path)}),n.a.createElement(C.a.Body,null,n.a.createElement(C.a.Title,{className:"card-title",key:a},t.name),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",{id:"header-title"},"Welcome To Fox Movie"),n.a.createElement(T.a,null,n.a.createElement(O,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),n.a.createElement(T.a,null,n.a.createElement(N.a,null,n.a.createElement(k,{movies:this.state.movies}))),n.a.createElement("div",{className:"allMovies"},n.a.createElement(T.a,null,n.a.createElement(N.a,null,n.a.createElement("div",{class:"col-md-12 gener-title"}," Movies "),this.state.totalResuolts?"":t,n.a.createElement("div",{class:"col-md-12 gener-title"}," TV series "),this.state.totalResuolts?"":a),n.a.createElement("button",{onClick:this.nextPage}," Next"))))}}]),t}(r.Component),I=(a(99),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{id:"register-page"},n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(r.Component)),M=function(e){return e.setUser(null),n.a.createElement(h.a,{to:"/"})},L=(a(100),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).movie=a.props.location.movie,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("this movie click : ".concat(this.movie.title)),n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},n.a.createElement("div",{className:"movieContent"},n.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path)}),n.a.createElement("h4",null,this.movie.title?this.movie.title:this.movie.name),n.a.createElement("p",{className:"movieText"},this.movie.overview),n.a.createElement("p",{className:"movieVote"},this.movie.vote_average)))}}]),t}(r.Component)),U=(a(101),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={isError:!1,RedirectToCart:!1,MyCart:[],user:JSON.parse(sessionStorage.getItem("user")||null)},a.cart=function(){g.a.post("/cart:id",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a.deleteMovie=function(e){console.log(e,a.state.user._id),g.a.delete("/cart/".concat(a.state.user._id,"/").concat(e.id)).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/user/".concat(this.state.user._id)).then((function(t){if(200===t.status){var a=t.data;console.log(a.MyCart),e.setState({MyCart:a.MyCart})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.MyCart.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(t.poster_path)}),n.a.createElement("h5",null," ",t.title?t.title:t.name),n.a.createElement("p",null," ",t.overview),n.a.createElement("p",null," ",t.vote_average),n.a.createElement("button",{onClick:function(){return e.deleteMovie(t)}},"Delete"))}));return this.state.RedirectToCart?n.a.createElement(h.a,{to:"/cart"}):n.a.createElement(T.a,{className:"cartPage"},n.a.createElement("h1",null,"Cart page"),n.a.createElement("ul",null,t))}}]),t}(r.Component)),P=(a(102),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{id:"register-page"},n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(r.Component)),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement(d.a,null,n.a.createElement(d.b,{to:"/Login"},"Click Her To Login"),n.a.createElement(d.b,{to:"/Registr"},"Click Her To Registr"),n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(E,null)}}),n.a.createElement(h.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(P,null)}}))))}}]),t}(r.Component),H=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setUser=function(e){console.log("xx "+JSON.stringify(e)),a.setState({user:e})},a.state={user:null};var r=sessionStorage.getItem("user");return r&&a.setUser(JSON.parse(r)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg"}),n.a.createElement("div",{id:"head-navLinks"},n.a.createElement(d.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(d.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(d.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(d.b,{to:"/Cart"},"MyCart"):"",this.state.user?n.a.createElement(d.b,{to:"/Logout"},"Logout"):"",this.state.user?n.a.createElement(d.b,{to:"/NewPage"},"new Page"):"")),n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/",component:x}),n.a.createElement(h.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(E,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(I,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/MovieList",component:k}),n.a.createElement(h.b,{exact:!0,path:"/showPage",component:L}),n.a.createElement(h.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(M,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/Cart",render:function(){return n.a.createElement(U,{setUser:e.setUser})}}),n.a.createElement(h.b,{exact:!0,path:"/NewPage",render:function(){return n.a.createElement(_,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103);s.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(104)},55:function(e,t,a){},73:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.ff17d917.chunk.js.map