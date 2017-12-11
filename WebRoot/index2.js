Ext.onReady(function(){
	
	var login_role = decodeURI(decodeURI(GetQueryString("login_role"))) ;
	
	//视图区域
	var viewPort = new Ext.Viewport({
		title:"My System",
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
		    	xtype:'form',
		    	id:'main_big_form',
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
				    					//title:'面板一',
				    					id:'mian_center',
				    					columnWidth:1,
				    					height:4000,
				    					layout:'column',
				    					/*tbar:[{
				    						xtype : 'tbtext',
					    				    text: '版权所有：爱笑的凯伦',
					    				    padding:'25 0 10 10',
				    					}],	*/
				    					tbar: [
				    					    {
				    							xtype:'label',
				    							text:'please enter a keyword:',
				    							margin:'20 0 0 30'
				    						},{
				    							xtype:'textfield',
				    							id:'moviename',
				    							name:'moviename'
				    						},{
				    							text:'search for',
				    							handler:function(){
				    								//Ext.getCmp('mian_center').getForm() 针对 formPanel来说, xtype 一定为 form
				    								Ext.getCmp('mian_center').getForm().submit({
				    									url:'movie.action',
				    									msg:'querying',
				    									success:function(form,action){
				    										//Ext.MessageBox.alert("查询成功",action.result.msg);
				    										//Ext.MessageBox.alert("查询成功",action.result.movieimageUrl);
				    										//显示查询结果
				    										var main_p=Ext.getCmp('mian_center');
						    				            	var len=main_p.items.length;
						    				            	main_p.removeAll();
						    				            	//for(var i=0;i<len;i++){
						    				            		// 动态添加items  
							    		                        var items = {  
						    		                        		xtype: 'box', //或者xtype: 'component',  
								    							    columnWidth: .5, //图片宽度  
								    							    height: 300, //图片高度  
								    							    autoEl: {  
								    							        tag: 'img',    //指定为img标签  
								    							        src: action.result.movieimageUrl   //指定url路径  
								    							    } ,
								    							    margin:'10 0 0 10'
							    		                        }  
							    		                        main_p.add(items);//把获取的items添加到panel中，注意和----1中的顺序，先移除再添加，才不会导致累加  
							    				            	main_p.doLayout();
						    				            	//}
				    									},
				    									failure(form,action){
				    										Ext.MessageBox.alert("Search failed",action.result.msg);
				    									}
				    								})
				    							}
				    						}
				    					],
				    					items:[
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
	
	//初始化电影图片
	Ext.getCmp('mian_center').getForm().submit({
		url:'movie.action',
		msg:'querying',
		success:function(form,action){
			//显示查询结果
			var a=0;
			var allMov=[];
			//alert(action.result.allMovie);
			Ext.each(action.result.allMovie,function(i){
				allMov[a++] = i ; //allMov 保存Movie对象
			});
			
			var main_p=Ext.getCmp('mian_center');
        	var len=action.result.allMovie.length;
        	main_p.removeAll();
        	for(var i=0;i<len;i++){
        		// 动态添加items  
                var items = {  
            		xtype: 'box', //或者xtype: 'component',  
				    columnWidth: .5, //图片宽度  
				    height: 300, //图片高度  
				    autoEl: {  
				        tag: 'img',    //指定为img标签  
				        src: allMov[i].movieimageUrl    //指定url路径  
				    } ,
				    margin:'10 0 0 10',
				    listeners: {
				        click: {
				            element: 'el', 
				            fn: function(){ 
				            	//alert(allMov[this.i].moviename);
				            }
				        }
				    }
                }  
                main_p.add(items);//把获取的items添加到panel中，注意和----1中的顺序，先移除再添加，才不会导致累加  
            	main_p.doLayout();
        	}
		},
		failure(form,action){
			var a=0;
			var allMov=[];
			//alert(action.result.allMovie);
			Ext.each(action.result.allMovie,function(i){
				allMov[a++] = i ; //allMov 保存Movie对象
			});
			var main_p=Ext.getCmp('mian_center');
        	var len=action.result.allMovie.length;
        	main_p.removeAll();
        	for(var i=0;i<len;i++){
        	(function(k){
        		// 动态添加items  
                var items = {  
            		xtype: 'box', //或者xtype: 'component',
            		itemId:i,
				    columnWidth: .5, //图片宽度  
				    height: 300, //图片高度  
				    autoEl: {  
				        tag: 'img',    //指定为img标签  
				        src: allMov[i].movieimageUrl   //指定url路径
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
                }  
                main_p.add(items);//把获取的items添加到panel中，注意和----1中的顺序，先移除再添加，才不会导致累加  
            	main_p.doLayout();
        	})(i)
        	}
		}
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
	// alert(decodeURI(decodeURI(GetQueryString("login_role"))));
	// alert(GetQueryString("movieimageUrl"));

});