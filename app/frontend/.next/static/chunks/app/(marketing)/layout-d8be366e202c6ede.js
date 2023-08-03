(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{833:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(1750);let a=(0,r.Z)("Plus",[["line",{x1:"12",x2:"12",y1:"5",y2:"19",key:"pwfkuu"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}]])},8709:function(e,t,n){"use strict";n.d(t,{F:function(){return d},f:function(){return c}});var r=n(6006);let a=["light","dark"],s="(prefers-color-scheme: dark)",i="undefined"==typeof window,o=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:l},c=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:d=m,defaultTheme:c=n?"system":"light",attribute:u="data-theme",value:x,children:v,nonce:g})=>{let[b,k]=(0,r.useState)(()=>f(l,c)),[w,j]=(0,r.useState)(()=>f(l)),N=x?Object.values(x):d,z=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let s=x?x[r]:r,o=t?p():null,l=document.documentElement;if("class"===u?(l.classList.remove(...N),s&&l.classList.add(s)):s?l.setAttribute(u,s):l.removeAttribute(u),i){let e=a.includes(c)?c:null,t=a.includes(r)?r:e;l.style.colorScheme=t}null==o||o()},[]),M=(0,r.useCallback)(e=>{k(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),C=(0,r.useCallback)(t=>{let r=y(t);j(r),"system"===b&&n&&!e&&z("system")},[b,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&M(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),(0,r.useEffect)(()=>{z(null!=e?e:b)},[e,b]);let Z=(0,r.useMemo)(()=>({theme:b,setTheme:M,forcedTheme:e,resolvedTheme:"system"===b?w:b,themes:n?[...d,"system"]:d,systemTheme:n?w:void 0}),[b,M,e,w,n,d]);return r.createElement(o.Provider,{value:Z},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:l,themes:d,defaultTheme:c,attribute:u,value:x,children:v,attrs:N,nonce:g}),v)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:o,defaultTheme:l,value:d,attrs:c,nonce:m})=>{let u="system"===l,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let s=d?d[e]:e,i=t?e+"|| ''":`'${s}'`,l="";return o&&r&&!t&&a.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||s?`c.add(${i})`:"null":s&&(l+=`d[s](n,${i})`),l},y=e?`!function(){${h}${p(e)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${p(d?"x[e]":"e",!0)}}${u?"":"else{"+p(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${p(d?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},8552:function(e,t,n){Promise.resolve().then(n.t.bind(n,7095,23)),Promise.resolve().then(n.bind(n,7504)),Promise.resolve().then(n.bind(n,8814))},7562:function(e,t,n){"use strict";n.d(t,{P:function(){return Z}});var r=n(9268),a=n(1750);let s=(0,a.Z)("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);var i=n(8178);let o=(0,a.Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),l=(0,a.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var d=n(2324);let c=(0,a.Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),m=(0,a.Z)("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),u=(0,a.Z)("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]),h=(0,a.Z)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);var f=n(8812);let p=(0,a.Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),y=(0,a.Z)("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);var x=n(833);let v=(0,a.Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var g=n(3171);let b=(0,a.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),k=(0,a.Z)("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),w=(0,a.Z)("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]),j=(0,a.Z)("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]),N=(0,a.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),z=(0,a.Z)("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),M=(0,a.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);var C=n(8364);let Z={logo:s,close:i.Z,spinner:o,chevronLeft:l,chevronRight:d.Z,trash:c,post:m,page:u,media:h,settings:f.Z,billing:p,ellipsis:y,add:x.Z,warning:v,user:g.Z,arrowRight:b,help:k,pizza:w,sun:j,moon:N,laptop:z,gitHub:e=>{let{...t}=e;return(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,r.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:M,check:C.Z}},7504:function(e,t,n){"use strict";n.r(t),n.d(t,{MainNav:function(){return m}});var r=n(9268),a=n(6006),s=n(5846),i=n.n(s),o=n(2263),l=n(3044),d=n(7562),c=n(5927);function m(e){let{items:t,children:n}=e,[s,m]=a.useState(!1);return(0,r.jsxs)("div",{className:"flex gap-6 md:gap-10",children:[(0,r.jsx)(i(),{href:"/",className:"hidden items-center space-x-2 md:flex",children:(0,r.jsx)("span",{className:"hidden font-bold sm:inline-block",children:o.J.name})}),(null==t?void 0:t.length)?(0,r.jsx)("nav",{className:"hidden gap-6 md:flex",children:null==t?void 0:t.map((e,t)=>(0,r.jsx)(i(),{href:e.disabled?"#":e.href,className:(0,l.cn)("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground",e.disabled&&"cursor-not-allowed opacity-80"),children:e.title},t))}):null,(0,r.jsxs)("button",{className:"flex items-center space-x-2 md:hidden",onClick:()=>m(!s),children:[s?(0,r.jsx)(d.P.close,{}):(0,r.jsx)(d.P.logo,{}),(0,r.jsx)("span",{className:"font-bold",children:"Menu"})]}),s&&t&&(0,r.jsx)(c.z,{items:t,children:n})]})}},5927:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var r=n(9268),a=n(6006),s=n(5846),i=n.n(s),o=n(2263),l=n(3044);function d(e){let{items:t,children:n}=e;return a.useLayoutEffect(()=>{let e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=e},[]),(0,r.jsx)("div",{className:(0,l.cn)("fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"),children:(0,r.jsxs)("div",{className:"relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md",children:[(0,r.jsx)(i(),{href:"/",className:"flex items-center space-x-2",children:(0,r.jsx)("span",{className:"font-bold",children:o.J.name})}),(0,r.jsx)("nav",{className:"grid grid-flow-row auto-rows-max text-sm",children:t.map((e,t)=>(0,r.jsx)(i(),{href:e.disabled?"#":e.href,className:(0,l.cn)("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",e.disabled&&"cursor-not-allowed opacity-60"),children:e.title},t))}),n]})})}},8814:function(e,t,n){"use strict";n.r(t),n.d(t,{ModeToggle:function(){return l}});var r=n(9268);n(6006);var a=n(8709),s=n(7902),i=n(8361),o=n(7562);function l(){let{setTheme:e}=(0,a.F)();return(0,r.jsxs)(i.h_,{children:[(0,r.jsx)(i.$F,{asChild:!0,children:(0,r.jsxs)(s.z,{variant:"ghost",size:"sm",className:"h-8 w-8 px-0",children:[(0,r.jsx)(o.P.sun,{className:"rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(o.P.moon,{className:"absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,r.jsxs)(i.AW,{align:"end",children:[(0,r.jsxs)(i.Xi,{onClick:()=>e("light"),children:[(0,r.jsx)(o.P.sun,{className:"mr-2 h-4 w-4"}),(0,r.jsx)("span",{children:"Light"})]}),(0,r.jsxs)(i.Xi,{onClick:()=>e("dark"),children:[(0,r.jsx)(o.P.moon,{className:"mr-2 h-4 w-4"}),(0,r.jsx)("span",{children:"Dark"})]}),(0,r.jsxs)(i.Xi,{onClick:()=>e("system"),children:[(0,r.jsx)(o.P.laptop,{className:"mr-2 h-4 w-4"}),(0,r.jsx)("span",{children:"System"})]})]})]})}},7902:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return l}});var r=n(9268),a=n(6006),s=n(8917),i=n(3044);let o=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",xs:"h-8 px-2 rounded",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:n,variant:a,size:s,...l}=e;return(0,r.jsx)("button",{className:(0,i.cn)(o({variant:a,size:s,className:n})),ref:t,...l})});l.displayName="Button"},8361:function(e,t,n){"use strict";n.d(t,{$F:function(){return m},AW:function(){return f},Xi:function(){return p},h_:function(){return c}});var r=n(9268),a=n(6006),s=n(7516),i=n(2324),o=n(8364),l=n(9358),d=n(3044);let c=s.fC,m=s.xz;s.ZA,s.Uv,s.Tr,s.Ee;let u=a.forwardRef((e,t)=>{let{className:n,inset:a,children:o,...l}=e;return(0,r.jsxs)(s.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",n),...l,children:[o,(0,r.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})});u.displayName=s.fF.displayName;let h=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.tu,{ref:t,className:(0,d.cn)("text-on-popover z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...a})});h.displayName=s.tu.displayName;let f=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...i}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})})});f.displayName=s.VY.displayName;let p=a.forwardRef((e,t)=>{let{className:n,inset:a,...i}=e;return(0,r.jsx)(s.ck,{ref:t,className:(0,d.cn)("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",n),...i})});p.displayName=s.ck.displayName;let y=a.forwardRef((e,t)=>{let{className:n,children:a,checked:i,...l}=e;return(0,r.jsxs)(s.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:i,...l,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(o.Z,{className:"h-4 w-4"})})}),a]})});y.displayName=s.oC.displayName;let x=a.forwardRef((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(s.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...i,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),a]})});x.displayName=s.Rk.displayName;let v=a.forwardRef((e,t)=>{let{className:n,inset:a,...i}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",n),...i})});v.displayName=s.__.displayName;let g=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});g.displayName=s.Z0.displayName},2263:function(e,t,n){"use strict";n.d(t,{J:function(){return r}});let r={name:"Sentinel",description:"The revolutionary easy-to-use authentication system for developers, prioritizing simplicity and ease.",url:"https://tx.shadcn.com",ogImage:"https://tx.shadcn.com/og.jpg",links:{twitter:"https://twitter.com/shadcn",github:"https://github.com/shadcn/taxonomy"}}},3044:function(e,t,n){"use strict";n.d(t,{cn:function(){return s},z:function(){return i}});var r=n(9791),a=n(293);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m)((0,r.W)(t))}function i(e){navigator.clipboard.writeText(e)}}},function(e){e.O(0,[95,187,235,652,253,698,744],function(){return e(e.s=8552)}),_N_E=e.O()}]);