(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),i=(a(38),a(10)),l=a(11),s=a(13),u=a(12),m=a(14),p=a(9),h=a(6),v=(a(39),a(16)),d=a.n(v),E=a(30),b=a.n(E),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={moviesTop:[],isLoaded:!1,moviesPopular:[],tvShowsTop:[],tvShowsPopular:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(b.a.get("http://localhost:8080/home"));case 2:e=n.sent,t=e.data.movies,console.log(t),a={moviesTop:t,isLoaded:!0,moviesPopular:[],tvShowsTop:[],tvShowsPopular:[]},this.setState(a);case 7:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.moviesTop.map((function(e,t){return o.a.createElement("div",null,o.a.createElement("h4",{key:t},e.title),o.a.createElement("p",null,e.overview),o.a.createElement("p",null,e.vote_average),o.a.createElement("img",{width:"400",src:e.poster_path}))}));return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",null,"Welcome To Seret AND SdarotTV"),o.a.createElement("input",{type:"require"}),o.a.createElement("button",null,"Search"),e)}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"LinkHead"},o.a.createElement(p.b,{to:"/"},"Home"),o.a.createElement(p.b,{to:"/Login"},"Login"),o.a.createElement(p.b,{to:"/Registr"},"Registr")),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.baa0965b.chunk.js.map