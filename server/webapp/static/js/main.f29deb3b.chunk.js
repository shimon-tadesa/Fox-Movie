(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{33:function(e,t,n){e.exports=n(64)},38:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),l=(n(38),n(10)),i=n(11),s=n(13),u=n(12),m=n(14),p=n(9),h=n(6),v=(n(39),n(16)),d=n.n(v),E=n(30),b=n.n(E),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={moviesTop:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],tvShowsPopular:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,n;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(b.a.get("http://localhost:8080/home"));case 2:e=a.sent,t=e.data.movies,console.log(t),n={moviesTop:t,isLoaded:!0,moviesPopular:[],tvShowsTop:[],tvShowsPopular:[]},this.setState(n);case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return o.a.createElement("div",null,o.a.createElement("h4",{key:t},e.title),o.a.createElement("p",null,e.overview),o.a.createElement("p",null,e.vote_average),o.a.createElement("img",{style:{width:"400px",height:"200px"},src:e.poster_path}))}));return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",null,"Welcome To Seret AND SdarotTV"),o.a.createElement("input",{type:"require"}),o.a.createElement("button",null,"Search"),o.a.createElement("section",null,e))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement(p.b,{to:"/"},"Home"),o.a.createElement(p.b,{to:"/Login"},"Login"),o.a.createElement(p.b,{to:"/Registr"},"Registr")),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:w}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f29deb3b.chunk.js.map