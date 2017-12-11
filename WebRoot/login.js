Ext.onReady(function(){
	var Store = Ext.create("Ext.data.Store", {
	    fields: ["Name", "Value"],
	    data: [
	    	{ Name: "Limit the audience", Value: 0 },
	        { Name: "domestic consumer", Value: 1 },
	        { Name: "admin", Value: 2 }
	    ]
	});
	var winLogin = Ext.create("Ext.window.Window", {
        width: 400,
        height: 330,
        modal: true, // 窗口弹出，其他地方不可操作  
        title: 'Login ',
        collapsible: false,  // 收缩按钮  
        closable: false, // 是否显示关闭窗口按钮  
        resizable: false, // 窗体是否可以拉伸  
        constrain: true,
        draggable: false,
        items: [{
            xtype: 'panel',
            width: '100%',
            height: 100,
            padding: '1px',
            html: "<img src='images/logo.png' alt='SoftWare LOGO' height='100' width='400'/>"
        }, {
            xtype: 'form',
            width: '100%',
            id: 'myform',
            height: 200,
            //frame: true,  
            padding: '1px',
            buttonAlign: 'center',
            items: [
            	{
            		xtype: "combobox",
            		id:'role',
                    name: "role",
                    fieldLabel: "role",
                    labelAlign:'right',
                    margin: '10,10,10,10',
                    store: Store,
                    editable: false,
                    displayField: "Name",
                    valueField: "Value",
                    emptyText: "--please select--",
                    queryMode: "local"
            	},
            	{
                xtype: 'textfield',
                id: 'username',
                name: 'username',
                cls: 'login_account',
                iconCls:'images/login_account',
                fieldLabel: 'username',
                width: 300,
                margin: '10,10,10,10',
                labelAlign: 'right',
                allowBlank:false
            }, {
                xtype: "textfield",
                id: 'password',
                name: 'password',
                //iconCls : 'User',
                icon:'images/login_password',
                cls: 'login_password',
                width: 300,
                fieldLabel: 'password',
                margin: '10,10,10,10',
                labelAlign: 'right',
                inputType: 'password',
                allowBlank: false
            },{
            	xtype: "panel",
                width: 300,
                layout:'column',
                baseCls: 'my-panel-no-border',//去除边框线
                margin: '10,10,10,10',
                items:[
                	{
                		xtype: "textfield",
                        id: 'randCode',
                        name: 'randCode',
                        fieldCls: 'login_password',
                        width: 240,
                        fieldLabel: 'randcord',
                        margin: '0,10,0,20',
                        labelAlign: 'right',
                        allowBlank: false,
                        //afterLabelTextTpl: "<span><img src='image.jsp'></img></span>"
                	}
                ]
                
            }, {
                xtype: 'panel',
                width: '100%',
                bodyStyle: 'border:0',
                margin: '0,0,0,10',
                html: "<p align='right'; style='color:#548C00;font-size:10px; '><a href=\"http://localhost:8080/H524/register.html\">Sign up now</a></p>"
            }],
            buttons: [{
                text: 'login',
                layout: 'fit',
                type: 'submit',
                handler: function () {
                    var _username = Ext.getCmp('username').getValue();
                    var _password = Ext.getCmp('password').getValue();
                    var login_role = Ext.getCmp('role').getValue();
                    
                    if (_username == "") {
                        Ext.Msg.alert("prompt", "username is not null,please enter the username");
                    } else if (_password == "") {
                        Ext.Msg.alert("prompt", "password is not null,please enter the password");
                    } else {
                        // 掩饰层 (遮罩效果)  
                        var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "log in, please wait ..." });
                        myMask.show();//显示
                        //myMask.hide();  //隐藏 

                        Ext.getCmp('myform').getForm().submit({
        					url:"login.action?login_role"+login_role,
        					//waitMsg:"正在登录...",
        					success:function(form, action){
        						myMask.hide();  //隐藏 
        						Ext.MessageBox.alert("login success",action.result.msg);
        						if(login_role=="2"){
        							window.location.href = "index.html" ;
        						}else {
        							window.location.href = "index2.html" ;
        						}
        						//window.location.href = "index.html?login_role="+encodeURI(encodeURI(login_role)+"" ;
        					},
        					failure:function(form, action){
        						myMask.hide();  //隐藏 
        						Ext.MessageBox.alert("login failed",action.result.msg);
        					}
        				});
                    }
                }
            }, {
                text: 'reset',
                handler: function () {
                    Ext.getCmp('myform').form.reset();
                }
            }]
        }],
        renderTo: Ext.getBody()
    });
	
	var rc = Ext.getDom("randCode");
	var rcp = Ext.get(rc.parentNode);
	rcp.createChild({tag: 'img', src: 'image.jsp',align:'absbottom'});
	//rcp.createChild([{tag:'span',html:'     '},{tag: 'img', src: 'image.jsp',align:'absbottom'}]);                                
    winLogin.show();
});  