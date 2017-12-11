Ext.onReady(function(){
	
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
		    					xtype:'panel',
		    					baseCls: 'my-panel-no-border',//去除边框线
		    					layout:'column',
		    					columnWidth:1,
		    					height:1200,
		    					bodyStyle :'overflow-x:hidden;overflow-y:scroll', //隐藏水平滚动条,显示用overflow-x:visible
		    					items:[
		    						{
				    					xtype:'form',
				    					id:'main_form2',
				    					//title:'面板一',
				    					columnWidth:1,
				    					height:1500,
				    					layout:'column',
				    					tbar: [
				    					    {
				    							xtype:'label',
				    							margin:'10 0 0 10',
				    							text:'update punlish:'
				    						},{
				    							xtype:'textfield',
				    							id:'grade',
				    							name:'grade'
				    						},{
				    							text:'enter',
				    							handler:function(){
				    								Ext.getCmp('main_form2').getForm().submit({
				    									url:'updateMovie.action?moviename='+decodeURI(decodeURI(GetQueryString("moviename"))),
				    									msg:'entering',
				    									success:function(form,action){
				    										Ext.MessageBox.alert("Score successful",action.result.msg);
				    									},
				    									failure(form,action){
				    										Ext.MessageBox.alert("Prompt", "score is successful, please return to the main interface to view");
				    									}
				    								});
				    							}
				    						}/*,{
				    							text:'delete',
				    							margin:'10 0 0 30',
				    							handler:function(){
				    								Ext.MessageBox.confirm("Prompt", "Are you sure you want to delete?",function( button,text ){  
										                if( button == 'yes'){  
										                	//window.location.href = "login.html" ;  
										                	//删除影片
										                	Ext.getCmp('main_form2').getForm().submit({
						    									url:'deleteMovie.action?moviename='+decodeURI(decodeURI(GetQueryString("moviename"))),
										                		//url:'deleteMovie.action',
										                		msg:'deleting...',
						    									success:function(form,action){
						    										Ext.MessageBox.alert("successfully deleted",action.result.msg);
						    										window.location.href = "index.html" ;
						    									},
						    									failure(form,action){
						    										window.location.href = "index.html" ;
						    										Ext.MessageBox.alert("Prompt", "delete successfully");
						    									}
						    								});
										                }  
										            }); 
				    							}*/
				    						//}
				    					],
				    					items:[
				    						{
				    							xtype: 'box', //或者xtype: 'component',
					    					    columnWidth: .5, //图片宽度  
					    					    height: 300, //图片高度  
					    					    autoEl: {  
					    					        tag: 'img',    //指定为img标签  
					    					        src: GetQueryString("movieimageUrl")   //指定url路径
					    					    } ,
					    					    margin:'10 0 0 10',
					    					    listeners: {
					    					       click: {
					    					            element: 'el', 
					    					            fn: function(){ 
					    					            	window.location.href = "videoMessage.html?moviename="+encodeURI(encodeURI(allMov[k].moviename))+"&&movieimageUrl="+allMov[k].movieimageUrl+"" ;
					    					            }
					    					       }
					    					    }
				    						},{
				    							xtype:'panel',
				    							margin:'10 0 0 10',
				    							baseCls: 'my-panel-no-border',//去除边框线
				    							columnWidth: .5, //图片宽度  
					    					    height: 300, //图片高度  
					    					    items:[
					    					    	{
					    					    		xtype:'tbtext',
					    					    		margin:'10 0 0 20',
					    					    		text:"Book title："+decodeURI(decodeURI(GetQueryString("moviename"))),
					    					    	}
					    					    ]
				    						}
				    						
				    					]
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
	}
	/*alert(GetQueryString("Id")); */
	// alert(decodeURI(decodeURI(GetQueryString("moviename"))));
	// alert(GetQueryString("movieimageUrl"));
});