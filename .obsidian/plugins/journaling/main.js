"use strict";var X=Object.defineProperty;var Z=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F=(t,e,n)=>(Z(t,typeof e!="symbol"?e+"":e,n),n);const f=require("obsidian");function m(){}function W(t){return t()}function O(){return Object.create(null)}function x(t){t.forEach(W)}function Y(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function P(t,e){t.appendChild(e)}function G(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function et(t){return document.createTextNode(t)}function nt(){return et(" ")}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function A(t,e){return new t(e)}let M;function $(t){M=t}const p=[],k=[];let w=[];const z=[],it=Promise.resolve();let E=!1;function at(){E||(E=!0,it.then(R))}function D(t){w.push(t)}const N=new Set;let g=0;function R(){if(g!==0)return;const t=M;do{try{for(;g<p.length;){const e=p[g];g++,$(e),rt(e.$$)}}catch(e){throw p.length=0,g=0,e}for($(null),p.length=0,g=0;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];N.has(n)||(N.add(n),n())}w.length=0}while(p.length);for(;z.length;)z.pop()();E=!1,N.clear(),$(t)}function rt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function ot(t){const e=[],n=[];w.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),w=e}const S=new Set;let h;function lt(){h={r:0,c:[],p:h}}function ct(){h.r||x(h.c),h=h.p}function j(t,e){t&&t.i&&(S.delete(t),t.i(e))}function H(t,e,n,s){if(t&&t.o){if(S.has(t))return;S.add(t),h.c.push(()=>{S.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function J(t){t&&t.c()}function T(t,e,n){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,n),D(()=>{const r=t.$$.on_mount.map(W).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),a.forEach(D)}function V(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(p.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,s,a,r,o=null,u=[-1]){const l=M;$(t);const i=t.$$={fragment:null,ctx:[],props:r,update:m,not_equal:a,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(i.root);let d=!1;if(i.ctx=n?n(t,e.props||{},(c,b,..._)=>{const v=_.length?_[0]:b;return i.ctx&&a(i.ctx[c],i.ctx[c]=v)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](v),d&&ut(t,c)),b}):[],i.update(),d=!0,x(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const c=st(e.target);i.fragment&&i.fragment.l(c),c.forEach(B)}else i.fragment&&i.fragment.c();e.intro&&j(t.$$.fragment),T(t,e.target,e.anchor),R()}$(l)}class Q{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){V(this,1),this.$destroy=m}$on(e,n){if(!Y(n))return m;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const a=s.indexOf(n);a!==-1&&s.splice(a,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);function ft(t){let e;return{c(){e=C("a"),e.innerHTML='<svg height="2em" width="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="empty svelte-1m20tsl"><path d="M0 0H24V24H0z" fill="none"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" class="filled svelte-1m20tsl"><path fill="none" d="M0 0H24V24H0z"></path><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path></svg> <span class="title svelte-1m20tsl">Ur so Cool</span>',I(e,"class","text-sm inline-flex items-center justify-between h-13 w-13 p-x-2.5 border overflow-hidden break-words svelte-1m20tsl"),I(e,"href","https://github.com/sponsors/Ordeeper")},m(n,s){G(n,e,s)},p:m,i:m,o:m,d(n){n&&B(e)}}}class L extends Q{constructor(e){super(),K(this,e,null,ft,q,{})}}function ht(t){let e,n,s,a,r;var o=L;function u(l,i){return{}}return o&&(n=A(o,u())),{c(){e=C("div"),n&&J(n.$$.fragment),s=nt(),a=C("span"),a.textContent="Buy me a Coffe :)",I(a,"class","font-bold"),I(e,"class","flex flex-col sm:flex-row items-center justify-center gap-3 pb-7")},m(l,i){G(l,e,i),n&&T(n,e,null),P(e,s),P(e,a),r=!0},p(l,[i]){if(o!==(o=L)){if(n){lt();const d=n;H(d.$$.fragment,1,0,()=>{V(d,1)}),ct()}o?(n=A(o,u()),J(n.$$.fragment),j(n.$$.fragment,1),T(n,e,s)):n=null}},i(l){r||(n&&j(n.$$.fragment,l),r=!0)},o(l){n&&H(n.$$.fragment,l),r=!1},d(l){l&&B(e),n&&V(n)}}}class gt extends Q{constructor(e){super(),K(this,e,null,ht,q,{})}}class pt extends f.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){const{containerEl:e}=this;e.empty(),new f.Setting(e).setName("Date Format").setDesc("For more syntax, refer to ").addMomentFormat(n=>n.setDefaultFormat(this.plugin.settings.dateFormat).onChange(async s=>{this.plugin.settings.dateFormat=s,await this.plugin.saveSettings()})).descEl.createEl("a",{href:"https://momentjs.com/docs/#/displaying/format/",text:"format reference"}),new f.Setting(e).setName("Journal File Name").setDesc("Specifies the filename for the journaling view file. This file will be used to list and organize your journal entries.").addText(n=>n.setPlaceholder("File name, e.g.: Journaling.md").setValue(this.plugin.settings.fileName).onChange(async s=>{this.plugin.settings.fileName=s,await this.plugin.saveSettings()})),new f.Setting(e).setName("Include Paths").setDesc("The daily notes located in these paths will be accessible via the journaling view.").addTextArea(n=>n.setPlaceholder("Folder paths separated by commas, e.g.: path1/path2, path3, path4").setValue(this.plugin.settings.paths).onChange(async s=>{this.plugin.settings.paths=s,await this.plugin.saveSettings()})).infoEl.createEl("p",{cls:"setting-item-description mod-warning",text:'Ensure file names within folders adhere to the "Date Format."'}),new f.Setting(e).setName("Filter By").setDesc("Choose how the plugin displays journal entries based on their dates.").addDropdown(n=>n.addOption("new","New -> Old").addOption("old","Old -> New").setValue(this.plugin.settings.filterValue).onChange(async s=>{this.plugin.settings.filterValue=s,await this.plugin.saveSettings()})),new f.Setting(e).setName("Update Interval").setDesc("Set the interval at which the plugin scans the directories for changes. The interval is specified in seconds.").addText(n=>n.setPlaceholder("Interval in seconds, e.g.: 10").setValue(this.plugin.settings.updateInterval.toString()).onChange(async s=>{this.plugin.settings.updateInterval=parseInt(s,10),await this.plugin.saveSettings()})),this.component=new gt({target:this.containerEl})}}let y;async function mt(t,e,n,s,a){for(const r of e){const o=`${r}/${n}`.trim(),u=t.getAbstractFileByPath(o);if(u instanceof f.TFile){const l=await _t(t,r,s);l.sort((i,d)=>{const c=i.name.replace(".md",""),b=d.name.replace(".md",""),_=f.moment.utc(c),v=f.moment.utc(b);return a==="new"?v.diff(_):_.diff(v)});try{let i=await t.read(u);i=l.reduce((d,c)=>d.includes(`![[${c.path}]]`)?d:d+`![[${c.path}]]

`,""),await t.modify(u,i)}catch(i){console.error(`Failed to update journaling file: ${u.path}`,i)}}else await wt(t,o)}}async function wt(t,e){try{await t.create(e,"")}catch(n){console.error(`Failed to create journaling file: ${e}`,n)}}async function _t(t,e,n){return t.getMarkdownFiles().filter(a=>{const r=a.name.replace(".md",""),o=f.moment.utc(r,n,!0);return a.path.startsWith(e.trim())&&o.isValid()})}function vt(t,e,n,s,a,r){return y&&window.clearInterval(y),y=window.setInterval(async()=>{await mt(t,e,n,a,r)},s),y}async function U(t,e){let n=e.settings.paths.trim();const s=e.settings.dateFormat.trim(),a=e.settings.fileName.trim(),r=e.settings.filterValue,o=e.settings.updateInterval*1e3;if(n.length>0&&a.length>0&&o>=1e3){n=e.settings.paths.split(",");const u=t.vault;return vt(u,n,a,o,s,r)}else return y}const yt={dateFormat:"YYYY-MM-DD",paths:"",fileName:"Journaling.md",filterValue:"new",updateInterval:15};class $t extends f.Plugin{constructor(){super(...arguments),this.intervalId=null}async loadSettings(){this.settings=Object.assign({},yt,await this.loadData())}async saveSettings(){await this.saveData(this.settings),this.intervalId&&window.clearInterval(this.intervalId),this.intervalId=await U(this.app,this)}async onload(){await this.loadSettings(),this.addSettingTab(new pt(this.app,this)),this.intervalId&&window.clearInterval(this.intervalId),this.intervalId=await U(this.app,this)}onunload(){this.intervalId&&window.clearInterval(this.intervalId),console.log("unloading plugin")}}module.exports=$t;


/* nosourcemap */