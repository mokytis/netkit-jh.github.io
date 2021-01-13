(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return c}));var s=n(3),a=n(7),o=(n(0),n(153)),i=n(156);var r=n.n(i)()("\n<h1>NAME</h1>\n<p>lcrash - crash machines of a netkit lab</p>\n<h1>SYNOPSIS</h1>\n<p><strong>lcrash</strong> [options] [<em>MACHINE-NAME</em>...]</p>\n<h1>DESCRIPTION</h1>\n<p>The <em>lcrash</em> command can be used to forcedly shutdown all the virtual machines of a Netkit lab. This roughly corresponds to suddenly unplugging them from the power socket. <em>lcrash</em> uses the <strong>vcrash</strong> command to stop virtual machines (see <strong>vcrash</strong>(1)).</p>\n<p>If a list of <em>MACHINE-NAME</em>s is provided, only virtual machines with a matching name <em>and</em> that are part of the lab will be crashed. Otherwise, all the machines of the lab are crashed.</p>\n<p>The following options are supported by <em>lcrash</em>:</p>\n<dl>\n<dt><strong>-d <em>DIRECTORY</em></strong></dt>\n<dd><p>Crash the Netkit lab that is located inside <em>DIRECTORY</em>. If no <strong>-d</strong> option is provided, <em>lcrash</em> assumes that the lab is located in the current directory. The path to the lab directory (being that the current directory or one provided by <strong>-d</strong>) must never contain spaces.</p>\n</dd>\n<dt><strong>-F</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--keep-fs</strong></dt>\n<dd><p>This option prevents <em>lcrash</em> from deleting virtual machines (COW) filesystems (.disk files). By default, <em>lcrash</em> removes the filesystem after crashing each virtual machine in order to ensure that virtual machines revert to their original state when the lab is restarted.</p>\n</dd>\n</dl>\n<p>Notice that the model filesystem is never removed, regardless of the use of this option. See the README file in the Netkit filesystem package for information about COW and model filesystems.</p>\n<dl>\n<dt><strong>-k</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--kill</strong></dt>\n<dd><p>There are two different ways of crashing a virtual machine. The first one is to send a special message that tells it to immediately shut down. This is also called the mconsole method. The second one is to simply kill running processes that correspond to the virtual machine.<br />\nThe mconsole method is usually faster, but may be ineffective if a virtual machine has somewhy frozen (in which case it is unable to receive messages). If it happens to fail, the other method (killing processes) is automatically tried. However, killing processes is considered a last resort.<br />\nIf the mconsole method fails too often, this option can be used to force <em>lcrash</em> to always kill processes. In general, there should be no need to use it.</p>\n</dd>\n<dt><strong>-l</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--list</strong></dt>\n<dd><p>Show a list of currently running virtual machines after the lab has been crashed. This is useful to check whether all the hosts have been shut down.</p>\n</dd>\n<dt><strong>-q</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--quick</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--quiet</strong></dt>\n<dd><p>Do not check whether virtual machines have actually crashed. This results in a faster lab shutdown, but some hanging processes may be left behind. If this happens, try crashing the lab again without using this option or use <strong>vclean</strong> (see <strong>vclean</strong>(1)). This option also slightly reduces output information.</p>\n</dd>\n</dl>\n<p>The following standard options are also supported.</p>\n<dl>\n<dt><strong>-h</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--help</strong></dt>\n<dd><p>Show usage information.</p>\n</dd>\n<dt><strong>--version</strong></dt>\n<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>\n</dd>\n</dl>\n<h1>ENVIRONMENT VARIABLES</h1>\n<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>\n<p>Apart from this, <em>lcrash</em> supports no other environment variables.</p>\n<h1>SEE ALSO</h1>\n<p><em>lstart</em>(1), <em>lclean</em>(1), <em>lhalt</em>(1), <em>lrestart</em>(1), <em>linfo</em>(1), <em>ltest</em>(1), <em>vclean</em>(1), <em>vcrash</em>(1), Netkit filesystem README.</p>\n<h1>AUTHOR</h1>\n<p><em>lcrash</em> script: Stefano Pettini, Massimo Rimondini<br />\nThis man page: Fabio Ricci, Massimo Rimondini</p>\n<h1>REPORTING BUGS</h1>\n<p>Report bugs to the Github issues page: https://github.com/netkit-jh/netkit-jh-build/issues</p>\n<p>Please follow the recommended templates when reporting bugs.</p>\n"),d={id:"netkit-manpage-lcrash",title:"lcrash - manpage",sidebar_label:"lcrash",custom_edit_url:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",keywords:["netkit","netkit-jh","manpage","man","lcrash"]},l={unversionedId:"man/netkit-manpage-lcrash",id:"man/netkit-manpage-lcrash",isDocsHomePage:!1,title:"lcrash - manpage",description:"{html}",source:"@site/docs/man/lcrash.md",slug:"/man/netkit-manpage-lcrash",permalink:"/docs/man/netkit-manpage-lcrash",editUrl:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",version:"current",sidebar_label:"lcrash",sidebar:"docsSidebar",previous:{title:"lclean - manpage",permalink:"/docs/man/netkit-manpage-lclean"},next:{title:"lhalt - manpage",permalink:"/docs/man/netkit-manpage-lhalt"}},h=[],m={toc:h};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",null,r))}c.isMDXComponent=!0},157:function(e,t){}}]);