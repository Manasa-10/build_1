/*! For license information please see 22.e2aa8c0c.chunk.js.LICENSE.txt */
(this.webpackJsonpwakefit=this.webpackJsonpwakefit||[]).push([[22],{318:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=a},319:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=(e=1,t=1)=>Math.floor(Math.random()*(t-e+1)+e)},334:function(e,t,a){!function(){var t=a(335),r=a(318).utf8,o=a(336),n=a(318).bin,s=function e(a,s){a.constructor==String?a=s&&"binary"===s.encoding?n.stringToBytes(a):r.stringToBytes(a):o(a)?a=Array.prototype.slice.call(a,0):Array.isArray(a)||(a=a.toString());for(var i=t.bytesToWords(a),c=8*a.length,d=1732584193,l=-271733879,u=-1732584194,m=271733878,h=0;h<i.length;h++)i[h]=16711935&(i[h]<<8|i[h]>>>24)|4278255360&(i[h]<<24|i[h]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var b=e._ff,p=e._gg,f=e._hh,w=e._ii;for(h=0;h<i.length;h+=16){var g=d,y=l,v=u,x=m;d=b(d,l,u,m,i[h+0],7,-680876936),m=b(m,d,l,u,i[h+1],12,-389564586),u=b(u,m,d,l,i[h+2],17,606105819),l=b(l,u,m,d,i[h+3],22,-1044525330),d=b(d,l,u,m,i[h+4],7,-176418897),m=b(m,d,l,u,i[h+5],12,1200080426),u=b(u,m,d,l,i[h+6],17,-1473231341),l=b(l,u,m,d,i[h+7],22,-45705983),d=b(d,l,u,m,i[h+8],7,1770035416),m=b(m,d,l,u,i[h+9],12,-1958414417),u=b(u,m,d,l,i[h+10],17,-42063),l=b(l,u,m,d,i[h+11],22,-1990404162),d=b(d,l,u,m,i[h+12],7,1804603682),m=b(m,d,l,u,i[h+13],12,-40341101),u=b(u,m,d,l,i[h+14],17,-1502002290),d=p(d,l=b(l,u,m,d,i[h+15],22,1236535329),u,m,i[h+1],5,-165796510),m=p(m,d,l,u,i[h+6],9,-1069501632),u=p(u,m,d,l,i[h+11],14,643717713),l=p(l,u,m,d,i[h+0],20,-373897302),d=p(d,l,u,m,i[h+5],5,-701558691),m=p(m,d,l,u,i[h+10],9,38016083),u=p(u,m,d,l,i[h+15],14,-660478335),l=p(l,u,m,d,i[h+4],20,-405537848),d=p(d,l,u,m,i[h+9],5,568446438),m=p(m,d,l,u,i[h+14],9,-1019803690),u=p(u,m,d,l,i[h+3],14,-187363961),l=p(l,u,m,d,i[h+8],20,1163531501),d=p(d,l,u,m,i[h+13],5,-1444681467),m=p(m,d,l,u,i[h+2],9,-51403784),u=p(u,m,d,l,i[h+7],14,1735328473),d=f(d,l=p(l,u,m,d,i[h+12],20,-1926607734),u,m,i[h+5],4,-378558),m=f(m,d,l,u,i[h+8],11,-2022574463),u=f(u,m,d,l,i[h+11],16,1839030562),l=f(l,u,m,d,i[h+14],23,-35309556),d=f(d,l,u,m,i[h+1],4,-1530992060),m=f(m,d,l,u,i[h+4],11,1272893353),u=f(u,m,d,l,i[h+7],16,-155497632),l=f(l,u,m,d,i[h+10],23,-1094730640),d=f(d,l,u,m,i[h+13],4,681279174),m=f(m,d,l,u,i[h+0],11,-358537222),u=f(u,m,d,l,i[h+3],16,-722521979),l=f(l,u,m,d,i[h+6],23,76029189),d=f(d,l,u,m,i[h+9],4,-640364487),m=f(m,d,l,u,i[h+12],11,-421815835),u=f(u,m,d,l,i[h+15],16,530742520),d=w(d,l=f(l,u,m,d,i[h+2],23,-995338651),u,m,i[h+0],6,-198630844),m=w(m,d,l,u,i[h+7],10,1126891415),u=w(u,m,d,l,i[h+14],15,-1416354905),l=w(l,u,m,d,i[h+5],21,-57434055),d=w(d,l,u,m,i[h+12],6,1700485571),m=w(m,d,l,u,i[h+3],10,-1894986606),u=w(u,m,d,l,i[h+10],15,-1051523),l=w(l,u,m,d,i[h+1],21,-2054922799),d=w(d,l,u,m,i[h+8],6,1873313359),m=w(m,d,l,u,i[h+15],10,-30611744),u=w(u,m,d,l,i[h+6],15,-1560198380),l=w(l,u,m,d,i[h+13],21,1309151649),d=w(d,l,u,m,i[h+4],6,-145523070),m=w(m,d,l,u,i[h+11],10,-1120210379),u=w(u,m,d,l,i[h+2],15,718787259),l=w(l,u,m,d,i[h+9],21,-343485551),d=d+g>>>0,l=l+y>>>0,u=u+v>>>0,m=m+x>>>0}return t.endian([d,l,u,m])};s._ff=function(e,t,a,r,o,n,s){var i=e+(t&a|~t&r)+(o>>>0)+s;return(i<<n|i>>>32-n)+t},s._gg=function(e,t,a,r,o,n,s){var i=e+(t&r|a&~r)+(o>>>0)+s;return(i<<n|i>>>32-n)+t},s._hh=function(e,t,a,r,o,n,s){var i=e+(t^a^r)+(o>>>0)+s;return(i<<n|i>>>32-n)+t},s._ii=function(e,t,a,r,o,n,s){var i=e+(a^(t|~r))+(o>>>0)+s;return(i<<n|i>>>32-n)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,a){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var r=t.wordsToBytes(s(e,a));return a&&a.asBytes?r:a&&a.asString?n.bytesToString(r):t.bytesToHex(r)}}()},335:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,r=0;a<e.length;a++,r+=8)t[r>>>5]|=e[a]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],r=0;r<e.length;r+=3)for(var o=e[r]<<16|e[r+1]<<8|e[r+2],n=0;n<4;n++)8*r+6*n<=8*e.length?a.push(t.charAt(o>>>6*(3-n)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],r=0,o=0;r<e.length;o=++r%4)0!=o&&a.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(r))>>>6-2*o);return a}};e.exports=a}()},336:function(e,t){function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(a(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}(e)||!!e._isBuffer)}},589:function(e,t,a){},690:function(e,t,a){"use strict";a.r(t);var r=a(9),o=a(0),n=a.n(o),s=a(21),i=a(16),c=a(334),d=a.n(c),l=a(295),u=a(305),m=a(297),h=a(298),b=a(7),p=a(2),f=(a(1),a(8)),w=a(12),g=a(48),y=a(274),v=a(34),x=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,s=e.color,i=void 0===s?"default":s,c=e.component,d=void 0===c?"button":c,l=e.disabled,u=void 0!==l&&l,m=e.disableElevation,h=void 0!==m&&m,w=e.disableFocusRipple,g=void 0!==w&&w,x=e.endIcon,S=e.focusVisibleClassName,P=e.fullWidth,C=void 0!==P&&P,E=e.size,O=void 0===E?"medium":E,k=e.startIcon,j=e.type,z=void 0===j?"button":j,N=e.variant,R=void 0===N?"text":N,T=Object(b.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),B=k&&o.createElement("span",{className:Object(f.a)(r.startIcon,r["iconSize".concat(Object(v.a)(O))])},k),I=x&&o.createElement("span",{className:Object(f.a)(r.endIcon,r["iconSize".concat(Object(v.a)(O))])},x);return o.createElement(y.a,Object(p.a)({className:Object(f.a)(r.root,r[R],n,"inherit"===i?r.colorInherit:"default"!==i&&r["".concat(R).concat(Object(v.a)(i))],"medium"!==O&&[r["".concat(R,"Size").concat(Object(v.a)(O))],r["size".concat(Object(v.a)(O))]],h&&r.disableElevation,u&&r.disabled,C&&r.fullWidth),component:d,disabled:u,focusRipple:!g,focusVisibleClassName:Object(f.a)(r.focusVisible,S),ref:t,type:z},T),o.createElement("span",{className:r.label},B,a,I))})),S=Object(w.a)((function(e){return{root:Object(p.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(g.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(g.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(g.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(g.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(g.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(g.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(g.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(x),P=(a(589),a(121)),C=a(11),E=a(4),O=a(13),k=a(18);function j(e){return t=>(t(Object(E.b)()),Object(C.f)(e).then(e=>{t(Object(E.a)()),k.b.success(e.data.message),t(function(e){return{type:P.a,data:e}}(e.data)),t(z(!0))}).catch(e=>{Object(O.a)(e,t)}))}function z(e){return{type:P.b,data:e}}var N=a(85),R=a(319);class T extends n.a.Component{constructor(...e){super(...e),this.state={fields:{currentPassword:"",newPassword:"",confirmPassword:"",sum:""},errors:{currentPassword:"",newPassword:"",confirmPassword:"",sum:""},number1:null,number2:null,enableSubmit:!1},this.validateForm=()=>{let e=this.state.fields,t=this.state.errors,a=0;for(let r in e)""!==e[r]&&""===t[r]&&a++;this.setState({enableSubmit:a===Object.keys(t).length})},this.handleChange=e=>{let t=e.target.name,a=e.target.value,o=Object(r.a)({},this.state.fields),n=Object(r.a)({},this.state.errors);switch(t){case"currentPassword":a.length>0?(o[t]=a,n[t]=""):0===a.length&&(o[t]=a,n[t]="Current Password Should not be Empty");break;case"newPassword":a.length>0?(o[t]=a,""!==o.confirmPassword&&o.newPassword!==o.confirmPassword?n[t]="New password and Confirm password didn't match":(n[t]="",n.confirmPassword="")):0===a.length&&(o[t]=a,n[t]="New Password Should not be Empty");break;case"confirmPassword":a.length>0?(o[t]=a,""!==o.newPassword&&o.newPassword!==o.confirmPassword?n[t]="New password and Confirm password didn't match":(n[t]="",n.newPassword="")):0===a.length&&(o[t]=a,n[t]="Confirm Password Should not be Empty");break;case"sum":Number(a)>0?(o[t]=/^[0-9]{0,2}$/.test(a)?a:o[t],this.state.number1+this.state.number2===Number(a)?n[t]="":n[t]="Invalid Sum"):a||(o[t]="",n[t]="Required");break;default:o[t]=a}this.setState({fields:o,errors:n},()=>this.validateForm())},this.handleSubmit=()=>{let e=Object(r.a)({},this.state.fields),t={current_password:d()(e.currentPassword),new_password:d()(e.newPassword)};this.props.changePasswordAction(t)},this.handleReset=()=>{this.setState({fields:{currentPassword:"",newPassword:"",confirmPassword:"",sum:""},errors:{currentPassword:"",newPassword:"",confirmPassword:"",sum:""},number1:Object(R.a)(1,9),number2:Object(R.a)(1,9)})},this.changePasswordForm=()=>{let e=this.state.fields,t=this.state.errors;return n.a.createElement("div",{className:"change-password-container"},n.a.createElement(N.a,{header:"Change Password"}),n.a.createElement("form",{className:"change-password-form"},n.a.createElement(l.a,{className:"full-width form-control-custom",error:t.currentPassword},n.a.createElement(u.a,{htmlFor:"current-password"},"Current Password"),n.a.createElement(m.a,{id:"current-password",name:"currentPassword",type:"password",value:e.currentPassword,onChange:this.handleChange,"aria-describedby":"current-password-text",fullWidth:!0,autoFocus:!0}),n.a.createElement(h.a,{id:"current-password-text"},t.currentPassword)),n.a.createElement("br",null),n.a.createElement(l.a,{className:"full-width form-control-custom",error:t.newPassword},n.a.createElement(u.a,{htmlFor:"new-password"},"New Password"),n.a.createElement(m.a,{id:"new-password",name:"newPassword",type:"password",value:e.newPassword,onChange:this.handleChange,"aria-describedby":"new-password-text",fullWidth:!0}),n.a.createElement(h.a,{id:"new-password-text"},t.newPassword)),n.a.createElement("br",null),n.a.createElement(l.a,{className:"full-width form-control-custom",error:t.confirmPassword},n.a.createElement(u.a,{htmlFor:"confirm-password"},"Confirm Password"),n.a.createElement(m.a,{id:"confirm-password",name:"confirmPassword",type:"password",value:e.confirmPassword,onChange:this.handleChange,"aria-describedby":"confirm-password-text",fullWidth:!0}),n.a.createElement(h.a,{id:"confirm-password-text"},t.confirmPassword)),n.a.createElement("br",null),n.a.createElement("div",{className:"number-container"},n.a.createElement(l.a,{className:"full-width form-control-custom"},n.a.createElement(u.a,{htmlFor:"number-one"}),n.a.createElement(m.a,{id:"number-one",value:this.state.number1,"aria-describedby":"number-one-text",fullWidth:!0,disabled:!0}),n.a.createElement(h.a,{id:"number-one-text"})),n.a.createElement("div",{className:"plus-symbol"},"+"),n.a.createElement(l.a,{className:"full-width form-control-custom"},n.a.createElement(u.a,{htmlFor:"number-two"}),n.a.createElement(m.a,{id:"number-two",value:this.state.number2,"aria-describedby":"number-two-text",fullWidth:!0,disabled:!0}),n.a.createElement(h.a,{id:"number-two-text"})),n.a.createElement("div",{className:"plus-symbol"},"="),n.a.createElement(l.a,{className:"full-width form-control-custom",error:t.sum},n.a.createElement(u.a,{htmlFor:"sum"},"Result"),n.a.createElement(m.a,{id:"sum",name:"sum",type:"number",value:e.sum,onChange:this.handleChange,"aria-describedby":"sum-text",fullWidth:!0}),n.a.createElement(h.a,{id:"sum-text"},t.sum))),n.a.createElement("div",{className:"button-container"},n.a.createElement(S,{variant:"contained",color:"primary",onClick:this.handleSubmit,disabled:!this.state.enableSubmit},"Change"),n.a.createElement(S,{variant:"contained",color:"secondary",onClick:this.handleReset},"Reset"))))}}componentDidMount(){this.setState({number1:Object(R.a)(1,9),number2:Object(R.a)(1,9)})}componentWillReceiveProps(e){e.refreshChangePassword&&(console.log("Reset..."),this.handleReset(),this.props.toggleRefreshPassword(!1))}render(){return this.changePasswordForm()}}t.default=Object(s.b)((e,t)=>({refreshChangePassword:e.changePassword.refreshChangePassword}),e=>Object(i.b)({changePasswordAction:j,toggleRefreshPassword:z},e))(T)}}]);
//# sourceMappingURL=22.e2aa8c0c.chunk.js.map