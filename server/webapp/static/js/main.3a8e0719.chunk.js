(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(21),s=a.n(o),i=a(5),c=a(6),l=a(8),u=a(7),m=a(9),d=a(4),p=a(17),h=(a(59),a(15)),g=a.n(h),v=(a(77),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),g.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(sessionStorage.setItem("user",JSON.stringify(e.data)),a.props.setUser(e.data),a.setState({RedirectToHome:!0})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(p.a,{to:"/"}):n.a.createElement("div",{id:"login-page"},n.a.createElement("div",{className:"Login-User"},n.a.createElement("h1",null,"Login Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Login Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.login},"Login")))}}]),t}(r.Component)),E=a(23),f=a.n(E),b=a(22),y=a(19),w=a.n(y),S=(a(99),function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},n.a.createElement("form",{action:"",onSubmit:e.handleSubmit},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),C=a(126),O=a(129),j=(a(100),function(e){return n.a.createElement(C.a,{md:"3"},n.a.createElement(O.a,null,e.myImage=n.a.createElement(O.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),n.a.createElement(O.a.Body,null,e.myTitle=n.a.createElement(O.a.Title,{className:"card-title"},e.myTitle),e.myOverview=n.a.createElement(O.a.Text,null,e.myOverview),e.userVote=n.a.createElement(O.a.Text,null,e.userVote))))}),k=function(e){return e.movies.map((function(e,t){return n.a.createElement(j,{key:t,myImage:e.poster_path,myTitle:e.title,myOverview:e.overview,userVote:e.vote_average})}))},T=(a(101),a(127)),N=a(128),x=(a(102),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(p.a,{to:"/"}):n.a.createElement("div",{id:"register-page"},n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(r.Component)),q=(a(103),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://wallpaperaccess.com/full/1225195.jpg)"}},n.a.createElement("h1",null,"Welcome To Foxx Movie"),n.a.createElement(d.a,null,n.a.createElement("div",{className:"boxsingLinks"},n.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eum et modi fugit similique doloribus vitae maxime, in nesciunt illum eius tenetur voluptas, vel totam. Neque possimus eveniet unde voluptatum! Similique tenetur dolore placeat facilis, soluta voluptatem labore at distinctio ducimus, rerum nihil maxime. Animi fuga omnis corporis blanditiis nihil vitae, non harum! Amet quae dolore, quos beatae obcaecati aliquam. Quos adipisci perspiciatis distinctio quaerat molestiae corporis doloribus sint! Eveniet laborum voluptas ullam rerum illum, nobis eos? Ad eveniet obcaecati ipsam. Similique dolores illo, ex cumque ipsum laborum praesentium voluptates? Nemo, dolorem, doloribus placeat sit dolores molestiae tempora harum tenetur blanditiis, atque sed excepturi ad explicabo consequatur repellat? Nemo totam illum facilis delectus incidunt est ipsa sed quod mollitia quisquam. Officia, libero tempore pariatur saepe explicabo sit odio ab consectetur numquam dolorem, aperiam mollitia quasi? Sunt tenetur modi eveniet vero quisquam laborum nulla velit eos dolorum quod, provident omnis veritatis. Autem consectetur facilis sint, non eveniet necessitatibus facere ducimus totam magni ab quibusdam nulla reiciendis, dolorem dolor tempore dicta sit temporibus molestias voluptatibus deserunt ea iste beatae exercitationem ipsum? Mod!"),n.a.createElement(d.b,{className:"links",to:"/Login"},"Click Her To Login"),n.a.createElement(d.b,{className:"links",to:"/Registr"},"Click Her To Registr")),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(v,null)}}),n.a.createElement(p.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(x,null)}}))))}}]),t}(r.Component)),R=a(53),I=a.n(R),M=(a(119),a(120),"https://image.tmdb.org/t/p/w500"),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),w.a.get("https://api.themoviedb.org/3/search/multi?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){sessionStorage.length>0?w.a.post("/cart/".concat(a.state.user._id),{movie:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):a.setState({flag2:!0})},a.state={moviesTop:[],movies:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],searchTerm:"",tvShowsPopular:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,flag2:!1,user:JSON.parse(sessionStorage.getItem("user")||null)},console.log("constructor is working"),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,r;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(w.a.get("http://localhost:8080/home"));case 2:return e=n.sent,t=e.data.movies,console.log(t),console.log("componentDidMount is working"),this.setState({moviesTop:t}),n.next=9,f.a.awrap(w.a.get("http://localhost:8080/home/tv"));case 9:a=n.sent,r=a.data.tvshow,console.log(r),console.log("componentDidMount2 is working"),this.setState({tvShowsPopular:r});case 14:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return n.a.createElement(p.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});if(this.state.flag2)return n.a.createElement(p.a,{to:{pathname:"/About"}});var t=this.state.moviesTop.map((function(t,a){return n.a.createElement(C.a,{md:"3"},n.a.createElement(O.a,{className:"movie-card"},n.a.createElement(O.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(M,"/").concat(t.poster_path)}),n.a.createElement(O.a.Body,null,n.a.createElement(O.a.Title,{className:"card-title",key:a},t.title),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))})),a=this.state.tvShowsPopular.map((function(t,a){return n.a.createElement(C.a,{md:"3"},n.a.createElement(O.a,{className:"movie-card"},n.a.createElement(O.a.Img,{onClick:function(){return e.movieInfo(t)},variant:"top ",src:"".concat(M,"/").concat(t.poster_path)}),n.a.createElement(O.a.Body,null,n.a.createElement(O.a.Title,{className:"card-title",key:a},t.name),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))))})),r=this.state.moviesTop.map((function(t,a){return n.a.createElement("div",{className:"carussel-card"},n.a.createElement("img",{src:"".concat(M,"/").concat(t.poster_path)}),n.a.createElement("div",null,t.title),n.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))}));return n.a.createElement("div",{className:"Home "},n.a.createElement("h1",{id:"header-title"},"Welcome To Fox Movie"),n.a.createElement(T.a,null,n.a.createElement(S,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),n.a.createElement(T.a,null,n.a.createElement(I.a,{infinite:!0,speed:500,slidesToShow:5,slidesToScroll:2,arrows:!0},r)),n.a.createElement(T.a,null,n.a.createElement(N.a,null,n.a.createElement(k,{movies:this.state.movies}))),n.a.createElement("div",{className:"allMovies"},n.a.createElement(T.a,null,n.a.createElement(N.a,null,n.a.createElement("div",{class:"col-md-12 gener-title"}," Movies "),this.state.totalResuolts?"":t,n.a.createElement("div",{class:"col-md-12 gener-title"}," TV series "),this.state.totalResuolts?"":a),n.a.createElement("button",{onClick:this.nextPage}," Next"))))}}]),t}(r.Component),U=(a(121),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?n.a.createElement(p.a,{to:"/"}):n.a.createElement("div",{id:"register-page"},n.a.createElement("div",{className:"registr-User"},n.a.createElement("h1",null,"Registr Page"),n.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),n.a.createElement("br",null),n.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),n.a.createElement("br",null),this.state.isError?n.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",n.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(r.Component)),A=function(e){return sessionStorage.removeItem("user"),e.setUser(null),n.a.createElement(p.a,{to:"/"})},_=(a(122),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).movie=a.props.location.movie,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("this movie click : ".concat(this.movie.title)),n.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},n.a.createElement("div",{className:"movieContent"},n.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path)}),n.a.createElement("h4",null,this.movie.title?this.movie.title:this.movie.name),n.a.createElement("p",{className:"movieText"},this.movie.overview),n.a.createElement("p",{className:"movieVote"},this.movie.vote_average)))}}]),t}(r.Component)),H=(a(123),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isError:!1,RedirectToCart:!1,MyCart:[],user:JSON.parse(sessionStorage.getItem("user")||null)},a.cart=function(){g.a.post("/cart:id",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a.deleteMovie=function(e){console.log(e,a.state.user._id),g.a.delete("/cart/".concat(a.state.user._id,"/").concat(e.id)).then((function(t){a.removeFromCart(e),console.log(t.data)})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"removeFromCart",value:function(e){var t=Object(b.a)(this.state.MyCart),a=t.findIndex((function(t){return t.id==e.id}));t.splice(a,1),this.setState({MyCart:t})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/user/".concat(this.state.user._id)).then((function(t){if(200===t.status){var a=t.data;console.log(a.MyCart),e.setState({MyCart:a.MyCart})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.MyCart.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("div",{class:"image-container"},n.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(t.poster_path)}),n.a.createElement("span",{class:"score-buble"}," ",t.vote_average)),n.a.createElement("span",{class:"title"}," ",t.title?t.title:t.name),n.a.createElement("button",{onClick:function(){return e.deleteMovie(t)}},"Delete"))}));return this.state.RedirectToCart?n.a.createElement(p.a,{to:"/cart"}):n.a.createElement(T.a,{className:"cartPage"},n.a.createElement("h1",null,"Cart page"),n.a.createElement("ul",null,t))}}]),t}(r.Component)),P=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setUser=function(e){console.log("xx "+JSON.stringify(e)),a.setState({user:e})},a.state={user:null};var r=sessionStorage.getItem("user");return r&&(a.state={user:JSON.parse(r)}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"LinkHead"},n.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg"}),n.a.createElement("div",{id:"head-navLinks"},n.a.createElement(d.b,{to:"/"},"Home"),this.state.user?"":n.a.createElement(d.b,{to:"/Login"},"Login"),this.state.user?"":n.a.createElement(d.b,{to:"/Registr"},"Registr"),this.state.user?n.a.createElement(d.b,{to:"/Cart"},"MyCart"):"",this.state.user?n.a.createElement(d.b,{to:"/Logout"},"Logout"):"",this.state.user?"":n.a.createElement(d.b,{to:"/About"},"About"))),n.a.createElement(p.d,null,n.a.createElement(p.b,{exact:!0,path:"/",component:L}),n.a.createElement(p.b,{exact:!0,path:"/Login",render:function(){return n.a.createElement(v,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/Registr",render:function(){return n.a.createElement(U,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/MovieList",component:k}),n.a.createElement(p.b,{exact:!0,path:"/showPage",component:_}),n.a.createElement(p.b,{exact:!0,path:"/Logout",render:function(){return n.a.createElement(A,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/Cart",render:function(){return n.a.createElement(H,{setUser:e.setUser})}}),n.a.createElement(p.b,{exact:!0,path:"/About",render:function(){return n.a.createElement(q,{setUser:e.setUser})}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(124);s.a.render(n.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a(125)},59:function(e,t,a){},77:function(e,t,a){},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.3a8e0719.chunk.js.map