(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),p=c(12),i=c.n(p),n=c(4),r=c.n(n),s=c(6),l=c(3),h=c(8),d=(c(18),c(7)),m=c(5),b=c(0),u=function(e){var t=e.currentSong,c=e.isPlaying,a=e.setIsPlaying,o=e.audioRef,p=e.setSongInfo,i=e.songInfo,n=e.songs,h=e.setCurrentSong,u=e.setSongs,f=function(e){var t=n.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));u(t)},j=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(){var e=Object(s.a)(r.a.mark((function e(a){var p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=n.findIndex((function(e){return e.id===t.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,h(n[(p+1)%n.length]);case 4:f(n[(p+1)%n.length]);case 5:if("skip-back"!==a){e.next=15;break}if((p-1)%n.length!==-1){e.next=12;break}return e.next=9,h(n[n.length-1]);case 9:return f(n[n.length-1]),c&&o.current.play(),e.abrupt("return");case 12:return e.next=14,h(n[(p-1)%n.length]);case 14:f(n[(p-1)%n.length]);case 15:c&&o.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:j(i.currentTime)}),Object(b.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(b.jsx)("input",{min:"0",max:i.duration||0,value:i.currentTime,onChange:function(e){o.current.currentTime=e.target.value,p(Object(l.a)(Object(l.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("div",{style:g,className:"animate-track"})]}),Object(b.jsx)("p",{children:i.duration?j(i.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(d.a,{onClick:function(){v("skip-back")},className:"skip-back",size:"2x",icon:m.a}),Object(b.jsx)(d.a,{onClick:function(){c?(o.current.pause(),a(!c)):(o.current.play(),a(!c))},className:"play",size:"2x",icon:c?m.d:m.e}),Object(b.jsx)(d.a,{onClick:function(){v("skip-forward")},className:"skip-forward",size:"2x",icon:m.b})]})]})},f=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{src:t.cover,alt:t.name}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},j=function(e){var t=e.song,c=e.songs,a=e.setCurrentSong,o=e.id,p=e.audioRef,i=e.isPlaying,n=e.setSongs,h=function(){var e=Object(s.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.filter((function(e){return e.id===o})),e.next=3,a(t[0]);case 3:s=c.map((function(e){return e.id===o?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),n(s),i&&p.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:h,className:"library-song ".concat(t.active?"selected":""),children:[Object(b.jsx)("img",{src:t.cover,alt:t.name}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},v=function(e){var t=e.songs,c=e.setCurrentSong,a=e.audioRef,o=e.isPlaying,p=e.setSongs,i=e.libraryStatus;return Object(b.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(b.jsx)(j,{songs:t,setCurrentSong:c,song:e,id:e.id,audioRef:a,isPlaying:o,setSongs:p},e.id)}))})]})},g=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"Wave"}),Object(b.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(b.jsx)(d.a,{icon:m.c})]})]})},O=c(27);var x=function(){return[{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!0},{name:"Festa",artist:"Misha, Jussi Halme",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["##EA7375","##AA9CAF"],audio:"https://mp3.chillhop.com/serve.php/?mp3=12091"},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"D\xe9j\xe0 Vu",cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11229",color:["##858FC3","#77527E"],id:Object(O.a)(),active:!1},{name:"Home Court",cover:"https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11233",color:["##FDBF7F","##9D6D5E"],id:Object(O.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["##3961A3","##F5C85A"],id:Object(O.a)(),active:!1},{name:"Barrows",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=13003",color:["##A9C46B","##A88546"],id:Object(O.a)(),active:!1},{name:"Click",cover:"https://chillhop.com/wp-content/uploads/2020/07/c572841e8431cebc120dffed4f92119f723dd954-1024x1024.jpg",artist:"Dontcry, Nokiaa",audio:"https://mp3.chillhop.com/serve.php/?mp3=8465",color:["##663A69","##F27D8F"],id:Object(O.a)(),active:!1},{name:"Slim Bobby",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10448",color:["##9F76BA","##4A8CCE"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"sozu",artist:"Mommy, Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#5b8bcb","#3c3a22"],audio:"https://mp3.chillhop.com/serve.php/?mp3=19062"},{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!0},{name:"Festa",artist:"Misha, Jussi Halme",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["##EA7375","##AA9CAF"],audio:"https://mp3.chillhop.com/serve.php/?mp3=12091"},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"D\xe9j\xe0 Vu",cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11229",color:["##858FC3","#77527E"],id:Object(O.a)(),active:!1},{name:"Home Court",cover:"https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11233",color:["##FDBF7F","##9D6D5E"],id:Object(O.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["##3961A3","##F5C85A"],id:Object(O.a)(),active:!1},{name:"Barrows",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=13003",color:["##A9C46B","##A88546"],id:Object(O.a)(),active:!1},{name:"Click",cover:"https://chillhop.com/wp-content/uploads/2020/07/c572841e8431cebc120dffed4f92119f723dd954-1024x1024.jpg",artist:"Dontcry, Nokiaa",audio:"https://mp3.chillhop.com/serve.php/?mp3=8465",color:["##663A69","##F27D8F"],id:Object(O.a)(),active:!1},{name:"Slim Bobby",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10448",color:["##9F76BA","##4A8CCE"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"sozu",artist:"Mommy, Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#5b8bcb","#3c3a22"],audio:"https://mp3.chillhop.com/serve.php/?mp3=19062"},{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!0},{name:"Festa",artist:"Misha, Jussi Halme",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["##EA7375","##AA9CAF"],audio:"https://mp3.chillhop.com/serve.php/?mp3=12091"},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"D\xe9j\xe0 Vu",cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11229",color:["##858FC3","#77527E"],id:Object(O.a)(),active:!1},{name:"Home Court",cover:"https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",artist:"Blue Wednesday, Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=11233",color:["##FDBF7F","##9D6D5E"],id:Object(O.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["##3961A3","##F5C85A"],id:Object(O.a)(),active:!1},{name:"Barrows",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=13003",color:["##A9C46B","##A88546"],id:Object(O.a)(),active:!1},{name:"Click",cover:"https://chillhop.com/wp-content/uploads/2020/07/c572841e8431cebc120dffed4f92119f723dd954-1024x1024.jpg",artist:"Dontcry, Nokiaa",audio:"https://mp3.chillhop.com/serve.php/?mp3=8465",color:["##663A69","##F27D8F"],id:Object(O.a)(),active:!1},{name:"Slim Bobby",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10448",color:["##9F76BA","##4A8CCE"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"sozu",artist:"Mommy, Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#5b8bcb","#3c3a22"],audio:"https://mp3.chillhop.com/serve.php/?mp3=19062"},{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1}]};var A=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),c=Object(h.a)(t,2),o=c[0],p=c[1],i=Object(a.useState)(o[0]),n=Object(h.a)(i,2),d=n[0],m=n[1],j=Object(a.useState)(!1),O=Object(h.a)(j,2),A=O[0],w=O[1],y=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),S=Object(h.a)(y,2),C=S[0],F=S[1],k=Object(a.useState)(!1),D=Object(h.a)(k,2),B=D[0],E=D[1],M=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),o=Math.round(c),p=Math.round(a/o*100);F(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:c,animationPercentage:p}))},N=function(){var t=Object(s.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.findIndex((function(e){return e.id===d.id})),t.next=3,m(o[(c+1)%o.length]);case 3:A&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App ".concat(B?"library-active":""),children:[Object(b.jsx)(g,{libraryStatus:B,setLibraryStatus:E}),Object(b.jsx)(f,{currentSong:d}),Object(b.jsx)(u,{audioRef:e,setIsPlaying:w,isPlaying:A,currentSong:d,setSongInfo:F,songInfo:C,songs:o,setCurrentSong:m,setSongs:p}),Object(b.jsx)(v,{audioRef:e,songs:o,setCurrentSong:m,isPlaying:A,setSongs:p,libraryStatus:B}),Object(b.jsx)("audio",{onLoadedMetadata:M,onTimeUpdate:M,ref:e,onEnded:N,src:d.audio})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,a=t.getFID,o=t.getFCP,p=t.getLCP,i=t.getTTFB;c(e),a(e),o(e),p(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.bea481f3.chunk.js.map