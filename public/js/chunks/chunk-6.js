(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5OWj":function(e,t,s){"use strict";var n=s("L2JU");function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){o(e,t,s[t])})}return e}function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.a={methods:i({},Object(n.mapActions)("events",["clearForm"])),computed:i({},Object(n.mapState)({events:function(e){return e.events},subEvents:function(e){return e.subEvents},invitations:function(e){return e.invitations}}))}},"A/j7":function(e,t,s){"use strict";s.r(t);var n=s("jx1L"),i=s("5OWj"),o=s("N4/z"),a=s("CtO9"),r={name:"subEvents",uri:"events/{events.selected.id}/sub-events",performLoad:!1},l={props:["mode"],mixins:[n.a,i.a,o.a,a.a],data:function(){var e=this;return this.$store.dispatch("environment/loadSubEvents"),this.$store.dispatch("environment/loadCostumes"),this.$store.dispatch("environment/loadSectors"),this.$store.dispatch("environment/loadAddresses"),{service:r,fullInvitationImageUrl:"",image:{updateImageUrlDebounced:_.debounce(function(t){t&&axios.get("/api/v1/sub-events/invitation-image-url?link="+t).then(function(t){e.fullInvitationImageUrl=t.data}).catch(function(e){console.log(e)})},200),found:!1,copyAlert:{dismissSecs:2,dismissCountDown:0,show:!0}}}},computed:{imageUrl:{get:function(){return this.updateImageUrl(this.form.fields.invitation_file),this.form.fields.invitation_file},set:function(e){this.$store.commit(this.service.name+"/mutateSetFormField",{field:"invitation_file",value:e}),this.updateImageUrl(e)}}},methods:{countDownChanged:function(e){this.image.copyAlert.dismissCountDown=e},onCopy:function(e){this.image.copyAlert.dismissCountDown=this.image.copyAlert.dismissSecs},onError:function(e){alert("Failed to copy texts")},getImageNotFoundMessage:function(){return this.image.found&&this.form.fields.invitation_file?"":"Imagem não encontrada"},errorImage:function(e){this.image.found=!1},loadImage:function(e){this.image.found=!0},typeKeyImage:function(e){this.updateImageUrl(e)},updateImageUrl:function(e){this.image.updateImageUrlDebounced(e)},changeText:function(e){this.$store.commit("subEvents/mutateSetFormField",{field:e.field,value:e.text})},selectAddressInsideEvent:function(e){e&&this.$store.dispatch("subEvents/loadAddress",{sub_event_id:this.events.selected.id,address_id:e})},fillAdditionalFormFields:function(){this.$store.commit("subEvents/mutateSetFormField",{field:"event_id",value:this.events.selected.id})},exceptSubEventList:function(e,t,s){var n=clone(e);return n.rows=except(e.rows,t),n.rows=_.filter(n.rows,function(e){return!s||!e.event_id||e.event_id==s}),n}}},d=s("KHd+"),c=Object(d.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"py-2 text-center"},[s("h1",[e._v(e._s(e.events.selected.name))]),e._v(" "),s("h2",[e._v("\n            "+e._s("create"===this.mode?"Criar":"Editar")+" Sub Evento\n        ")]),e._v(" "),s("h2",[e._v("\n            "+e._s(e.subEvents.form.fields.name?e.subEvents.form.fields.name:"")+"\n        ")])]),e._v(" "),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-8"},[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-3"},[s("div",{staticClass:"row pt-1 pb-1 bg-primary-lighter"},[s("div",{staticClass:"col-4 text-right"},[s("app-input",{attrs:{name:"send_invitations",label:"pode enviar convites",type:"checkbox",required:!0,form:e.form,inline:"true"},model:{value:e.subEvents.form.fields.send_invitations,callback:function(t){e.$set(e.subEvents.form.fields,"send_invitations",t)},expression:"\n                                        subEvents.form.fields\n                                            .send_invitations\n                                    "}})],1),e._v(" "),s("div",{staticClass:"col-4"},[s("app-input",{attrs:{name:"send_credentials",label:"pode enviar credenciais",type:"checkbox",required:!0,form:e.form,inline:"true"},model:{value:e.subEvents.form.fields.send_credentials,callback:function(t){e.$set(e.subEvents.form.fields,"send_credentials",t)},expression:"\n                                        subEvents.form.fields\n                                            .send_credentials\n                                    "}})],1),e._v(" "),s("div",{staticClass:"col-4"},[s("app-input",{attrs:{name:"security_can_recept",label:"segurança pode recepcionar",type:"checkbox",required:!0,form:e.form,inline:"true"},model:{value:e.subEvents.form.fields.security_can_recept,callback:function(t){e.$set(e.subEvents.form.fields,"security_can_recept",t)},expression:"\n                                        subEvents.form.fields\n                                            .security_can_recept\n                                    "}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-input",{attrs:{name:"name",label:"Nome",required:!0,form:e.form,dusk:"sub-nome"},model:{value:e.subEvents.form.fields.name,callback:function(t){e.$set(e.subEvents.form.fields,"name",t)},expression:"subEvents.form.fields.name"}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-6"},[s("app-input",{attrs:{name:"date",label:"Data",type:"date",required:!0,form:e.form,dusk:"sub-data"},model:{value:e.subEvents.form.fields.date,callback:function(t){e.$set(e.subEvents.form.fields,"date",t)},expression:"subEvents.form.fields.date"}})],1),e._v(" "),s("div",{staticClass:"col-sm-12 col-md-6"},[s("app-input",{attrs:{name:"confirmations_end_date",label:"Data final para confirmação",type:"date",required:!0,form:e.form},model:{value:e.subEvents.form.fields.confirmations_end_date,callback:function(t){e.$set(e.subEvents.form.fields,"confirmations_end_date",t)},expression:"\n                                        subEvents.form.fields\n                                            .confirmations_end_date\n                                    "}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-input",{attrs:{name:"time",label:"Horário",type:"time",required:!0,form:e.form,dusk:"sub-hora"},model:{value:e.subEvents.form.fields.time,callback:function(t){e.$set(e.subEvents.form.fields,"time",t)},expression:"subEvents.form.fields.time"}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-input",{attrs:{name:"place",label:"Local",required:!0,form:e.form,rows:"10",cols:"100",dusk:"sub-local"},model:{value:e.subEvents.form.fields.place,callback:function(t){e.$set(e.subEvents.form.fields,"place",t)},expression:"subEvents.form.fields.place"}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-select",{attrs:{name:"associated_subevent_id",label:"Subevento Associado",required:!0,form:e.form,options:e.exceptSubEventList(e.environment.tables.sub_events,e.subEvents.form.fields.id,e.subEvents.form.fields.event_id)},model:{value:e.subEvents.form.fields.associated_subevent_id,callback:function(t){e.$set(e.subEvents.form.fields,"associated_subevent_id",t)},expression:"\n                                        subEvents.form.fields\n                                            .associated_subevent_id\n                                    "}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-select",{attrs:{name:"costume_id",label:"Traje",required:!0,form:e.form,options:e.environment.tables.costumes},model:{value:e.subEvents.form.fields.costume_id,callback:function(t){e.$set(e.subEvents.form.fields,"costume_id",t)},expression:"\n                                        subEvents.form.fields.costume_id\n                                    "}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-select",{attrs:{name:"sector_id",label:"Setor",required:!0,form:e.form,options:e.environment.tables.sectors},model:{value:e.subEvents.form.fields.sector_id,callback:function(t){e.$set(e.subEvents.form.fields,"sector_id",t)},expression:"\n                                        subEvents.form.fields.sector_id\n                                    "}})],1)]),e._v(" "),s("app-markdown-text-area",{attrs:{form:e.form,label:"Texto do convite",id:"invitation_text",value:e.subEvents.form.fields.invitation_text},on:{input:function(t){return e.changeText({field:"invitation_text",text:t})}}}),e._v(" "),s("app-markdown-text-area",{attrs:{form:e.form,label:"Texto de envio das credencials de acesso ao evento",id:"credentials_text",value:e.subEvents.form.fields.credentials_text},on:{input:function(t){return e.changeText({field:"credentials_text",text:t})}}}),e._v(" "),s("app-markdown-text-area",{attrs:{form:e.form,label:"Texto de agradecimento pela presença",id:"thank_you_text",value:e.subEvents.form.fields.thank_you_text},on:{input:function(t){return e.changeText({field:"thank_you_text",text:t})}}}),e._v(" "),s("app-markdown-text-area",{attrs:{form:e.form,label:"Texto de declinação do convite",id:"rejection_text",value:e.subEvents.form.fields.rejection_text},on:{input:function(t){return e.changeText({field:"rejection_text",text:t})}}}),e._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-8"},[s("app-input",{attrs:{name:"invitation_file",label:"Arquivo de imagem do convite",type:"text",form:e.form,"additional-error-message":e.getImageNotFoundMessage(),inline:"true"},on:{"on-key-up":function(t){return e.typeKeyImage(e.subEvents.form.fields.invitation_file)}},model:{value:e.imageUrl,callback:function(t){e.imageUrl=t},expression:"imageUrl"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.image.found&&e.subEvents.form.fields.invitation_file,expression:"\n                                        image.found &&\n                                            subEvents.form.fields\n                                                .invitation_file\n                                    "},{name:"clipboard",rawName:"v-clipboard:copy",value:e.fullInvitationImageUrl,expression:"\n                                        fullInvitationImageUrl\n                                    ",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"cursor-pointer"},[e.subEvents.form.fields.invitation_file?s("small",[e._v("\n                                        "+e._s(e.fullInvitationImageUrl)+"\n                                    ")]):e._e(),e._v(" "),s("i",{staticClass:"fa fa-copy"}),e._v(" "),s("b-alert",{attrs:{show:e.image.copyAlert.dismissCountDown,dismissible:"",variant:"warning"},on:{"dismiss-count-down":e.countDownChanged}},[e._v("\n                                        URL copiada para a área de\n                                        transferência\n                                    ")])],1)],1),e._v(" "),s("div",{staticClass:"col-4"},[s("img",{attrs:{height:"150",src:e.fullInvitationImageUrl},on:{error:e.errorImage,load:e.loadImage}})])]),e._v(" "),"create"==e.mode?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-12"},[s("app-select",{attrs:{name:"address_id",label:"Endereço",required:!0,form:e.form,options:e.environment.tables.availableAddresses},on:{input:function(t){return e.selectAddressInsideEvent(e.subEvents.form.fields.address_id)}},model:{value:e.subEvents.form.fields.address_id,callback:function(t){e.$set(e.subEvents.form.fields,"address_id",t)},expression:"\n                                        subEvents.form.fields.address_id\n                                    "}})],1)]):e._e(),e._v(" "),s("app-address-field",{attrs:{form:e.subEvents.form,address:e.subEvents.form.fields.address,"google-maps":e.environment.google_maps}})],1)]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-right mb-3"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit",dusk:"sub-gravar",disabled:e.cannot("subevents:modify")},on:{click:function(t){return t.preventDefault(),e.saveModel()}}},[e._v("\n                            gravar\n                        ")]),e._v(" "),s("router-link",{staticClass:"btn btn-success",attrs:{to:"/events",tag:"button"}},[e._v("\n                            cancelar\n                        ")])],1)])])])])])},[],!1,null,null,null);t.default=c.exports},"N4/z":function(e,t,s){"use strict";var n=s("L2JU");function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){o(e,t,s[t])})}return e}function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.a={methods:i({},Object(n.mapActions)("subEvents",["clearForm"])),computed:i({},Object(n.mapState)({addresses:function(e){return e.addresses},events:function(e){return e.events},subEvents:function(e){return e.subEvents}}))}}}]);