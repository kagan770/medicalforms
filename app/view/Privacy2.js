Ext.define('medicalForms.view.Privacy', {
	extend: 'Ext.Panel',
	xtype: 'privacyCard',
	config: {
		iconCls: 'bookmarks',
		title: 'Privacy',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Privacy (3/5)',
			items: [{
				xtype: 'button',
				id: 'privacyBack',
				name: 'privacyBack',
				text: 'Previous',
				ui: 'back',
				align: 'left'
			}, {
				xtype: 'button',
				id: 'privacyFoward',
				name: 'privacyBack',
				text: 'Next',
				ui: 'forward',
				align: 'right'
			}]
		}, {
			html: '<h3>Acknowledgement of notice of privacy practices for</h3>',
			style: 'text-align:center; text-transform:uppercase;'
		}, {
			html:'<h4><i>Michigan Cosmetic Surgery Center</i></h4></br>',
			style:'text-decoration:underline;text-align:center;'
		},
		{
			html: 'The undersigned patient or legally authorized representative (“Agent”) of the patient acknowledges that he or she has the right to receive a copy of the Notice of Privacy Policies post in the office if requested.</br></br>',
			style:'text-align:justify;'
		}, {
			xtype: 'fieldset',
			// title: 'PATIENT INFORMATION',
			items: [{
					xtype: 'checkboxfield',
					name: 'acceptPrivacy',
					id: 'acceptPrivacy',
					label: 'ACCEPTED AND AGREED',
					value: 'true'
				}
				// {
				// 	html:'ACCEPTED AND AGREED:</br></p>',
				// 	style: 'text-transform:uppercase;font-weight:bold'
				// }
				, {
					xtype: 'signaturefield',
					id: 'signatureField-privacy',
					// sigWidth: 350,
					// sigHeight: 150,
					//docked: 'bottom',
					label: 'Enter Signature'
					// labelWidth: '20%'
				}
			]
		}, 
		{
			xtype: 'fieldset',
			title: 'If patient is under the age of 18',
			items: [{
			xtype: 'textfield',
			name: 'agent',
			id: 'agent',
			label: 'Agent',
			placeHolder: 'Agent'
		}, {
			xtype: 'textfield',
			name: 'title',
			id: 'title',
			label: 'Title',
			placeHolder: 'Title'
		}
			]
		}]
	}
});