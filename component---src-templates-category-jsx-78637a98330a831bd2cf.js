(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return f});var r=n(9),a=n.n(r),i=n(0),o=n.n(i),s=n(165),l=n.n(s),c=n(168),u=n(198),p=n(162),d=n.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"category-container"},o.a.createElement(l.a,{title:'Posts in category "'+e+'" | '+d.a.siteTitle}),o.a.createElement(u.a,{postEdges:t})))},t}(o.a.Component),f="4191571131"},162:function(e,t,n){n(36);var r={siteTitle:"Glog",siteTitleShort:"Glog",siteTitleAlt:"Glog",siteLogo:"/logos/logo-1024.png",siteUrl:"https://fed-gren.github.io",pathPrefix:"/glog",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Gren",userEmail:"deveb22@gmail.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Front-end developer",userLinks:[{label:"GitHub",url:"https://github.com/fed-gren",iconClassName:"fa fa-github"},{label:"Email",url:"mailto:deveb22@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},168:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(163),o=n.n(i),s=n(0),l=n.n(s),c=n(165),u=n.n(c),p=n(162),d=n.n(p),m=(n(187),n(164)),f=n(56);n(188);function h(){var e=o()(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n\n  & > h1 {\n    margin: 0;\n    font-size: 1.5rem;\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  & a:visited {\n    text-decoration: none;\n    color: #e50a13;\n  }\n  & a:hover {\n    text-decoration: underline;\n  }\n"]);return h=function(){return e},e}var g=m.a.header(h()),v=function(e){var t=Object(s.useState)(!1);t[0],t[1];return l.a.createElement(g,null,l.a.createElement(f.Link,{to:d.a.pathPrefix},l.a.createElement("h1",null,d.a.siteTitle)))};function y(){var e=o()(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem 1.8rem;\n"]);return y=function(){return e},e}n.d(t,"a",function(){return x});var E=m.a.div(y()),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(E,null,l.a.createElement(u.a,null,l.a.createElement("meta",{name:"description",content:d.a.siteDescription})),l.a.createElement(v,null),e)},t}(l.a.Component)},198:function(e,t,n){"use strict";var r=n(9),a=n.n(r),i=n(163),o=n.n(i),s=n(0),l=n.n(s),c=n(56),u=n(164);n(162);function p(){var e=o()(["\n  padding: 0.8rem 1.5rem;\n\n  & a,\n  & a:visited {\n    text-decoration: none;\n    color: #f5f5f5;\n  }\n\n  & a:hover {\n    text-decoration: underline;\n  }\n"]);return p=function(){return e},e}var d=u.a.div(p()),m=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return l.a.createElement(d,null,e.map(function(e){return l.a.createElement(c.Link,{to:e.path,key:e.title},l.a.createElement("h1",null,e.title))}))},t}(l.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-templates-category-jsx-78637a98330a831bd2cf.js.map