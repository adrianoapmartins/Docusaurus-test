"use strict";(self.webpackChunkdocusarus_test=self.webpackChunkdocusarus_test||[]).push([[4133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"Installation/Install_Reviewpad_GitHub_Action",id:"version-0.0.3/Installation/Install_Reviewpad_GitHub_Action",title:"Install_Reviewpad_GitHub_Action",description:"This guide describes the setup for Reviewpad GitHub Action.",source:"@site/versioned_docs/version-0.0.3/Installation/Install_Reviewpad_GitHub_Action.md",sourceDirName:"Installation",slug:"/Installation/Install_Reviewpad_GitHub_Action",permalink:"/Docusaurus-test/docs/0.0.3/Installation/Install_Reviewpad_GitHub_Action",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.0.3/Installation/Install_Reviewpad_GitHub_Action.md",tags:[],version:"0.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Action: Label based on size",permalink:"/Docusaurus-test/docs/0.0.3/Getting Started/First_Action_Label_based_on_size"},next:{title:"Introduction_to_Reviewpad",permalink:"/Docusaurus-test/docs/0.0.3/Reviewpad_File_Specification/Introduction_to_Reviewpad"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This guide describes the setup for Reviewpad GitHub Action.")),(0,r.kt)("p",null,"Reviewpad Action runs at the level of a single GitHub repository, which means that you need to install Reviewpad Action for each repository where you wish to run it."),(0,r.kt)("p",null,"To setup Reviewpad Action on a repository, you just need to perform the following steps."),(0,r.kt)("h1",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,r.kt)("p",null,"Open the GitHub project where you wish to install the Reviewpad Action with your IDE."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This is necessary because we will be adding and committing new files to the repository.")),(0,r.kt)("h1",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,r.kt)("inlineCode",{parentName:"h1"},"Reviewpad Action")," workflow file"),(0,r.kt)("p",null,"At the root of your repository navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},".github > workflows")," (This is where your project actions live. If you don't have these folders, please create them). "),(0,r.kt)("p",null,"Add the file ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: Reviewpad Action\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        uses: reviewpad/action@v3.x\n")),(0,r.kt)("p",null,"We just added Reviewpad as a GitHub action. We now need to add you're project configuration of Reviewpad."),(0,r.kt)("h1",{id:"step-3-add-reviewpadyml-to-the-root-of-the-repository"},"Step 3. Add ",(0,r.kt)("inlineCode",{parentName:"h1"},"reviewpad.yml")," to the root of the repository"),(0,r.kt)("p",null,"Reviewpad is extremely configurable. You can use it to automate PR labelling or comment when something is not right. It all depends on your project requirements."),(0,r.kt)("p",null,"For now let's add a simple configuration. For that navigate to the root of your repository and add a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    name: "small"\n    description: small changes\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n  medium:\n    name: "medium"\n    description: medium changes\n    color: "a8c3f7"\n  large:\n    name: "large"\n    description: large changes\n    color: "8a2138"\n\nrules:\n  - name: isSmall\n    kind: patch\n    description: small pull request\n    spec: $size() <= 30\n\n  - name: isMedium\n    kind: patch\n    description: medium-sized pull request\n    spec: $size() > 30 && $size() <= 100\n\n  - name: isLarge\n    kind: patch\n    description: large-sized pull request\n    spec: $size() > 100\n\nworkflows:\n  - name: label-pull-request-with-size\n    description: Label pull request with size\n    if:\n      - rule: isSmall\n        extra-actions:\n          - $addLabel("small")\n      - rule: isMedium\n        extra-actions:\n          - $addLabel("medium")\n      - rule: isLarge\n        extra-actions:\n          - $addLabel("large")\n')),(0,r.kt)("p",null,"This particular configuration will ask Reviewpad to label you PRs based on their size."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757 \ufe0f Terms and Conditions"),(0,r.kt)("p",{parentName:"blockquote"},"By running this action you\u2019re agreeing with ",(0,r.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad\u2019s Terms and Conditions"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 We are looking for contributors \ud83d\udcaa"),(0,r.kt)("p",{parentName:"blockquote"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.reviewpad.com/docs/discord"},"discord community"),".")))}u.isMDXComponent=!0}}]);