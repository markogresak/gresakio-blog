var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t.util.clone(e[r]));return n;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var r in a)n[r]=a[r];return n},insertBefore:function(e,a,n,r){r=r||t.languages;var s=r[e];if(2==arguments.length){n=arguments[1];for(var i in n)n.hasOwnProperty(i)&&(s[i]=n[i]);return s}var l={};for(var o in s)if(s.hasOwnProperty(o)){if(o==a)for(var i in n)n.hasOwnProperty(i)&&(l[i]=n[i]);l[o]=s[o]}return t.languages.DFS(t.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,a,n){for(var r in e)e.hasOwnProperty(r)&&(a.call(e,r,e[r],n||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],a):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],a,r))}},highlightAll:function(e,a){for(var n,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),s=0;n=r[s++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,r,s){for(var i,l,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1],l=t.languages[i]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var u=n.textContent,c={element:n,language:i,grammar:l,code:u};if(u&&(c.code=u.replace(/^(?:\r?\n|\r)/,"")),!u||!l)return t.hooks.run("complete",c),void 0;if(t.hooks.run("before-highlight",c),r&&_self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){c.highlightedCode=a.stringify(JSON.parse(e.data),i),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(c.element),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},p.postMessage(JSON.stringify({language:c.language,code:c.code}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s&&s.call(n),t.hooks.run("after-highlight",c),t.hooks.run("complete",c)},highlight:function(e,n,r){var s=t.tokenize(e,n);return a.stringify(t.util.encode(s),r)},tokenize:function(e,a){var n=t.Token,r=[e],s=a.rest;if(s){for(var i in s)a[i]=s[i];delete a.rest}e:for(var i in a)if(a.hasOwnProperty(i)&&a[i]){var l=a[i];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],c=u.inside,p=!!u.lookbehind,g=0,m=u.alias;u=u.pattern||u;for(var d=0;d<r.length;d++){var f=r[d];if(r.length>e.length)break e;if(!(f instanceof n)){u.lastIndex=0;var h=u.exec(f);if(h){p&&(g=h[1].length);var w=h.index-1+g,h=h[0].slice(g),y=h.length,k=w+y,b=f.slice(0,w+1),v=f.slice(k+1),P=[d,1];b&&P.push(b);var x=new n(i,c?t.tokenize(h,c):h,m);P.push(x),v&&P.push(v),Array.prototype.splice.apply(r,P)}}}}}return r},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var s={type:e.type,content:a.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}t.hooks.run("wrap",s);var l="";for(var o in s.attributes)l+=o+'="'+(s.attributes[o]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+l+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,r=a.code;_self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[n])))),_self.close()},!1),_self.Prism):_self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}});Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/}},number:{pattern:/([^\w\.])-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,lookbehind:!0},function:/\b(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)\b/,keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/}),Prism.languages.insertBefore("bash","comment",{important:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/});Prism.languages.git={comment:/^#.*$/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,deleted:/^-(?!-).+$/m,inserted:/^\+(?!\+).+$/m,commit_sha1:/^commit \w{40}$/m};Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{function:Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i,e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{[\w\W]*?\})/i,inside:{function:e.languages.javascript.function,punctuation:/[={}[\];(),.:]/,keyword:e.languages.javascript.keyword},alias:"language-javascript"}},e.languages.jsx.tag)}(Prism);Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+(\{|;))/i,inside:{rule:/@[\w-]+/}},url:/([-a-z]+-)*url(?=\()/i,selector:{pattern:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{placeholder:/%[-_\w]+/i}}}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/i,alias:"selector"},statement:/\B!(default|optional)\b/i,boolean:/\b(true|false)\b/,null:/\b(null)\b/,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/});!function(){if(self.Prism){var e=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:#=?&amp;]+/,t=/\b\S+@[\w.]+[a-z]{2}/,a=/\[([^\]]+)]\(([^)]+)\)/,n=["comment","url","attr-value","string"];for(var r in Prism.languages){var s=Prism.languages[r];Prism.languages.DFS(s,function(r,s,i){n.indexOf(i)>-1&&"Array"!==Prism.util.type(s)&&(s.pattern||(s=this[r]={pattern:s}),s.inside=s.inside||{},"comment"==i&&(s.inside["md-link"]=a),"attr-value"==i?Prism.languages.insertBefore("inside","punctuation",{"url-link":e},s):s.inside["url-link"]=e,s.inside["email-link"]=t)}),s["url-link"]=e,s["email-link"]=t}Prism.hooks.add("wrap",function(e){if(/-link$/.test(e.type)){e.tag="a";var t=e.content;if("email-link"==e.type&&0!=t.indexOf("mailto:"))t="mailto:"+t;else if("md-link"==e.type){var n=e.content.match(a);t=n[2],e.content=n[1]}e.attributes.href=t}})}}();!function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(s)||[,""])[1]),!a){var i=(n.match(/\.(\w+)$/)||[,""])[1];a=e[i]||i}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(l.textContent=o.responseText,Prism.highlightElement(l)):l.textContent=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty")},o.send(null)})},self.Prism.fileHighlight())}();
