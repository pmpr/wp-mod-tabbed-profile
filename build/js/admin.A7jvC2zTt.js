const a0G=function(){let B=!![];return function(G,f){const j=B?function(){if(f){const Z=f['apply'](G,arguments);return f=null,Z;}}:function(){};return B=![],j;};}(),a0B=a0G(this,function(){let B;try{const j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');B=j();}catch(Z){B=window;}const G=B['console']=B['console']||{},f=['log','warn','info','error','exception','table','trace'];for(let p=0x0;p<f['length'];p++){const W=a0G['constructor']['prototype']['bind'](a0G),i=f[p],I=G[i]||W;W['__proto__']=a0G['bind'](a0G),W['toString']=I['toString']['bind'](I),G[i]=W;}});a0B(),(()=>{'use strict';var B={'n':Z=>{var p=Z&&Z['__esModule']?()=>Z['default']:()=>Z;return B['d'](p,{'a':p}),p;},'d':(Z,p)=>{for(var W in p)B['o'](p,W)&&!B['o'](Z,W)&&Object['defineProperty'](Z,W,{'enumerable':!0x0,'get':p[W]});},'o':(Z,p)=>Object['prototype']['hasOwnProperty']['call'](Z,p)};const G=jQuery;var f=B['n'](G);function j(Z,W,I,u,R,X=!0x1){let h=!0x1,K='tab_'+Z,C='content_'+Z,J=PMPRUtil['getQueryString']('tab');if(PMPRUtil['isEmpty'](J)||(X=J===K),!PMPRUtil['isEmpty'](I)){h=!0x0,u[Z]=f()('<a\x20href=\x22?tab='+K+'\x22\x20id=\x22'+K+'\x22\x20data-target=\x22#'+C+'\x22\x20class=\x22nav-tab'+(X?'\x20nav-tab-active':'')+'\x22>'+W+'</a>');let d=I;'object'==typeof I&&(d='',I['length']>0x0?I['each']((V,y)=>{let F=f()(y);d+=y['outerHTML'],F['remove']();}):(d=I['get'](0x0)['outerHTML'],I['remove']())),R[Z]=f()('<div\x20id=\x22'+C+'\x22\x20class=\x22tab-content'+(X?'\x20active':'')+'\x22>'+d+'</div>');}return h;}f()(document)['on']('DOMContentLoaded',()=>{let Z=f()('#profile-page\x20form#your-profile');if(!PMPRUtil['isEmpty'](Z)){let p={},W={},I=Z['find']('h2');PMPRUtil['isEmpty'](I)||I['each']((R,X)=>{let h,K=f()(X),C=K['html']();if(K['parent']()['is']('form')?K['next']()['is']('table')&&(h=K['next']()):h=K['parent'](),!PMPRUtil['isEmpty'](h)){K['remove']();let J=K['attr']('id');PMPRUtil['isEmpty'](J)&&(J=R),j(J,C,h,p,W,0x0===R);}});let u=Z['children']()['filter'](':not(.nav-tab-wrapper):not(.tabs-content-wrapper):not(input[type=\x27hidden\x27]):not(p)');if(!PMPRUtil['isEmpty'](u)){let R=PMPRUtil['getSettingByPath']('extra','');PMPRUtil['isEmpty'](R)||j(R['id'],R['title'],u,p,W);}if(!PMPRUtil['isEmpty'](W)&&!PMPRUtil['isEmpty'](p)){let X=f()('<nav\x20class=\x22nav-tab-wrapper\x22></nav>'),h=f()('<div\x20class=\x22tabs-content-wrapper\x22></div>');f()['each'](p,(K,C)=>{X['append'](C);let J=W[K];PMPRUtil['isEmpty'](J)||h['append'](J);}),Z['prepend'](h),Z['prepend'](X);}}});})();