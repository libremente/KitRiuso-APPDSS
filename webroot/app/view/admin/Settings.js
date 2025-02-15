Ext.define('APPDSS.view.admin.Settings', {
    extend: 'Ext.form.Panel',
    xtype: 'admin-settings',
    requires:[
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer'
    ],
    title: '<b>Impostazioni APPDSS</b>',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    controller: 'settings',
    autoScroll: true,
    config: {
        defaultValues: null
    },
    height: 'auto',
    items: [
        {
            xtype: 'fieldset',
            style: {
                marginTop: '5px'
            },
            title: 'Mapfile - Generale',
            collapsed: false,
            collapsible: true,
           // allowBlank: false,
            listeners: {
                //add a * when allowBlank false
                beforeadd: function(fs, field) {
                    if (field.allowBlank === false)
                        field.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
                }
            },
            defaults: {
                labelWidth: 220,
                labelAlign: 'right'
            },
            defaultType: 'textfield',
            items: [
                { fieldLabel: 'Proiezione',  name: 'displayProj', allowBlank: false, anchor: '70%', value: 32632, readOnly: true,
				autoEl: {
				  tag: 'div',
				  'data-qtip': 'La proiezione deve essere coerente con la proiezione degli shape file caricati durante la creazione dei progetti.'
				}},
                { fieldLabel: 'Directory funzioni postgis', name: 'sql_shp_path', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'x min', name: 'x_min', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'y min', name: 'y_min', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'x max', name: 'x_max', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'y max', name: 'y_max', allowBlank: false, anchor: '70%'},
				{ xtype:'hiddenfield', name: 'privateIp'							  }
            ]
        },{
            xtype: 'fieldset',
            style: {
                marginTop: '5px'
            },
            title: 'Leaflet',
            collapsed: false,
            collapsible: true,
           // allowBlank: false,
            listeners: {
                //add a * when allowBlank false
                beforeadd: function(fs, field) {
                    if (field.allowBlank === false)
                        field.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
                }
            },
            defaults: {
                labelWidth: 220,
                labelAlign: 'right'
            },
            defaultType: 'textfield',
            items: [
				//{ fieldLabel: 'Proiezione',  name: 'll_displayProj', allowBlank: false, anchor: '70%',readOnly: true},
				{
					xtype: 'combobox',
					fieldLabel: 'Proiezione dati',
					typeAhead: true,
					triggerAction: 'all',
					forceSelection: true,
					msgTarget: 'under',
					queryMode: 'local',
					displayField: 'proj',
					valueField: 'proj',
					value: 3857,
					readOnly: true,
					name: 'll_displayProj',			
					allowBlank: false,					
					anchor: '70%',
					store : Ext.create('Ext.data.Store', {
							fields: ['proj'],
							data : [
								{"proj":"3395"},
								{"proj":"3857"},
								{"proj":"4326"},
								{"proj":"900913"},						
							]
						})
				},
				{ fieldLabel: 'x min', name: 'll_x_min', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'y min', name: 'll_y_min', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'x max', name: 'll_x_max', allowBlank: false, anchor: '70%'},
				{ fieldLabel: 'y max', name: 'll_y_max', allowBlank: false, anchor: '70%'},
                {   
                    xtype: 'button',
                    text: 'Salva',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: 'submitForm',
                    align: 'center'
                }
            ]
        },     
    ],
    //buttons: [],
    listeners: {
        render: 'loadData'
    }   
})
