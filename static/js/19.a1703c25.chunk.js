(this.webpackJsonpwakefit=this.webpackJsonpwakefit||[]).push([[19],{309:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var l=a(0),n=a.n(l),i=a(31);const r=(e,t)=>t._original[e.id]&&String(Object(i.c)(String(t._original[e.id]))).toLocaleLowerCase().includes(e.value.toLocaleLowerCase());t.a=e=>e.value?n.a.createElement("div",null,Object(i.c)(e.value)):""},312:function(e,t,a){"use strict";var l=a(0),n=a.n(l);a(313);class i extends l.Component{render(){let e=this.props,t=e.offset,a=e.limit,l=e.total,i=e.onPrevClick,r=e.onNextClick,s=e.dropDownValues,o=e.onLimitChange,c=e.filtered,m=e.filteredData;return n.a.createElement("div",{className:"pagination-container"},n.a.createElement("button",{className:"navigation-button pointer",disabled:0===t,onClick:()=>i("prev")},n.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),n.a.createElement("div",{className:"pagination-text"},t," to ",t+a<=l?t+a:l," of ",l),n.a.createElement("button",{className:"navigation-button pointer",disabled:t+a>=l,onClick:()=>r("next")},n.a.createElement("i",{className:"fa fa-angle-right","aria-hidden":"true"})),Array.isArray(s)&&s.length>0&&n.a.createElement("select",{className:"custom-dropdown",onChange:o,value:a},s.map((e,t)=>n.a.createElement("option",{key:t,value:e},e))),Array.isArray(c)&&c.length>0&&Array.isArray(m)&&m.length>0&&n.a.createElement("div",{className:"matched-records-data"},n.a.createElement("b",null,"Matched Records :")," ",m.length))}}i.defaultProps={offset:0,limit:0,total:0,dropDownValues:[]},t.a=i},313:function(e,t,a){},651:function(e,t,a){},652:function(e,t,a){},686:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(21),r=a(16),s=a(85),o=(a(651),a(136)),c=a(309),m=a(312);const d=[50,100,150,200,250,300];class u extends l.Component{constructor(e){super(e),this.resetTable=()=>{console.log("Reseting...")},this.onLimitChange=e=>{this.setState({limit:Number(e.target.value)},()=>this.handleClick("reset"))},this.handleClick=e=>{let t=this.state,a=t.limit,l=t.offset,n=t.total,i=this.props,r=i.getCouponOrderDetailsAction,s=i.coupon_uid;this.setState({offset:"next"===e?l+a<n?l+a:l:"prev"===e&&l-a>=0?l-a:0},()=>{let e=this.state,t=e.limit,a=e.offset;r&&r({coupon_uid:s,limit:t,offset:a})})},this.addressDetails=e=>{let t=e.original;return n.a.createElement("div",{className:"address break-word"},n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"Address :")," ",t.address),n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"Landmark :")," ",t.landmark),n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"City :")," ",t.city),n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"State :")," ",t.state_name," - ",t.pincode))},this.userDetails=e=>{let t=e.original;return n.a.createElement("div",{className:"user-details break-word"},n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"Name :")," ",t.firstname+" "+t.lastname),n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"Email :")," ",t.email_address),n.a.createElement("div",{className:"break-word"},n.a.createElement("b",null,"Mobile Number :")," ",t.mobile_number),t.alternate_mobile_number&&n.a.createElement("div",null,n.a.createElement("b",null,"[A] :")," ",t.alternate_mobile_number))},this.orderDeatils=e=>{let t=e.original;return t&&Array.isArray(t.items)&&t.items.length>0&&t.items.map((e,a)=>n.a.createElement("div",{className:"cart-details break-word"},n.a.createElement("div",null,n.a.createElement("b",null,"SKU :")," ",e.item_sku),e.item_dimensions&&n.a.createElement("div",null,n.a.createElement("b",null,"Dimension :")," ",e.item_dimensions),n.a.createElement("div",null,n.a.createElement("b",null,"Qty :")," ",e.item_quantity),n.a.createElement("div",null,n.a.createElement("b",null,"Price :")," INR ",e.item_price," * ",e.item_quantity," = ",e.sub_total),a<t.items.length-1&&n.a.createElement("hr",null)))},this.totalPrice=e=>{let t=0;return e&&Array.isArray(e.items)&&e.items.length>0&&e.items.map(e=>t+=Number(e.item_quantity||0)*Number(e.item_price||0)),t},this.totalDiscount=e=>{let t=0,a=0;return e&&Array.isArray(e.items)&&e.items.length>0&&e.items.map(e=>(t+=Number(e.item_quantity||0)*Number(e.item_price||0),a+=Number(e.net_price||0),"")),Number(t)-Number(a)},this.cartPrice=e=>{let t=e.original;return n.a.createElement("div",{className:"cart-price break-word"},n.a.createElement("div",null,n.a.createElement("b",null,"Total :")," \u20b9 ",t.total_price),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("b",null,"Discount :")," \u20b9 ",t.discount_price))},this.cartDetailsFilter=(e,t)=>t._original.items.some(a=>a.item_sku&&String(a.item_sku).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||a.item_dimensions&&String(a.item_dimensions).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||a.item_quantity&&String(a.item_quantity).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||a.item_price&&String(a.item_price).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||String(t[e.id]).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())),this.userDetailsFilter=(e,t)=>t._original.firstname&&String(t._original.firstname).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.lastname&&String(t._original.lastname).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.email_address&&String(t._original.email_address).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.mobile_number&&String(t._original.mobile_number).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.alternate_mobile_number&&String(t._original.alternate_mobile_number).toLocaleLowerCase().includes(e.value.toLocaleLowerCase()),this.addressDetailsFilter=(e,t)=>t._original.address&&String(t._original.address).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.landmark&&String(t._original.landmark).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.city&&String(t._original.city).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.state_name&&String(t._original.state_name).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||t._original.pincode&&String(t._original.pincode).toLocaleLowerCase().includes(e.value.toLocaleLowerCase())||String(t[e.id]).toLocaleLowerCase().includes(e.value.toLocaleLowerCase()),this.commentFilter=(e,t)=>t._original.additional_comments&&String(t._original.additional_comments).toLocaleLowerCase().includes(e.value.toLocaleLowerCase()),this.state={offset:0,limit:100,total:0}}componentDidMount(){this.props.couponsData&&this.props.couponsData.count&&Number(this.props.couponsData.count)!==Number(this.state.total)&&this.setState({total:this.props.couponsData.count})}componentWillReceiveProps(e){e.couponsData&&e.couponsData.count&&Number(e.couponsData.count)!==Number(this.state.total)&&this.setState({total:e.couponsData.count})}componentWillUnmount(){this.resetTable()}render(){console.log(this.props);let e=this.props.couponsData;return n.a.createElement("div",{className:"coupons-table-container"},n.a.createElement(o.b,{data:e.results,filterable:!0,minRows:0,pageSize:999,PaginationComponent:()=>n.a.createElement(m.a,{dropDownValues:d,onLimitChange:this.onLimitChange,offset:this.state.offset,total:this.state.total,limit:this.state.limit,onPrevClick:this.handleClick,onNextClick:this.handleClick}),NoDataComponent:()=>null,defaultFilterMethod:(e,t)=>String(t[e.id]).toLocaleLowerCase().includes(e.value.toLocaleLowerCase()),columns:[{Header:"S.No",id:"row",maxWidth:50,filterable:!1,Cell:e=>n.a.createElement("div",null,e.index+1)},{Header:"Order Id",accessor:"order_random_id",minWidth:170},{Header:"Payment Mode",accessor:"payment_type",minWidth:80},{Header:"Order Cart",accessor:"order_cart_details",minWidth:200,Cell:this.orderDeatils,filterMethod:this.cartDetailsFilter},{Header:"Cart Price",accessor:"cart_price_details",minWidth:180,Cell:this.cartPrice},{Header:"User Details",accessor:"user_details",minWidth:210,Cell:this.userDetails,filterMethod:this.userDetailsFilter},{Header:"Address",accessor:"address_details",minWidth:230,Cell:this.addressDetails,filterMethod:this.addressDetailsFilter},{Header:"Additional Comments",accessor:"additionalComments",minWidth:200,filterMethod:this.commentFilter,Cell:e=>n.a.createElement("div",null,e.original&&n.a.createElement("div",{className:"break-word"},e.original.additional_comments))},{Header:"Create Timestamp",accessor:"create_timestamp",minWidth:165,Cell:c.a,filterMethod:c.b}]}))}}var p=u,h=a(102),v=a(4),b=a(13),_=a(11);function C(e){return t=>{t(Object(v.b)()),Object(_.C)(e).then(a=>{var l;t(Object(v.a)()),t((l=a.data,{type:h.a,data:l})),t(E(e))}).catch(e=>{Object(b.a)(e,t)})}}function E(e){return t=>{t(Object(v.b)()),Object(_.D)(e).then(e=>{var a;t((a=e.data,{type:h.b,data:a})),t(Object(v.a)())}).catch(e=>{Object(b.a)(e,t)})}}function g(){return{type:h.c}}a(652);class L extends l.Component{render(){let e=this.props.couponsData;return n.a.createElement("div",{className:"coupon-details-conatiner"},n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon UID "),n.a.createElement("div",null,": ",e.coupon_uid||""," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Type "),n.a.createElement("div",null,": ",e.coupon_type_name||""," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Classification "),n.a.createElement("div",null,": ",e.coupon_classification_name||""," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Code "),n.a.createElement("div",null,": ",e.coupon_code||""," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Percentage "),n.a.createElement("div",null,": ",e.coupon_percentage," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Accessories Percentage "),n.a.createElement("div",null,": ",e.coupon_accessories_percentage," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Cot Percentage "),n.a.createElement("div",null,": ",e.coupon_cot_percentage," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Flat Discount "),n.a.createElement("div",null,": ",e.coupon_flat_discount," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Max Discount "),n.a.createElement("div",null,": ",e.coupon_max_discount)),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Cart Min Value "),n.a.createElement("div",null,": ",e.coupon_min_amount," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Description "),n.a.createElement("div",null,": ",e.coupon_description||""," ")),n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"status-label"},"Coupon Validity "),n.a.createElement("div",null,": ",e.start_date," - ",e.end_date," ")))}}var N=L;class f extends l.Component{constructor(...e){super(...e),this.componentWillUnmount=()=>{this.props.resetCouponData()},this.getNoOrders=()=>n.a.createElement("div",{className:"no-orders"},"There is No orders with this Coupon, Please Try After Some Time...")}componentDidMount(){let e={coupon_uid:this.props.couponUid};this.props.getCouponDetailsAction(e)}render(){let e=this.props,t=e.couponsOrder,a=e.couponsDetails,l=e.userDetails;console.log(this.props);let i="COUPON BASED ORDERS LIST ".concat(t&&t.count?"- (".concat(t.count,")"):"");return n.a.createElement("div",null,n.a.createElement(s.a,{header:i}),a&&n.a.createElement(N,{couponsData:a}),t&&t.results&&Array.isArray(t.results)&&t.results.length>0?n.a.createElement(p,{userDetails:l,coupon_uid:this.props.couponUid,couponsData:t,getCouponOrderDetailsAction:this.props.getCouponOrderDetailsAction}):this.getNoOrders())}}t.default=Object(i.b)((e,t)=>({userDetails:e.userDetails,couponsOrder:e.couponAndOrdersDetails.couponsOrders,couponsDetails:e.couponAndOrdersDetails.couponsDetails}),e=>Object(r.b)({getCouponDetailsAction:C,getCouponOrderDetailsAction:E,resetCouponData:g},e))(f)}}]);
//# sourceMappingURL=19.a1703c25.chunk.js.map