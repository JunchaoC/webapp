Ext.onReady(function(){
	
	//1.定义Model
	Ext.define("MyApp.model.User", {
	    extend: "Ext.data.Model",
	    fields: [
	        { name: 'id', type: 'int' },
	        { name: 'username', type: 'string' },
	        { name: 'password', type: 'string' }
	    ]
	});
	
	//2.创建store
	var store = Ext.create("Ext.data.Store", {
	    model: "MyApp.model.User",
	    autoLoad: true,
	    pageSize: 5,
	    proxy: new Ext.data.HttpProxy({
	        url:"getUsers.action",
			reader:new Ext.data.JsonReader({
				root:"allUser",
				id:"id",
				totalProperty:"recordSize"
			})
	    })
	});
	//store.load();
	//alert("store:"+store.getTotalCount());
	//store.load({params:{start:0, limit:10}});
	//视图区域
	var viewPort = new Ext.Viewport({
		title:"Video details",
		layout:'border',
		items:[
		    {
		    	//title:"标题栏",
		    	xtype:'panel',
		    	region:"north",
		    	//html : '<br><center><font size = 6>我的系统</font></center>', //江湖告急
		    	height:80,
		    	collapsible:false, //伸缩属性
		    	layout:'border',
		    	items:[
		    		{
		    			//title:'面板一',
		    			//xtype:'panel',
		    			height:80,
		    			baseCls: 'my-panel-no-border',//去除边框线
		    			//columnWidth:.2,
		    			region:"west",
		    			width:'40%',
		    			bodyStyle: {
		    			    background: '#3B3B3B',
		    			},
		    			layout:'column',
		    			items:[
		    				{
		    					xtype:'panel',
		    					width:60,
		    					height:30,
		    					baseCls: 'my-panel-no-border',//去除边框线
		    					margin:'15 0 0 30',
		    					html: "<img src='images/logo3.png' alt='SoftWare LOGO' height='50' width='100'/>"
		    				},{
		    					xtype : 'tbtext',
		    				    text: 'Book Manager System',
		    				    margin:'20 0 0 60',
		    				    cls:'main_systemName'
		    				}
		    			]
		    		},{
		    			//title:'面板二',
		    			xtype:'panel',
		    			height:80,
		    			baseCls: 'my-panel-no-border',//去除边框线
		    			//columnWidth:.6,
		    			region:"center",
		    			width:'40%',
		    			bodyStyle: {
		    			    background: '#3B3B3B',
		    			}
		    		},{
		    			//title:'面板三',
		    			xtype:'panel',
		    			id:'main_login',
		    			height:80,
		    			baseCls: 'my-panel-no-border',//去除边框线
		    			//columnWidth:.2,
		    			region:"east",
		    			width:'20%',
		    			bodyStyle: {
		    			    background: '#3B3B3B',
		    			},
		    			layout:'column',
		    			items:[
		    			]
		    		}
		    	]
		    },{
		    	//title:"主面板",
		    	xtype:'panel',
		    	region:"center",
		    	//width:200,
		    	collapsible:false,
		    	//split:true, // 分割属性
		    	baseCls: 'my-panel-no-border',//去除边框线
		    	bodyStyle :'overflow-x:hidden;overflow-y:scroll', //隐藏水平滚动条,显示用overflow-x:visible
		    	layout:'border',
		    	items:[
		    		{
		    			//title:'左',
		    			xtype:'panel',
		    			baseCls: 'my-panel-no-border',//去除边框线
		    			width:'20%',
		    			region:"west"
		    		},{
		    			//title:'中',
		    			xtype:'panel',
		    			//baseCls: 'my-panel-no-border',//去除边框线
		    			width:'60%',
		    			region:"center",
		    			layout:'column',
		    			items:[
		    				{
		    					//gridPanel
		    					xtype:'panel',
		    					baseCls: 'my-panel-no-border',//去除边框线
		    					layout:'column',
		    					columnWidth:1,
		    					height:1200,
		    					bodyStyle :'overflow-x:hidden;overflow-y:scroll', //隐藏水平滚动条,显示用overflow-x:visible
		    					items:[
		    						{
				    					xtype:'grid',
				    					id:'main_grid',
				    					//title:'面板一',
				    					columnWidth:1,
				    					//width:300,
				    					height:300,
				    					frame:true,
				    					store:store,
				    					columns:[
				    						{header:"ID",dataIndex:"id",sortable:true},
				    						{header:"用户名",dataIndex:"username",sortable:true,
				    							editor:new Ext.form.TextField({
				    								minLength:3,
				    								minLengthText:"用户名长度不能小于3个字符",
				    								maxLength:12,
				    								maxLengthText:"用户名长度不能大于12个字符",
				    								allowBlank:false,
				    								blankText:"用户名不能为空"
				    							})
				    						},
				    						{header:"密码",dataIndex:"password",sortable:true,
				    							editor:new Ext.form.TextField({
				    								minLength:3,
				    								minLengthText:"密码长度不能小于3个字符",
				    								maxLength:12,
				    								maxLengthText:"密码长度不能大于12个字符",
				    								allowBlank:false,
				    								blankText:"密码不能为空"
				    							})
				    						}
				    					],
				    					autoExpandColumn:1,
				    					//分页控制条
				    					bbar:new Ext.PagingToolbar({
				    						pageSize:10,//每页显示多少条记录
				    						store:store,//数据源
				    						displayInfo:true,
				    						displayMsg:"当前显示第{0}条到{1}条记录，一共有{2}条记录",
				    						emptyMsg:"没有任何记录",
				    						firstText:"首页",
				    						prevText:"上一页",
				    						nextText:"下一页",
				    						lastText:"尾页",
				    						refreshText:"刷新"
				    					}),
				    					
				    					//selModel:new Ext.grid.RowSelectionModel({singleSelect:true}),
				    					tbar:[{
				    						text:"user table",
				    						//handler:function(){
				    								/*var row = Ext.getCmp('main_grid').getSelectionModel().getSelections();//.getSelected() ;
				    								if(row.length == 0){ //getSelections() 多行,getSelected() 单行
				    									Ext.MessageBox.alert("警告","请选择一行信息进行删除");
				    								}else {
				    									Ext.MessageBox.confirm("提示框","是否确定要进行删除",function(btn){
				    										if(btn == "yes"){
				    											Ext.Ajax.request({
				    												url:"deleteUser.action?id=" + row[0].id,//请求地址
				    												success:function(result){
				    													var jsonStr = Ext.util.JSON.decode(result.responseText);
				    													Ext.MessageBox.alert("成功",jsonStr.msg);
				    												},
				    												failure:function(result){
				    													var jsonStr = Ext.util.JSON.decode(result.responseText);
				    													Ext.MessageBox.alert("失败",jsonStr.msg);
				    												}
				    											})
				    											//进行删除操作
				    											for(var i = 0 ;i < row.length ; i++){
				    												store.remove(row[i]);
				    											}
				    										}
				    									});
				    								}*/
				    							//}
				    					}],
				    					autoExpandColumn:1,
		    						}],
		    						},{
				    					xtype:'panel',
				    					//title:'面板二',
				    					height:300,
				    					items:[
				    						{}
				    					]
				    				}
		    				   ]
		    				}
		    			]
		    			
		    		},{
		    			//title:'右',
		    			xtype:'panel',
		    			baseCls: 'my-panel-no-border',//去除边框线
		    			width:'20%',
		    			region:"east"
		    		}
		    	]
	});
	
	//解析传递来的参数
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)
	    	 return  unescape(r[2]); 
	     return null;
	};
	/*alert(GetQueryString("Id")); */
	// alert(decodeURI(decodeURI(GetQueryString("moviename"))));
	// alert(GetQueryString("movieimageUrl"));
	
	
});