(this.webpackJsonpwakefit=this.webpackJsonpwakefit||[]).push([[17],{309:function(t,e,a){"use strict";a.d(e,"b",(function(){return s}));var o=a(0),n=a.n(o),i=a(31);const s=(t,e)=>e._original[t.id]&&String(Object(i.c)(String(e._original[t.id]))).toLocaleLowerCase().includes(t.value.toLocaleLowerCase());e.a=t=>t.value?n.a.createElement("div",null,Object(i.c)(t.value)):""},312:function(t,e,a){"use strict";var o=a(0),n=a.n(o);a(313);class i extends o.Component{render(){let t=this.props,e=t.offset,a=t.limit,o=t.total,i=t.onPrevClick,s=t.onNextClick,c=t.dropDownValues,r=t.onLimitChange,l=t.filtered,u=t.filteredData;return n.a.createElement("div",{className:"pagination-container"},n.a.createElement("button",{className:"navigation-button pointer",disabled:0===e,onClick:()=>i("prev")},n.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),n.a.createElement("div",{className:"pagination-text"},e," to ",e+a<=o?e+a:o," of ",o),n.a.createElement("button",{className:"navigation-button pointer",disabled:e+a>=o,onClick:()=>s("next")},n.a.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"})),Array.isArray(c)&&c.length>0&&n.a.createElement("select",{className:"custom-dropdown",onChange:r,value:a},c.map((t,e)=>n.a.createElement("option",{key:e,value:t},t))),Array.isArray(l)&&l.length>0&&Array.isArray(u)&&u.length>0&&n.a.createElement("div",{className:"matched-records-data"},n.a.createElement("b",null,"Matched Records :")," ",u.length))}}i.defaultProps={offset:0,limit:0,total:0,dropDownValues:[]},e.a=i},313:function(t,e,a){},409:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"f",(function(){return m})),a.d(e,"e",(function(){return h})),a.d(e,"d",(function(){return f}));var o=a(57),n=a(4),i=a(13),s=a(11),c=a(18);function r(){return t=>{Object(s.E)().then(e=>{var a;t((a=e.data,{type:o.b,data:a}))}).catch(e=>{Object(i.a)(e,t)})}}function l(t){return e=>{e(Object(n.b)()),Object(s.h)(t).then(t=>{e(Object(n.a)()),e(m(!0)),e(function(t){return{type:o.a,data:t}}(t.data))}).catch(t=>{Object(i.a)(t,e)})}}function u(t){return e=>{e(Object(n.b)()),Object(s.l)(t).then(a=>{e(Object(n.a)()),e(m(!0)),e(p(t)),a.data&&a.data.message&&c.b.success(a.data.message)}).catch(t=>{Object(i.a)(t,e)})}}function d(t){return e=>{e(Object(n.b)()),Object(s.B)(t).then(t=>{e(Object(n.a)()),e(p(t.data))}).catch(t=>{Object(i.a)(t,e)})}}function p(t){return{type:o.c,data:t}}function m(t){return{type:o.f,data:t}}function h(){return{type:o.d}}function f(){return{type:o.e}}},648:function(t,e,a){},649:function(t,e,a){},693:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),i=(a(648),a(21)),s=a(16),c=a(85),r=(a(649),a(10)),l=a(136),u=a(309),d=a(312);const p=[10,25,50,100,150,200];class m extends o.Component{constructor(t){super(t),this.resetTable=()=>{console.log("Reseting...")},this.onLimitChange=t=>{this.setState({limit:Number(t.target.value)},()=>this.handleClick("reset"))},this.handleClick=t=>{let e=this.state,a=e.limit,o=e.offset,n=e.total,i=this.props.getAllCouponsAction;this.setState({offset:"next"===t?o+a<n?o+a:o:"prev"===t&&o-a>=0?o-a:0},()=>{let t=this.state,e=t.limit,a=t.offset;i&&i({limit:e,offset:a})})},this.moreActions=(t,e,a)=>{let o=this.props.userDetails,n="is_active"===e?"Activate/ De-activate":"is_delete"===e?"Delete":"",i=t.coupon_uid;this.props.showPopup({type:"confirmation",header:"Confirmation",data:{message:"Are you sure want to ".concat(n," ").concat(i,"?"),showSubmitBtn:!0,onSubmit:()=>{this.props.editCouponAction({coupon_id:t.coupon_id,[e]:a,updated_by:o.login_id})}}})},this.listActions=t=>{let e=t.original;return n.a.createElement("div",null,e&&e.coupon_uid&&n.a.createElement("div",{className:"cursor-pointer edit"},n.a.createElement(r.b,{to:"/coupons/edit/".concat(e.coupon_id)},"Edit")),n.a.createElement("div",null,1===Number(e.is_active)?n.a.createElement("div",{className:"cursor-pointer custom-badge",onClick:()=>this.moreActions(e,"is_active",0)},"De-Activate"):n.a.createElement("div",{className:"cursor-pointer custom-badge",onClick:()=>this.moreActions(e,"is_active",1)},"Activate")),n.a.createElement("div",{className:"cursor-pointer custom-badge",onClick:()=>this.moreActions(e,"is_delete",1)},"Delete"))},this.state={offset:0,limit:50,total:0,bulkOrder:[],isUpdatingBulk:!1,orderStatusData:{}}}componentDidMount(){this.props.data&&this.props.data.count&&Number(this.props.data.count)!==Number(this.state.total)&&this.setState({limit:this.props.defaultCouponsSize,total:this.props.data.count})}componentWillReceiveProps(t){let e=this.state,a=e.limit,o=e.offset;t.refreshCoupons&&(this.props.resetCouponsData(),this.props.getAllCouponsAction({limit:a,offset:o})),t.data&&t.data.count&&Number(t.data.count)!==Number(this.state.total)&&this.setState({total:t.data.count})}componentWillUnmount(){this.resetTable()}render(){let t=this.props.data;return n.a.createElement("div",{className:"coupons-table-container"},n.a.createElement(l.b,{data:t.results,filterable:!0,minRows:0,pageSize:999,PaginationComponent:()=>n.a.createElement(d.a,{dropDownValues:p,onLimitChange:this.onLimitChange,offset:this.state.offset,total:this.state.total,limit:this.state.limit,onPrevClick:this.handleClick,onNextClick:this.handleClick}),NoDataComponent:()=>null,defaultFilterMethod:(t,e)=>String(e[t.id]).toLocaleLowerCase().includes(t.value.toLocaleLowerCase()),columns:[{Header:"S.No",id:"row",maxWidth:50,filterable:!1,Cell:t=>n.a.createElement("div",null,t.index+1)},{Header:"Coupons Id",accessor:"coupon_uid",minWidth:150,Cell:t=>n.a.createElement("div",null,t.original&&t.original.coupon_uid&&n.a.createElement(r.b,{target:"_blank",to:"/coupons/".concat(t.original.coupon_uid)},t.original.coupon_uid))},{Header:"Coupons Type",accessor:"coupon_type_name",minWidth:150},{Header:"Classification Type",accessor:"coupon_classification_name",minWidth:150},{Header:"Coupons Code",accessor:"coupon_code",minWidth:150},{Header:"#of Orders",accessor:"coupon_count",minWidth:80,Cell:t=>n.a.createElement("div",null,t.original&&t.original.coupon_count>0?n.a.createElement(r.b,{target:"_blank",to:"/coupons/".concat(t.original.coupon_uid)},t.original.coupon_count):0)},{Header:"Coupons Percentage",accessor:"coupon_percentage",minWidth:90},{Header:"Flat Discount",accessor:"coupon_flat_discount",minWidth:80},{Header:"Max Discount",accessor:"coupon_max_discount",minWidth:80},{Header:"Min Cart Amount",accessor:"coupon_min_amount",minWidth:80},{Header:"Coupons Description",accessor:"coupon_description",minWidth:150,Cell:t=>n.a.createElement("div",{className:"break-word"},t.original.coupon_description)},{Header:"Start Date",accessor:"start_date",minWidth:150},{Header:"End Date",accessor:"end_date",minWidth:150},{Header:"Created At",accessor:"created_timestamp",minWidth:150,width:175,Cell:u.a,filterMethod:u.b},{Header:"Actions",accessor:"actions",filterable:!1,minWidth:150,Cell:this.listActions}]}))}}var h=m,f=a(101),b=a(4),C=a(13),g=a(11),v=a(30);function _(t){return e=>{e(Object(b.b)()),Object(g.s)(t).then(t=>{var a;e(Object(b.a)()),e((a=t.data,{type:f.b,data:a}))}).catch(t=>{Object(C.a)(t,e)})}}function A(t){return e=>{e(Object(b.b)()),Object(g.l)(t).then(t=>{e(Object(v.a)()),e(Object(b.a)()),e(function(t){return{type:f.a,data:t}}(t.data))}).catch(t=>{Object(C.a)(t,e)})}}function E(){return{type:f.c}}var O=a(409),N=a(32);class j extends o.Component{constructor(...t){super(...t),this.getNoOrders=()=>n.a.createElement("div",{className:"no-orders"},"There is No Coupons, Please Try After Some Time...")}componentWillMount(){this.props.getAllCouponsAction({limit:50,offset:0})}componentWillUnmount(){this.props.resetCouponComponentAction()}render(){let t=this.props,e=t.coupons,a=t.refreshCoupons,o=t.userDetails,i=t.getAllCouponsAction,s=t.editCouponAction,l=t.resetCouponsData,u=t.showPopup,d="List of Coupons ".concat(e&&e.count?"- ".concat(e.count):"");return n.a.createElement("div",{className:"coupons-container"},n.a.createElement(c.a,{header:d}),n.a.createElement("div",{className:"additional-feature"},n.a.createElement(r.b,{to:"/coupons/add"},n.a.createElement(N.a,{label:"Create Coupon"}))),e?n.a.createElement(h,{userDetails:o,data:e,defaultCouponsSize:50,refreshCoupons:a,getAllCouponsAction:i,editCouponAction:s,resetCouponsData:l,defaultLimit:50,showPopup:u}):this.getNoOrders())}}e.default=Object(i.b)((t,e)=>({userDetails:t.userDetails,coupons:t.couponsDetails.couponsList,refreshCoupons:t.couponsDetails.refreshCoupons}),t=>Object(s.b)({getAllCouponsAction:_,editCouponAction:A,resetCouponComponentAction:O.e,resetCouponsData:E,showPopup:v.b},t))(j)}}]);
//# sourceMappingURL=17.5182870e.chunk.js.map