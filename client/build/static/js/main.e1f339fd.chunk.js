(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(37)},28:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(18),c=t.n(s),i=(t(28),t(19)),l=t(6),d=t(7),m=t(9),o=t(8),u=t(10),h={1:"mood",3:"motorcycle",5:"pets",7:"public",9:"wb_sunny",11:"trending_up",13:"shopping_cart",15:"school",17:"restaurant",19:"pan_tool",21:"flight_takeoff",23:"flash_on",25:"brightness_2",27:"directions_bike",29:"favorite",31:"filter_hdr",33:"grade",35:"home"},f=function(e){function a(e){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).call(this,e))}return Object(u.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=h[this.props.cardId%2===1?this.props.cardId:this.props.cardId+1],t="card_box card_box-".concat(this.props.cardId);return!0===this.props.removed?t+=" card_box__hide":!0===this.props.flipped&&(t+=" card_box__active"),n.a.createElement("div",{className:t,onClick:function(){return e.props.cardClicked(e.props.cardId)}},n.a.createElement("div",{className:"card_box__inner"},n.a.createElement("div",{className:"card_box__front"}),n.a.createElement("div",{className:"card_box__back"},n.a.createElement("i",{className:"large material-icons"},a))))}}]),a}(r.Component),p={EASY:12,MEDIUM:24,HARD:36},v=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).gameWonMessage="",t.initGame=function(e){t.quitGame();for(var a=[],r=0,s=new Array(p[e]);r<p[e];)a.push(n.a.createElement(f,{key:r,cardId:r,cardClicked:t.cardClickedHandler,removed:!1,flipped:!1})),s[r]=r,r++;for(var c=a.length-1;c>0;c--){var l=Math.floor(Math.random()*(c+1)),d=[a[l],a[c]];a[c]=d[0],a[l]=d[1];var m=[s[l],s[c]];s[c]=m[0],s[l]=m[1]}var o=Object.keys(s).reduce(function(e,a){return Object.assign({},e,Object(i.a)({},s[a],a))},{});t.setState({game:e,gameCards:a,mapIdtoIndex:o,remaining:p[e]}),t.tick=setInterval(function(){return t.setState({time:t.state.time+1})},1e3)},t.renderCards=function(){if(null!==t.state.game)return t.state.gameCards},t.cardClickedHandler=function(e){if(!t.state.freeze){var a=t.state.selectedCard,r=e%2===1?e:e+1,n=a%2===1?a:a+1;t.showCard(e),null!==a?(a!==e&&n===r?(setTimeout(function(){return t.removeCards(a,e)},800),t.setState({freeze:!0})):(setTimeout(function(){return t.hideCards(a,e)},500),t.setState({missed:t.state.missed+1,freeze:!0})),t.setState({selectedCard:null})):t.setState({selectedCard:e})}},t.removeCards=function(e,a){var r=t.state.gameCards.slice();r[t.state.mapIdtoIndex[e]]=n.a.createElement(f,{key:e,cardId:e,cardClicked:t.cardClickedHandler,removed:!0,flipped:!1}),r[t.state.mapIdtoIndex[a]]=n.a.createElement(f,{key:a,cardId:a,cardClicked:t.cardClickedHandler,removed:!0,flipped:!1}),t.state.remaining-2<=0?t.renderGameWonMessage():t.setState({gameCards:r,freeze:!1,selectedCard:null,remaining:t.state.remaining-2})},t.state={game:null,selectedCard:null,remaining:null,gameCards:[],mapIdtoIndex:[],missed:0,time:0,freeze:!1},String.prototype.toMMSS=function(){var e=parseInt(this,10),a=Math.floor((e-3600*Math.floor(e/3600))/60),t=e-3600*Math.floor(e/3600)-60*a;return a<10&&(a="0"+a),t<10&&(t="0"+t),a+":"+t},t}return Object(u.a)(a,e),Object(d.a)(a,[{key:"showCard",value:function(e){var a=this.state.gameCards.slice();a[this.state.mapIdtoIndex[e]]=n.a.createElement(f,{key:e,cardId:e,cardClicked:this.cardClickedHandler,removed:!1,flipped:!0}),this.setState({gameCards:a})}},{key:"hideCards",value:function(e,a){var t=this.state.gameCards.slice();t[this.state.mapIdtoIndex[e]]=n.a.createElement(f,{key:e,cardId:e,cardClicked:this.cardClickedHandler,removed:!1,flipped:!1}),t[this.state.mapIdtoIndex[a]]=n.a.createElement(f,{key:a,cardId:a,cardClicked:this.cardClickedHandler,removed:!1,flipped:!1}),this.setState({gameCards:t,freeze:!1,selectedCard:null})}},{key:"renderGameWonMessage",value:function(){var e=(this.state.time+"").toMMSS(),a=this.state.missed,t=this.state.game;this.gameWonMessage=n.a.createElement("div",{className:"win_message"},n.a.createElement("h1",null,"Great job!"),n.a.createElement("p",null,"Level: ",t),n.a.createElement("p",null,"Time: ",e),n.a.createElement("p",null,"Missed: ",a)),this.setState({game:null,gameCards:[],missed:0,remaining:0,time:0}),clearInterval(this.tick)}},{key:"renderDashboard",value:function(){if(null!==this.state.game)return n.a.createElement("p",{className:"dashboard"},"Level: ",this.state.game," Time: ",(this.state.time+"").toMMSS()," Missed: ",this.state.missed)}},{key:"quitGame",value:function(){this.gameWonMessage="",this.setState({game:null,gameCards:[],missed:0,remaining:0,time:0}),clearInterval(this.tick)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card__col"},n.a.createElement("div",{className:"card blue-grey darken-1"},n.a.createElement("div",{className:"card-content white-text"},n.a.createElement("span",{className:"card-title"},"Match Up Memory Card Game"),n.a.createElement("div",{className:"card-action card__menu"},n.a.createElement("a",{onClick:function(){return e.initGame("EASY")},className:"waves-effect waves-teal btn-flat"},"Easy"),n.a.createElement("a",{onClick:function(){return e.initGame("MEDIUM")},className:"waves-effect waves-teal btn-flat"},"Medium"),n.a.createElement("a",{onClick:function(){return e.initGame("HARD")},className:"waves-effect waves-teal btn-flat"},"Hard"),n.a.createElement("a",{onClick:function(){return e.quitGame()},className:"waves-effect waves-teal btn-flat"},"Quit")),this.renderDashboard()),n.a.createElement("div",{className:"game ".concat(this.state.game)},this.renderCards(),this.gameWonMessage)))))}}]),a}(r.Component),g=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"},n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"/",className:"brand-logo"},"Match up"),n.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Home")))))))}}]),a}(r.Component),C=t(20),E=t(5),b=n.a.createElement(C.a,null,n.a.createElement(g,null),n.a.createElement("div",null,n.a.createElement(E.a,{exact:!0,path:"/",component:v})));c.a.render(b,document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e1f339fd.chunk.js.map