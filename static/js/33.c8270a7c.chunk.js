(this.webpackJsonpwakefit=this.webpackJsonpwakefit||[]).push([[33],{337:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));const n=(e,t)=>{if(!e)return;let a,n=new FileReader;n.readAsDataURL(e),n.onloadend=()=>{let e=n.result.split(",");a=e.length>0?e[1]:n.result,t(a)}};function s(e){for(var t,a=t=(e=[].slice.call(Array.isArray(e)?e:arguments)).length,n=!0;a--&&n;)n=e[a]instanceof File;if(!n)throw new TypeError("expected argument to FileList is File or array of File objects");for(a=new ClipboardEvent("").clipboardData||new DataTransfer;t--;)a.items.add(e[t]);return a.files}},478:function(e,t,a){},479:function(e,t,a){},683:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),o=a(16),c=(a(478),a(95)),i=a(4),l=a(13),d=a(11),m=a(18);function p(e,t,a,n,s){return e=>{e(Object(i.b)()),Object(d.T)().then(t=>{var a;e(Object(i.a)()),200===t.status&&e((a=t.data,{type:c.a,data:a}))}).catch(t=>{Object(l.a)(t,e)})}}function u(){return{type:c.b}}function h(e){return t=>{t(Object(i.b)()),Object(d.Bb)(e).then(e=>{t(Object(i.a)()),t(f(e.data)),m.b.success(e.data.message||"Success.")}).catch(e=>{t(f()),Object(l.a)(e,t)})}}function f(e){return{type:c.c,data:e}}var b=a(136);a(184);class k extends n.Component{render(){let e=this.props.stock;return s.a.createElement(b.b,{data:e,filterable:!0,minRows:0,pageSize:9999,PaginationComponent:()=>null,NoDataComponent:()=>null,defaultFilterMethod:(e,t)=>String(t[e.id]).toLocaleLowerCase().includes(e.value.toLocaleLowerCase()),columns:[{Header:"S.No",id:"row",maxWidth:50,filterable:!1,Cell:e=>s.a.createElement("div",null,e.index+1)},{Header:"Warehouse",accessor:"warehouse_name",minWidth:180},{Header:"Product Sku",accessor:"product_sku",minWidth:180},{Header:"Quantity",accessor:"quantity",minWidth:180},{Header:"Item Dimension",accessor:"item_dimensions",minWidth:180}]})}}var S=a(85),g=a(9),v=(a(479),a(32)),E=a(337),y=a(3);class w extends n.Component{constructor(e){super(e),this.resetForm=()=>{this.setState({data:{"import-type":"",attachments:""},enableSubmit:!1}),this.fileInput.current.files=Object(E.a)([])},this.validateForm=()=>{let e=this.state.data,t=!1;t=["import-type","attachments"].every(t=>""!==e[t]),this.setState({enableSubmit:t})},this.handleChange=e=>{let t=e.target.name,a=e.target.value,n=this.state.data;if("attachments"===t){if(e.target.files.length>0){let e=this.fileInput.current.files[0];Object(E.b)(e,e=>{n.attachments=e,this.setState({data:n},()=>{this.validateForm()})})}}else n[t]=a;this.setState({data:n},()=>{this.validateForm()})},this.uploadStock=()=>{let e=this.state.data,t=Object(g.a)({},e);this.props.uploadStockAction(t)},this.state={data:{"import-type":"",attachments:""},enableSubmit:!1},this.fileInput=s.a.createRef()}componentWillReceiveProps(e){e.reset&&this.resetForm()}render(){let e=this.state.data;return s.a.createElement("div",{className:"stock-upload-container"},s.a.createElement("h2",null,"Stock Import"),s.a.createElement("div",{className:"field-container"},s.a.createElement("b",null,"Upload Type"),s.a.createElement("select",{className:"custom-dropdown",name:"import-type",value:e["import-type"],onChange:this.handleChange},s.a.createElement("option",null,"select"),s.a.createElement("option",{value:"update"},"Update"),s.a.createElement("option",{value:"replace"},"Replace"))),s.a.createElement("div",{className:"field-container"},s.a.createElement("b",null,"Upload"),s.a.createElement("input",{name:"attachments",className:"attachment",type:"file",onChange:this.handleChange,multiple:!0,ref:this.fileInput,accept:".xlsx, .xls, .csv",encType:"multipart/form-data"})),s.a.createElement("div",{className:"field-container flex-container"},s.a.createElement(v.a,{label:"Upload",onClick:this.uploadStock,disabled:!this.state.enableSubmit}),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(y.b,"/static/backoffice/excels/Sample_Stock_Sheet.xlsx"),download:!0},"Download Sample Sheet")))}}class C extends n.Component{constructor(...e){super(...e),this.state={},this.getNoStock=()=>s.a.createElement("div",{style:{fontSize:"14px"}}," No Stock...")}componentDidMount(){this.props.getStockDetailsAction()}componentWillReceiveProps(e){e.refreshStock&&this.props.getStockDetailsAction()}componentWillUnmount(){this.props.resetStock()}render(){let e=this.props.stock;return s.a.createElement("div",{className:"stock-management-container"},s.a.createElement(S.a,{header:"Stock Management",count:Array.isArray(e)&&e.length}),s.a.createElement("div",{className:"stock-table-upload-container"},Array.isArray(e)&&e.length>0?s.a.createElement(k,{stock:e}):this.getNoStock(),s.a.createElement(w,{reset:this.props.refreshStock,uploadStockAction:this.props.uploadStockAction})))}}t.default=Object(r.b)((e,t)=>({stock:e.stockManagement.stock,refreshStock:e.stockManagement.refreshStock}),e=>Object(o.b)({getStockDetailsAction:p,resetStock:u,uploadStockAction:h},e))(C)}}]);
//# sourceMappingURL=33.c8270a7c.chunk.js.map