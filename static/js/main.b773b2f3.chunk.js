(this.webpackJsonpfacerecognitionapp=this.webpackJsonpfacerecognitionapp||[]).push([[0],{102:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(45),s=a.n(r),i=(a(102),a(90)),c=a(91),o=a(96),m=a(95),u=a(46),h=a.n(u),p=function(e){var t=e.onRouteChange;return e.isSignedIn?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim underline pa3 pointer"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim underline pa3 pointer"},"Sign In"),l.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim underline pa3 pointer"},"Register"))},d=(a(139),function(e){var t=e.imageUrl,a=e.box;return l.a.createElement("div",{className:"center ma"},l.a.createElement("div",{className:"absolute mt2"},l.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),l.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),b=function(e){var t=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer"},"Register")))))},E=function(e){var t=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})),l.a.createElement("div",{className:"lh-copy mt3"}))))},g=a(92),f=a.n(g),A=a(93),w=a.n(A),v=(a(140),function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:15},style:{height:150,width:150}},l.a.createElement("div",{className:"Tilt-inner pa3"},l.a.createElement("img",{style:{paddingTop:"5px"},src:w.a,alt:"Logo"}))))}),N=(a(141),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return l.a.createElement("div",null,l.a.createElement("p",{className:"f3"},"Hearty will detect faces in your pictures. Try it out!"),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"form center pa4 br3 shadow-5"},l.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),l.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),C=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"white f3"},"Your current rank is..."),l.a.createElement("div",{className:"white f1"},"#1"))},k=a(94),y=a.n(k),F=(a(353),new h.a.App({apiKey:"533cf5a6159c43fc9fcc256408e680b9"})),S={particles:{number:{value:60,density:{enable:!0,value_area:800}}}},z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),l=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*l,rightCol:n-t.right_col*n,bottomRow:l-t.bottom_row*l}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),F.models.predict(h.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,r=e.box;return l.a.createElement("div",{className:"App"},l.a.createElement(y.a,{className:"particles",params:S}),l.a.createElement(p,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(C,null),l.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),l.a.createElement(d,{box:r,imageUrl:a})):"signin"===n?l.a.createElement(b,{onRouteChange:this.onRouteChange}):l.a.createElement(E,{onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(354);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a(355)}},[[97,1,2]]]);
//# sourceMappingURL=main.b773b2f3.chunk.js.map