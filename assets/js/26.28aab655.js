(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{452:function(t,e,s){"use strict";s.r(e);var a=s(24),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("h2",{attrs:{id:"现象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),s("p",[t._v("在装包"),s("code",[t._v("yarn global add babel")]),t._v("的过程中，报了如下错误：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("error An unexpected error occurred: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"EPERM: operation not permitted, unlink 'C:"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Users"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("AppData"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Local"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Yarn"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("global"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("node_modules"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(".bin"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("serve'\"")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1554318/201903/1554318-20190319092838716-934704375.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[s("code",[t._v("C:\\\\Users\\\\xxx\\\\AppData\\\\Local\\\\Yarn\\\\Data\\\\global\\\\node_modules\\\\.bin\\\\")]),t._v("目录下的"),s("code",[t._v("serve")]),t._v("被占用\n仔细想了一下，当前"),s("code",[t._v("serve")]),t._v("在另一个项目中在使用，把它关闭以后，重新运行"),s("code",[t._v("yarn global add babel")]),t._v("，就可以了\n"),s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1554318/201903/1554318-20190319094306803-1723740967.png",alt:""}})]),t._v(" "),s("p",[t._v("这个问题产生的原因就是在装包的时候，会删除之前的"),s("code",[t._v(".bin")]),t._v("文件再重新生成，由于文件被占用导致无法删除文件，因此就会报错，只需要关闭相应的占用程序即可。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("装包时会删除之前的"),s("code",[t._v(".bin")]),t._v("文件再重新生成")]),s("br"),t._v("\n第一次装包时，"),s("code",[t._v("babel")]),t._v("的创建时间如下：\n"),s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1554318/201903/1554318-20190319094210972-1996527035.png",alt:""}}),t._v("\n第二次装其他包时，"),s("code",[t._v("babel")]),t._v("的创建时间如下：\n"),s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1554318/201903/1554318-20190319094444362-2068095593.png",alt:""}}),t._v("\n可以看出，在第二次装包时，"),s("code",[t._v(".bin")]),t._v("文件夹下的"),s("code",[t._v("babel")]),t._v("被重新创建了。\n另外，\n如果在装包的过程中，同时开着"),s("code",[t._v(".bin")]),t._v("文件夹，在装包结束时，可以看出"),s("code",[t._v(".bin")]),t._v("文件夹会被删除，然后再重新生成")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("记录于 "),s("a",{attrs:{href:"https://www.cnblogs.com/yanjiez/p/10556649.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnblogs 2019-03-19"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);