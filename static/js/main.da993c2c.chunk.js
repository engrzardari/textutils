(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),l=c.n(n),r=(c(9),c(2)),o=(c(10),c(0));function i(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),e.alert.msg]})}function b(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckChecked"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"Enable Dark Mode"})]})]})]})})})}function d(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),s=c[0],n=c[1],l=function(){var t=new Set(s.split(" ")),c=Array.from(t).join(" ");n(c),e.showAlert("Duplication is removed from your text","success ")};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3 bg-".concat((e.mode,"light")),children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"myBox",className:"form-label text-".concat("light"===e.mode?"dark":"light"),children:e.heading}),Object(o.jsx)("textarea",{placeholder:"Enter text here..",onChange:function(e){n(e.target.value)},className:"form-control",id:"myBox",rows:"8",value:s})]}),Object(o.jsx)("button",{className:"btn btn-outline-success",onClick:function(){if(""!=s){var t=s.toUpperCase();n(t),e.showAlert("Text is converted to Upper case","success ")}},children:"Convter to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:function(){var t=s.toLocaleLowerCase();n(t),e.showAlert("Text is converted to Lower case","success ")},children:"Convter to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:function(){var t=s.replace(/\n/g,"").replace(/\n/g,"");n(t),e.showAlert("Text is minified","success ")},children:"Minify CSS"}),Object(o.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:l,children:"Remove Duplication"}),Object(o.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:l,children:"Remove Extra Spaces"}),Object(o.jsx)("button",{className:"btn btn-outline-success mx-2",onClick:function(){n(""),e.showAlert("Text is cleared ","danger ")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{className:"",children:"Your text Summary"}),Object(o.jsxs)("p",{className:"",children:[s.split(" ").length," words and ",s.length," characters"]}),Object(o.jsxs)("p",{className:"",children:[.008*s.split(" ").length," minutes read."]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:s})]})]})}b.defaultProps={title:"Set Tile Here",aboutSite:"About Us"};var u=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),l=Object(r.a)(n,2),u=l[0],j=l[1],h=function(){"light"===c?(s("dark"),m("Dark Mode has been activated.","success "),document.title="TextUtils - Dark Mode"):(s("light"),m("Light Mode has been activated.","success "),document.title="TextUtils - Home")},m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),5e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"TextUtils",aboutSite:"About",mode:c,toggleMode:h}),Object(o.jsx)(i,{alert:u}),Object(o.jsx)(d,{showAlert:m,heading:"Enter your text here",mode:c,toggleMode:h})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.da993c2c.chunk.js.map