(this["webpackJsonpreact-hw-03-image-finder"]=this["webpackJsonpreact-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Loader_container__2LSfu"}},14:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(6),i=a.n(l),s=a(7),u=a(10),d=a(2),m=a(3),h=a(5),p=a(4),g=a(11),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={keyword:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(g.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.keyword;a&&(e.props.onNewQuery(a.split(" ").join("+")),e.setState({keyword:""}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",name:"keyword",value:this.state.keyword,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(r.a.Component),v=function(e){var t=e.image,a=e.onOpenModal;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image",onClick:function(){return a(t.webformatURL,t.tags)}}))},y=a(12),b=a.n(y),E=(a(41),a(13)),w=a.n(E),M=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:w.a.container},r.a.createElement(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),";")}}]),a}(r.a.Component),O=function(e){var t=e.images,a=e.onLoadMore,n=e.isLoading,o=e.onOpenModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(v,{image:e,key:e.id,onOpenModal:o})}))),t.length>0&&!n&&r.a.createElement("div",{className:"btnContainer"},r.a.createElement("button",{type:"button",className:"Button",onClick:a},"Load more")),n&&r.a.createElement(M,null))},L=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){t.target!==t.currentTarget&&"Escape"!==t.code||e.props.closeModal()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("#Modal").addEventListener("click",this.handleCloseModal),window.addEventListener("keydown",this.handleCloseModal)}},{key:"componentWillUnmount",value:function(){document.querySelector("#Modal").removeEventListener("click",this.handleCloseModal),window.removeEventListener("keydown",this.handleCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.imgURL,a=e.description;return r.a.createElement("div",{className:"Overlay",id:"Modal"},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:a})))}}]),a}(r.a.Component),k="https://pixabay.com/api/?",S="16887620-e991db8737f2bb3a88bca8c81",j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;return fetch("".concat(k,"key=").concat(S,"&q=").concat(e,"&page=").concat(t,"&per_page=").concat(a)).then((function(e){return e.json()})).then((function(e){return e.hits}))},C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:null,page:1,error:null,isLoading:!1,modal:{isModal:!1,imgURL:null,description:null}},e.handleOpenModal=function(t,a){e.setState({modal:{imgURL:t,description:a,isModal:!0}})},e.handleCloseModal=function(){e.setState({modal:{imgURL:null,description:null,isModal:!1}})},e.handleNewQuery=function(t){t!==e.state.query&&e.setState({query:t,page:1,images:[]})},e.handleLoadMore=function(){e.fetchData()},e.fetchData=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),a=e.state,n=a.query,r=a.page,t.prev=2,t.next=5,j(n,r);case 5:o=t.sent,e.setState((function(e){return{page:e.page+1,images:[].concat(Object(s.a)(e.images),Object(s.a)(o))}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setState({error:t.t0});case 12:return t.prev=12,e.setState({isLoading:!1}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])}))),e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchData(),0!==t.images.length&&t.images.length<this.state.images.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.modal,o=n.imgURL,c=n.description,l=n.isModal;return r.a.createElement("div",null,r.a.createElement(f,{onNewQuery:this.handleNewQuery}),r.a.createElement(O,{images:t,isLoading:a,onLoadMore:this.handleLoadMore,onOpenModal:this.handleOpenModal}),l&&r.a.createElement(L,{imgURL:o,description:c,closeModal:this.handleCloseModal}))}}]),a}(r.a.Component);a(42);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cbd21af6.chunk.js.map