Ext.onReady(function(){
	var winLogin = Ext.create("Ext.window.Window", {
        width: 400,
        height: 300,
        modal: true, // 窗口弹出，其他地方不可操作  
        title: 'Register ',
        collapsible: false,  // 收缩按钮  
        closable: false, // 是否显示关闭窗口按钮  
        resizable: false, // 窗体是否可以拉伸  
        constrain: true,
        draggable: false,
        items: [{
            xtype: 'panel',
            width: '100%',
            height: 60,
            padding: '1px',
            html: "<img src='images/logo.png' alt='SoftWare LOGO' height='50' width='400'/>"
        }, {
            xtype: 'form',
            width: '100%',
            id: 'myform',
            height: 210,
            //frame: true,  
            padding: '1px',
            buttonAlign: 'center',
            items: [{
                xtype: 'textfield',
                id: 'username2',
                name: 'username',
                fieldLabel: 'username',
                width: 300,
                margin: '10,10,10,10',
                labelAlign: 'right',
                allowBlank:false
            }, {
                xtype: "textfield",
                id: 'password2',
                name: 'password',
                width: 300,
                fieldLabel: 'password',
                margin: '10,10,10,10',
                labelAlign: 'right',
                inputType: 'password',
                allowBlank: false
            },{
                xtype: "textfield",
                id: 'repassword2',
                name: 'repassword',
                width: 300,
                fieldLabel: 'repassword',
                margin: '10,10,10,10',
                labelAlign: 'right',
                inputType: 'password',
                allowBlank: false
            },{
                xtype: 'textfield',
                id: 'sex',
                name: 'sex',
                fieldLabel: 'sex',
                width: 300,
                margin: '10,10,10,10',
                labelAlign: 'right',
                allowBlank:false
            }, {
                xtype: "textfield",
                id: 'age',
                name: 'age',
                width: 300,
                fieldLabel: 'age',
                margin: '10,10,10,10',
                labelAlign: 'right',
                allowBlank: false
            }],
            buttons: [{
                text: 'register',
                layout: 'fit',
                type: 'submit',
                handler: function () {
                    var _username = Ext.getCmp('username2').getValue();
                    var _password = Ext.getCmp('password2').getValue();
                    var _repassword = Ext.getCmp('repassword2').getValue();
                    var _sex = Ext.getCmp('sex').getValue();
                    var _age = Ext.getCmp('age').getValue();
                    
                    if(_password != _repassword){
                    	Ext.Msg.alert("Prompt", "Password and Confirm password are different!");
                    }
                    if (_username == "") {
                        Ext.Msg.alert("Prompt", "user name can not be blank, please enter user name");
                    } else if (_password == "") {
                        Ext.Msg.alert("Prompt", "password can not be empty, please enter password");
                    } else if (_repassword == "") {
                    	Ext.Msg.alert("Prompt", "confirm the password can not be blank, please enter the confirmation password");
                    } else if (_sex == ""){
                    	Ext.Msg.alert("Prompt", "gender can not be empty, please enter gender");
                    } else if(_age == ""){
                    	Ext.Msg.alert("Prompt", "age can not be empty, please enter the age");
                    } else {
                        // 掩饰层 (遮罩效果)  
                        var myMask = new Ext.LoadMask(Ext.getBody(), { msg: "registering, please wait ..." });
                        myMask.show();//显示
                        //myMask.hide();  //隐藏 

                        Ext.getCmp('myform').getForm().submit({
        					url:"userAdd.action",
        					success:function(form, action){
        						myMask.hide();  //隐藏 
        						//Ext.MessageBox.alert("注册成功",action.result.msg);
        						Ext.MessageBox.confirm("Prompt", "successful registration",function( button,text ){  
					                if( button == 'yes'){  
					                	window.location.href = "login.html" ;  
					                }  
					            });  
        					},
        					failure:function(form, action){
        						myMask.hide();  //隐藏 
        						Ext.MessageBox.alert("registration failed",action.result.msg);
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
	
    winLogin.show();
});  
