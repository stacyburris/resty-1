(window["webpackJsonpdemo-react"]=window["webpackJsonpdemo-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),u=n(4),c=n(3),s=n(0),o=n.n(s),l=n(7),i=n.n(l),p=(n(16),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",null,"RESTy")}}]),n}(o.a.Component)),d=(n(17),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("footer",null,"by Sara Strasner")}}]),n}(o.a.Component)),h=n(5),m=n.n(h),f=n(10),v=n(8),b=(n(19),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).callAPI=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,a,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state.URL,a=r.state.method,e.next=5,fetch(n,{method:a,mode:"cors"}).then((function(e){if(200===e.status){var t,n=Object(f.a)(e.headers.entries());try{for(n.s();!(t=n.n()).done;){var a=t.value,u=a[0]+": "+a[1];console.log("HEADERS",u),r.setState({headers:u})}}catch(c){n.e(c)}finally{n.f()}return e.json()}}));case 5:u=e.sent,r.props.giveAPIresults(u,r.state.headers);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleInput=function(e){e.preventDefault(),r.setState({URL:e.target.value})},r.handleSubmit=function(e){e.preventDefault();var t=r.state.words;r.setState({URL:t})},r.handleRadio=function(e){r.setState({method:e.target.value})},r.state={URL:"",method:"",words:"",headers:""},r}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.callAPI},o.a.createElement("label",null,"URL:",o.a.createElement("input",{onChange:this.handleInput,type:"text",name:"URL"})),o.a.createElement("input",{type:"submit",value:"Go!",id:"button"})),o.a.createElement("div",{onChange:this.handleRadio},o.a.createElement("input",{type:"radio",value:"Get",name:"request"})," GET",o.a.createElement("input",{type:"radio",value:"Post",name:"request"})," POST",o.a.createElement("input",{type:"radio",value:"Put",name:"request"})," PUT",o.a.createElement("input",{type:"radio",value:"Delete",name:"request"})," DELETE"))}}]),n}(o.a.Component)),E=n(9),j=n.n(E),O=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.headers?o.a.createElement("div",null,"Headers: ",this.props.headers," "):"",this.props.count?o.a.createElement("div",{"data-testid":"count"},"Count: ",this.props.count):"",this.props.results?o.a.createElement("div",null,o.a.createElement(j.a,{src:this.props.results})):"")}}]),n}(o.a.Component),y=(n(20),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).updateState=function(e,t){r.setState({headers:t}),r.setState({results:e}),r.setState({count:e.count})},r.state={count:"",results:"",headers:""},r}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(b,{giveAPIresults:this.updateState}),o.a.createElement(O,{results:this.state.results,count:this.state.count,headers:this.state.headers}),o.a.createElement(d,null))}}]),n}(o.a.Component)),S=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement(y,null)}}]),n}(o.a.Component),g=document.getElementById("root");i.a.render(o.a.createElement(S,null),g)}],[[11,1,2]]]);
//# sourceMappingURL=main.744e9e8b.chunk.js.map