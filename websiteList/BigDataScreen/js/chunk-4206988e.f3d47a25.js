(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4206988e"],{"0226":function(e,t,a){"use strict";var r=a("6ab5"),s=a.n(r);s.a},"1af6":function(e,t,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"4d41":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABiVBMVEUAAAD////+/v7///9KSkr///9MTEz///////////////9AQED///9AQED///9AQED////////r7vJBQUHr7/NBQUFvbm5BQUFERET////x8/fr7vLr7/JsbGxiYmLr7/OkpKSko6Pp5uLY1tbt8fRDQ0NERET////q7vL52bJAQECJUSt0cnLx8/b64L///vz19PP+9enHxsX53LjyzqLsxZVwbm6gc1VERETv7+/r6+vZs4xzcXFkY2NhYGBRUFD++/j/+fH08fDu6+ft6OPw6d/o4tr87Njw5NTS0tH53Lq7urrRvbGxsbG0srD21Kvy0arvyJqjoJrFqZaHhoR4dnSuiXC0imhmZmaxg19dXFxUU1NMTEyca0uYYjyOWDL49fLe4ePk4N3a2dnZ2dnm2tLU0Mv04cn64cP23sC8u7u7u7v52bS0tLT62bL21q+zr6royKimpqarqKPlwJngupPVspCOjo7MqIiPi4i7m4TRqILFmnO0jG+pgGSpfFpUVFSgcE2VYDopM43BAAAAJ3RSTlMAlhj0GAYG8dm/R/Tj48fHggfz8ZaWlYJHLfPx2dnZv7+/goJHLi1BA+/tAAAB5UlEQVQ4y2WRZ3vaMBRGZWx2AqRpVvfWQAVKIAQIkGY1e+/Vvfdus5NfHsmSdc2T88mSjvTee42AYMyKRmw7ErViQXSRgBXGhrAVQM20pWzchJ1qa7qekJuv945KOzul1aVncpXwPdLTIneGnqY1paxct/SY++45nk4bprFrBHR+QsUugbD6ELspqo4UVhyeVasbKqZElJFyA7z6N/YppV9/VQ9206dEGbYMsbBmbZ4q5nePiTYsMT9vPk/+UY/fa+PaCAdRDGsy36nhz3uijRgkvMuAMPmWaMNCUU945BN6R4g2oiiCjQHCKCHaiCD4SdkvRiCGK0pQmIwMCJdUhOJxr65gGIRrUKQcxZw8nxsnwE3ZJpRZXCgUFoojBLgsBwUZtFAsFugwAe7BqKHRUTi/GkS+jBezGbeH2QlI8H537s23/7XNqazoYzI7tVlf/pl/LpsMIMGdxZUTJtjiH/Eg/TSIP/AtuW6sLN5FklCSSbYHOM9VxsYqOc4HtpkkGUIuTqtY9PdxznF5fX0IC7OvX2y1OkhzXxo1IZQrjOXK4qMmzx8gg5NUT7zKMzbxUj2QdJCPUFecNTjP/2BsJs95g8W7VD7gdLTX+cwyY38/83p7B1wHQt2dt2/E49dvdXb7bp8DsveQZtF9RBUAAAAASUVORK5CYII="},"553e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"backend"}},[r("div",{staticClass:"header"},[r("p",[t._v("用户管理")]),r("HeaderUser",{staticClass:"opts"})],1),r("a-locale-provider",{attrs:{locale:t.zhCN}},[r("div",{staticClass:"main"},[r("div",{staticClass:"arch-row kfc"},[r("div",{staticClass:"arch-left"},[r("a-form",{attrs:{layout:"inline"}},[r("a-form-item",[r("span",{staticClass:"arch-title"},[t._v("组织架构")])]),r("a-form-item",{staticClass:"pull-right"},[r("a-button",{attrs:{icon:"plus"},on:{click:function(e){return t.showModalARM(null,null,"add")}}},[t._v("添加架构")])],1)],1)],1),r("div",{staticClass:"arch-right"},[r("a-form",{staticStyle:{"border-left":"1px solid #efefef"},attrs:{layout:"inline"}},[r("a-form-item",{staticStyle:{"margin-left":"16px"}},[r("a-button",{staticClass:"bgGray",on:{click:t.showModalAUM}},[t._v("添加成员用户")])],1),r("a-form-item",[r("a-button",{staticClass:"bgGray",attrs:{loading:t.activeUserBtnLoading,disabled:0===t.selectedRowKeys.length},on:{click:function(e){t.apiUpdateUserStatus("enable",t.selectedRowKeys.join(","))}}},[t._v("启用账户")])],1),r("a-form-item",[r("a-button",{staticClass:"bgGray",attrs:{loading:t.unactiveUserBtnLoading,disabled:0===t.selectedRowKeys.length},on:{click:function(e){t.apiUpdateUserStatus("pending",t.selectedRowKeys.join(","))}}},[t._v("停用账户")])],1),r("a-form-item",{staticClass:"pull-right",staticStyle:{margin:"0"}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onTableSearch}},[t._v("搜索")])],1),r("a-form-item",{staticClass:"pull-right"},[r("a-input",{attrs:{allowClear:"",placeholder:"请输入昵称或手机号"},model:{value:t.table.searchStr,callback:function(e){t.$set(t.table,"searchStr",e)},expression:"table.searchStr"}})],1),r("a-form-item",{staticClass:"pull-right"},[r("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"账户状态",allowClear:""},model:{value:t.userStatus,callback:function(e){t.userStatus=e},expression:"userStatus"}},[r("a-select-option",{attrs:{value:"0"}},[t._v("未审核")]),r("a-select-option",{attrs:{value:"1"}},[t._v("已审核")]),r("a-select-option",{attrs:{value:"2"}},[t._v("已停用")])],1)],1),r("a-form-item",{staticClass:"pull-right"},[r("a-select",{staticStyle:{width:"120px"},attrs:{placeholder:"部门筛选",allowClear:""},model:{value:t.userOrg,callback:function(e){t.userOrg=e},expression:"userOrg"}},t._l(t.orignArch,(function(e,a){return r("a-select-option",{key:a,attrs:{value:e.org_name}},[t._v("\n                  "+t._s(e.org_name))])})),1)],1)],1)],1)]),r("div",{staticClass:"arch-row kfc"},[r("div",{staticClass:"arch-left"},[r("a-spin",{attrs:{spinning:t.archSpinning}},[r("div",{staticClass:"spin-content"},[t.treeArch.length?r("a-tree",{staticClass:"arch-tree",attrs:{showLine:"",defaultExpandAll:"",treeData:t.treeArch,scroll:{x:1300}},on:{select:t.onTreeSelect},scopedSlots:t._u([{key:"title",fn:function(e){var a=e.title,s=e.key,n=e.pid,i=(e.deep,e.isAddChild),o=e.isRemove,l=e.isEdit;return[r("span",{attrs:{title:a}},[t._v(t._s(a))]),r("a-popover",{attrs:{title:"操作",placement:"right",trigger:"hover"}},[r("template",{slot:"content"},[i?r("p",{staticClass:"treeInnerBtn",on:{click:function(e){return t.showModalARM(a,s,"add")}}},[t._v("\n                        新建下级部门\n                      ")]):t._e(),l?r("p",{staticClass:"treeInnerBtn",on:{click:function(e){return t.showModalARM(a,s,"edit",n)}}},[t._v("\n                        编辑\n                      ")]):t._e(),o?r("p",{staticClass:"treeInnerBtn",on:{click:function(e){return t.apiRemoveArch(s)}}},[t._v("\n                        删除\n                      ")]):t._e()]),r("a-icon",{staticClass:"pull-right treeSettingBtn",attrs:{type:"setting"}})],2)]}}],null,!1,1307440562)}):t._e()],1)])],1),r("div",{staticClass:"arch-right arch-Table"},[r("a-table",{attrs:{bordered:"",loading:t.table.loading,pagination:!1,columns:t.columns,dataSource:t.table.list,rowSelection:t.rowSelection},scopedSlots:t._u([{key:"user_status",fn:function(e,a){return r("div",{},[0===a.user_status?r("span",[t._v("未审核")]):t._e(),1===a.user_status?r("span",[t._v("已审核")]):t._e(),2===a.user_status?r("span",[t._v("已停用")]):t._e(),3===a.user_status?r("span",[t._v("已拒绝")]):t._e()])}},{key:"last_login_time",fn:function(e,a){return r("div",{},[t._v("\n              "+t._s(a.last_login_time&&t.fmtDate("Y-M-D hh:mm:ss",a.last_login_time))+"\n            ")])}},{key:"operation",fn:function(e,a){return r("div",{},[1===a.user_status?r("a-icon",{staticClass:"iconStyle",attrs:{type:"edit",title:"编辑"},on:{click:function(e){return t.showModalAUM(a)}}}):t._e(),0===a.user_status||3===a.user_status?r("a-icon",{staticClass:"iconStyle",attrs:{type:"safety-certificate",title:"授权"},on:{click:function(e){return t.apiUpdateUserStatus("enable",a.user_id)}}}):t._e(),0===a.user_status?r("a-icon",{staticClass:"iconStyle",attrs:{type:"stop",title:"拒绝"},on:{click:function(e){return t.apiUpdateUserStatus("refuse",a.user_id)}}}):t._e(),0!==a.user_status&&3!==a.user_status?r("a-button-group",[r("a-switch",{attrs:{defaultChecked:"",title:"激活状态",checkedChildren:"开",unCheckedChildren:"关",checked:1===a.user_status},on:{click:function(e){return t.apiUpdateUserStatus(e?"enable":"pending",a.user_id)}}})],1):t._e()],1)}}])}),r("div",{staticClass:"arch-pagination"},[r("a-pagination",{attrs:{showSizeChanger:"",showQuickJumper:"",total:t.table.total,pageSize:t.table.pageSize,showTotal:function(t,a){return"共 "+t+" 条记录  第 "+e.table.index+"/"+Math.ceil(e.table.total/e.table.pageSize)+" 页"}},on:{"update:pageSize":function(e){return t.$set(t.table,"pageSize",e)},"update:page-size":function(e){return t.$set(t.table,"pageSize",e)},change:t.onPageIndexChange,showSizeChange:t.onPageSizeChange},model:{value:t.table.index,callback:function(e){t.$set(t.table,"index",e)},expression:"table.index"}})],1)],1)])])]),r("addUserChildModal",{ref:"aum",attrs:{pid:t.uid}}),r("addArchModal",{ref:"arm",attrs:{uid:t.uid}})],1)},s=[],n=(a("96cf"),a("3b8d")),i=(a("c5f6"),a("677e")),o=a.n(i),l=a("8946"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{id:"addUserModal",title:e.isEdit?"编辑成员":"添加成员",width:"800px",footer:null},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",{staticClass:"kfc",attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"昵称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nick",{rules:[{required:!0,message:"请输入昵称"}]}],expression:"[\n              'nick',\n              { rules: [{ required: true, message: '请输入昵称' }] }\n            ]"}],attrs:{maxlength:"20",placeholder:"请输入昵称(最大长度20)"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"密码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",e.passwordRules],expression:"['password', passwordRules]"}],attrs:{minlength:"6",type:e.isEdit?"password":"text",placeholder:"请输入密码(最小长度6)"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"邮箱"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",e.emailRules],expression:"['email', emailRules]"}],attrs:{maxlength:"200",placeholder:"请输入邮箱"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"手机号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",e.phoneRules],expression:"['mobile', phoneRules]"}],attrs:{maxlength:"11",placeholder:"请输入手机号(11位)"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"姓名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["realName",{rules:[{required:!1,message:"请输入姓名"}]}],expression:"[\n              'realName',\n              { rules: [{ required: false, message: '请输入姓名' }] }\n            ]"}],attrs:{maxlength:"10",placeholder:"请输入姓名(最大长度10)"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"职位"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["position",{rules:[{required:!1,message:"请输入职位"}]}],expression:"[\n              'position',\n              { rules: [{ required: false, message: '请输入职位' }] }\n            ]"}],attrs:{maxlength:"20",placeholder:"请输入职位(最大长度20)"}})],1)],1)],1),a("a-row",[a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:"所属机构"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgId",{rules:[{required:!0,message:"请选择所属机构"}]}],expression:"[\n            'orgId',\n            { rules: [{ required: true, message: '请选择所属机构' }] }\n          ]"}],key:"arm",attrs:{dropdownStyle:{maxHeight:"400px",overflow:"auto"},treeData:e.treeArch,placeholder:"请选择所属机构",treeDefaultExpandAll:""}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:"所在地"}},[e.hideCascader?a("a-input-search",{attrs:{disabled:""},on:{search:function(t){e.hideCascader=!1}},model:{value:e.oldAddress,callback:function(t){e.oldAddress=t},expression:"oldAddress"}},[a("a-button",{attrs:{slot:"enterButton"},slot:"enterButton"},[e._v("修改所在地")])],1):e._e(),e.hideCascader?e._e():a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["cascader",e.cascaderRules],expression:"['cascader', cascaderRules]"}],attrs:{options:e.options,changeOnSelect:"",loadData:e.loadCascaderData,placeholder:"请选择所在地"},on:{change:e.onCascaderChange}})],1),null!==e.cascaderResult?a("a-row",{staticClass:"ant-form-item"},[a("a-col",{attrs:{span:4}}),a("a-col",{attrs:{span:20}},[a("a-input",{attrs:{placeholder:"请输入详细地址(最大长度200)"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}})],1)],1):e._e(),a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:"添加功能权限"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["permissionIds",{rules:[{required:!0,message:"请添加功能权限"}],initialValue:[17]}],expression:"[\n            'permissionIds',\n            { rules: [{ required: true, message: '请添加功能权限' }],\n              initialValue: [17] }\n          ]"}],staticStyle:{width:"100%"},attrs:{treeData:e.authModule,treeCheckable:"",showCheckedStrategy:e.SHOW_PARENT,searchPlaceholder:"请添加功能权限"},on:{change:e.onChangeAuth}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:"账户状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["userStatus",{rules:[{required:!0,message:"请设置账户状态"}]}],expression:"[\n            'userStatus',\n            { rules: [{ required: true, message: '请设置账户状态' }] }\n          ]"}]},[a("a-radio",{attrs:{value:1}},[e._v("启用")]),a("a-radio",{attrs:{value:0}},[e._v("停用")])],1)],1),a("br"),a("a-row",{staticClass:"ant-form-item"},[a("a-col",{attrs:{span:4}}),a("a-col",{attrs:{span:20}},[a("a-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v("    \n          "),a("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.isEdit?"更新":"添加"))])],1)],1)],1)],1)],1)},u=[],d=a("a745"),p=a.n(d);function m(e){if(p()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var f=a("774e"),h=a.n(f),v=a("c8bb"),b=a.n(v);function g(e){if(b()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return h()(e)}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function x(e){return m(e)||g(e)||w()}a("28a5");var k=a("4ec3"),_=a("7bec"),y=_["a"].SHOW_PARENT,C={props:["pid"],data:function(){return{phoneRules:k["j"],emailRules:k["f"],passwordRules:k["i"],cascaderRules:k["e"],SHOW_PARENT:y,formItemLayout:{labelCol:{span:8},wrapperCol:{span:16}},formItemLayout2:{labelCol:{span:4},wrapperCol:{span:20}},visible:!1,form:this.$form.createForm(this),record:null,uid:null,isEdit:!1,hideCascader:!1,options:[],cascaderResult:null,authModule:[],treeArch:[],details:null}},watch:{visible:function(e){!1===e&&(this.uid=null,this.form.resetFields(),this.isEdit=!1,this.hideCascader=!1,this.oldAddress=null)}},methods:{onChangeAuth:function(e){var t=this;this.$nextTick((function(){18!==e[0]&&t.form.setFieldsValue({permissionIds:e.concat([17])})}))},initForm:function(e,t){var a=this;setTimeout((function(){a.record=e,a.uid=e.user_id,a.isEdit=!0,a.hideCascader=!0,a.oldAddress=e.user_address,a.form.setFieldsValue({realName:e.real_name,userStatus:e.user_status,position:e.position,mobile:e.mobile,email:e.email,nick:e.nick,password:e.password,orgId:"".concat(e.org_name,"-").concat(e.org_id),permissionIds:t.map((function(e){return e.permission_id}))})}))},api:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k["c"])(t,a);case 3:r=e.sent,this.$parent.updateUserList(),this.$message.success(r.msg),this.visible=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),window.console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,a){return e.apply(this,arguments)}return t}(),apiGetRSA:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k["b"])(k["k"].getRSA);case 3:if(a=e.sent,this.$rsa.setPublicKey(a.data.public_key),r={userId:this.isEdit?this.uid:void 0,parentUserId:this.pid,orgId:Number(t.orgId.split("-").pop()),realName:t.realName,accountType:0,mobile:t.mobile,email:t.email,nick:t.nick,password:void 0,permissionIds:t.permissionIds.join(","),userStatus:Number(t.userStatus),position:t.position,userAddress:this.cascaderResult?"".concat(this.cascaderResult.join("-"),"-").concat(this.details||""):void 0},!this.isEdit){e.next=15;break}if(t.password===this.record.password){e.next=12;break}if(s=this.$rsa.encrypt(t.password),s){e.next=11;break}return e.abrupt("return",this.$message.error("数据加密失败，请重试！"));case 11:r.password=s;case 12:this.api(k["k"].updateSubUser,r),e.next=20;break;case 15:if(n=this.$rsa.encrypt(t.password),n){e.next=18;break}return e.abrupt("return",this.$message.error("数据加密失败，请重试！"));case 18:r.password=n,this.api(k["k"].addSubUser,r);case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](0),window.console.log(e.t0);case 25:case"end":return e.stop()}}),e,this,[[0,22]])})));function t(t){return e.apply(this,arguments)}return t}(),loadCascaderData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t[t.length-1],a.loading=!0,e.next=5,Object(k["c"])(k["k"].getCity,{postCode:a.value||0});case 5:r=e.sent,r.valid&&(a.loading=!1,a.children=r.data.map((function(e){return{value:e.post_code,label:e.city_name,deep:a.deep+1,isLeaf:a.deep+1>1}})),this.options=x(this.options)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),window.console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),onCascaderChange:function(e,t){this.cascaderResult=t?t.map((function(e){return e.label})):null},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||t.apiGetRSA(a)}))}}},S=C,A=a("2877"),I=Object(A["a"])(S,c,u,!1,null,null,null),R=I.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{id:"addUserModal",title:null===e.defaultId?"添加机构":"编辑机构",footer:null},on:{ok:function(t){e.visible=!1}},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",{staticClass:"kfc",attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",[a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:null===e.defaultId?"机构名称":"重新命名"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:e.defaultTitle,rules:[{max:20,required:!0,message:"请输入机构名称"}]}],expression:"[\n            'name',\n            {\n              initialValue: defaultTitle,\n              rules: [{ max: 20, required: true, message: '请输入机构名称' }]\n            }\n          ]"}],attrs:{maxlength:"20",placeholder:"请输入机构名称(最大长度20)"}})],1),a("a-form-item",{attrs:{"label-col":e.formItemLayout2.labelCol,"wrapper-col":e.formItemLayout2.wrapperCol,label:null===e.defaultId?"上级机构":"当前机构"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:e.defaultValue,rules:[{required:!0,message:"请输入机构名称"}]}],expression:"[\n            'id',\n            {\n              initialValue: defaultValue,\n              rules: [{ required: true, message: '请输入机构名称' }]\n            }\n          ]"}],key:"arm",attrs:{showSearch:"",disabled:null!==e.defaultValue,dropdownStyle:{maxHeight:"400px",overflow:"auto"},treeData:e.treeData,placeholder:"请选择上级机构",treeDefaultExpandAll:""}})],1),a("br"),a("a-row",{staticClass:"ant-form-item"},[a("a-col",{attrs:{span:4}}),a("a-col",{attrs:{span:20}},[a("a-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v("    \n          "),null===e.defaultId?a("a-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.handleSubmit("add")}}},[e._v("添加")]):a("a-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.handleSubmit("edit")}}},[e._v("更新")])],1)],1)],1)],1)],1)},L=[],O=(a("7f7f"),{props:["uid"],data:function(){return{formItemLayout:{labelCol:{span:8},wrapperCol:{span:16}},formItemLayout2:{labelCol:{span:4},wrapperCol:{span:20}},visible:!1,form:this.$form.createForm(this),treeData:[],defaultValue:null,defaultTitle:null,defaultId:null,pid:0}},methods:{api:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k["c"])(t,a);case 3:r=e.sent,this.$parent.apiGetArch(),this.$message.success(r.msg),this.visible=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),window.console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t,a){return e.apply(this,arguments)}return t}(),handleSubmit:function(e){var t=this;this.form.validateFields((function(a,r){console.log(t),a||("edit"==e?t.api(k["k"].updOrganization,{companyId:t.uid,orgParentId:t.pid,orgName:r.name,orgId:Number(r.id.split("-").pop())}):"add"==e&&t.api(k["k"].addOrganization,{companyId:t.uid,orgName:r.name,orgParentId:Number(r.id.split("-").pop())}))}))}}}),j=O,M=Object(A["a"])(j,U,L,!1,null,null,null),T=M.exports,$=a("fa7d"),N={components:{HeaderUser:l["a"],addArchModal:T,addUserChildModal:R},data:function(){return{zhCN:o.a,uid:localStorage.getItem("uid"),columns:k["l"],selectedRowKeys:[],orignArch:[],treeArch:[],activeUserBtnLoading:!1,unactiveUserBtnLoading:!1,archSpinning:!1,userOrg:void 0,userStatus:void 0,table:{searchStr:null,list:[],total:50,index:1,size:10,loading:!1,pageSize:10}}},computed:{rowSelection:function(){var e=this.selectedRowKeys;return{selectedRowKeys:e,onChange:this.onTableSelectChange,onSelection:this.onSelection}}},created:function(){this.updateUserList(),this.apiGetArch()},methods:{fmtDate:$["a"],onTableSelectChange:function(e,t){this.selectedRowKeys=t.map((function(e){return e.user_id}))},showModalARM:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;this.$nextTick((function(){console.log(e.$refs),e.$refs.arm.form.resetFields(),e.$refs.arm.defaultId=null,e.$refs.arm.treeData=[],e.$refs.arm.defaultValue=null,e.$refs.arm.defaultTitle=null,"edit"===r&&(e.$refs.arm.treeData=e.treeArch,e.$refs.arm.defaultValue=t+"-"+a,e.$refs.arm.defaultId=Number(a),e.$refs.arm.defaultTitle=t,e.$refs.arm.pid=s),"add"===r&&(e.$refs.arm.treeData=Object(k["g"])(e.orignArch,4),t&&a&&(e.$refs.arm.defaultValue=t+"-"+a)),e.$refs.arm.visible=!0}))},onTableSearch:function(){this.table.index=1,this.updateUserList()},apiGetArch:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.archSpinning=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].findAllByCompanyId,{companyId:this.uid});case 4:if(t=e.sent,t.valid){e.next=7;break}return e.abrupt("return",this.$message.error(t.msg));case 7:this.orignArch=t.data,this.treeArch=Object(k["g"])(t.data,5),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),window.console.log(e.t0);case 14:this.archSpinning=!1;case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(){return e.apply(this,arguments)}return t}(),apiRemoveArch:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.archSpinning=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].delOrganization,{orgId:Number(t)});case 4:if(a=e.sent,a.valid){e.next=7;break}return e.abrupt("return",this.$message.error(a.msg));case 7:this.apiGetArch(),this.$refs.arm.visible=!1,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),window.console.log(e.t0);case 14:this.archSpinning=!1;case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),updateUserList:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.table.loading=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].getAllSubUsers,{pageNum:this.table.index,pageSize:this.table.pageSize,parentUserId:this.uid,keyword:this.table.searchStr||void 0,userStatus:this.userStatus?Number(this.userStatus):void 0,orgName:this.userOrg||void 0});case 4:t=e.sent,this.table.total=t.data.recordCount,this.table.list=t.data.result.map((function(e){return e["key"]=e.user_id,e["rowKey"]=e.user_id,e})),setTimeout((function(){return a.selectedRowKeys=[]})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),window.console.log(e.t0);case 13:this.table.loading=!1;case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}(),apiUpdateUserStatus:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.table.loading=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].updateUserStatus,{status:t,userIds:a});case 4:r=e.sent,this.updateUserList(),this.$message.success(r.msg),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),window.console.log(e.t0);case 12:this.table.loading=!1,this.activeUserBtnLoading=!1,this.unactiveUserBtnLoading=!1;case 15:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t,a){return e.apply(this,arguments)}return t}(),onPageIndexChange:function(e,t){window.console.log(e,t),this.table.index=e,this.table.pageSize=t,this.updateUserList()},onPageSizeChange:function(e,t){window.console.log(e,t),this.table.index=1,this.table.pageSize=t,this.updateUserList()},onTreeSelect:function(e,t){window.console.log("selected",e,t)},showModalAUM:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,r,s,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.table.loading=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].getLingXePermission);case 4:if(a=e.sent,!1!==a.valid){e.next=7;break}return e.abrupt("return",this.$message.error(a.msg));case 7:return e.next=9,Object(k["c"])(k["k"].getLingXePermissionByUserId,{userId:this.uid});case 9:if(r=e.sent,!1!==r.valid){e.next=12;break}return e.abrupt("return",this.$message.error(r.msg));case 12:return e.next=14,Object(k["c"])(k["k"].getCity,{postCode:0});case 14:if(s=e.sent,!1!==s.valid){e.next=17;break}return e.abrupt("return",this.$message.error(s.msg));case 17:if(this.$refs.aum.authModule=Object(k["h"])(a.data,r.data),this.$refs.aum.treeArch=this.treeArch,this.$refs.aum.options=s.data.map((function(e){return{value:e.post_code,label:e.city_name,deep:0,isLeaf:!1}})),"undefined"===typeof t.user_id){e.next=35;break}return e.next=23,Object(k["c"])(k["k"].getSubUserByUserId,{userId:t.user_id,parentUserId:this.uid});case 23:if(n=e.sent,!1!==n.valid){e.next=26;break}return e.abrupt("return",this.$message.error(n.msg));case 26:return e.next=28,Object(k["c"])(k["k"].getLingXePermissionByUserId,{userId:t.user_id});case 28:if(i=e.sent,!1!==i.valid){e.next=31;break}return e.abrupt("return",this.$message.error(i.msg));case 31:this.$refs.aum.initForm(n.data,i.data),this.$refs.aum.visible=!0,e.next=36;break;case 35:this.$refs.aum.visible=!0;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e["catch"](1),window.console.log(e.t0);case 41:this.table.loading=!1;case 42:case"end":return e.stop()}}),e,this,[[1,38]])})));function t(t){return e.apply(this,arguments)}return t}(),apiUpdateSubUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.table.loading=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].updateSubUser,t);case 4:a=e.sent,this.updateUserList(),this.$message.success(a.msg),this.$refs.aum.visible=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),window.console.log(e.t0);case 13:this.table.loading=!1;case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}(),apiAddSubUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.table.loading=!0,e.prev=1,e.next=4,Object(k["c"])(k["k"].addSubUser,t);case 4:a=e.sent,this.updateUserList(),this.$message.success(a.msg),this.$refs.aum.visible=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),window.console.log(e.t0);case 13:this.table.loading=!1;case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}()}},E=N,P=(a("d970"),Object(A["a"])(E,r,s,!1,null,"4f1f5444",null));t["default"]=P.exports},5669:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={placeholder:"请选择时间"};t["default"]=r},6604:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"}},"677e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("c4b2"),s=d(r),n=a("882a"),i=d(n),o=a("5669"),l=d(o),c=a("9a94"),u=d(c);function d(e){return e&&e.__esModule?e:{default:e}}t["default"]={locale:"zh-cn",Pagination:s["default"],DatePicker:i["default"],TimePicker:l["default"],Calendar:u["default"],global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",emptyText:"暂无数据",selectAll:"全选当页",selectInvert:"反选当页",sortTitle:"排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{notFoundContent:"无匹配结果",searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项"},Select:{notFoundContent:"无匹配结果"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件"}}},"6ab5":function(e,t,a){},"774e":function(e,t,a){e.exports=a("d2d5")},"882a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("41b2"),s=c(r),n=a("6604"),i=c(n),o=a("5669"),l=c(o);function c(e){return e&&e.__esModule?e:{default:e}}var u={lang:(0,s["default"])({placeholder:"请选择日期",rangePlaceholder:["开始日期","结束日期"]},i["default"]),timePickerLocale:(0,s["default"])({},l["default"])};u.lang.ok="确 定",t["default"]=u},8946:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header-user"}},[a("div",{staticClass:"user"},[e._m(0),a("p",{staticClass:"username"},[e._v("管理员")]),e._m(1),a("div",{staticClass:"menu"},["s"!==e.roler?[a("a",{attrs:{href:"#"},on:{click:e.goHome}},[e._v("管理员控制台")]),a("router-link",{class:{active:"/backend"===e.$route.path},attrs:{to:"/backend"}},[e._v("后台管理")]),a("a",{attrs:{href:"#"},on:{click:e.exit}},[e._v("退出系统")])]:e._e(),"s"===e.roler?[a("a",{attrs:{href:"#"},on:{click:e.goHome}},[e._v("控制台")]),a("router-link",{class:{active:"/bigScreen"===e.$route.path},attrs:{to:"/bigScreen"}},[e._v("大屏数据")]),a("a",{attrs:{href:"#"},on:{click:e.exit}},[e._v("退出系统")])]:e._e()],2)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"avater"},[r("img",{attrs:{src:a("4d41"),alt:"头像"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"icon"},[a("i",{staticClass:"el-icon-arrow-down"})])}],n=(a("96cf"),a("3b8d")),i=(a("a481"),a("4ec3")),o={data:function(){return{roler:localStorage.getItem("roler")}},methods:{goHome:function(){localStorage.clear(),window.location.replace(window.MYHOST)},exit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i["c"])("/api/v1/logout.php",{jsessionId:localStorage.getItem("cookie")||void 0});case 3:t=e.sent,localStorage.clear(),window.location.replace(window.MYHOST),window.console.log(t),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),window.console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},l=o,c=(a("0226"),a("2877")),u=Object(c["a"])(l,r,s,!1,null,"a1dc2c5a",null);t["a"]=u.exports},"9a94":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("882a"),s=n(r);function n(e){return e&&e.__esModule?e:{default:e}}t["default"]=s["default"]},a745:function(e,t,a){e.exports=a("f410")},c4b2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页"}},c8bb:function(e,t,a){e.exports=a("54a1")},d970:function(e,t,a){"use strict";var r=a("feae"),s=a.n(r);s.a},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray},feae:function(e,t,a){}}]);
//# sourceMappingURL=chunk-4206988e.f3d47a25.js.map