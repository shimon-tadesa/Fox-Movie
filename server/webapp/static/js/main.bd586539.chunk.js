(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){e.exports=a.p+"static/media/logo.bfe4572c.png"},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),i=a(5),c=a(6),l=a(8),u=a(7),m=a(9),d=a(2),p=a(18),h=(a(59),a(15)),g=a.n(h),v=(a(77),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),g.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(sessionStorage.setItem("user",JSON.stringify(e.data)),a.props.setUser(e.data),a.setState({RedirectToHome:!0})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{className:"Login-User"},r.a.createElement("h1",null,"Login Page"),r.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),r.a.createElement("br",null),this.state.isError?r.a.createElement("p",{style:{color:"red"}},"Login Error"):"",r.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.login},"Login")))}}]),t}(n.Component)),E=a(19),f=a.n(E),b=a(24),w=a(17),S=a.n(w),y=(a(99),function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),C=a(127),k=a(130),O=(a(100),function(e){return r.a.createElement(C.a,{md:"3"},r.a.createElement(k.a,null,e.myImage=r.a.createElement(k.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),r.a.createElement(k.a.Body,null,e.myTitle=r.a.createElement(k.a.Title,{className:"card-title"},e.myTitle))))}),T=function(e){return e.movies.map((function(e,t){return r.a.createElement(O,{key:t,myImage:e.poster_path,myTitle:e.title})}))},j=(a(101),a(128)),R=a(129),N=a(20),x=a.n(N),I=(a(117),a(118),"https://image.tmdb.org/t/p/w500"),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),S.a.get("https://api.themoviedb.org/3/search/multi?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){sessionStorage.length>0?S.a.post("/cart/".concat(a.state.user._id),{movie:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):a.setState({flag2:!0})},a.state={moviesTop:[],moviesTop2:[],moviesTop3:[],movies:[],isLoaded:!1,searchTerm:"",tvShowsPopular:[],tvShowsPopular2:[],tvShowsPopular3:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,flag2:!1,user:JSON.parse(sessionStorage.getItem("user")||null)},console.log("constructor is working"),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r,o,s,i,c,l,u,m;return f.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,f.a.awrap(S.a.get("http://localhost:8080/home"));case 2:return e=d.sent,t=e.data.movies,console.log(t),console.log("componentDidMount page 1 is working"),this.setState({moviesTop:t}),d.next=9,f.a.awrap(S.a.get("http://localhost:8080/home/two"));case 9:return a=d.sent,n=a.data.movies,console.log(t),console.log("componentDidMount for page2 is working"),this.setState({moviesTop2:n}),d.next=16,f.a.awrap(S.a.get("http://localhost:8080/home/three"));case 16:return r=d.sent,o=r.data.movies,console.log(o),console.log("componentDidMount for page2 is working"),this.setState({moviesTop3:o}),d.next=23,f.a.awrap(S.a.get("http://localhost:8080/home/tv"));case 23:return s=d.sent,i=s.data.tvshow,console.log(i),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular:i}),d.next=30,f.a.awrap(S.a.get("http://localhost:8080/home/tv/two"));case 30:return c=d.sent,l=c.data.tvshow,console.log(l),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular2:l}),d.next=37,f.a.awrap(S.a.get("http://localhost:8080/home/tv/three"));case 37:u=d.sent,m=u.data.tvshow,console.log(m),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular3:m});case 42:case"end":return d.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return r.a.createElement(p.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});if(this.state.flag2)return r.a.createElement(p.a,{to:{pathname:"/About"}});var t={infinite:!0,speed:650,slidesToShow:5,slidesToScroll:4,arrows:!0},a=this.state.moviesTop.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),n=this.state.moviesTop2.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),o=this.state.moviesTop3.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),s=this.state.tvShowsPopular.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),i=this.state.tvShowsPopular2.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),c=this.state.tvShowsPopular3.map((function(t,a){return r.a.createElement("div",{className:"carussel-card"},r.a.createElement("img",{src:"".concat(I,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)}}),r.a.createElement("div",null,t.title),r.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))}));return r.a.createElement("div",{className:"Home "},r.a.createElement("h1",{id:"header-title"},"Welcome To Fox Movie"),r.a.createElement(j.a,null,r.a.createElement(y,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"}," Movies upcoming "),this.state.totalResuolts?"":r.a.createElement(x.a,t,a)),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"}," Movies Popular "),this.state.totalResuolts?"":r.a.createElement(x.a,t,n)),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"}," Movies Top Rated "),this.state.totalResuolts?"":r.a.createElement(x.a,t,o)),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"}," Popular TV Series  "),this.state.totalResuolts?"":r.a.createElement(x.a,t,s)),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"},"Updated TV Series"),this.state.totalResuolts?"":r.a.createElement(x.a,t,i)),r.a.createElement(j.a,null,this.state.totalResuolts?"":r.a.createElement("div",{class:"col-md-12 gener-title"},"Top Rated TV Series "),this.state.totalResuolts?"":r.a.createElement(x.a,t,c)),r.a.createElement(j.a,null,r.a.createElement(R.a,null,r.a.createElement(T,{movies:this.state.movies}))))}}]),t}(n.Component),q=(a(119),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{id:"register-page"},r.a.createElement("div",{className:"registr-User"},r.a.createElement("h1",null,"Registr Page"),r.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),r.a.createElement("br",null),this.state.isError?r.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",r.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(n.Component)),L=function(e){return sessionStorage.removeItem("user"),e.setUser(null),r.a.createElement(p.a,{to:"/"})},P=(a(120),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={flag:!1,homePage:null},a.movie=a.props.location.movie,a.BackToHome=function(e){a.setState({flag:!0,homePage:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.flag?r.a.createElement(p.a,{to:{pathname:"/http://localhost:8080"}}):(console.log("this movie click : ".concat(this.movie.title)),r.a.createElement("div",{className:"movieInfo"},r.a.createElement("div",{className:"movieContent"},r.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path)}),r.a.createElement("h4",{className:"movieHeader"},this.movie.title?this.movie.title:this.movie.name),r.a.createElement("p",{className:"headText"},"Over View "),r.a.createElement("p",{className:"movieText"},this.movie.overview),r.a.createElement("p",{className:"movieVote"},"Vote : ",this.movie.vote_average)),r.a.createElement("button",{id:"goBack",onClick:function(){return e.BackToHome()}},"Back To List")))}}]),t}(n.Component)),U=(a(121),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isError:!1,RedirectToCart:!1,MyCart:[],user:JSON.parse(sessionStorage.getItem("user")||null)},a.cart=function(){g.a.post("/cart:id",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a.deleteMovie=function(e){console.log(e,a.state.user._id),g.a.delete("/cart/".concat(a.state.user._id,"/").concat(e.id)).then((function(t){a.removeFromCart(e),console.log(t.data)})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"removeFromCart",value:function(e){var t=Object(b.a)(this.state.MyCart),a=t.findIndex((function(t){return t.id==e.id}));t.splice(a,1),this.setState({MyCart:t})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/user/".concat(this.state.user._id)).then((function(t){if(200===t.status){var a=t.data;console.log(a.MyCart),e.setState({MyCart:a.MyCart})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.MyCart.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("div",{class:"image-container"},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(t.poster_path)}),r.a.createElement("span",{class:"score-buble"}," ",t.vote_average)),r.a.createElement("span",{class:"title"}," ",t.title?t.title:t.name),r.a.createElement("button",{onClick:function(){return e.deleteMovie(t)}},"Delete"))}));return this.state.RedirectToCart?r.a.createElement(p.a,{to:"/cart"}):r.a.createElement(j.a,{className:"cartPage"},r.a.createElement("h1",null,"Cart page"),r.a.createElement("ul",null,t))}}]),t}(n.Component)),A=(a(122),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{id:"register-page"},r.a.createElement("div",{className:"registr-User"},r.a.createElement("h1",null,"Registr Page"),r.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),r.a.createElement("br",null),this.state.isError?r.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",r.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(n.Component)),H=(a(123),a(124),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://wallpaperaccess.com/full/1225195.jpg)"}},r.a.createElement("h1",null,"Welcome To Foxx Movie"),r.a.createElement(d.a,null,r.a.createElement("div",{className:"boxsingLinks"},r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eum et modi fugit similique doloribus vitae maxime, in nesciunt illum eius tenetur voluptas, vel totam. Neque possimus eveniet unde voluptatum! Similique tenetur dolore placeat facilis, soluta voluptatem labore at distinctio ducimus, rerum nihil maxime. Animi fuga omnis corporis blanditiis nihil vitae, non harum! Amet quae dolore, quos beatae obcaecati aliquam. Quos adipisci perspiciatis distinctio quaerat molestiaeitia quisquam. Officia, libero tempore pariatur saepe explicabo sit odio ab consectetur numquam dolorem, aperiam mollitia quasi? Sunt tenetur modi eveniet vero quisquam laborum nulla velit eos dolorum quod, provident omnis veritatis. Autem consectetur facilis sint, non eveniet necessitatibus facere ducimus totam magni ab quibusdam nulla reiciendis, dolorem dolor tempore dicta sit temporibus molestias voluptatibus deserunt ea iste beatae exercitationem ipsum? Mod!"),r.a.createElement(d.b,{className:"links",to:"/Login"},"Click Her To Login"),r.a.createElement(d.b,{className:"links",to:"/Registr"},"Click Her To Registr")),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/Login",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(p.b,{exact:!0,path:"/Registr",render:function(){return r.a.createElement(A,null)}}))))}}]),t}(n.Component)),_=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setUser=function(e){console.log("xx "+JSON.stringify(e)),a.setState({user:e})},a.state={user:null};var n=sessionStorage.getItem("user");return n&&(a.state={user:JSON.parse(n)}),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"LinkHead"},r.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg"}),r.a.createElement("div",{id:"head-navLinks"},r.a.createElement(d.b,{to:"/"},"Home"),this.state.user?"":r.a.createElement(d.b,{to:"/Login"},"Login"),this.state.user?"":r.a.createElement(d.b,{to:"/Registr"},"Register"),this.state.user?r.a.createElement(d.b,{to:"/Cart"},"MyCart"):"",this.state.user?r.a.createElement(d.b,{to:"/Logout"},"Logout"):"",r.a.createElement(d.b,{to:"/About"},"About"))),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:M}),r.a.createElement(p.b,{exact:!0,path:"/Login",render:function(){return r.a.createElement(v,{setUser:e.setUser})}}),r.a.createElement(p.b,{exact:!0,path:"/Registr",render:function(){return r.a.createElement(q,{setUser:e.setUser})}}),r.a.createElement(p.b,{exact:!0,path:"/MovieList",component:T}),r.a.createElement(p.b,{exact:!0,path:"/showPage",component:P}),r.a.createElement(p.b,{exact:!0,path:"/Logout",render:function(){return r.a.createElement(L,{setUser:e.setUser})}}),r.a.createElement(p.b,{exact:!0,path:"/Cart",render:function(){return r.a.createElement(U,{setUser:e.setUser})}}),r.a.createElement(p.b,{exact:!0,path:"/About",render:function(){return r.a.createElement(H,{setUser:e.setUser})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(125);s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a(126)},59:function(e,t,a){},77:function(e,t,a){},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.bd586539.chunk.js.map