(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a.p+"static/media/g-logo.74c6bff5.png"},19:function(t,e,a){t.exports=a(40)},31:function(t,e,a){},33:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=(a(24),a(27),a(14),a(9)),i=a(12),l=a(16),u=(a(31),a(3)),h=a(4),m=a(7),p=a(5),d=a(6),f=a(10),b=a(17),k=a.n(b),v=(a(33),a(2)),E=function(t){return t.map(function(t){return r.a.createElement("button",{type:"button",className:"btn m-3 btn-secondary"},r.a.createElement(v.a,{to:t.toLowerCase(),className:"px-1 text-light"},t))})},g=function(t){return r.a.createElement("nav",{className:"d-flex justify-content-center"},E(t.links))},j=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).populateBooks=function(){return a.state.books.map(function(t){var e="../../books/".concat(t.title);return r.a.createElement(v.a,{className:"text-light mx-3",to:e},t.title)})},a.getBooks=function(){fetch("".concat("http://localhost:3000/authorbooks","/").concat(a.props.author.first," ").concat(a.props.author.last)).then(function(t){return t.json()}).then(function(t){return a.setState({books:t.result})})},a.state={hide:!1,books:[]},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.setState({hide:this.props.hide}),this.getBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-primary"},r.a.createElement("div",{className:"card-title text-light"},r.a.createElement("h5",null,this.props.author.first," ",this.props.author.last)),r.a.createElement("div",{className:"d-flex card-container justify-content-center align-items-center bg-secondary text-light p-3"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.props.author.portraitURL,alt:"author pic"})),this.state.hide?null:r.a.createElement("div",{className:"card-info mx-5"},r.a.createElement("p",null,this.props.author.bio))),this.state.hide?null:r.a.createElement("div",{className:"card-body bg-secondary text-light mt-3"},r.a.createElement("h5",null,"Books"),this.state.books?this.populateBooks():null)))}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).state={authorData:[]},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"renderAuthors",value:function(){return this.state.authorData.map(function(t){var e="".concat(t.first," ").concat(t.last);return r.a.createElement(v.a,{to:e},r.a.createElement(j,{hide:!0,author:t}))})}},{key:"componentDidMount",value:function(){var t=this;this.props.getAuthors().then(function(t){return t.json()}).then(function(e){return t.setState({authorData:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-secondary py-3"},r.a.createElement("h1",null," Authors "),r.a.createElement("div",{className:"container d-flex flex-wrap justify-content-around"},this.renderAuthors())))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).getAuthors=function(){fetch("".concat("http://localhost:3000/bookauthors","/").concat(a.props.book.title)).then(function(t){return t.json()}).then(function(t){return a.setState({authors:t.result})})},a.populateAuthors=function(){return a.state.authors.map(function(t){var e="../../authors/".concat(t.first," ").concat(t.last);return r.a.createElement(v.a,{className:"text-light mx-3",to:e},t.first," ",t.last)})},a.state={hide:!1,authors:[],title:[]},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.setState({hide:this.props.hide}),this.getAuthors(),this.setState({title:this.props.book.title.split(":")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-primary"},r.a.createElement("div",{className:"card-title text-light"},r.a.createElement("h5",null,this.state.title[0]),r.a.createElement("p",null,this.state.title[1]," ")),r.a.createElement("div",{className:"d-flex card-container justify-content-center align-items-center bg-secondary text-light p-3"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.props.book.coverURL,alt:"book pic"})),this.state.hide?null:r.a.createElement("div",{className:"card-info mx-5"},r.a.createElement("p",null,this.props.book.description))),this.props.hide?null:r.a.createElement("section",{className:"card-body bg-secondary mt-3 text-light"},r.a.createElement("h5",null,"Authors"),this.state.authors?this.populateAuthors():null)))}}]),e}(n.Component),x=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).state={bookData:[]},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"bookCard",value:function(t){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h5",null,t.title)))}},{key:"renderBooks",value:function(){var t=this;return this.state.bookData.map(function(e){var a="".concat(e.title);return r.a.createElement(v.a,{to:a},r.a.createElement(O,{hide:!0,getBook:t.props.getBook,book:e}))})}},{key:"componentDidMount",value:function(){var t=this;console.log("props",this.props),this.props.getBooks().then(function(t){return t.json()}).then(function(e){return t.setState({bookData:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-secondary py-3"},r.a.createElement("h1",null," Books "),r.a.createElement("div",{className:"container d-flex flex-wrap justify-content-around"},this.renderBooks())))}}]),e}(n.Component),N=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).state={author:null},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.getAuthor(this.props.name).then(function(t){return t.json()}).then(function(e){return t.setState({author:e.author[0]})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{to:".."},r.a.createElement("button",{className:"btn btn-dark mt-4"}," Go Back ")),this.state.author?r.a.createElement(j,{author:this.state.author}):null)}}]),e}(n.Component),S=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).state={book:null},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.getBook(this.props.title).then(function(t){return t.json()}).then(function(e){return t.setState({book:e.result[0]})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{to:".."},r.a.createElement("button",{className:"btn btn-dark mt-4"}," Go Back ")),this.state.book?r.a.createElement(O,{title:this.props.title,book:this.state.book}):null)}}]),e}(n.Component),B="http://localhost:3000/search",A=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(p.a)(e).call(this,t))).startSearch=function(){fetch("".concat(B,"/").concat(a.props.terms),{"content-type":"application/json"}).then(function(t){return t.json()}).then(function(t){return a.setState({authorResults:t.authors,bookResults:t.books})})},a.state={searchString:"",authorResults:[],bookResults:[]},a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){this.setState({searchString:this.props.terms}),this.startSearch()}},{key:"componentDidUpdate",value:function(t,e){t.terms!==this.props.terms&&(this.setState({searchString:this.props.terms}),this.startSearch())}},{key:"render",value:function(){return r.a.createElement("div",null,'search results for: "',this.state.searchString,'"')}}]),e}(n.PureComponent),w="http://localhost:3000",D=["Authors","Books"],C=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(m.a)(this,Object(p.a)(e).call(this))).state={authors:[],books:[],search:"",searchResults:[]},t.startSearch=t.startSearch.bind(Object(f.a)(Object(f.a)(t))),t}return Object(d.a)(e,t),Object(h.a)(e,[{key:"getAuthors",value:function(){return fetch("".concat(w,"/authors"))}},{key:"getAuthor",value:function(t){return fetch("".concat(w,"/authors/").concat(t))}},{key:"getBooks",value:function(){return fetch("".concat(w,"/books"))}},{key:"getBook",value:function(t){return fetch("".concat(w,"/books/").concat(t))}},{key:"startSearch",value:function(t){t.preventDefault(),t.target.reset(),Object(v.c)("/search/".concat(this.state.search))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"container-flex bg-secondary d-flex flex-column"},r.a.createElement("header",{className:"main-header d-flex align-items-center text-light bg-primary"}," ",r.a.createElement("div",{className:"col-sm-10 mx-auto d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"logo d-flex align-items-center"}," ",r.a.createElement("i",{class:"fa fa-search","aria-hidden":"true"})," ",r.a.createElement("img",{src:k.a})," ",r.a.createElement(v.a,{className:"text-light",to:"/"},r.a.createElement("h1",null," Reads ")))," ",r.a.createElement(g,{links:D}),r.a.createElement("div",{className:"my-auto d-flex"},r.a.createElement("form",{onSubmit:this.startSearch},r.a.createElement("input",{onChange:function(e){return t.setState({search:e.target.value})},type:"text"}),r.a.createElement("button",{className:"btn ml-3"},r.a.createElement(i.a,{icon:"search"})))))," "),r.a.createElement("section",{className:"col-sm-8 mx-auto"},r.a.createElement(v.b,null,r.a.createElement(R,{path:"/"}),r.a.createElement(A,{termString:this.state.search,path:"/search/:terms"}),r.a.createElement(y,{getAuthors:this.getAuthors,path:"/authors"}),r.a.createElement(N,{getAuthor:this.getAuthor,path:"/authors/:name"}),r.a.createElement(x,{getBooks:this.getBooks,path:"/books"}),r.a.createElement(S,{getBook:this.getBook,path:"/books/:title"}))),r.a.createElement("footer",{className:"bg-primary text-light text-left"},r.a.createElement("div",{className:"col-sm-10 mx-auto"},"Galvanize g95 2018"))))}}]),e}(n.Component),R=function(){return r.a.createElement("div",null,"Welcome!")},M=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.b.add(l.a),c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.d23c6791.chunk.js.map