(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(43),s=a.n(o),c=a(7),l=a(8),i=a(12),m=a(9),u=a(13),h=a(11),d=a(16),p=(a(55),a(17)),v=a.n(p),g=(a(73),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),v.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(a.setState({RedirectToHome:!0}),sessionStorage.setItem("user",JSON.stringify(e.data)),a.props.setUser(e.data)):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(d.a,{to:"/"}):n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{disabled:t,onClick:this.login},"Login"))}}]),t}(r.Component)),E=a(20),f=a.n(E),b=a(48),y=a(19),w=a.n(y),O=(a(96),function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),S=a(103),j=a(106),C=(a(97),function(e){return n.a.createElement(S.a,{md:"3"},n.a.createElement(j.a,null,e.myImage=n.a.createElement(j.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement(j.a.Body,null,e.myTitle=n.a.createElement(j.a.Title,{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement(j.a.Text,null,e.myOverview),e.userVote=n.a.createElement(j.a.Text,null,e.userVote))))}),T=function(e){return e.movies.map((function(e,t){return n.a.createElement(C,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average})}))},k=(a(98),a(104)),N=a(105),x="https://image.tmdb.org/t/p/w500",R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),w.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){console.log(e,a.state.user._id),w.a.post("/cart/".concat(a.state.user._id),{movie:e}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,user:JSON.parse(sessionStorage.getItem("user")||null)},console.log("constructor is working"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(w.a.get("http://localhost:8080/home"));case 2:return e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount is working"),this.setState({moviesTop:t}),n.next=9,f.a.awrap(w.a.get("http://localhost:8080/home/tv"));case 9:a=n.sent,r=a.data.tvshow,console.log(r),console.log("componentDidMount2 is working"),this.setState({tvShowsPopular:r});case 14:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return n.a.createElement(d.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});var t=this.state.moviesTop.map((function(t,a){return n.a.createElement(S.a,{md:"3"},n.a.createElement(j.a,{className:"movie-card"},n.a.createElement(j.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(x,"/").concat(t.poster_path),alt:"a"}),n.a.createElement(j.a.Body,null,n.a.createElement(j.a.Title,{className:"card-title",key:a},t.title),n.a.createElement(j.a.Text,{className:"card-text"},t.overview),n.a.createElement(j.a.Text,{className:"card-text"},t.vote_average),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))})),a=this.state.tvShowsPopular.map((function(t,a){return n.a.createElement(S.a,{md:"3"},n.a.createElement(j.a,{className:"movie-card"},n.a.createElement(j.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(x,"/").concat(t.poster_path),alt:"a"}),n.a.createElement(j.a.Body,null,n.a.createElement(j.a.Title,{className:"card-title",key:a},t.name),n.a.createElement(j.a.Text,{className:"card-text"},t.overview),n.a.createElement(j.a.Text,{className:"card-text"},t.vote_average))))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement(k.a,null,n.a.createElement(O,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),n.a.createElement(k.a,null,n.a.createElement(N.a,null,n.a.createElement(T,{movies:this.state.movies}))),n.a.createElement("div",{className:"allMovies"},n.a.createElement(k.a,null,n.a.createElement(N.a,null,this.state.totalResuolts?"":t,this.state.totalResuolts?"":a))))}}]),t}(r.Component),I=(a(99),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),v.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(d.a,{to:"/"}):n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{disabled:t,onClick:this.registr},"Registr"))}}]),t}(r.Component)),L=function(e){return e.setUser(null),n.a.createElement(d.a,{to:"/"})},U=(a(100),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).movie=a.props.location.movie,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("this movie click : ".concat(this.movie.title)),n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},n.a.createElement("div",{className:"movieContent"},n.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path)}),n.a.createElement("h4",null,this.movie.title?this.movie.title:this.movie.name),n.a.createElement("p",{className:"movieText"},this.movie.overview),n.a.createElement("p",{className:"movieVote"},this.movie.vote_average)))}}]),t}(r.Component)),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={isError:!1,RedirectToCart:!1,MyCart:[],user:JSON.parse(sessionStorage.getItem("user")||null)},a.cart=function(){v.a.post("/cart:id",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){v.a.get("/user/".concat(this.state.user._id)).then((function(e){if(201===e.status){var t=e.data;console.log(t.MyCart)}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.RedirectToCart?n.a.createElement(d.a,{to:"/cart"}):n.a.createElement("div",null,n.a.createElement("h1",null,"Cart page"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("ul",null," User List",n.a.createElement("li",null)))}}]),t}(r.Component),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={user:null},a.setUser=function(e){a.setState({user:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg"}),n.a.createElement(h.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(h.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(h.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(h.b,{to:"/Cart"},"MyCart"):"",this.state.user?n.a.createElement(h.b,{to:"/Logout"},"Logout"):""),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/",component:R}),n.a.createElement(d.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(g,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(I,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/MovieList",component:T}),n.a.createElement(d.b,{exact:!0,path:"/showPage",component:U}),n.a.createElement(d.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(L,{setUser:e.setUser})}}),n.a.createElement(d.b,{exact:!0,path:"/Cart",render:function(){return n.a.createElement(M,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101);s.a.render(n.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(102)},55:function(e,t,a){},73:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.1009b666.chunk.js.map