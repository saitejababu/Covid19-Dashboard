(this.webpackJsonpcovid19_dashboard=this.webpackJsonpcovid19_dashboard||[]).push([[0],{116:function(e,t,a){e.exports=a(226)},121:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},128:function(e,t,a){},224:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(121),a(72)),s=a(20),i=a.n(s),u=a(32),d=a(14),m=(a(123),a(103)),h=a(264),f=a(267),v=a(268);a(124);var p=function(e){var t=e.title,a=e.cases,n=e.active,c=e.total,o=e.isRed,l=Object(m.a)(e,["title","cases","active","total","isRed"]);return r.a.createElement(h.a,{item:!0,xs:12,md:3,onClick:l.onClick,className:"infoBox ".concat(n&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(f.a,null,r.a.createElement(v.a,{className:"infoBox__title",color:"textSecondary",gutterBottom:!0},t),r.a.createElement(v.a,{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green"),variant:"h5",component:"h1"},a),r.a.createElement(v.a,{className:"infoBox__total",variant:"body1",component:"p"},c," Total Cases")))},b=(a(128),a(54)),E=a.n(b);var g=function(e){var t=e.countries,a=e.info;return console.log(t),console.log(a.country),a.country?a.country?r.a.createElement("div",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"sticky-column"},"Name"),r.a.createElement("th",{className:"sticky-column"},"Total Cases"),r.a.createElement("th",{className:"sticky-column"},"Active Cases"),r.a.createElement("th",{className:"sticky-column"},"Critical Cases"),r.a.createElement("th",{className:"sticky-column"},"Recovered Cases"),r.a.createElement("th",{className:"sticky-column"},"Deaths"),r.a.createElement("th",{className:"sticky-column"},"Tests Performed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",a.country))),r.a.createElement("td",null,a.cases),r.a.createElement("td",null,a.active),r.a.createElement("td",null,a.critical),r.a.createElement("td",null,a.recovered),r.a.createElement("td",null,a.deaths),r.a.createElement("td",null,a.tests)))):void 0:r.a.createElement("div",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"sticky-column"},"Name"),r.a.createElement("th",{className:"sticky-column"},"Total Cases"),r.a.createElement("th",{className:"sticky-column"},"Active Cases"),r.a.createElement("th",{className:"sticky-column"},"Critical Cases"),r.a.createElement("th",{className:"sticky-column"},"Recovered Cases"),r.a.createElement("th",{className:"sticky-column"},"Deaths"),r.a.createElement("th",{className:"sticky-column"},"Tests Performed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,!a.country&&r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("img",{src:E.a,alt:"",width:"50px",height:"40px"}),r.a.createElement("div",{style:{marginTop:10}}," \xa0\xa0\xa0\xa0\xa0Global"))),a.country&&r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",a.country))),r.a.createElement("td",null,a.cases),r.a.createElement("td",null,a.active),r.a.createElement("td",null,a.critical),r.a.createElement("td",null,a.recovered),r.a.createElement("td",null,a.deaths),r.a.createElement("td",null,a.tests)),t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",e.country))),r.a.createElement("td",null,e.cases),r.a.createElement("td",null,e.active),r.a.createElement("td",null,e.critical),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.tests))}))))},y=a(102),C=a(16),k=a.n(C),N=a(279),_=a(280),j={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},O=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},w=function(e,t){var a=e.toUpperCase(),n=0;return t.map((function(e){return a!==e.name.toUpperCase()&&a!==e.value||(n=1),0})),n},x=function(e){return e?"+ ".concat(k()(e).format("0.0a")):"No New Cases "},S=a(21),I={legend:{display:!1},elements:{point:{radius:0}},title:{display:!0,text:"World Wide Cases",fontSize:15},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return k()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return k()(e).format("0a")}}}]}},T=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var D=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(d.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=210").then((function(e){return e.json()})).then((function(e){var a=T(e,t);l(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,"cases"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},height:500,width:1e3,options:I}),"recovered"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"lightgreen",data:o}]},height:500,width:1e3,options:I}),"deaths"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},height:500,width:1e3,options:I}))},R={legend:{display:!1},elements:{point:{radius:0}},title:{display:!0,text:"New Cases data",fontSize:15},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return k()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return k()(e).format("0a")}}}]}},B=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var z=function(e){var t=e.casesType,a=e.country,c=Object(n.useState)({}),o=Object(d.a)(c,2),l=o[0],s=o[1];return console.log(a),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=210"),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){if(e.timeline){var a=B(e.timeline,t);s(a)}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]),r.a.createElement("div",null,"cases"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:l}]},height:500,width:1e3,options:R}),"recovered"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"lightgreen",data:l}]},height:500,width:1e3,options:R}),"deaths"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(S.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:l}]},height:500,width:1e3,options:R}))};var M=function(e){var t=e.info;return r.a.createElement("div",{className:"app__Chart"},r.a.createElement(S.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"cases",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.cases,t.recovered,t.deaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Total Covid Cases in  "+t.country,fontSize:15},gridLines:{display:!1}}}),"\xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0",r.a.createElement(S.Pie,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.cases,t.recovered,t.deaths]}]},options:{legend:{display:!0}},height:"130%"}))},L=a(281),P=a(282);a(224);var A=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(L.a,{center:n,zoom:c},r.a.createElement(P.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:j[t].hex,fillColor:j[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*j[t].multiplier,onMouseOver:function(e){e.target.openPopup()},onMouseOut:function(e){e.target.closePopup()}},r.a.createElement(_.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",k()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",k()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",k()(e.deaths).format("0,0")))))}))}(t,a)))},G=(a(225),a(277)),q=a(278),F=a(275),J=a(269),W=a(270),Y=a(271),U=a(272),V=a(273),$=a(274);var H=function(){return r.a.createElement("div",null,r.a.createElement(J.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement(W.a,{size:36,round:!0})),r.a.createElement(Y.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement(U.a,{size:36,round:!0})),r.a.createElement(V.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement($.a,{size:36,round:!0})))},K=a(276),Q=a(99),X=a.n(Q);function Z(){window.location.reload(!1)}var ee=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(d.a)(o,2),m=s[0],h=s[1],f=Object(n.useState)([]),v=Object(d.a)(f,2),b=v[0],y=v[1],C=Object(n.useState)([]),N=Object(d.a)(C,2),_=N[0],j=N[1],S=Object(n.useState)([]),I=Object(d.a)(S,2),T=I[0],R=I[1],B=Object(n.useState)("cases"),L=Object(d.a)(B,2),P=L[0],J=L[1],W=Object(n.useState)([34.80746,20.4796]),Y=Object(d.a)(W,2),U=Y[0],V=Y[1],$=Object(n.useState)(2.4),Q=Object(d.a)($,2),ee=Q[0],te=Q[1],ae=Object(n.useState)("map"),ne=Object(d.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(n.useState)("display"),le=Object(d.a)(oe,2),se=le[0],ie=le[1],ue=Object(n.useState)("line"),de=Object(d.a)(ue,2),me=de[0],he=de[1],fe=Object(n.useState)(!0),ve=Object(d.a)(fe,2),pe=ve[0],be=ve[1],Ee=Object(n.useState)(!1),ge=Object(d.a)(Ee,2),ye=ge[0],Ce=ge[1],ke=Object(n.useState)(!1),Ne=Object(d.a)(ke,2),_e=Ne[0],je=Ne[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2,flag:e.countryInfo.flag}})),a=O(e);y(t),j(e),R(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Oe=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a||t.target.value,ie("countryDisplay"),he("bar/pie"),0!==w(n,b)){e.next=9;break}alert("No country data found"),Z(),e.next=12;break;case 9:return r="https://disease.sh/v3/covid-19/countries/".concat(n),e.next=12,fetch(r).then((function(e){return e.json()})).then((function(e){c(n),h(e);var t=e.countryInfo.lat,a=e.countryInfo.long;V([0,0]),te(4),t&&a&&(V([t,a]),te(4))}));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),we=pe?"showBlue":"showGrey",xe=ye?"showBlue":"showGrey",Se=_e?"showBlue":"showGrey";return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__header"},r.a.createElement("div",{className:"app__logo"},r.a.createElement(F.a,{title:"Click here to refresh page",placement:"right",arrow:!0},r.a.createElement("img",{src:X.a,onClick:Z,alt:""}))),r.a.createElement("div",{className:"search__box"},r.a.createElement(q.a,{className:"app_CountrySelector",freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,onChange:function(e,t){return Oe(e,t.name)},options:b.map((function(e){return e})),getOptionLabel:function(e){return e.name},renderOption:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(K.a,{style:{backgroundImage:"url(".concat(e.flag,")"),backgroundSize:"cover",width:50,height:35,borderRadius:5}}),"\xa0\xa0\xa0\xa0 ",e.name)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(G.a,Object.assign({},e,{label:"Search by Country",margin:"none",variant:"outlined",InputProps:Object(l.a)(Object(l.a)({},e.InputProps),{},{type:"search"})})))}})),r.a.createElement("div",{className:"app__icons"},r.a.createElement(H,null))," "),r.a.createElement("div",{className:"app__info"},"display"===se&&r.a.createElement("div",{className:"country__info"},r.a.createElement("p",null,"Coronavirus Disease (COVID-19) Dashboard")),"countryDisplay"===se&&m.countryInfo&&m.countryInfo.flag&&r.a.createElement("div",{className:"country__info"},r.a.createElement("img",{src:E.a,alt:"",width:"50px",height:"40px"}),"\xa0\xa0Global \xa0\xa0 >  \xa0\xa0",r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(m.countryInfo.flag,")"),width:50,height:35,borderRadius:5}}),"\xa0\xa0",m.country),r.a.createElement("div",{className:"view__selector"},r.a.createElement("button",{className:we,onClick:function(){ce("map"),be(!0),je(!1),Ce(!1)}},"Map view"),r.a.createElement("button",{className:xe,onClick:function(){ce("table"),Ce(!0),je(!1),be(!1)}},"Table view"),r.a.createElement("button",{className:Se,onClick:function(){ce("graph"),je(!0),be(!1),Ce(!1)}},"Chart view"))),r.a.createElement("div",{className:"app__body"},r.a.createElement("div",{className:"app__stats"},r.a.createElement(p,{onClick:function(e){return J("cases")},isRed:!0,active:"cases"===P,title:"Infected",cases:x(m.todayCases),total:k()(m.cases).format("0.0a")}),r.a.createElement(p,{onClick:function(e){return J("recovered")},active:"recovered"===P,title:"Recovered",cases:x(m.todayRecovered),total:k()(m.recovered).format("0.0a")}),r.a.createElement(p,{onClick:function(e){return J("deaths")},isRed:!0,active:"deaths"===P,title:"Deaths",cases:x(m.todayDeaths),total:k()(m.deaths).format("0.0a")})),"map"===re&&r.a.createElement("div",{className:"app__map"},r.a.createElement(A,{countries:_,casesType:P,center:U,zoom:ee})),"table"===re&&r.a.createElement("div",{className:"app__table"},r.a.createElement(g,{countries:T,info:m})),"graph"===re&&r.a.createElement("div",null,"bar/pie"===me&&r.a.createElement("div",{className:"both__display"},r.a.createElement("div",{className:"app__bar"},r.a.createElement(z,{casesType:P,country:a})),r.a.createElement("div",{className:"app__bar"},r.a.createElement(M,{info:m}))),"line"===me&&r.a.createElement("div",{className:"app__chart"},r.a.createElement(D,{casesType:P}))))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/Globe_img.a09d7996.JPG"},99:function(e,t,a){e.exports=a.p+"static/media/covid_logo.e19d6f21.JPG"}},[[116,1,2]]]);
//# sourceMappingURL=main.7e57c4a6.chunk.js.map