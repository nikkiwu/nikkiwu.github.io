(window["webpackJsonppersonal-website"]=window["webpackJsonppersonal-website"]||[]).push([[0],{121:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(29),r=t.n(c),m=(t(79),t(30)),o=t(31),i=t(39),s=t(32),u=t(40),E=(t(80),t(49),t(15)),p=t(19),d=t(125),b=t(129),h=t(65),g=t(130),N=(t(50),function(){return l.a.createElement(b.a,{bg:"transparent",expand:"lg"},l.a.createElement(h.a,null,l.a.createElement(E.b,{className:"logo",to:"/portfolio"},"Nikki Wu")),l.a.createElement(b.a.Toggle,{className:"navbar-dark border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(g.a,{className:"nav-links"},l.a.createElement(E.b,{className:"nav-link",to:"/about"},'"About"'),l.a.createElement(E.b,{className:"nav-link",to:"/project"},'"Projects"'),l.a.createElement(E.b,{className:"nav-link",to:"/contact"},'"Contact"'))))}),f=t(70),v=t.n(f),j=t(8),x=t(9),T=t(126),k=t(127),w=(t(95),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"aboutme-header"},'"ABOUT ME"'),l.a.createElement("div",{className:"aboutme-text"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci animi at",l.a.createElement("br",null),l.a.createElement("br",null),"consequatur cupiditate dolor eaque earum eligendi eum eveniet expedita id laborum magnam maxime",l.a.createElement("br",null),l.a.createElement("br",null),"nemo nisi numquam officiis perspiciatis quis quo quod ratione repellendus, similique soluta veritatis voluptas?"),l.a.createElement("div",null,l.a.createElement("a",{className:"aboutme-contact",href:v.a,target:"_blank",rel:"noopener noreferrer"},'"RESUME"'),l.a.createElement("a",{className:"aboutme-contact",href:"mailto:nikkiwu9@gmail.com",rel:"noopener noreferrer",target:"_blank"},'"EMAIL"'))),l.a.createElement("div",{className:"aboutme-icon"},l.a.createElement(j.a,{icon:x.g}),l.a.createElement(j.a,{icon:x.c}),l.a.createElement(j.a,{icon:x.a}),l.a.createElement(j.a,{icon:x.f}),l.a.createElement(j.a,{icon:x.d}),l.a.createElement(j.a,{icon:x.e}),l.a.createElement(j.a,{icon:x.h})),l.a.createElement(d.a,null,l.a.createElement("h1",{className:"aboutme-sites"},'"MOST VISITED"'),l.a.createElement(T.a,{className:"site-container"},l.a.createElement(k.a,{className:"site-box box1",md:!0},l.a.createElement("div",{className:"site-text"},l.a.createElement("a",{href:"https://www.behance.net/",target:"_blank",rel:"noopener noreferrer"},"Behance"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A optio sint voluptas. Aut dolore doloremque fugit labore magnam temporibus, voluptatem."))),l.a.createElement(k.a,{className:"site-box box2",md:!0},l.a.createElement("div",{className:"site-text"},l.a.createElement("a",{href:"https://bleacherreport.com/nba",target:"_blank",rel:"noopener noreferrer"},"Bleacher Report"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fuga hic illum iste iure magni possimus quaerat vel vero? Praesentium."))),l.a.createElement(k.a,{className:"site-box box3",md:!0},l.a.createElement("div",{className:"site-text"},l.a.createElement("a",{href:"https://www.bonappetit.com/",target:"_blank",rel:"noopener noreferrer"},"Bon App\xe9tit"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur est odio perspiciatis quam qui repellat suscipit tempora tempore! Dolorem, facilis.")))))))}),S=t(71),C=t(16),O=t.n(C),y=t(72),q=t.n(y),A=t(36),B=t.n(A),F=t(37),I=t.n(F),L=t(26),M=t.n(L);t(96);var R=function(e){return l.a.createElement(q.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(B.a,{fluid:!0},l.a.createElement(I.a,{className:"justify-content-center py-5"},l.a.createElement(M.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"contact-title"},e.title)))))},D=function(e){return l.a.createElement(B.a,{fluid:!0},l.a.createElement(I.a,{className:"justify-content-center"},l.a.createElement(M.a,{md:8},e.children)))},U=t(128),W=t(73),_=t.n(W),G=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(s.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,l=a.name;t.setState(Object(S.a)({},l,n))},t.handleSubmit=function(e){e.preventDefault(),console.log(e.target),t.setState({disabled:!0}),_.a.post("http://localhost:3030/api/email",t.state).then(function(e){e.data.success?t.setState({disabled:!1,emailSent:!0}):t.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),t.setState({disabled:!1,emailSent:!1})})},t.state={name:"",email:"",message:"",disabled:!1,emailSent:null},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{title:this.props.title}),l.a.createElement(D,null,l.a.createElement(O.a,{onSubmit:this.handleSubmit},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(O.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(O.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(O.a.Control,{id:"message",name:"message",as:"textarea",rows:"4",value:this.state.message,onChange:this.handleChange})),l.a.createElement(U.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Submit"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),J=t(22),P=t.n(J),V=(t(121),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"justify-content-md-between"},l.a.createElement(T.a,null,l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b})))),l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b}))))),l.a.createElement(T.a,null,l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b})))),l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b}))))),l.a.createElement(T.a,null,l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b})))),l.a.createElement(k.a,{className:"project",md:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"project-image",src:P.a,alt:""}),l.a.createElement("p",null,l.a.createElement(j.a,{className:"icon",icon:x.b})))))))}),X=function(e){return l.a.createElement("div",{className:"home-container"},l.a.createElement("h1",{className:"home-header"},e.title),l.a.createElement("h1",{className:"home-text"},e.nameText),l.a.createElement("h1",{className:"home-text"},e.jobText),l.a.createElement("h1",{className:"home-text"},e.locationText),l.a.createElement("div",{className:"desktop-text-container"},l.a.createElement("h1",null,"nikki wu -",l.a.createElement("br",null),"I am a ",l.a.createElement("span",{className:"title-span"},"Front-End/React Native Developer")," with an eye for Minimalist and Intuitive ",l.a.createElement("span",{className:"title-span"},"UX/UI Design"),".",l.a.createElement("br",null),"Based in Vancouver but looking for opportunities in Toronto.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"aboutme-header"},l.a.createElement(E.b,{to:"/about"},e.aboutTitle)),l.a.createElement("button",null,l.a.createElement(E.b,{to:"/contact"},e.buttonText))),l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-header"},l.a.createElement(E.b,{to:"/project"},e.projectTitle)),l.a.createElement("hr",null),l.a.createElement(V,null)))},$=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(s.a)(a).call(this,e))).state={home:{title:'"INTRO"',nameText:"Nikki Wu",jobText:"Front End x React Native Developer",locationText:"Based in Vancouver"},about:{aboutTitle:'"ABOUT ME"',buttonText:"let's connect"},project:{projectTitle:'"PROJECT"'},contact:{title:'"CONTACT"'}},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"p-0",fluid:!0},l.a.createElement(N,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/portfolio",render:function(){return l.a.createElement(X,{title:e.state.home.title,nameText:e.state.home.nameText,jobText:e.state.home.jobText,locationText:e.state.home.locationText,aboutTitle:e.state.about.aboutTitle,buttonText:e.state.about.buttonText,projectTitle:e.state.project.projectTitle})}}),l.a.createElement(p.a,{path:"/about",component:w}),l.a.createElement(p.a,{path:"/contact",render:function(){return l.a.createElement(G,{title:e.state.contact.title})}}),l.a.createElement(p.a,{path:"/project",exact:!0,component:V}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(122);r.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,a,t){e.exports=t.p+"static/media/home-page-image.160e43e7.jpg"},49:function(e,a,t){},50:function(e,a,t){},70:function(e,a,t){e.exports=t.p+"static/media/Nikki Wu Resume.d5abf2c2.pdf"},74:function(e,a,t){e.exports=t(123)},79:function(e,a,t){},80:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.b3f2f68b.chunk.js.map