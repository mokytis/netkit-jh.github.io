(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{93:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return n})),i.d(t,"toc",(function(){return r})),i.d(t,"default",(function(){return u}));var a=i(3),l=(i(0),i(102));const o={slug:"netkitv1release",title:"Netkit Version 1.0 Released!",author:"TechSupportJosh",author_title:"TechSupportJosh",author_url:"https://github.com/TechSupportJosh",author_image_url:"https://avatars1.githubusercontent.com/u/5190840?s=400&v=4",tags:["release","v1","docker","terminal","bugfixes"]},n={permalink:"/blog/netkitv1release",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/master/blog/blog/2020-12-25-v1-release.md",source:"@site/blog/2020-12-25-v1-release.md",description:"Netkit V1 Release",date:"2020-12-25T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"v1",permalink:"/blog/tags/v-1"},{label:"docker",permalink:"/blog/tags/docker"},{label:"terminal",permalink:"/blog/tags/terminal"},{label:"bugfixes",permalink:"/blog/tags/bugfixes"}],title:"Netkit Version 1.0 Released!",readingTime:1.385,truncated:!1},r=[{value:"Compiling",id:"compiling",children:[]},{value:"New in this release",id:"new-in-this-release",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"Removed",id:"removed",children:[]},{value:"Coming in the future",id:"coming-in-the-future",children:[]}],s={toc:r};function u({components:e,...t}){return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"netkit-v1-release"},"Netkit V1 Release"),Object(l.b)("h2",{id:"compiling"},"Compiling"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Improved build process for the filesystem (decreasing build times from 40 minutes to 10 minutes!) which will make updating and maintaining the filesystem easier."),Object(l.b)("li",{parentName:"ul"},"Improved build process for all modules"),Object(l.b)("li",{parentName:"ul"},"Moved core tools into the build repo"),Object(l.b)("li",{parentName:"ul"},"Updated UML tools to 64 bit (hoorah!)"),Object(l.b)("li",{parentName:"ul"},"Use the UK debian repos to make downloading packages that little bit faster"),Object(l.b)("li",{parentName:"ul"},"Added dockerfile to compile using Docker - thanks @b177y")),Object(l.b)("h2",{id:"new-in-this-release"},"New in this release"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"LFTP & at packages"),Object(l.b)("li",{parentName:"ul"},"Added support for Kitty & Alacritty terminal emulators"),Object(l.b)("li",{parentName:"ul"},"New install script which asks what terminal emulator you wish to use (and handles installation of it!)"),Object(l.b)("li",{parentName:"ul"},"Added message about 'lclean' when labs don't start properly")),Object(l.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Removed mmapper_init failed error message"),Object(l.b)("li",{parentName:"ul"},"Removed failed to load autofs4 module error message"),Object(l.b)("li",{parentName:"ul"},"Set timeout of startup script service to 5 minutes"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vstart --version")," now lists the correct kernel/fs version")),Object(l.b)("h2",{id:"removed"},"Removed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Netkit welcome message has been removed (was broken before due to a bad systemd service config)")),Object(l.b)("h2",{id:"coming-in-the-future"},"Coming in the future"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Removing net-tools dependancy from core tools"),Object(l.b)("li",{parentName:"ul"},"Exploring the concept of different distros for filesystems"),Object(l.b)("li",{parentName:"ul"},"Making it more stable :-)")),Object(l.b)("p",null,"Massive thanks to @okman12 and @b177y for assisting me in improving this version :-)"),Object(l.b)("p",null,"Most importantly, we're now at v1.0.0 of our new Netkit :) Our improvements to the building process (removal of rootstrap, combining of the two repos) and our upgrade to Debian Bullseye + Linux Kernel 5.9 justify a big version jump in my opinion. So welcome to v1.0.0, the best update we've had so far :-)"))}u.isMDXComponent=!0}}]);