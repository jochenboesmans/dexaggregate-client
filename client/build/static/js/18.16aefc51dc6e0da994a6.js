(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{216:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a});var r=function(t){var e=function(t){return t<.01?1:t<.1?2:t<1?3:4};return t<.001?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:3,minimumFractionDigits:3,useGrouping:"true"}).format(t):new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumSignificantDigits:e(t),maximumSignificantDigits:e(t),useGrouping:"true"}).format(t)},i=function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",useGrouping:"true"}).format(t)},a=function(t){return new Intl.NumberFormat("en-US",{style:"percent",useGrouping:"true",minimumFractionDigits:2,maximumFractionDigits:2}).format(t)}},217:function(t,e,n){var r=n(226),i=n(229)(r);t.exports=i},218:function(t,e,n){var r=n(219),i=n(217),a=n(214),u=n(220),o=n(213);t.exports=function(t,e,n){var c=o(t)?r:u,l=arguments.length<3;return c(t,a(e,4),n,l,i)}},219:function(t,e){t.exports=function(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n}},220:function(t,e){t.exports=function(t,e,n,r,i){return i(t,function(t,i,a){n=r?(r=!1,t):e(n,t,i,a)}),n}},226:function(t,e,n){var r=n(227),i=n(223);t.exports=function(t,e){return t&&r(t,e,i)}},227:function(t,e,n){var r=n(228)();t.exports=r},228:function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,a=Object(e),u=r(e),o=u.length;o--;){var c=u[t?o:++i];if(!1===n(a[c],c,a))break}return e}}},229:function(t,e,n){var r=n(222);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var a=n.length,u=e?a:-1,o=Object(n);(e?u--:++u<a)&&!1!==i(o[u],u,o););return n}}},234:function(t,e,n){var r=n(248)(n(249));t.exports=r},240:function(t,e,n){var r=n(217),i=n(222);t.exports=function(t,e){var n=-1,a=i(t)?Array(t.length):[];return r(t,function(t,r,i){a[++n]=e(t,r,i)}),a}},243:function(t,e,n){var r=n(244),i=n(214),a=n(240),u=n(213);t.exports=function(t,e){return(u(t)?r:a)(t,i(e,3))}},248:function(t,e,n){var r=n(214),i=n(222),a=n(223);t.exports=function(t){return function(e,n,u){var o=Object(e);if(!i(e)){var c=r(n,3);e=a(e),n=function(t){return c(o[t],t,o)}}var l=t(e,n,u);return l>-1?o[c?e[l]:l]:void 0}}},249:function(t,e,n){var r=n(250),i=n(214),a=n(251),u=Math.max;t.exports=function(t,e,n){var o=null==t?0:t.length;if(!o)return-1;var c=null==n?0:a(n);return c<0&&(c=u(o+c,0)),r(t,i(e,3),c)}},250:function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return-1}},251:function(t,e,n){var r=n(252);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},252:function(t,e,n){var r=n(253),i=1/0,a=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*a:t==t?t:0:0===t?t:0}},253:function(t,e,n){var r=n(239),i=n(232),a=NaN,u=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||l.test(t)?f(t.slice(2),n?2:8):o.test(t)?a:+t}},460:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(60),u=n(243),o=n.n(u),c=n(218),l=n.n(c),f=n(234),m=n.n(f),s=n(216),p=Object(r.lazy)(function(){return n.e(7).then(n.t.bind(null,283,7))}),h=Object(r.lazy)(function(){return n.e(4).then(n.t.bind(null,254,7))}),g=Object(r.lazy)(function(){return n.e(3).then(n.t.bind(null,273,7))}),v=Object(r.lazy)(function(){return n.e(9).then(n.t.bind(null,325,7))}),d=Object(r.lazy)(function(){return n.e(0).then(n.t.bind(null,221,7))}),x=Object(r.lazy)(function(){return n.e(8).then(n.t.bind(null,291,7))}),b=Object(a.b)(function(t){return{market:t.market,time:t.time,viewport:t.viewport}})(function(t){var e=t.market,n=t.time,a=t.viewport;if(!e.market)return i.a.createElement("div",null,"Loading...");var u=Object(s.c)(l()(e.market,function(t,e){return t+l()(e.market_data,function(t,e){return t+e.volume_dai},0)},0)),c=e.exchanges.length,f=o()(e.exchanges,function(t){return t.name}).join(", "),b=Object.keys(e.market).length,y=Math.round((n-e.timestamp)/1e3),E=m()(e.exchanges,function(t){return t.ID===e.lastUpdateExchangeID}).name,w=[{tooltipLeft:"A list of all exchanges from which market data is included.",textLeft:"Exchanges",textRight:c,tooltipRight:f},{tooltipLeft:"The sum of volumes of all market pairs across all exchanges.",textLeft:"Combined Volume (24h) [DAI]",textRight:u},{tooltipLeft:"The total amount of market pairs being listed.",textLeft:"Pairs",textRight:b},{tooltipLeft:"The exchange of and the time since the last update to the market data.",textLeft:"Latest Update",textRight:"".concat(E,", ").concat(y," seconds ago")}],k=a.height||Math.max(document.documentElement.clientHeight,window.innerHeight||0),L=k<900?i.a.createElement("colgroup",null,i.a.createElement("col",{style:{width:"45%"}}),i.a.createElement("col",{style:{width:"55%"}})):i.a.createElement("colgroup",null,i.a.createElement("col",{style:{width:"50%"}}),i.a.createElement("col",{style:{width:"50%"}})),O=k<900?[3]:[0,1,2,3];return i.a.createElement(x,{padding:"dense",style:{tableLayout:"fixed"}},L,i.a.createElement(v,null,o()(O,function(t){var e=w[t].tooltipRight?i.a.createElement(p,{title:w[t].tooltipRight,placement:"bottom"},i.a.createElement(h,{variant:"caption"},w[t].textRight)):i.a.createElement(h,{variant:"caption"},w[t].textRight);return i.a.createElement(g,{style:{height:"4vh"},key:w[t].tooltipLeft},i.a.createElement(d,{align:"right"},i.a.createElement(p,{title:w[t].tooltipLeft,placement:"bottom"},i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null,"Loading...")},i.a.createElement(h,{variant:"caption",style:{fontWeight:"bold"}},w[t].textLeft)))),i.a.createElement(d,null,e))})))});e.default=b}}]);
//# sourceMappingURL=18.16aefc51dc6e0da994a6.js.map