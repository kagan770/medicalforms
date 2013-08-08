Ext.define('medicalForms.view.Privacy', {
	extend: 'Ext.form.Panel',
	alias: "widget.privacy",
	config: {
		scrollable: 'vertical'
	},
	initialize: function() {

		this.callParent(arguments);
		var forwardButton = {
			xtype: "button",
			ui: "forward",
			text: "Next",
			align: 'right',
			handler: this.onForwardButtonTap,
			scope: this
		};
		var backButton = {
			xtype: "button",
			ui: "back",
			text: "Previous",
			align: 'left',
			handler: this.onBackButtonTap,
			scope: this
		};
		var titleBar = {
			xtype: 'titlebar',
			docked: 'top',
			title: 'Privacy (3/5)',
			items: [backButton, forwardButton]
		};
		var html = [{
			html: '<h3>Acknowledgement of notice of privacy practices for</h3>',
			style: 'text-align:center; text-transform:uppercase;'
		}, {
			html: '<h4><i>Michigan Cosmetic Surgery Center</i></h4></br>',
			style: 'text-decoration:underline;text-align:center;'
		}, {
			html: 'The undersigned patient or legally authorized representative (“Agent”) of the patient acknowledges that he or she has the right to receive a copy of the Notice of Privacy Policies post in the office if requested.</br></br>',
			style: 'text-align:justify;'
		}];
		var signaturefield = [{
			xtype: 'checkboxfield',
			name: 'AcceptPrivacy',
			id: 'AcceptPrivacy',
			label: 'ACCEPTED AND AGREED',
			value: 'true'
		}, {
			xtype: 'signaturefield',
			id: 'signatureField-privacy',
			label: 'Enter Signature',
			sigWidth: 550,
			sigHeight: 200,
			labelWidth: '150px'
		}];
		var agentField = [{
			xtype: 'textfield',
			name: 'Agent',
			id: 'agent',
			label: 'Agent',
			placeHolder: 'Agent'
		}, {
			xtype: 'textfield',
			name: 'Title',
			id: 'title',
			label: 'Title',
			placeHolder: 'Title'
		}];
		this.add([].concat(
		         titleBar, html, {
		         	xtype: 'fieldset',
		         	defaults:{
		         		labelWidth: '150px'
		         	},
		         	items: signaturefield
		         }, {
		         	xtype: 'fieldset',
		         	defaults:{
		         		labelWidth: '150px'
		         	},
		         	title: 'If patient is under the age of 18',
		         	items: agentField
		         }
		         ));
	},
	onForwardButtonTap: function() {
		console.log("next");
		this.fireEvent("forwardCommand", this);
	},
	onBackButtonTap: function() {
		console.log("back");
		this.fireEvent("backCommand", this);
	}
});