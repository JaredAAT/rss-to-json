module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var i=n(1),r=n(2),o=n(3);e.exports={isUrl:function(e){return e&&/((http(s)?):\/\/[\w\.\/\-=?#]+)/i.test(e)},load:function(e,t){var n=this,i={method:"get",headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36 OPR/68.0.3618.63",Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"}};return"object"==typeof e&&null!==e?i=Object.assign(i,e):this.isUrl(e)&&(i=Object.assign(i,{url:e})),new Promise((function(e,r){o(i).then((function({data:i}){var r=n.parser(i);t&&t(null,r),e(r)})).catch((function(e){console.log(e),t&&t(e,null),r(e)}))}))},parser:function(e){var t={items:[]},n=r.toJson(e,{object:!0}),o=n.rss&&n.rss.channel?n.rss.channel:n.feed;i.isArray(o)&&(o=o[0]);var u=o.item||o.entry;if(o.title&&(t.title=o.title),o.description&&(t.description=o.description),t.link=o.link&&o.link.href?o.link.href:o.link,t.category=o.category||[],o.image&&(t.image=o.image.url),!t.image&&o["itunes:image"]&&(t.image=o["itunes:image"].href),u&&u.length>0)for(let e=0;e<u.length;e++){var a=u[e],s={};s.title=a.title.$t?a.title.$t:a.title,s.id=a.guid&&a.guid.$t?a.guid.$t:a.id,s.description=a.summary&&a.summary.$t?a.summary.$t:a.description,s.url=a.link&&a.link.href?a.link.href:a.link,s.link=s.url,s.author=a.author&&a.author.name?a.author.name:a["dc:creator"],s.created=a.updated?Date.parse(a.updated):a.pubDate?Date.parse(a.pubDate):Date.now,s.category=a.category||[],s.content=a.content&&a.content.$t?a.content.$t:null,a["content:encoded"]&&(s.content_encoded=a["content:encoded"],s.content=s.content_encoded),a["itunes:subtitle"]&&(s.itunes_subtitle=a["itunes:subtitle"]),a["itunes:summary"]&&(s.itunes_summary=a["itunes:summary"]),a["itunes:author"]&&(s.itunes_author=a["itunes:author"]),a["itunes:explicit"]&&(s.itunes_explicit=a["itunes:explicit"]),a["itunes:duration"]&&(s.itunes_duration=a["itunes:duration"]),a["itunes:season"]&&(s.itunes_season=a["itunes:season"]),a["itunes:episode"]&&(s.itunes_episode=a["itunes:episode"]),a["itunes:episodeType"]&&(s.itunes_episode_type=a["itunes:episodeType"]),s.enclosures=a.enclosure?i.isArray(a.enclosure)?a.enclosure:[a.enclosure]:[],a["media:thumbnail"]&&(s.media=a.media||{},s.media.thumbnail=a["media:thumbnail"],s.enclosures.push(a["media:thumbnail"])),a["media:content"]&&(s.media=a.media||{},s.media.content=a["media:content"],s.enclosures.push(a["media:content"])),a["media:group"]&&(a["media:group"]["media:title"]&&(s.title=a["media:group"]["media:title"]),a["media:group"]["media:description"]&&(s.description=a["media:group"]["media:description"]),a["media:group"]["media:thumbnail"]&&s.enclosures.push(a["media:group"]["media:thumbnail"].url)),t.items.push(s)}return t},read:function(e,t){return this.load(e,t)}}},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("xml2json")},function(e,t){e.exports=require("axios")}]);