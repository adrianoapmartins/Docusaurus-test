"use strict";(self.webpackChunkdocusarus_test=self.webpackChunkdocusarus_test||[]).push([[8176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Introduction to Reviewpad",c={unversionedId:"Reviewpad File Specification/Introduction_to_Reviewpad",id:"Reviewpad File Specification/Introduction_to_Reviewpad",title:"Introduction to Reviewpad",description:"Reviewpad is a DSL (Domain Specific Language) based on YML that configures a list of automated actions over filters on pull requests.",source:"@site/docs/Reviewpad File Specification/Introduction_to_Reviewpad.md",sourceDirName:"Reviewpad File Specification",slug:"/Reviewpad File Specification/Introduction_to_Reviewpad",permalink:"/Docusaurus-test/docs/next/Reviewpad File Specification/Introduction_to_Reviewpad",draft:!1,editUrl:"https://github.com/reviewpad/docs/Reviewpad File Specification/Introduction_to_Reviewpad.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install Reviewpad GitHub Action",permalink:"/Docusaurus-test/docs/next/Installation/Install_Reviewpad_GitHub_Action"},next:{title:"VSCode Reviewpad YAML Schema",permalink:"/Docusaurus-test/docs/next/Tooling/VSCode_Reviewpad_YAML_Schema"}},p={},l=[],u={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-reviewpad"},"Introduction to Reviewpad"),(0,o.kt)("p",null,"Reviewpad is a DSL (Domain Specific Language) based on YML that configures a list of automated actions over filters on pull requests. "),(0,o.kt)("p",null,"The main features of Reviewpad are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Declarative"),". You specify and automate ",(0,o.kt)("strong",{parentName:"li"},"what")," your team wants."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Intuitive"),". Any developer should be able to write a simple configuration in less than 5 minutes."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Compatible with your CI"),". Reviewpad is not intended to replace your CI system but to be used together with it (for example, using their results) to perform additional actions.")),(0,o.kt)("p",null,"In the next sections, you will learn how to specify a Reviewpad configuration."))}s.isMDXComponent=!0}}]);