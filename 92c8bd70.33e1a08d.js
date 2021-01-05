(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return l}));var o=t(3),i=t(7),r=(t(0),t(141)),a=t(144);var s=t.n(a)()("\n<h1>NAME</h1>\n<p>vconf - attach network interfaces to running netkit virtual machines</p>\n<h1>SYNOPSIS</h1>\n<p><strong>vconf</strong> [options] <em>MACHINE-ID</em></p>\n<h1>DESCRIPTION</h1>\n<p>The <em>vconf</em> command can be used to attach network interfaces to running virtual machines ''on the fly''. The affected machine is identified by a <strong>MACHINE-ID</strong>, which is either the PID or the name of a running virtual machine.</p>\n<p>One or more interfaces can be attached or detached on a running virtual machine by using the following option an arbitrary number of times.</p>\n<dl>\n<dt><strong>--ethN=<em>DOMAIN</em></strong></dt>\n<dd><p>The syntax for this option is exactly the same as for the corresponding option of <strong>vstart</strong> (see <strong>vstart</strong>(1)). It is also possible to provide an empty <em>DOMAIN</em>, in which case the network interface <strong>ethN</strong> will be no longer available on the virtual machine.<br />\nPlease read the <strong>vstart</strong> documentation before using this option to setup ''<strong>tap</strong>'' collision domains.</p>\n</dd>\n</dl>\n<p>Attaching an already existing interface to a virtual machine causes an error.</p>\n<p>The following options are also supported by <em>vconf</em>.</p>\n<dl>\n<dt><strong>-h</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--help</strong></dt>\n<dd><p>Show usage information. This option also reports information about the range of allowed interface numbers, configured inside <em>netkit.conf</em> (see <strong>netkit.conf</strong>(5)).</p>\n</dd>\n<dt><strong>-p</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--print</strong></dt>\n<dd><p>Instead of actually starting virtual hubs and configuring network interfaces, just show which commands would be executed.</p>\n</dd>\n<dt><strong>-q</strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--quiet</strong></dt>\n<dd><p>This option suppresses any kind of output, except errors and warnings. </p>\n</dd>\n<dt><strong>-u <em>USERNAME</em></strong></dt>\n<dd>\n</dd>\n</dl>\n<dl>\n<dt><strong>--user=<em>USERNAME</em></strong></dt>\n<dd><p>This option tells <em>vconf</em> to only work on virtual machines owned by <em>USERNAME</em>. By default, <em>vconf</em> only allows to attach interfaces to virtual machines started by the current user (i.e., the one who launched <em>vconf</em>). By using this option it is possible to attach interfaces to someone else's virtual machines (this requires administrative privileges). The special user name '<strong>-</strong>' is reserved and allows to consider all virtual machines, regardless of their owner.</p>\n</dd>\n</dl>\n<p>Consider that different users may be running virtual machines having the same name. Hence, using the '<strong>--user</strong>=<strong>-</strong>' option when <em>MACHINE-ID</em> is a virtual machine name may arise ambiguities. In such a case, <em>vconf</em> only works on the virtual machine reported by issuing the command</p>\n<p>'vlist -u - <em>MACHINE-ID</em>'.</p>\n<dl>\n<dt><strong>--version</strong></dt>\n<dd><p>Print information about the installed Netkit release and the host kernel version and exit. If ''<em>&lt;unavailable&gt;</em>'' is printed instead of a version number, then the corresponding information could not be retrieved (for example because a non-standard Netkit kernel or filesystem is being used).</p>\n</dd>\n</dl>\n<h2>Important notes</h2>\n<p>Support for detaching network interfaces from running virtual machines may still be buggy. In particular, in some cases it may not be possible to reattach a previously detached network interface.</p>\n<p>Due to the mechanism by which they are configured, network interfaces attached by using this command are not shown by the <em>vlist</em> command, even when requesting complete details about the virtual machine.<br />\nAs a side effect of this, virtual hubs (collision domains) started by <em>vconf</em> are not automatically stopped when all the connected machines are shut down. In order to do this, you should use the <strong>vclean</strong> command with the option <strong>-H</strong> (see <strong>vclean</strong>(1)).</p>\n<p>An important difference with respect to attaching interfaces with <em>vstart</em> (see <strong>vstart</strong>(1)) is that, when using ''<strong>tap</strong>'' collision domains, the configuration of the virtual machine is not automatically updated. In particular, assume that interface eth0 has been set up using <em>vconf</em> with the following option:</p>\n<pre><code>--eth0=tap,TAP-ADDRESS,GUEST-ADDRESS</code></pre>\n<p>After doing so, the following operations must be performed inside the virtual machine in order to make the interface operational:</p>\n<ol type=\"1\">\n<li><p>Interface eth0 must be assigned IP address <em>GUEST-ADDRESS</em>. You can do this by using the following command:</p></li>\n</ol>\n<pre><code>ifconfig eth0 GUEST-ADDRESS up</code></pre>\n<p>Notice that <em>vconf</em> does not consider the <em>GUEST-ADDRESS</em> parameter, even if the command syntax requires it. Hence, you are free to use any IP address in configuring interface eth0 (provided that it is on the same (sub)network as <em>TAP-ADDRESS</em>). Nevertheless, it is a good rule to be coherent with the <em>GUEST-ADDRESS</em> provided on the <em>vconf</em> command line.</p>\n<ol start=\"2\" type=\"1\">\n<li><p>A default route must be configured to point to the host side of the ''<strong>tap</strong>'' interface. This can be achieved by issuing the following command:</p></li>\n</ol>\n<pre><code>route add default gw TAP-ADDRESS dev eth0</code></pre>\n<p>Once this is done, the interface is ready for use.</p>\n<p>Please make sure you run 'vclean -H' (see <strong>vclean</strong>(1)) when a ''<strong>tap</strong>'' collision domain is no more used. Not doing so may result in the impossibility to correctly configure new ''<strong>tap</strong>'' collision domains. For example, this may prevent from correctly setting the <em>TAP-ADDRESS</em> for a new ''<strong>tap</strong>'' domain.</p>\n<h1>ENVIRONMENT VARIABLES</h1>\n<p>All Netkit commands require that the <strong>NETKIT_HOME</strong> variable contains the name of the directory Netkit is installed in.</p>\n<p>Apart from this, <em>vconf</em> supports no other environment variables.</p>\n<h1>EXAMPLES</h1>\n<pre><code>vconf --eth0=A pc1</code></pre>\n<p>Equip virtual machine <strong>pc1</strong> with a new interface (<strong>eth0</strong>) which is attached to the virtual collision domain <strong>A</strong>.</p>\n<pre><code>vconf --eth1=tap,10.0.0.1,10.0.0.2 -u foo pc2</code></pre>\n<p>Configure a new interface (<strong>eth1</strong>) on virtual machine <strong>pc2</strong> owned by user <strong>foo</strong>. The host side of the interface will be automatically configured to have IP address <strong>10.0.0.1</strong>. The interface inside the virtual machine will have to be configured by issuing the following commands:</p>\n<pre><code>ifconfig eth1 10.0.0.2 up\nroute add default gw 10.0.0.1 dev eth1</code></pre>\n<p>Running this example requires administrative privileges. The <em>vconf</em> command will take care of asking you for the root password if needed. For more information about how Netkit gains root privileges, see <strong>USE_SUDO</strong> and <strong>SETTING UP NETKIT FOR USE WITH SUDO</strong> in the man page of <strong>netkit.conf</strong>(5).</p>\n<h1>SEE ALSO</h1>\n<p><em>vclean</em>(1), <em>vcrash</em>(1), <em>vhalt</em>(1), <em>vlist</em>(1), <em>vstart</em>(1), <em>netkit.conf</em>(5).</p>\n<h1>AUTHOR</h1>\n<p><em>vconf</em> script: Massimo Rimondini<br />\nThis man page: Massimo Rimondini</p>\n"),d={id:"netkit-manpage-vconfig",title:"vconfig - manpage",sidebar_label:"vconfig",custom_edit_url:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",keywords:["netkit","netkit-jh","manpage","man","vconfig"]},c={unversionedId:"man/netkit-manpage-vconfig",id:"man/netkit-manpage-vconfig",isDocsHomePage:!1,title:"vconfig - manpage",description:"{html}",source:"@site/docs/man/vconfig.md",slug:"/man/netkit-manpage-vconfig",permalink:"/docs/man/netkit-manpage-vconfig",editUrl:"https://github.com/netkit-jh/netkit-jh-build/tree/master/core/man",version:"current",sidebar_label:"vconfig",sidebar:"someSidebar",previous:{title:"vcommand - manpage",permalink:"/docs/man/netkit-manpage-vcommand"},next:{title:"vconnect - manpage",permalink:"/docs/man/netkit-manpage-vconnect"}},m=[],h={toc:m};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",null,s))}l.isMDXComponent=!0},145:function(e,n){}}]);