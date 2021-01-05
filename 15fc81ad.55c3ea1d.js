(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{119:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return r})),t.d(e,"toc",(function(){return c})),t.d(e,"default",(function(){return l}));var o=t(3),m=t(7),a=(t(0),t(141)),d=t(144);var i=t.n(d)()("\n<h1>NAME</h1>\n<p>vcommand - send a command to a netkit virtual machine through its tmux session.</p>\n<h1>SYNOPSIS</h1>\n<p><strong>vcommand</strong> -m <em>MACHINE-NAME</em> --timeout 10 --command ping -c1 127.0.0.1</p>\n<h1>DESCRIPTION</h1>\n<p><em>vcommand</em> will use the tmux send-keys command to type the command into the tmux session for the machine. It will then wait for the time specified by timeout, then read any new text that has appeared in the tmux session, and print this.</p>\n<p><br />\nNote that there is only one shell instance in tmux, so sending multiple commands at once / sending commands while the tmux session is being actively used may result in undesirable behaviour. vcommand gives you access to the input and output of the machines tty, and not an instance of a shell to execute commands in.</p>\n<h1>OPTIONS</h1>\n<dl>\n<dt><strong>-h</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--help</strong></dt>\n<dd><p>Print help message and exit. Other arguments will be ignored.</p>\n</dd>\n<dt><strong>-v</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--verbose</strong></dt>\n<dd><p>Set the VERBOSE variable to TRUE so it can be used for adding debugging echo statements in the vcommand script.</p>\n</dd>\n<dt><strong>-m <em>MACHINENAME</em></strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--machine <em>MACHINENAME</em></strong></dt>\n<dd><p>Name of the netkit machine to send the command to.</p>\n</dd>\n<dt><strong>-n <em>N</em></strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--timeout <em>N</em></strong></dt>\n<dd><p>Wait N seconds after entering the command to the tmux before grabbing any new output from the tmux session.</p>\n</dd>\n</dl>\n<p>The default value for this is 1 second.</p>\n<p><br />\nAs we don't have an interactive shell we don't know when a command has finished executing. Therefore we have to choose how long we are going to wait before grabbing any new output.</p>\n<p>-c <em>COMMAND</em></p>\n<dl>\n<dt><strong>--command <em>COMMAND</em></strong></dt>\n<dd><p>Command to send to the tmux session. This should always be the last argument given to vcommand. Anything that follows this will be taken as one string and sent to the tmux session.</p>\n</dd>\n</dl>\n<h1>ENVIRONMENT VARIABLES</h1>\n<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>\n<p>Apart from this, <em>vcommand</em> supports no other environment variables.</p>\n<h1>SEE ALSO</h1>\n<p><em>vclean</em>(1), <em>vconf</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vconnect</em>(1), <em>vstart</em>(1).</p>\n<h1>AUTHOR</h1>\n<p><em>vcommand</em> script: Billy Bromell<br />\nThis man page: Billy Bromell</p>\n"),s={id:"netkit-manpage-vcommand",title:"vcommand - manpage",sidebar_label:"vcommand",custom_edit_url:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",keywords:["netkit","netkit-jh","manpage","man","vcommand"]},r={unversionedId:"man/netkit-manpage-vcommand",id:"man/netkit-manpage-vcommand",isDocsHomePage:!1,title:"vcommand - manpage",description:"{html}",source:"@site/docs/man/vcommand.md",slug:"/man/netkit-manpage-vcommand",permalink:"/docs/man/netkit-manpage-vcommand",editUrl:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",version:"current",sidebar_label:"vcommand",sidebar:"someSidebar",previous:{title:"vclean - manpage",permalink:"/docs/man/netkit-manpage-vclean"},next:{title:"vconfig - manpage",permalink:"/docs/man/netkit-manpage-vconfig"}},c=[],h={toc:c};function l(n){var e=n.components,t=Object(m.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",null,i))}l.isMDXComponent=!0},145:function(n,e){}}]);