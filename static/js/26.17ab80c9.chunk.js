(this.webpackJsonpwakefit=this.webpackJsonpwakefit||[]).push([[26],{337:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return n}));const s=(e,t)=>{if(!e)return;let a,s=new FileReader;s.readAsDataURL(e),s.onloadend=()=>{let e=s.result.split(",");a=e.length>0?e[1]:s.result,t(a)}};function n(e){for(var t,a=t=(e=[].slice.call(Array.isArray(e)?e:arguments)).length,s=!0;a--&&s;)s=e[a]instanceof File;if(!s)throw new TypeError("expected argument to FileList is File or array of File objects");for(a=new ClipboardEvent("").clipboardData||new DataTransfer;t--;)a.items.add(e[t]);return a.files}},656:function(e,t,a){},657:function(e,t,a){},658:function(e,t,a){},687:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(21),l=a(16),r=(a(656),a(85)),c=(a(657),a(32)),o=a(337),m=a(3);class d extends s.Component{constructor(...e){super(...e),this.state={data:{attachments:""},enableSubmit:!1},this.fileInput=n.a.createRef(),this.resetForm=()=>{this.setState({data:{attachments:""},enableSubmit:!1}),this.fileInput.current.files=Object(o.a)([])},this.validateForm=()=>{let e=this.state.data,t=!1;t=["attachments"].every(t=>""!==e[t]),this.setState({enableSubmit:t})},this.uploadSheet=()=>{let e=this.state.data;this.props.resetData&&this.props.resetData(e),this.props.uploadSheet&&this.props.uploadSheet(e)},this.handleChange=e=>{let t=this.state.data,a=e.target.name,s=e.target.value;switch(a){case"attachments":if(e.target.files.length>0){let e=this.fileInput.current.files[0];Object(o.b)(e,e=>{t.attachments=e,this.setState({data:t},()=>{this.validateForm()})})}t[a]=s;break;default:t[a]=s}this.setState({data:t},()=>this.validateForm())}}componentWillReceiveProps(e){e.reset&&this.resetForm()}render(){return n.a.createElement("form",{className:"upload-affiliate-sheet"},n.a.createElement("div",{className:"input-container"},n.a.createElement("b",{className:"input-label"},"Upload"),n.a.createElement("div",{className:"field-container upload"},n.a.createElement("input",{name:"attachments",className:"attachment",type:"file",onChange:this.handleChange,ref:this.fileInput,accept:".xlsx, .xls, .csv",encType:"multipart/form-data"}))),n.a.createElement("div",{className:"field-container"},n.a.createElement(c.a,{label:"Upload",onClick:this.uploadSheet,disabled:!this.state.enableSubmit})),n.a.createElement("div",null,n.a.createElement("a",{className:"download-link",target:"_blank",rel:"noopener noreferrer",href:"".concat(m.b,"/static/backoffice/excels/cod-collection-finance-sample-upload.xlsx"),download:!0},"Download Sample Sheet")))}}var p=d,h=a(103),u=a(4),b=a(13),f=a(11);function v(e){return t=>{t(Object(u.b)()),Object(f.Ab)(e).then(e=>{t(Object(u.a)()),t(function(e){return{type:h.c,data:e}}(e.data.message))}).catch(e=>{Object(b.a)(e,t)})}}function E(){return{type:h.b}}function S(){return{type:h.a}}a(658);class g extends n.a.Component{constructor(...e){super(...e),this.state={tabs:[{label:"Existing",key:"existing_invoice_list"},{label:"Failed",key:"failed_invoice_list"}],activeTab:"existing_invoice_list"},this.handleChange=e=>{this.setState({activeTab:e})}}render(){let e=this.state,t=e.tabs,a=e.activeTab,s=this.props.data;return n.a.createElement("div",{className:"import-cod-data-table"},n.a.createElement("div",{className:"success-message"},n.a.createElement("b",null,s.success_count)," got Imported!"),n.a.createElement("div",{className:"title"},"Existing/Failed"),n.a.createElement("div",{className:"tabs-container"},t.map((e,t)=>n.a.createElement("div",{key:"tab-".concat(t),className:e.key===a?"import-tab active":"import-tab",onClick:()=>this.handleChange(e.key)},e.label))),n.a.createElement("table",{className:"table"},n.a.createElement("tr",null,n.a.createElement("th",{className:"slno"},"S.No"),n.a.createElement("th",{className:"invoice-number"},"Invoice")),s[a].map((e,t)=>n.a.createElement("tr",{key:"error-row-".concat(t)},n.a.createElement("td",{className:"slno"},t+1),n.a.createElement("td",{className:"invoice-number"},e)))))}}var N=g;class k extends s.Component{componentWillUnmount(){this.props.resetUloadComponent()}render(){return n.a.createElement("div",{className:"import-cod-collection-container"},n.a.createElement(r.a,{header:"Import COD Collection"}),n.a.createElement("div",{className:"import-cod-collection-content"},n.a.createElement(p,{reset:this.props.reset,uploadSheet:this.props.uploadSheetAction,resetData:this.props.resetData}),this.props.successData&&n.a.createElement(N,{data:this.props.successData})))}}t.default=Object(i.b)((e,t)=>({successData:e.importSheetFinance.successData,reset:e.importSheetFinance.reset}),e=>Object(l.b)({uploadSheetAction:v,resetData:E,resetUloadComponent:S},e))(k)}}]);
//# sourceMappingURL=26.17ab80c9.chunk.js.map