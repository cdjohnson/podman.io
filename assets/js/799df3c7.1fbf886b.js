"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[3185],{6799:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294);const l="Have fun coloring and learn about Podman!",n="A decentralized team of open source container tool superheroes comes to the rescue when an asteroid storm threatens the planet. Learn about each tool\u2014Podman, CRI-O, Buildah, Skopeo, and OpenShift\u2014as they redesign the planet's protective shields' container deployment to protect Earth.",s={text:"Download",src:"#"},m={src:"images/raw/comic-cover-224w-288h.png",alt:"Container Commandos coloring book cover"},c={src:"images/raw/coloring-pages.png",alt:"A collection of pages from the Podman coloring book."};const o=function(){return r.createElement("section",{className:"container my-12 flex flex-wrap justify-center gap-4 lg:justify-start xl:my-20"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"mx-4 flex-col items-center text-center lg:mx-0 lg:items-start lg:text-start"},r.createElement("h2",{className:"my-4 font-medium text-blue-900 dark:text-blue-500"},l),r.createElement("p",{className:"mb-4 max-w-prose lg:mb-10"},n),r.createElement("a",{href:s.src,className:"mx-auto block max-w-fit rounded-md px-6 py-2 text-purple-700 outline outline-1 transition duration-150 ease-linear hover:bg-gray-50 dark:text-purple-500 dark:hover:bg-gray-100 lg:mx-0"},s.text," ")),r.createElement("div",{className:"order-first mr-12 hidden lg:block"},r.createElement("img",{src:m.src,alt:m.alt}))),r.createElement("div",{className:"order-first mx-auto lg:order-last xl:mx-0"},r.createElement("img",{src:c.src,alt:c.alt})))}},1320:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294),l=a(2074),n=a(8201);const s=e=>{let{grid:t,display:a,layout:l,title:s,description:m}=e;return r.createElement("div",{className:`${t} ${a} ${l}`},r.createElement("h1",{className:"mb-6 max-w-sm text-purple-700 dark:text-purple-500 lg:max-w-lg "},s),r.createElement(n.Z,{text:m,styles:"leading-relaxed"}))},m=e=>{let{grid:t,display:a,layout:l,image:n={path:"images/raw/podman-2-196w-172h.png",alt:"Podman Logo"}}=e;return r.createElement("div",null,r.createElement("img",{src:n.path,alt:n.alt,className:`${t} ${a} ${l}`}))};const c=function(e){let{title:t,description:a,image:n,lightColor:c="white",darkColor:o="gray-900"}=e;return r.createElement("header",{className:`h-5/6  xl:h-100 bg-${c} dark:bg-${o}`},r.createElement("div",{className:"bg-gradient-to-r from-blue-500  to-purple-700 dark:from-blue-700 dark:to-purple-900 lg:pt-8"},r.createElement(l.Z,null)),r.createElement("div",{className:"container grid justify-items-center gap-3 md:grid-cols-2"},r.createElement(s,{title:t,description:a,layout:"mt-12 lg:mt-0"}),r.createElement(m,{image:n,layout:"mb-8 lg:mb-0"})))}},3198:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294),l=a(8201);const n=function(e){let{title:t,description:a,textGradientStops:n="from-blue-700 via-blue-700 to-blue-900 dark:from-blue-500  dark:to-blue-700",textGradient:s=!1,textColor:m="text-gray-900",fontWeight:c,layout:o,bgColor:i}=e;const d=s?`bg-gradient-radial bg-clip-text text-transparent dark:bg-gradient-radial dark:text-transparent ${n}`:`${m}`;return r.createElement("header",{className:`${i}  ${o}`},r.createElement("div",{className:"container mx-auto mb-4 mt-12 text-center  lg:mt-16"},r.createElement("h2",{className:`${d} ${c}`},t),r.createElement(l.Z,{text:a,styles:"mx-auto my-4 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-100"})))}},2074:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294);const l=function(e){let{light:t="fill-white",dark:a="dark:fill-gray-900",width:l="100",height:n="130",grid:s,layout:m}=e;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${s} ${m}`,width:`${l}%`,viewBox:`-8620 -1968 1400 ${n}`},r.createElement("path",{className:`${t} ${a}`,d:"M-8629-1935v-10.614s78.25-20.752 155.47-20.752c131.788 0 169.95 23.309 233.125 23.309 108.108 0 138.56-21.268 208.573-21.268s108.701 25.151 233.283 25.151c124.581 0 120.881-43.085 251.082-22.031 112.227 18.148 187.023 22.031 264.45 7.825 76.957-14.12 79.117 14.113 79.014 18.38l.003 258h-1425v-258Z"}))}},5348:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),l=a(5935);const n=e=>{let{date:t,styles:a}=e;return r.createElement("div",{className:`${a} h-fit max-w-fit rounded-sm bg-gradient-radial from-blue-500 to-blue-700 px-2 text-white shadow-md dark:from-blue-900 dark:to-blue-900`},r.createElement("p",{className:"font-semibold shadow-sm"},t))};const s=function(e){const t=e.subtitle.trim().split(" ").slice(0,32).join(" ").concat("...");return e.altLayout?r.createElement("article",{className:"my-4 max-w-2xl shadow-lg"},r.createElement("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2"},r.createElement("div",{className:"grid items-end xl:basis-5/12"},r.createElement("div",{className:"z-10 col-start-1 row-start-1"},r.createElement("h3",{className:"w-9/12 bg-gradient-radial from-purple-700 to-purple-900 p-2 text-white shadow-sm"},r.createElement("a",{href:e.path,target:"_blank"},e.title)),r.createElement(n,{date:e.date,styles:"col-start-1 order-1 row-start-1 z-10"})),r.createElement("img",{src:e.imgSrc,className:" col-start-1 row-start-1 h-full w-full rounded-sm object-cover lg:w-80"})),r.createElement("div",{className:"max-w-sm items-center gap-2 self-center p-2 pr-4"},r.createElement("p",{className:"mb-2"},(0,l.ZP)(t)),r.createElement("p",{className:"text-purple-700"},"By: ",r.createElement("a",{href:e.author_link},e.display_name))))):r.createElement("article",{className:"my-4 max-w-sm p-4"},r.createElement("div",{className:"grid"},r.createElement("h3",{className:"w-10/12 rounded-sm bg-gradient-radial from-purple-700 to-purple-900 px-2 py-1 text-white shadow-sm"},r.createElement("a",{href:e.path,target:"_blank"},e.title)),r.createElement("p",{className:"mb-2 mt-4"},(0,l.ZP)(t)),r.createElement(n,{date:e.date,styles:"row-start-1 col-start-1 z-10"}),r.createElement("img",{src:e.imgSrc,className:"object-fit col-start-1 row-start-1 rounded-sm"}),r.createElement("p",{className:"text-purple-700"},"By: ",r.createElement("a",{href:e.author_link},e.display_name))))}},8201:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),l=a(1262);const n=(0,r.lazy)((()=>a.e(4802).then(a.bind(a,4802))));const s=function(e){let{text:t,styles:a}=e;return r.createElement(l.Z,null,(()=>r.createElement(r.Suspense,{fallback:r.createElement("p",null,"text loading...")},r.createElement(n,{children:t,className:a}))))}},5208:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var r=a(7294),l=a(7961),n=a(1954),s=a(8201),m=a(1320),c=a(3198),o=a(6799),i=a(5348),d=a(7462);const u=[{label:"Find",title:"Find and pull down containers no matter where they are.",commands:["podman search","podman pull"],description:"Find and pull down containers whether they are on dockerhub.io or quay.io, an internal registry server, or direct from a vendor.",image:{src:"images/raw/cli-screens/cli-find-image.png",alt:"example of podman commands"}},{label:"Run",title:"Run pre-built application or distro containers.",commands:["podman run"],description:"Find and pull down containers whether they are on dockerhub.io or quay.io, an internal registry server, or direct from a vendor.",image:{src:"images/raw/cli-screens/cli-run-image.png",alt:"example of podman commands"}},{label:"Build",title:"Podman Troubleshooting Guide ",commands:["podman build"],description:"Find and pull down containers whether they are on dockerhub.io or quay.io, an internal registry server, or direct from a vendor.",image:{src:"images/raw/cli-screens/cli-build-image.png",alt:"example of podman commands"}},{label:"Share",title:"Share the containers you've built.",commands:["podman push"],description:"Podman lets you push your newly-built containers anywhere you want with a single podman push command.",image:{src:"images/raw/cli-screens/cli-share-image.png",alt:"example of podman commands"}}],p=e=>{const{label:t,commands:a,method:l,isActive:n}=e;return r.createElement("button",{onClick:l,className:"rounded-lg p-4 shadow-sm transition duration-150 hover:bg-purple-700 hover:text-white dark:hover:bg-purple-900 dark:hover:text-gray-50 md:h-36 md:w-56\n      "+(n?"bg-gradient-radial from-purple-500 to-purple-700 text-white dark:from-purple-700 dark:to-purple-900 dark:shadow-purple-900":"0 bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:shadow-gray-700")},r.createElement("h4",{className:"text-blue-500 dark:text-blue-500"},t),r.createElement("ul",null,a.map(((e,t)=>r.createElement("li",{key:t,className:"hidden font-mono text-sm md:block"},e)))))},g=e=>{const{title:t,commands:a,image:l,description:n,isActive:s}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"xl:my-23 container my-12 flex flex-wrap justify-center gap-4 md:gap-12"},r.createElement("div",{className:"max-w-sm"},r.createElement("h3",{className:"text-3xl "+(s%2==0?"text-white dark:text-white":1===s?"text-blue-700 dark:text-purple-500":"text-purple-700 dark:text-purple-500")},t),r.createElement("ul",{className:"my-4 lg:my-12"},a.map(((e,t)=>r.createElement("li",{key:t,className:"font-mono  "+(2==s?"text-white":"text-blue-500")},e)))),r.createElement("p",{className:s%2==0?"text-white dark:text-white":"text-gray-900 dark:text-white"},n)),r.createElement("div",{className:`${s%2==1&&"md:order-first"}`},r.createElement("img",(0,d.Z)({},l,{className:"object-fill lg:h-[400px] lg:w-[600px]"})))))};const h=function(){const[e,t]=(0,r.useState)(0);return r.createElement("section",{className:"bg-gray-100 dark:bg-gray-900"},r.createElement("div",{className:"container -mb-6 flex justify-center gap-5 md:-mb-10 md:gap-8"},u.map(((a,l)=>r.createElement(p,(0,d.Z)({},a,{method:()=>t(l),isActive:e===l,key:l}))))),r.createElement("section",{className:"py-10 md:py-16 "+(e%2==1?"bg-white dark:bg-gray-900 dark:bg-gradient-to-b dark:from-purple-900 dark:to-purple-900/50":2===e?"bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 dark:from-blue-900 dark:to-gray-700/50":"bg-gradient-to-br from-purple-300 via-purple-700 to-purple-900")},r.createElement("div",{className:"space-between container flex"},r.createElement("button",{onClick:()=>t(e>0?e-1:u.length-1)},r.createElement(n.JO,{icon:"fa-solid:arrow-circle-left",className:"text-3xl transition duration-150 ease-linear hover:opacity-50 dark:hover:opacity-50  "+(e%2==0?"text-white":"text-purple-700 dark:text-gray-50")})),r.createElement(g,(0,d.Z)({},u[e],{isActive:e})),r.createElement("button",{onClick:()=>t(e<3?e+1:0)},r.createElement(n.JO,{icon:"fa-solid:arrow-circle-right",className:"text-3xl transition duration-150 ease-linear hover:text-purple-900 dark:hover:text-purple-700 "+(e%2==0?"text-white":"text-gray-700 dark:text-gray-50")})))))},x="Podman Features",b="Podman is an open source container, pod, and container image management engine. Podman makes it easy to find, run, build, and share containers.",f={title:"Getting to know Podman",cards:[{title:"Quick dive into Podman",description:"Hop on over to our [Podman Quickstart Guide](#) and we'll lead you through basic Podman commands Guide and give you pointers to more learning materials and guides.",image:{path:"images/raw/characters/seal-diving.png",alt:"A seal diving into the water"}},{title:"Join Podman's Community",description:"Podman has an active chat and mailing list, and regular open community meetings. Users and aspiring contributors are most welcome in all of these venues. Join us!",image:{path:"images/raw/characters/seals-swimming.png",alt:"A group of seals swimming."}},{title:"Need some help?",description:"Check out the [Podman Troubleshooting Guide](#), search our [Documentation](#), or file an issue in our [issue tracker](#).",image:{path:"images/raw/characters/confused-seal.png",alt:"A confused seal."}}]},E={title:"Want to learn more?",resources:{title:"Basic Podman Resources",cards:[{text:"Installation Instructions",path:"#",icon:"fa6-solid:book"},{text:"Documentation",path:"#",icon:"fa6-solid:book"},{text:"Podman Troubleshooting",path:"#",icon:"fa6-solid:book"}]},blogPosts:{title:"Recent Podman Blog Posts"}};function y(){return r.createElement("section",{className:"mb-8 mt-4 lg:mt-8 xl:mb-12"},r.createElement(c.Z,{title:f.title}),r.createElement("div",{className:"container flex flex-wrap justify-center gap-4 lg:gap-8"},f.cards.map(((e,t)=>r.createElement("article",{key:t,className:"mt-2 flex flex-col justify-start rounded-md p-4 text-center lg:mt-4"},r.createElement("div",null,r.createElement("h3",{className:"mb-4 font-medium dark:text-blue-500 xl:mb-6"},e.title),r.createElement(s.Z,{text:e.description,styles:"max-w-xs"})),r.createElement("img",{src:e.image.path,alt:e.image.alt,className:"order-first my-2 h-52 w-auto object-contain"}))))))}const w=()=>r.createElement("section",{className:"bg-gradient-to-b from-gray-50 to-gray-100 pb-5 dark:bg-gray-900 dark:from-gray-700/25 dark:to-gray-900"},r.createElement("div",{className:"align-center container mb-8 flex justify-center xl:mb-20"},r.createElement("div",{className:"flex-row content-center"},r.createElement("h2",{className:"mb-5 content-center bg-blue-500 pl-5 pr-5 text-white dark:bg-blue-700 dark:text-white"},"Podman Desktop"))),r.createElement("div",{className:"container mb-4 grid gap-2 lg:grid-cols-3"},r.createElement("div",{id:"imgdiv",className:"mx-auto"},r.createElement("img",{id:"pdlogo",src:"logos/optimized/podman-desktop-logo-200w-198h.webp"})),r.createElement("div",{className:"col-span-2"},r.createElement("p",{className:"my-8 align-middle text-2xl leading-relaxed"},"Podman Desktop is Podman's graphical application that makes it easy to install and work with Podman (and other container engines) on Windows, MacOS, and Linux.")))),k=()=>r.createElement("section",{className:"bg-gradient-to-b from-purple-100 to-purple-300 pb-5 dark:from-purple-900 dark:to-blue-900"},r.createElement("div",{className:"align-center container my-8 grid justify-center gap-4 md:grid-cols-3 xl:my-20"},r.createElement("div",{className:"my-8 h-fit rounded-md bg-white/50 shadow-md"},r.createElement("div",{className:"flex flex-col items-center justify-center p-8 dark:text-black"},r.createElement("div",null,r.createElement("h3",{className:"mb-5 dark:text-black"},"Manage containers (not just Podman.)"),r.createElement("p",{className:"mb-3 dark:text-black"},"Podman Desktop allows you to list, view, and manage containers from multiple supported container engines* in a single unified view."),r.createElement("p",{className:"mb-3 dark:text-black"},"Gain easy access to a shell inside the container, logs, and basic controls."),r.createElement("em",{className:"mt-10 block"},"* Supported engines and orchestrators include Podman, Docker, Lima, kind, Red Hat OpenShift, Red Hat OpenShift Developer Sandbox.")))),r.createElement("div",{className:"col-span-2 w-full"},r.createElement("img",{className:"w-full",src:"images/optimized/ui-screens/ui-manage-containers.webp"})))),N=()=>r.createElement("section",{className:"bg-gradient-to-b from-white to-gray-50 pb-5 dark:from-gray-900 dark:to-purple-900"},r.createElement("div",{className:"align-center container my-8 grid justify-center gap-4 md:grid-cols-3 xl:my-20"},r.createElement("div",{className:"col-span-2 w-full"},r.createElement("img",{className:"mb-6 mt-6 w-full md:max-w-[75%]",src:"images/optimized/ui-screens/ui-buildimage.webp"})),r.createElement("div",{className:"my-8 h-fit rounded-md bg-white/50 shadow-md"},r.createElement("div",{className:"flex flex-col items-center justify-center p-8"},r.createElement("div",null,r.createElement("h3",{className:"mb-5 dark:text-black"},"Build, pull, and push images."),r.createElement("p",{className:"dark:text-black"},"Build containers from a Dockerfile / Containerfile, or pull images from remote repositories to run."),r.createElement("p",{className:"dark:text-black"},"Manage accounts for and push your images to multiple container registries.")))))),v=()=>r.createElement("section",{className:"bg-gradient-to-b from-blue-100 to-blue-50 pb-5 dark:from-gray-700 dark:to-gray-900"},r.createElement("div",{className:"align-right container my-8 grid justify-center gap-4 md:grid-cols-3 xl:my-16"},r.createElement("div",{className:"my-8 h-fit rounded-md bg-white/50 shadow-md"},r.createElement("div",{className:"flex flex-col items-center justify-center p-8"},r.createElement("div",null,r.createElement("h3",{className:"mb-5 dark:text-black"},"Create pods."),r.createElement("p",{className:"dark:text-black"},"Create pods by selecting containers to run together. View unified logs for your pods and inspect the containers inside each."),r.createElement("p",{className:"dark:text-black"},"Play Kubernetes YAML locally, without Kubernetes, and generate Kubernetes YAML from Pods.")))),r.createElement("div",{className:"col-span-2 w-full"},r.createElement("img",{className:"mb-6 mt-6 w-full md:max-w-[75%]",src:"images/optimized/ui-screens/ui-podify.webp"})))),P=()=>r.createElement("section",{className:"bg-gradient-to-b from-white to-gray-100 pb-5 dark:from-blue-900 dark:to-gray-900"},r.createElement("div",{className:"container my-8 grid justify-center gap-4 md:grid-cols-3 xl:my-20"},r.createElement("div",{className:"col-span-2 w-full"},r.createElement("img",{className:"mb-6 mt-6 w-full md:max-w-[75%]",src:"images/optimized/ui-screens/ui-k8sdeploy.webp"})),r.createElement("div",{className:"my-8 h-fit rounded-md bg-white/50 shadow-md"},r.createElement("div",{className:"flex flex-col items-center justify-center p-8"},r.createElement("div",null,r.createElement("h3",{className:"mb-5 dark:text-black"},"Deploy to Kubernetes."),r.createElement("p",{className:"dark:text-black"},"Deploy pods from Podman Desktop to local or remote Kubernetes contexts using automatically-generated YAML config.")))))),j=()=>r.createElement("section",{className:"bg-gradient-to-b from-gray-50 to-gray-100  pb-5 dark:from-gray-700/25  dark:to-gray-900"},r.createElement("div",{className:"align-center container mb-8 flex justify-center xl:mb-20"},r.createElement("div",{className:"flex-row content-center"},r.createElement("h2",{className:"mb-5 content-center bg-blue-700 pl-5 pr-5 text-white dark:text-white"},"Podman Command-Line"))),r.createElement("div",{className:"container mb-4 grid gap-2 lg:grid-cols-3"},r.createElement("div",{className:"mx-auto"},r.createElement("img",{className:"max-h-[200px]",src:"images/raw/podman-selkie-385w-358h.png"})),r.createElement("div",{className:"col-span-2"},r.createElement("p",{className:"my-8 align-middle text-2xl leading-relaxed"},"Podman's command-line interface allows you to find, run, build, and share containers.")))),Z=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=await fetch("https://blog.podman.io/wp-json/wp/v2/posts?per_page=4&_fields=id, author_info, title, wbDate, jetpack_featured_media_url, link, excerpt"),a=await e.json();t(a)})().catch(console.error)}),[]),r.createElement("section",{className:"my-4 lg:my-0"},r.createElement("header",{className:"container mb-4 text-center lg:mb-8 lg:text-start"},r.createElement("h3",{className:"font-medium text-blue-700 dark:text-blue-500"},E.blogPosts.title)),r.createElement("div",{className:"flex flex-col gap-4"},e.map(((e,t)=>{if(t<2)return r.createElement(i.Z,{title:e.title.rendered,author_link:e.author_info.author_link,display_name:e.author_info.display_name,subtitle:e.excerpt.rendered,date:e.wbDate,imgSrc:e.jetpack_featured_media_url,path:e.link,altLayout:!0,key:e.id})})),r.createElement("p",{className:"ml-2l text-center 2xl:text-start"},"Check out more posts about Podman"," ",r.createElement("a",{href:"https://blog.podman.io",target:"_blank",className:"underline-offset-4 transition duration-150 ease-linear hover:text-purple-700 dark:hover:text-purple-500"},"on our Blog!"))))},$=()=>r.createElement("section",{className:"mt-4 lg:my-0"},r.createElement("header",{className:"container mb-6 text-center xl:mb-8 xl:text-start"},r.createElement("h3",{className:"font-medium text-blue-700 dark:text-blue-500"},E.resources.title)),r.createElement("div",null,r.createElement("ul",{className:"mb-10 mt-4 flex flex-col gap-6 sm:flex-row lg:mb-16 lg:mt-8 lg:gap-4 xl:flex-col"},E.resources.cards.map(((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.path,className:"mx-auto flex h-32 max-w-lg flex-col items-center justify-center gap-4 rounded-md bg-gray-100 p-4 text-center text-purple-700 underline-offset-4 transition duration-150 ease-linear hover:bg-purple-700 hover:text-purple-50 hover:shadow-md dark:bg-gray-700 dark:hover:bg-purple-900 dark:hover:text-white lg:h-auto lg:flex-row xl:justify-start"},r.createElement("span",null,e.text),r.createElement(n.JO,{icon:e.icon,className:"order-first hidden lg:block"})))))))),_=()=>r.createElement("section",null,r.createElement(c.Z,{title:E.title,textGradient:!0,textGradientStops:"from-purple-500 to-purple-900"}),r.createElement("div",{className:"container mt-8 flex flex-wrap justify-center gap-24"},r.createElement(Z,null),r.createElement($,null)));const C=function(){return r.createElement(l.Z,null,r.createElement(m.Z,{title:x,description:b}),r.createElement(y,null),r.createElement(w,null),r.createElement(k,null),r.createElement(N,null),r.createElement(v,null),r.createElement(P,null),r.createElement(j,null),r.createElement(h,null),r.createElement(_,null),r.createElement(o.Z,null))}}}]);