(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e,t,a){e.exports={profile:"Profile_profile__2mj9x",description:"Profile_description__11Mbi",avatar:"Profile_avatar__1hx7A",name:"Profile_name__1m9TW",tag:"Profile_tag__3Orsh",location:"Profile_location__2FYzJ",stats:"Profile_stats__2pdF8",label:"Profile_label__1s0DQ",quantity:"Profile_quantity__WO9vz"}},,function(e,t,a){e.exports={item:"FriendListItem_item__3uTzu",avatar:"FriendListItem_avatar__1Uczq",name:"FriendListItem_name__LOlaz",online:"FriendListItem_online__3vlRQ",offline:"FriendListItem_offline__2IuYx"}},function(e,t,a){e.exports={wrapper:"App_wrapper__3EpbI",item:"App_item__3Cdkr"}},,,function(e,t,a){e.exports={item:"Stat_item__gsKtq",label:"Stat_label__d-mMV",percentage:"Stat_percentage__iB5yr"}},function(e,t,a){e.exports={statistics:"Statistics_statistics__eJR7Y",title:"Statistics_title__339GT",statList:"Statistics_statList__r2AJk"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e,t,a){e.exports={friendList:"FriendList_friendList__3wwGb"}},,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(13),i=a.n(n),r=a(2),l=a.n(r),d=a(0);var o=function(e){var t=e.users;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t.name}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",t.tag]}),Object(d.jsx)("p",{className:l.a.location,children:t.location})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:t.stats.followers})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:t.stats.views})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:t.stats.likes})]})]})]})})},b=a(8),m=a.n(b);var j=function(e){var t=e.label,a=e.percentage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("span",{className:m.a.label,children:t}),Object(d.jsxs)("span",{className:m.a.percentage,children:[a,"%"]})]})})},u=a(9),p=a.n(u);function f(e){var t=e.stats,a=e.title;return 0===t.length?null:Object(d.jsxs)("section",{className:p.a.statistics,children:[Object(d.jsx)("h2",{className:p.a.title,children:a?a.toUpperCase():a}),Object(d.jsx)("ul",{className:p.a.statList,children:t.map((function(e){return Object(d.jsx)(j,{label:e.label,percentage:e.percentage},e.id)}))})]})}f.defaultProps={stats:[]};var O=f,h=a(4),x=a.n(h);var _=function(e){var t=e.avatar,a=e.name,c=e.isOnline;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:x.a.item,children:[Object(d.jsx)("span",{className:c?x.a.online:x.a.offline}),Object(d.jsx)("img",{className:x.a.avatar,src:t,alt:a,width:"48"}),Object(d.jsx)("p",{className:x.a.name,children:a})]})})},v=a(14),y=a.n(v);function g(e){var t=e.friends;return 0===t.length?null:Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:y.a.friendList,children:t.map((function(e){return Object(d.jsx)(_,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)}))})})}g.defaultProps={friends:[]};var w=g,N=a(7),F=Object(N.a)({trItem:{fontFamily:"Roboto",fontWeight:500,textAlign:"center",padding:3,backgroundColor:function(e){return e?"#e4ebfa":"#e4E9E3"}}});var L=function(e){var t=e.id,a=e.type,c=e.amount,s=e.currency,n=e.count,i=F(n);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{className:i.trRow,id:t,children:[Object(d.jsx)("td",{className:i.trItem,children:a}),Object(d.jsx)("td",{className:i.trItem,children:c}),Object(d.jsx)("td",{className:i.trItem,children:s})]})})},P=Object(N.a)({transactionHistory:{},head:{backgroundColor:"#6795f1",color:"#FFFFFF"},colum:{fontFamily:"Roboto",width:200,padding:10}});function I(e){var t=e.items,a=P();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{className:a.transactionHistory,children:[Object(d.jsx)("thead",{className:a.head,children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:a.colum,children:"Type"}),Object(d.jsx)("th",{className:a.colum,children:"Amount"}),Object(d.jsx)("th",{className:a.colum,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsx)(L,{id:e.id,type:e.type,amount:e.amount,currency:e.currency,count:t%2},e.id)}))})]})})}I.defaultProps={items:[]};var S=I,J=a(16),U=a(12),k=a(17),A=a(18),C=a(5),R=a.n(C);var q=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:R.a.wrapper,children:[Object(d.jsxs)("div",{className:R.a.item,children:[Object(d.jsx)(o,{users:J}),Object(d.jsx)(O,{stats:U,title:"Upload stats"}),Object(d.jsx)(O,{stats:U})]}),Object(d.jsx)("div",{className:R.a.item,children:Object(d.jsx)(w,{friends:k})}),Object(d.jsx)("div",{className:R.a.item,children:Object(d.jsx)(S,{items:A})})]})})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.9cd989d2.chunk.js.map