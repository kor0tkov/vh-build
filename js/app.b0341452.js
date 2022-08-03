(function(){"use strict";var e={9878:function(e,t,a){var o=a(9242),n=a(3396);const i={class:"app"};function p(e,t,a,o,p,s){const r=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(r)])}var s={name:"App"},r=a(89);const c=(0,r.Z)(s,[["render",p]]);var u=c,l=a(2483);const d={class:"PageHome"},g=(0,n.Uk)("Gallery"),m=(0,n.Uk)("Long Page");function h(e,t,a,o,i,p){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(s,{to:"gallery"},{default:(0,n.w5)((()=>[g])),_:1}),(0,n.Wm)(s,{to:"long"},{default:(0,n.w5)((()=>[m])),_:1})])}var f={name:"PageHome"};const v=(0,r.Z)(f,[["render",h]]);var _=v,b=a(7139);const w={class:"PageGallery"},j={class:"header"},k=(0,n._)("span",null,"HEADER GOES HERE",-1),y={key:0,class:"gallery"},O={class:"gallery__inner"},P=["onClick"],x={key:1,class:"viewer"},q=["src"],C=(0,n._)("footer",{class:"footer"},"FOOTER GOES HERE",-1),E={key:2,class:"popup"},D=(0,n._)("div",{class:"popup__overlay"},null,-1),L=(0,n._)("div",{class:"popup__content popup__content_options"},[(0,n._)("p",null,"Увеличить масштаб"),(0,n._)("p",null,"Уменьшить масштаб"),(0,n._)("p",null,"Фильтры"),(0,n._)("p",null,"Показать карту")],-1),F=[D,L],H={key:3,class:"popup"},A={class:"popup__content popup__content_full"},B=(0,n._)("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cupiditate deserunt enim error eveniet, expedita fuga incidunt itaque, nesciunt nisi non quasi quibusdam quis quisquam soluta, totam vero voluptate! ",-1),G=(0,n._)("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cupiditate deserunt enim error eveniet, expedita fuga incidunt itaque, nesciunt nisi non quasi quibusdam quis quisquam soluta, totam vero voluptate! ",-1),I=(0,n._)("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cupiditate deserunt enim error eveniet, expedita fuga incidunt itaque, nesciunt nisi non quasi quibusdam quis quisquam soluta, totam vero voluptate! ",-1);function R(e,t,a,o,i,p){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("header",j,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>p.onClickBack&&p.onClickBack(...e))},"back"),k,(0,n._)("button",{onClick:t[1]||(t[1]=e=>i.isOpenFullPopup=!0)},"options")]),"preview"===i.mode?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.gallery,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,style:(0,b.j5)({backgroundImage:`url(${e})`}),class:"gallery__image",onClick:t=>p.openImage(e)},null,12,P)))),128))])])):"viewer"===i.mode?((0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("img",{class:"viewer__image",alt:"",src:i.activeImage},null,8,q)])):(0,n.kq)("",!0),C,i.isOpenOptionsPopup?((0,n.wg)(),(0,n.iD)("div",E,F)):(0,n.kq)("",!0),i.isOpenFullPopup?((0,n.wg)(),(0,n.iD)("div",H,[(0,n._)("div",A,[B,G,I,(0,n._)("button",{class:"popup__bottom-button",onClick:t[2]||(t[2]=e=>i.isOpenFullPopup=!1)}," CLOSE POPUP ")])])):(0,n.kq)("",!0)])}var S={name:"PageGallery",data(){return{mode:"preview",activeImage:"",isOpenOptionsPopup:!1,isOpenFullPopup:!1,gallery:["https://i.gaw.to/vehicles/photos/08/28/082870_2017_ferrari_488.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/90/3221-1000x830.jpg","https://c4.wallpaperflare.com/wallpaper/612/999/814/2013-hennessey-hpe700-mclaren-wallpaper-preview.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/81/15158-1000x830.jpg","https://foto.carexpert.ru/img/foto1680/renault/renoaa009.jpg","https://i.pinimg.com/736x/22/82/76/228276699acef4ce278d11d85ea4e600--sweet-cars-ferrari-.jpg","https://a.d-cd.net/d46185u-960.jpg","https://i.pinimg.com/originals/c1/ae/bc/c1aebc2c9957aeb717e7f6ba9991c8d1.jpg","https://etoday.ru/assets/2016/3/1/bugatti-chiron-2016-etoday-005.jpg","https://a.d-cd.net/8115368s-960.jpg","https://www.sunhome.ru/i/wallpapers/118/infiniti-oboi.xxl.jpg","https://mobimg.b-cdn.net/v3/fetch/0b/0b35607426551e4e75739d00f609087c.jpeg","https://i.pinimg.com/736x/d5/99/b9/d599b9615eade6ddcf9f446dfc80121d--racing-super-car.jpg","https://a.d-cd.net/678a1u-960.jpg","https://vseaerozoli.ru/data/images/catalog/5c5deeba-0851-11e6-8197-ce53d05d4c59/look.jpg","https://luxoboi.com.ua/pic/product_foto/prodfoto4040.jpg","https://a.d-cd.net/24ba3b8s-960.jpg","https://a.d-cd.net/d8f7b51s-1920.jpg","https://i.gaw.to/vehicles/photos/08/28/082870_2017_ferrari_488.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/90/3221-1000x830.jpg","https://c4.wallpaperflare.com/wallpaper/612/999/814/2013-hennessey-hpe700-mclaren-wallpaper-preview.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/81/15158-1000x830.jpg","https://foto.carexpert.ru/img/foto1680/renault/renoaa009.jpg","https://i.pinimg.com/736x/22/82/76/228276699acef4ce278d11d85ea4e600--sweet-cars-ferrari-.jpg","https://a.d-cd.net/d46185u-960.jpg"]}},methods:{openImage(e){this.activeImage=e,this.mode="viewer"},onClickBack(){"preview"===this.mode?this.$router.push("/"):this.mode="preview"}}};const U=(0,r.Z)(S,[["render",R]]);var Z=U;const $={class:"PageLong"},K={class:"PageLong__header"},T=(0,n._)("span",null,"HEADER GOES HERE",-1),W={class:"PageLong__main"},Y={key:0,class:"popup"},z={class:"popup__content popup__content_full"};function M(e,t,a,o,i,p){return(0,n.wg)(),(0,n.iD)("div",$,[(0,n._)("header",K,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>p.onClickBack&&p.onClickBack(...e))},"back"),T,(0,n._)("button",{onClick:t[1]||(t[1]=e=>i.isOpenFullPopup=!0)},"options")]),(0,n._)("div",W,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.gallery,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,style:(0,b.j5)({backgroundImage:`url(${e})`}),class:"PageLong__image"},null,4)))),128))]),i.isOpenFullPopup?((0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("div",z,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(9,(e=>(0,n._)("p",{key:e}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cupiditate deserunt enim error eveniet, expedita fuga incidunt itaque, nesciunt nisi non quasi quibusdam quis quisquam soluta, totam vero voluptate! "))),64)),(0,n._)("button",{class:"popup__bottom-button",onClick:t[2]||(t[2]=e=>i.isOpenFullPopup=!1)}," CLOSE POPUP ")])])):(0,n.kq)("",!0)])}var J={name:"PageLong",data(){return{isOpenFullPopup:!1,gallery:["https://i.gaw.to/vehicles/photos/08/28/082870_2017_ferrari_488.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/90/3221-1000x830.jpg","https://c4.wallpaperflare.com/wallpaper/612/999/814/2013-hennessey-hpe700-mclaren-wallpaper-preview.jpg","https://cdn.ananasposter.ru/image/cache/catalog/poster/cars/81/15158-1000x830.jpg","https://foto.carexpert.ru/img/foto1680/renault/renoaa009.jpg","https://i.pinimg.com/736x/22/82/76/228276699acef4ce278d11d85ea4e600--sweet-cars-ferrari-.jpg","https://a.d-cd.net/d46185u-960.jpg","https://i.pinimg.com/originals/c1/ae/bc/c1aebc2c9957aeb717e7f6ba9991c8d1.jpg","https://etoday.ru/assets/2016/3/1/bugatti-chiron-2016-etoday-005.jpg","https://a.d-cd.net/8115368s-960.jpg","https://www.sunhome.ru/i/wallpapers/118/infiniti-oboi.xxl.jpg","https://mobimg.b-cdn.net/v3/fetch/0b/0b35607426551e4e75739d00f609087c.jpeg","https://i.pinimg.com/736x/d5/99/b9/d599b9615eade6ddcf9f446dfc80121d--racing-super-car.jpg","https://a.d-cd.net/678a1u-960.jpg","https://vseaerozoli.ru/data/images/catalog/5c5deeba-0851-11e6-8197-ce53d05d4c59/look.jpg","https://luxoboi.com.ua/pic/product_foto/prodfoto4040.jpg","https://a.d-cd.net/24ba3b8s-960.jpg","https://a.d-cd.net/d8f7b51s-1920.jpg"]}},watch:{isOpenFullPopup(){this.isOpenFullPopup?(document.body.style.position="fixed",console.log(111)):(document.body.style.position="static",console.log(222))}},methods:{onClickBack(){this.$router.push("/")}}};const N=(0,r.Z)(J,[["render",M]]);var Q=N;const V=[{path:"/",name:"Home",component:_},{path:"/gallery",name:"PageGallery",component:Z},{path:"/long",name:"PageLong",component:Q}],X=(0,l.p7)({history:(0,l.r5)(),routes:V,scrollBehavior(){return{x:0,y:0}}});var ee=X;const te=(0,o.ri)(u);te.use(ee),te.mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var p=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],i=e[u][2];for(var s=!0,r=0;r<o.length;r++)(!1&i||p>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[r])}))?o.splice(r--,1):(s=!1,i<p&&(p=i));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,p=o[0],s=o[1],r=o[2],c=0;if(p.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(r)var u=r(a)}for(t&&t(o);c<p.length;c++)i=p[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkvh_test"]=self["webpackChunkvh_test"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9878)}));o=a.O(o)})();
//# sourceMappingURL=app.b0341452.js.map