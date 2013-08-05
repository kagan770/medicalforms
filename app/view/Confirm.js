Ext.define('medicalForms.view.Confirm', {
	extend: 'Ext.Panel',
	xtype: 'confirmCard',
	config: {
		title: 'Confirm',
		id:'confirmCard',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Confirm (5/5)',
			items: [{
				xtype: 'button',
				id: 'confirmBack',
				name: 'confirmBack',
				text: 'Previous',
				ui:'back',
				align: 'left'
			},
			{
				xtype: 'button',
				id: 'confirmAndSave',
				name: 'confirmAndSave',
				text: 'Confirm and Save',
				ui:'confirm',
				align: 'right'
			}]
		}
		// ,
		// {
		// 	html:'Confirm the following information is correct',
		// 	styleHtmlContent: true
		// }
		]
	}
});