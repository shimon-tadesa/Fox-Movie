(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),s=a.n(r),i=a(5),c=a(6),l=a(8),m=a(7),u=a(9),d=a(4),h=a(18),p=(a(59),a(17)),g=a.n(p),v=(a(77),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.login=function(){a.setState({isError:!1}),g.a.post("/users/login",{email:a.state.email,password:a.state.password}).then((function(e){200===e.status?(sessionStorage.setItem("user",JSON.stringify(e.data)),a.props.setUser(e.data),a.setState({RedirectToHome:!0})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?o.a.createElement(h.a,{to:"/"}):o.a.createElement("div",{id:"login-page",style:{backgroundImage:"url(https://images5.alphacoders.com/674/674047.jpg)"}},o.a.createElement("div",{className:"Login-User"},o.a.createElement("h1",null,"Login Page"),o.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),o.a.createElement("br",null),this.state.isError?o.a.createElement("p",{style:{color:"red"}},"Login Error"):"",o.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.login},"Login")))}}]),t}(n.Component)),f=a(19),E=a.n(f),b=a(24),w=a(16),S=a.n(w),y=(a(99),function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 col-lg-offset-4"},o.a.createElement("form",{action:"",onSubmit:e.handleSubmit},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{className:"form-control",placeholder:"search movie",type:"text",onChange:e.handleChange})))))}),k=a(125),C=a(128),T=(a(100),function(e){return o.a.createElement(k.a,{md:"3"},o.a.createElement(C.a,null,e.myImage=o.a.createElement(C.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.myImage)}),o.a.createElement(C.a.Body,null,e.myTitle=o.a.createElement(C.a.Title,{className:"card-title"},e.myTitle))))}),O=function(e){return e.movies.map((function(e,t){return o.a.createElement(T,{key:t,myImage:e.poster_path,myTitle:e.title})}))},j=(a(101),a(126)),N=a(127),R=a(20),I=a.n(R),x=(a(117),a(118),"https://image.tmdb.org/t/p/w500"),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),S.a.get("https://api.themoviedb.org/3/search/multi?api_key=".concat("d759a614b16c0c1c0295b4313e94aeec","&query=").concat(a.state.searchTerm)).then((function(e){console.log(e.data.results),a.setState({movies:Object(b.a)(e.data.results),totalResuolts:e.data.total_results})})).catch((function(e){console.log(e)})),console.log("search is done")},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a.movieInfo=function(e){a.setState({flag:!0,movie:e})},a.addItemToList=function(e){sessionStorage.length>0?S.a.post("/cart/".concat(a.state.user._id),{movie:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})):a.setState({flag2:!0})},a.state={moviesTop:[],moviesTop2:[],moviesTop3:[],movies:[],isLoaded:!1,searchTerm:"",tvShowsPopular:[],tvShowsPopular2:[],tvShowsPopular3:[],totalResuolts:0,currentPage:1,movie:null,flag:!1,flag2:!1,user:JSON.parse(sessionStorage.getItem("user")||null)},console.log("constructor is working"),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,o,r,s,i,c,l,m,u;return E.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,E.a.awrap(S.a.get("http://localhost:3000/home"));case 2:return e=d.sent,t=e.data.movies,console.log(t),console.log("componentDidMount page 1 is working"),this.setState({moviesTop:t}),d.next=9,E.a.awrap(S.a.get("http://localhost:3000/home/two"));case 9:return a=d.sent,n=a.data.movies,console.log(t),console.log("componentDidMount for page2 is working"),this.setState({moviesTop2:n}),d.next=16,E.a.awrap(S.a.get("http://localhost:3000/home/three"));case 16:return o=d.sent,r=o.data.movies,console.log(r),console.log("componentDidMount for page2 is working"),this.setState({moviesTop3:r}),d.next=23,E.a.awrap(S.a.get("http://localhost:3000/home/tv"));case 23:return s=d.sent,i=s.data.tvshow,console.log(i),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular:i}),d.next=30,E.a.awrap(S.a.get("http://localhost:3000/home/tv/two"));case 30:return c=d.sent,l=c.data.tvshow,console.log(l),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular2:l}),d.next=37,E.a.awrap(S.a.get("http://localhost:3000/home/tv/three"));case 37:m=d.sent,u=m.data.tvshow,console.log(u),console.log("componentDidMount2  is working"),this.setState({tvShowsPopular3:u});case 42:case"end":return d.stop()}}),null,this)}},{key:"render",value:function(){var e=this;if(this.state.flag)return o.a.createElement(h.a,{to:{pathname:"/ShowPage",movie:this.state.movie}});if(this.state.flag2)return o.a.createElement(h.a,{to:{pathname:"/About"}});var t={infinite:!0,speed:650,slidesToShow:5,slidesToScroll:4,arrows:!0},a=this.state.moviesTop.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),n=this.state.moviesTop2.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),r=this.state.moviesTop3.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),s=this.state.tvShowsPopular.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),i=this.state.tvShowsPopular2.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))})),c=this.state.tvShowsPopular3.map((function(t,a){return o.a.createElement("div",{className:"carussel-card"},o.a.createElement("img",{src:"".concat(x,"/").concat(t.poster_path),onClick:function(){return e.movieInfo(t)},alt:""}),o.a.createElement("div",null,t.title),o.a.createElement("button",{onClick:function(){return e.addItemToList(t)}},"Add"))}));return o.a.createElement("div",{className:"Home "},o.a.createElement("h1",{id:"header-title"},"Welcome To Fox Movie"),o.a.createElement(j.a,null,o.a.createElement(y,{handleSubmit:this.handleSubmit,handleChange:this.handleChange})),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"}," Movies upcoming "),this.state.totalResuolts?"":o.a.createElement(I.a,t,a)),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"}," Movies Popular "),this.state.totalResuolts?"":o.a.createElement(I.a,t,n)),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"}," Movies Top Rated "),this.state.totalResuolts?"":o.a.createElement(I.a,t,r)),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"}," Popular TV Series  "),this.state.totalResuolts?"":o.a.createElement(I.a,t,s)),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"},"Updated TV Series"),this.state.totalResuolts?"":o.a.createElement(I.a,t,i)),o.a.createElement(j.a,null,this.state.totalResuolts?"":o.a.createElement("div",{className:"col-md-12 gener-title"},"Top Rated TV Series "),this.state.totalResuolts?"":o.a.createElement(I.a,t,c)),o.a.createElement(j.a,null,o.a.createElement(N.a,null,o.a.createElement(O,{movies:this.state.movies}))))}}]),t}(n.Component),M=(a(119),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",RedirectToHome:!1,isError:!1},a.registr=function(){a.setState({isError:!1}),g.a.post("/users/registr",{email:a.state.email,password:a.state.password,MyCart:[]}).then((function(e){201===e.status?(a.setState({RedirectToHome:!0}),a.props.setUser({email:a.state.email,password:a.state.password}),sessionStorage.setItem("user",JSON.stringify(e.data))):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=!this.state.email||!this.state.password;return this.state.RedirectToHome?o.a.createElement(h.a,{to:"/"}):o.a.createElement("div",{id:"register-page",style:{backgroundImage:"url(https://2.bp.blogspot.com/-uwrkx3Dc5ck/TscHGpuuTVI/AAAAAAAAAhU/8DeylnYxkkQ/w1200-h630-p-k-no-nu/iron-man-background-11-730172.jpg)"}},o.a.createElement("div",{className:"registr-User"},o.a.createElement("h1",null,"Registr Page"),o.a.createElement("input",{type:"email",onChange:function(t){return e.setState({email:t.target.value})},required:"required",placeholder:"email"}),o.a.createElement("br",null),o.a.createElement("input",{type:"password",onChange:function(t){return e.setState({password:t.target.value})},required:"required",placeholder:"password"}),o.a.createElement("br",null),this.state.isError?o.a.createElement("p",{style:{color:"red"}},"Registr Error"):"",o.a.createElement("button",{class:"btn btn-success login-btn",disabled:t,onClick:this.registr},"Registr")))}}]),t}(n.Component)),A=function(e){return sessionStorage.removeItem("user"),e.setUser(null),o.a.createElement(h.a,{to:"/"})},q=(a(120),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={flag:!1,homePage:null},a.movie=a.props.location.movie,a.BackToHome=function(e){a.setState({flag:!0,homePage:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.flag?o.a.createElement(h.a,{to:{pathname:"/"}}):(console.log("this movie click : ".concat(this.movie.title)),o.a.createElement("div",{className:"movieInfo"},o.a.createElement("div",{className:"movieContent"},o.a.createElement("img",{className:"poster",src:"https://image.tmdb.org/t/p/w300".concat(this.movie.poster_path),alt:""}),o.a.createElement("h4",{className:"movieHeader"},this.movie.title?this.movie.title:this.movie.name),o.a.createElement("p",{className:"headText"},"Over View "),o.a.createElement("p",{className:"movieText"},this.movie.overview),o.a.createElement("span",{className:"score-buble1"},this.movie.vote_average)),o.a.createElement("button",{id:"goBack",onClick:function(){return e.BackToHome()}},"Back To Home")))}}]),t}(n.Component)),U=(a(121),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isError:!1,RedirectToCart:!1,MyCart:[],user:JSON.parse(sessionStorage.getItem("user")||null)},a.cart=function(){g.a.post("/cart:id",{MyCart:a.state.MyCart}).then((function(e){201===e.status?(a.setState({RedirectToCart:!0}),a.props.setUser({MyCart:a.state.MyCart})):(a.setState({isError:!0}),console.log("error code : ".concat(e.status)))})).catch((function(e){a.setState({isError:!0}),console.log(e)}))},a.deleteMovie=function(e){console.log(e,a.state.user._id),g.a.delete("/cart/".concat(a.state.user._id,"/").concat(e.id)).then((function(t){a.removeFromCart(e),console.log(t.data)})).catch((function(e){console.log(e)}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"removeFromCart",value:function(e){var t=Object(b.a)(this.state.MyCart),a=t.findIndex((function(t){return t.id===e.id}));t.splice(a,1),this.setState({MyCart:t})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/user/".concat(this.state.user._id)).then((function(t){if(200===t.status){var a=t.data;console.log(a.MyCart),e.setState({MyCart:a.MyCart})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.MyCart.map((function(t,a){return o.a.createElement("li",{key:a},o.a.createElement("div",{class:"image-container"},o.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(t.poster_path),alt:""}),o.a.createElement("span",{class:"score-buble"}," ",t.vote_average)),o.a.createElement("span",{class:"title"}," ",t.title?t.title:t.name),o.a.createElement("button",{onClick:function(){return e.deleteMovie(t)}},"Delete"))}));return this.state.RedirectToCart?o.a.createElement(h.a,{to:"/cart"}):o.a.createElement(j.a,{className:"cartPage"},o.a.createElement("h1",null,"User Cart-List"),o.a.createElement("ul",null,t))}}]),t}(n.Component)),P=(a(122),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={flag1:!1,flag2:!1},a.goToRegister=function(){a.setState({flag1:!0})},a.goToLogin=function(){a.setState({flag2:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.flag1?o.a.createElement(h.a,{to:{pathname:"/Registr"}}):this.state.flag2?o.a.createElement(h.a,{to:{pathname:"/Login"}}):o.a.createElement("div",{className:"movieInfo",style:{backgroundImage:"url(https://wallpaperaccess.com/full/1225195.jpg)"}},o.a.createElement("h1",null,"Welcome To Foxx Movie"),o.a.createElement("div",{className:"boxsingLinks"},o.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eum et modi fugit similique doloribus vitae maxime, in nesciunt illum eius tenetur voluptas, vel totam. Neque possimus eveniet unde voluptatum! Similique tenetur dolore placeat facilis, soluta voluptatem labore at distinctio ducimus, rerum nihil maxime. Animi fuga omnis corporis blanditiis nihil vitae, non harum! Amet quae dolore, quos beatae obcaecati aliquam. Quos adipisci perspiciatis distinctio quaerat molestiaeitia quisquam. Officia, libero tempore pariatur saepe explicabo sit odio ab consectetur numquam dolorem, aperiam mollitia quasi? Sunt tenetur modi eveniet vero quisquam laborum nulla velit eos dolorum quod, provident omnis veritatis. Autem consectetur facilis sint, non eveniet necessitatibus facere ducimus totam magni ab quibusdam nulla reiciendis, dolorem dolor tempore dicta sit temporibus molestias voluptatibus deserunt ea iste beatae exercitationem ipsum? Mod!"),o.a.createElement("button",{className:"buttomLogin",onClick:function(){return e.goToLogin()}},"Click Her To Login"),o.a.createElement("button",{className:"buttomRegister",onClick:function(){return e.goToRegister()}},"Click Her To Registr")))}}]),t}(n.Component)),_=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setUser=function(e){a.setState({user:e})},a.state={user:null};var n=sessionStorage.getItem("user");return n&&(a.state={user:JSON.parse(n)}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement("img",{id:"myLogo",src:"https://i.pinimg.com/originals/d0/7e/81/d07e81371cfc20ad1bf670847cc3fa57.jpg",alt:""}),o.a.createElement("div",{id:"head-navLinks"},o.a.createElement(d.b,{to:"/"},"Home"),this.state.user?"":o.a.createElement(d.b,{to:"/Login"},"Login"),this.state.user?"":o.a.createElement(d.b,{to:"/Registr"},"Register"),this.state.user?o.a.createElement(d.b,{to:"/Cart"},"MyCart"):"",this.state.user?o.a.createElement(d.b,{to:"/Logout"},"Logout"):"",o.a.createElement(d.b,{to:"/About"},"About"))),o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"/",component:L}),o.a.createElement(h.b,{exact:!0,path:"/Login",render:function(){return o.a.createElement(v,{setUser:e.setUser})}}),o.a.createElement(h.b,{exact:!0,path:"/Registr",render:function(){return o.a.createElement(M,{setUser:e.setUser})}}),o.a.createElement(h.b,{exact:!0,path:"/MovieList",component:O}),o.a.createElement(h.b,{exact:!0,path:"/showPage",component:q}),o.a.createElement(h.b,{exact:!0,path:"/Logout",render:function(){return o.a.createElement(A,{setUser:e.setUser})}}),o.a.createElement(h.b,{exact:!0,path:"/Cart",render:function(){return o.a.createElement(U,{setUser:e.setUser})}}),o.a.createElement(h.b,{exact:!0,path:"/About",render:function(){return o.a.createElement(P,{setUser:e.setUser})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(123);s.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,t,a){e.exports=a(124)},59:function(e,t,a){},77:function(e,t,a){},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.789665e7.chunk.js.map