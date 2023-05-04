"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[5445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"commands/podman-cp",id:"commands/podman-cp",title:"podman-cp",description:"% podman-cp 1",source:"@site/docs/commands/podman-cp.md",sourceDirName:"commands",slug:"/commands/podman-cp",permalink:"/website-new/docs/commands/podman-cp",draft:!1,editUrl:"https://github.com/containers/website-new/docs/commands/podman-cp.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-container-runlabel",permalink:"/website-new/docs/commands/podman-container/podman-container-runlabel"},next:{title:"podman-create",permalink:"/website-new/docs/commands/podman-create"}},m={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--archive</strong>, <strong>-a</strong>",id:"--archive--a",level:4},{value:"<strong>--overwrite</strong>",id:"--overwrite",level:4},{value:"ALTERNATIVES",id:"alternatives",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2}],s={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-cp 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","cp - Copy files/folders between a container and the local filesystem"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman cp")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][*container*:]",(0,r.kt)("em",{parentName:"p"},"src_path")," ","[",(0,r.kt)("em",{parentName:"p"},"container"),":]",(0,r.kt)("em",{parentName:"p"},"dest_path")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman container cp")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"][*container*:]",(0,r.kt)("em",{parentName:"p"},"src_path")," ","[",(0,r.kt)("em",{parentName:"p"},"container"),":]",(0,r.kt)("em",{parentName:"p"},"dest_path")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman cp")," allows copying the contents of ",(0,r.kt)("strong",{parentName:"p"},"src_path")," to the ",(0,r.kt)("strong",{parentName:"p"},"dest_path"),". Files can be copied from a container to the local machine and vice versa or between two containers.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," is specified for either the ",(0,r.kt)("inlineCode",{parentName:"p"},"SRC_PATH")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DEST_PATH"),", one can also stream a tar archive from ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN")," or to ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,r.kt)("p",null,"The containers can be either running or stopped and the ",(0,r.kt)("em",{parentName:"p"},"src_path")," or ",(0,r.kt)("em",{parentName:"p"},"dest_path")," can be a file or directory."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"IMPORTANT: The ",(0,r.kt)("strong",{parentName:"em"},"podman cp")," command assumes container paths are relative to the container's root directory (",(0,r.kt)("inlineCode",{parentName:"em"},"/"),"), which means supplying the initial forward slash is optional and therefore sees ",(0,r.kt)("inlineCode",{parentName:"em"},"compassionate_darwin:/tmp/foo/myfile.txt")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"compassionate_darwin:tmp/foo/myfile.txt")," as identical.")),(0,r.kt)("p",null,"Local machine paths can be an absolute or relative value.\nThe command interprets a local machine's relative paths as relative to the current working directory where ",(0,r.kt)("strong",{parentName:"p"},"podman cp")," is run."),(0,r.kt)("p",null,"Assuming a path separator of ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", a first argument of ",(0,r.kt)("strong",{parentName:"p"},"src_path")," and second argument of ",(0,r.kt)("strong",{parentName:"p"},"dest_path"),", the behavior is as follows:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src_path")," specifies a file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," does not exist",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the file is saved to a file created at ",(0,r.kt)("strong",{parentName:"li"},"dest_path")," (note that parent directory must exist)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," exists and is a file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the destination is overwritten with the source file's contents."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," exists and is a directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the file is copied into this directory using the base name from ",(0,r.kt)("strong",{parentName:"li"},"src_path"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src_path")," specifies a directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," does not exist",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," is created as a directory and the contents of the source directory are copied into this directory."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," exists and is a file",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Error condition: cannot copy a directory to a file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dest_path")," exists and is a directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src_path")," ends with ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the source directory is copied into this directory."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src_path")," ends with ",(0,r.kt)("inlineCode",{parentName:"li"},"/.")," (i.e., slash followed by dot)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the content of the source directory is copied into this directory.")))))),(0,r.kt)("p",null,"The command requires ",(0,r.kt)("strong",{parentName:"p"},"src_path")," and ",(0,r.kt)("strong",{parentName:"p"},"dest_path")," to exist according to the above rules."),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"src_path")," is local and is a symbolic link, the symbolic target, is copied by default."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"colon")," ( : ) is used as a delimiter between a container and its path, it can also be used when specifying paths to a ",(0,r.kt)("strong",{parentName:"p"},"src_path")," or ",(0,r.kt)("strong",{parentName:"p"},"dest_path")," on a local machine, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"file:name.txt"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"IMPORTANT: while using a "),"colon",(0,r.kt)("em",{parentName:"p"}," ( : ) in a local machine path, one must be explicit with a relative or absolute path, for example: ",(0,r.kt)("inlineCode",{parentName:"em"},"/path/to/file:name.txt")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"./file:name.txt"))),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," as the ",(0,r.kt)("strong",{parentName:"p"},"src_path")," streams the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN")," as a tar archive. The command extracts the content of the tar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEST_PATH")," in the container. In this case, ",(0,r.kt)("strong",{parentName:"p"},"dest_path")," must specify a directory. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," as the ",(0,r.kt)("strong",{parentName:"p"},"dest_path")," streams the contents of the resource (can be a directory) as a tar archive to ",(0,r.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"podman cp")," ignores permission errors when copying from a running rootless container. The TTY devices inside a rootless container are owned by the host's root user and hence cannot be read inside the container's user namespace."),(0,r.kt)("p",null,"Further note that ",(0,r.kt)("inlineCode",{parentName:"p"},"podman cp")," does not support globbing (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"cp dir/*.txt"),"). To copy multiple files from the host to the container use xargs(1) or find(1) (or similar tools for chaining commands) in conjunction with ",(0,r.kt)("inlineCode",{parentName:"p"},"podman cp"),". To copy multiple files from the container to the host, use ",(0,r.kt)("inlineCode",{parentName:"p"},"podman mount CONTAINER")," and operate on the returned mount point instead (see ALTERNATIVES below)."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("h4",{id:"--archive--a"},(0,r.kt)("strong",{parentName:"h4"},"--archive"),", ",(0,r.kt)("strong",{parentName:"h4"},"-a")),(0,r.kt)("p",null,"Archive mode (copy all UID/GID information).\nWhen set to true, files copied to a container will have changed ownership to the primary UID/GID of the container.\nWhen set to false, maintain UID/GID from archive sources instead of changing them to the primary UID/GID of the destination container.\nThe default is ",(0,r.kt)("strong",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"--overwrite"},(0,r.kt)("strong",{parentName:"h4"},"--overwrite")),(0,r.kt)("p",null,"Allow directories to be overwritten with non-directories and vice versa. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"podman cp")," errors out when attempting to overwrite, for instance, a regular file with a directory."),(0,r.kt)("h2",{id:"alternatives"},"ALTERNATIVES"),(0,r.kt)("p",null,"Podman has much stronger capabilities than just ",(0,r.kt)("inlineCode",{parentName:"p"},"podman cp")," to achieve copying files between the host and containers."),(0,r.kt)("p",null,"Using standard ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-mount"},"podman-mount(1)"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-unmount"},"podman-unmount(1)"))," takes advantage of the entire linux tool chain, rather than just cp."),(0,r.kt)("p",null,"copying contents out of a container or into a container, can be achieved with a few simple commands. For example:"),(0,r.kt)("p",null,"To copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/foobar")," directory out of a container and onto ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," on the host, the following commands can be executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mnt=$(commands/podman mount CONTAINERID)\ncp -R ${mnt}/etc/foobar /tmp\npodman umount CONTAINERID\n")),(0,r.kt)("p",null,"To untar a tar ball into a container, following commands can be executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mnt=$(commands/podman mount CONTAINERID)\ntar xf content.tgz -C ${mnt}\npodman umount CONTAINERID\n")),(0,r.kt)("p",null,"To install a package into a container that\ndoes not have dnf installed, following commands can be executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mnt=$(commands/podman mount CONTAINERID)\ndnf install --installroot=${mnt} httpd\nchroot ${mnt} rm -rf /var/log/dnf /var/cache/dnf\npodman umount CONTAINERID\n")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"podman mount")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"podman unmount"),", one can use all of the\nstandard linux tools for moving files into and out of containers, not just\nthe cp command."),(0,r.kt)("h2",{id:"examples"},"EXAMPLES"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy a file from host to a container."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp /myapp/app.conf containerID:/myapp/app.conf\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy a file from a container to a directory on another container."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp containerID1:/myfile.txt containerID2:/tmp\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy a directory on a container to a directory on the host."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp containerID:/myapp/ /myapp/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the contents of a directory on a container to a directory on the host."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp containerID:/home/myuser/. /home/myuser/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy a directory on a container into a directory on another."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp containerA:/myapp containerB:/newapp\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stream a tar archive from ",(0,r.kt)("inlineCode",{parentName:"p"},"STDIN")," to a container."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"podman cp - containerID:/myfiles.tar.gz < myfiles.tar.gz\n")))),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-mount"},"podman-mount(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/commands/podman-unmount"},"podman-unmount(1)"))))}d.isMDXComponent=!0}}]);