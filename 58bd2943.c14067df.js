(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},157:function(e,t,n){"use strict";var a=n(0),o=n(158);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},160:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(157),r=n(150),s=n(55),l=n.n(s);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:b,groupId:m,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:p}=Object(i.a)(),[w,f]=Object(a.useState)(s),O=a.Children.toArray(e.children);if(null!=m){const e=h[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&f(e)}const j=e=>{f(e),null!=m&&p(m,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}},161:function(e,t,n){"use strict";var a=n(3),o=n(0),i=n.n(o);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},213:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tmux_lstart_window-9b8f31024ad72db498560dc32c7dfd42.png"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tmux_ab_window-545908fd142443efac2b99e2c8a60180.png"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tmux_r_window-b6d78912a18f23c08512f5e80247d4fa.png"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tmux_screenshot_nested-cacaf4cb26d6f9b942aec7920696bb46.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),i=(n(0),n(149)),r=n(160),s=n(161),l={slug:"using-tmuxinator-with-netkit",title:"Using Tmuxinator with Netkit-JH",author:"Billy Bromell",author_title:"Billy Bromell",author_url:"https://github.com/b177y",author_image_url:"https://avatars1.githubusercontent.com/u/34008579",image:"img/DOTHIS",tags:[]},c={permalink:"/blog/using-tmuxinator-with-netkit",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/blog/blog/2021-01-08-tmuxinator.mdx",source:"@site/blog/2021-01-08-tmuxinator.mdx",description:"Why is Tmuxinator Useful?",date:"2021-01-08T00:00:00.000Z",tags:[],title:"Using Tmuxinator with Netkit-JH",readingTime:7.01,truncated:!1,nextItem:{title:"An Ode to the Netkit-JH Sponge",permalink:"/blog/odetothesponge"}},u=[{value:"Why is Tmuxinator Useful?",id:"why-is-tmuxinator-useful",children:[]},{value:"Installing",id:"installing",children:[]},{value:"Create a Tmuxinator &#39;Project&#39;",id:"create-a-tmuxinator-project",children:[]},{value:"Setting Up Windows",id:"setting-up-windows",children:[]},{value:"Advanced",id:"advanced",children:[{value:"Layouts",id:"layouts",children:[]},{value:"Changing the Startup Window and Pane",id:"changing-the-startup-window-and-pane",children:[]},{value:"Nesting Sessions",id:"nesting-sessions",children:[]},{value:"Extra",id:"extra",children:[]}]}],b={toc:u};function m(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-is-tmuxinator-useful"},"Why is Tmuxinator Useful?"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator")," we can set up a 'project', so that when we are in a lab directory and we run ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator start LABNAME"),", it will then run ",Object(i.b)("inlineCode",{parentName:"p"},"lstart")," for us, and open tmux panes and windows in a configuration we specify, which automatically connect to netkit machine tmux sessions when they are started."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ tmuxinator start abr\n")),Object(i.b)("p",null,"Result:"),Object(i.b)(r.a,{defaultValue:"lstart_window",values:[{label:"lstart_window",value:"lstart_window"},{label:"ab_window",value:"ab_window"},{label:"r_window",value:"r_window"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"lstart_window",mdxType:"TabItem"},Object(i.b)("img",{src:n(213).default,alt:"Example banner"})),Object(i.b)(s.a,{value:"ab_window",mdxType:"TabItem"},Object(i.b)("img",{src:n(214).default,alt:"Example banner"})),Object(i.b)(s.a,{value:"r_window",mdxType:"TabItem"},Object(i.b)("img",{src:n(215).default,alt:"Example banner"}))),Object(i.b)("h2",{id:"installing"},"Installing"),Object(i.b)("p",null,"On Ubuntu 20.04 you can install ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator")," with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt install tmuxinator\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You will also need tmux installed - take a look at the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/usingtmux"}),"guide")," for using tmux before using tmux!"))),Object(i.b)("h2",{id:"create-a-tmuxinator-project"},"Create a Tmuxinator 'Project'"),Object(i.b)("p",null,"For this I think it makes sense to have a local project - this will make a file called ",Object(i.b)("inlineCode",{parentName:"p"},".tmuxinator.yml")," in your current working directory, instead of adding the project to a collection in ",Object(i.b)("inlineCode",{parentName:"p"},"~/.config/tmuxinator"),". If we do this in our lab directory, it means that if we share the lab or use source control such as git to track changes, the tmuxinator file will be there."),Object(i.b)("p",null,"Let's create a local project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd abr\n$ tmuxinator new --local abr # This can be named anything, but it makes sense to give it the same name as the netkit lab\n")),Object(i.b)("p",null,"This will open a template yaml file in your default editor. If you want to edit this again later you can use ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator open --local abr"),"."),Object(i.b)("p",null,"We can then start tmuxinator with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ tmuxinator start abr\n")),Object(i.b)("p",null,"Assuming we didn't make any changes to the yaml file, this start a demo tmuxinator session, which isn't very useful."),Object(i.b)("h2",{id:"setting-up-windows"},"Setting Up Windows"),Object(i.b)("p",null,"We want tmuxinator to start the lab for us, so somewhere we'll need to run lstart. For example we could do this on the first window."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"name: abr\nroot: . # Change root to our current directory, as this is where we will start the lab from\n\nwindows:\n  - lstart_window:\n      layout: even-vertical\n      panes:\n        - lstart --tmux-detached\n")),Object(i.b)("p",null,"With this simple config, you can start the lab by typing ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator start abr"),". This will run ",Object(i.b)("inlineCode",{parentName:"p"},"lstart --tmux-detached")," in a window named ",Object(i.b)("inlineCode",{parentName:"p"},"lstart_window"),". It looks like the machines have started successfully, but it's not very useful as we can't see our machines. We want to add some panes to display the machines' tmux sessions."),Object(i.b)("p",null,"We can add the following to the list of windows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\n\n  - ab_window:\n      layout: even-vertical\n      panes:\n        - vconnect -m a -r 20 -n 3\n        - vconnect -m b -r 20 -n 3\n  - r_window:\n      layout: even-vertical\n      panes:\n        - vconnect -m r -r 20 -n 3\n")),Object(i.b)("p",null,"This will add a window named 'ab_window', with two panes, one for machine a and one for b. It will also add a window named 'r_window' with one pane - for machine r."),Object(i.b)("p",null,"It attempts to connect to the machines by running ",Object(i.b)("inlineCode",{parentName:"p"},"vconnect")," in the panes, with the options to retry every 3 seconds for up to 20 attempts. This means you can run ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator start abr")," and not worry about vconnect failing because it tries to connect before lstart has managed to start the machines."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are using lots of machines, remember that some of them could end up much longer than a minute from when ",Object(i.b)("inlineCode",{parentName:"p"},"lstart")," is run to when they are created, meaning vconnect will fail. You can either increase the retry count and interval for vconnect, or you can use vconnect manually when the machine has started."))),Object(i.b)("p",null,"Let's try to start the lab now:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ tmuxinator start abr\n")),Object(i.b)("p",null,"This should now start the lab, and if you cycle through the windows using ",Object(i.b)("kbd",null,"leader")," then ",Object(i.b)("kbd",null,"n"),", you'll see that there is a window for lstart (just a normal shell when lstart has finished running), a window with machines a and b, and a window with machine r."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".tmuxinator.yml")," file as a whole now looks like this (with a few additions that I thought would be useful). You can use this as a template when creating tmuxinator labs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# ./.tmuxinator.yml\n#\n\nname: abr\nroot: .\ntmux_options: -f ~/.config/tmux/tmux.conf\non_project_stop: lcrash\n\nwindows:\n  - lstart_window:\n      layout: even-vertical\n      panes:\n        - lstart --tmux-detached\n  - ab_window:\n      layout: even-vertical\n      panes:\n        - vconnect -m a -r 20 -n 3\n        - vconnect -m b -r 20 -n 3\n  - r_window:\n      layout: even-vertical\n      panes:\n        - vconnect -m r -r 20 -n 3\n")),Object(i.b)("h2",{id:"advanced"},"Advanced"),Object(i.b)("h3",{id:"layouts"},"Layouts"),Object(i.b)("p",null,"There are 5 available layouts. Here are the descriptions from the tmux man pages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"even-horizontal\n     Panes are spread out evenly from left to right across the window.\n\neven-vertical\n     Panes are spread evenly from top to bottom.\n\nmain-horizontal\n     A large (main) pane is shown at the top of the window and the remaining panes are\n     spread from left to right in the leftover space at the bottom.  Use the\n     main-pane-height window option to specify the height of the top pane.\n\nmain-vertical\n     Similar to main-horizontal but the large pane is placed on the left and the others\n     spread from top to bottom along the right.  See the main-pane-width window option.\n\ntiled\n     Panes are spread out as evenly as possible over the window in both rows and columns.\n")),Object(i.b)("p",null,"To visualise this, there are some good diagrams and explanations ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://leanpub.com/the-tao-of-tmux/read#window-layouts"}),"here"),". You can additionally set the layout to something custom. The easiest way to make a custom layout is to start tmuxinator with one of the built in layouts, then manually resize and shuffle panes as you wish, then run ",Object(i.b)("inlineCode",{parentName:"p"},"tmux list-windows")," in that tmux session. You should then get a list of windows with their current layouts, which you can copy and use in your ",Object(i.b)("inlineCode",{parentName:"p"},".tmuxinator.yml")," - as shown in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://thoughtbot.com/blog/templating-tmux-with-tmuxinator"}),"this guide"),"."),Object(i.b)("h3",{id:"changing-the-startup-window-and-pane"},"Changing the Startup Window and Pane"),Object(i.b)("p",null,"By default, tmuxinator will attach you to the first pane of the first window. You can change that with"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"startup_window: ab_window\nstartup_pane: 1\n")),Object(i.b)("p",null,"This example would connect you to the pane for machine b when you run ",Object(i.b)("inlineCode",{parentName:"p"},"tmuxinator start abr"),"."),Object(i.b)("h3",{id:"nesting-sessions"},"Nesting Sessions"),Object(i.b)("p",null,"You need to remember when you nest sessions, that the outer session will intercept key presses first, and process them before they are passed to the next inner layer. This means if you had the same leader key for an outer session and an inner session, you would have to hit the leader key twice in a row to send commands to the inner session. This can get very annoying, so it is recommended to use a different leader key for each layer of nesting. Using tmuxinator with netkit will give you at least two layers - as you have the main session - created with tmuxinator, which has panes that are attached to sessions which are created for the Netkit machines."),Object(i.b)("p",null,"By default, the netkit machine sessions will use a leader key of ",Object(i.b)("kbd",null,"ctrl")," + ",Object(i.b)("kbd",null,"d"),". If you use the same leader key in your tmux config, this will conflict and it is recommended to change it! If you haven't changed your tmux config , the leader key will be ",Object(i.b)("kbd",null,"ctrl")," + ",Object(i.b)("kbd",null,"b")," - so you don't need to worry about this."),Object(i.b)("p",null,"In theory you can nest multiple layers of sessions - for example here I have a tmux session on my host, with a pane SSHd into an Ubuntu VM, which has a tmux session started by tmuxinator. The tmuxinator session is attached to netkit machine sessions, and one of the netkit machines (a) has its own tmux session open. In general it's recommended to keep it simple, especially if you are starting out with tmux, but if you want to try more complex sessions, make sure you use different leader keys for each layer!"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Nested Tmux Sessions",src:n(216).default})),Object(i.b)("h3",{id:"extra"},"Extra"),Object(i.b)("p",null,"For more info on using tmuxinator, the readme on their GitHub repo ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tmuxinator/tmuxinator"}),"here")," contains documentation. Tmuxinator is quite simple so there isn't much more to cover. If you want to increase your productivity I would suggest learning more about tmux. Here are some resources for learning more about tmux:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Daniel Miessler - Tactical Tmux ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://danielmiessler.com/study/tmux/"}),"link")),Object(i.b)("li",{parentName:"ul"},"The Valuable Dev - A Detailed tmux Walkthrough to Boost Your Productivity ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://thevaluable.dev/tmux-boost-productivity-terminal/"}),"link")),Object(i.b)("li",{parentName:"ul"},"Tony Narlock - The Tao of Tmux ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://leanpub.com/the-tao-of-tmux/read"}),"link"))))}m.isMDXComponent=!0}}]);