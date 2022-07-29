"use strict";(self.webpackChunkdocusarus_test=self.webpackChunkdocusarus_test||[]).push([[9191],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=s,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),s=(t(7294),t(3905));const o={},a="Ship/Show/Ask",i={unversionedId:"Use Cases/Ship_Show_Ask",id:"version-0.0.5/Use Cases/Ship_Show_Ask",title:"Ship/Show/Ask",description:"Ship / Show / Ask is a methodology to increase the pace of software teams by not having to block developers for each pull request.",source:"@site/versioned_docs/version-0.0.5/Use Cases/Ship_Show_Ask.md",sourceDirName:"Use Cases",slug:"/Use Cases/Ship_Show_Ask",permalink:"/Docusaurus-Reviewpad/docs/Use Cases/Ship_Show_Ask",draft:!1,editUrl:"https://github.com/reviewpad/versioned_docs/version-0.0.5/Use Cases/Ship_Show_Ask.md",tags:[],version:"0.0.5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automated Labelling",permalink:"/Docusaurus-Reviewpad/docs/Use Cases/Automated_Labelling"}},l={},p=[],c={toc:p};function h(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shipshowask"},"Ship/Show/Ask"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/ship-show-ask.html"},"Ship / Show / Ask")," is a methodology to increase the pace of software teams by not having to block developers for each pull request. "),(0,s.kt)("p",null,"It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs."),(0,s.kt)("p",null,"Here\u2019s an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that we use in our team to automate these three processes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ask:\n    name: "ask"\n    description: ask mode\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n  show:\n    name: "show"\n    description: show mode\n    color: "ffd800"\n  ship:\n    name: "ship"\n    description: ship mode\n    color: "76dbbe"\n\ngroups:\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $totalCreatedPullRequests($developer) < 10\n\nrules:\n  - name: onlyChangesMDFiles\n    kind: patch\n    description: All files with extension .md\n    spec: $hasFileExtensions([".md"])\n\n  - name: onlyChangesTests\n    kind: patch\n    description: All files with extension .test.ts\n    spec: $hasFileExtensions([".test.ts"])\n\n  - name: isSmallPatch\n    kind: patch\n    description: Patch has less than 50 lines changed\n    spec: $size() < 50\n\n  - name: isLargePatch\n    kind: patch\n    description: Large patch\n    spec: $fileCount() > 5\n\n  - name: changesMainFile\n    kind: patch\n    description: Main file\n    spec: $hasFileName("main.js")\n\n  - name: authoredByJunior\n    kind: patch\n    description: Authored by junior developer\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: ask\n    description: Standard ask process\n    if:\n      - rule: changesMainFile\n      - rule: isLargePatch\n      - rule: authoredByJunior\n    then:\n      - $addLabel("ask")\n      - $assignRandomReviewer()\n\n  - name: show\n    description: Show process - auto-merge and later review\n    if:\n      - rule: onlyChangesMDFiles\n        extra-actions:\n          - $assignReviewer($group("seniors"))\n      - rule: onlyChangesTests\n    then:\n      - $addLabel("show")\n      - $merge("rebase")\n\n  - name: ship\n    description: Ship process - auto-merge without need for review\n    if:\n      - rule: isSmallPatch\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n')))}h.isMDXComponent=!0}}]);