(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8X/8":function(t,e,n){"use strict";n.r(e);var i=n("jx1L"),r=n("mR/U"),s={name:"contactTypes",uri:"contact-types",performLoad:!1},o={props:["mode"],mixins:[i.a,r.a],data:function(){return{service:s}}},a=(n("ts0h"),n("KHd+")),c=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"py-2 text-center"},[n("h2",[t._v("\n            "+t._s("create"===this.mode?"Novo ":"Editar ")+"Tipo de\n            Contato\n        ")]),t._v(" "),n("h2",[t._v(" "+t._s(t.form.fields.name?t.form.fields.name:""))])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-8"},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-3"},[n("app-input",{attrs:{name:"name",label:"Nome",required:!0,form:t.form},model:{value:t.form.fields.name,callback:function(e){t.$set(t.form.fields,"name",e)},expression:"form.fields.name"}}),t._v(" "),n("app-input",{attrs:{name:"code",label:"Código",required:!0,form:t.form},model:{value:t.form.fields.code,callback:function(e){t.$set(t.form.fields,"code",e)},expression:"form.fields.code"}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-right mb-3"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.saveModel()}}},[t._v("\n                            gravar\n                        ")]),t._v(" "),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/contact-types",tag:"button"}},[t._v("\n                            cancelar\n                        ")])],1)])])])])])},[],!1,null,null,null);c.options.__file="ContactTypesForm.vue";e.default=c.exports},eqCc:function(t,e,n){var i=n("n2R+");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},jx1L:function(t,e,n){"use strict";e.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(t){this.$store.dispatch(this.service.name+"/setPerPage",t)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(t){return this.$store.dispatch(this.service.name+"/select",t)},save:function(t){return this.$store.dispatch(this.service.name+"/save",t)},mutateSetErrors:function(t){this.$store.commit(this.service.name+"/mutateSetErrors",t)},mutateFormData:function(t){this.$store.commit(this.service.name+"/mutateFormData",t)},mutateSetFormField:function(t){this.$store.commit(this.service.name+"/mutateSetFormField",t)},mutateSetService:function(t){this.$store.commit(this.service.name+"/mutateSetService",t)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var t=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){t.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var t=this,e="update"===this.mode?_.find(this.rows,function(e){return e.id===t.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(e),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var t=this;this.save(this.mode).then(function(){t.back(),t.clearForm()})},gotoPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(n=n||this.pagination).current_page!==t&&(t<1||t>n.last_page||this.$store.dispatch((e||this.service.name)+"/setCurrentPage",t))},isCurrent:function(t,e){return t.id===e.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},"mR/U":function(t,e,n){"use strict";var i=n("L2JU");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={methods:r({},Object(i.mapActions)("contactTypes",["clearForm"])),computed:r({},Object(i.mapState)({contactTypes:function(t){return t.contactTypes}}))}},"n2R+":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ts0h:function(t,e,n){"use strict";var i=n("eqCc");n.n(i).a}}]);