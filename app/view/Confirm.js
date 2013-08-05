Ext.define('medicalForms.view.Confirm', {
	extend: 'Ext.Panel',
	alias: 'widget.confirm',
	config: {
		scrollable: 'vertical'
	},
	initialize: function() {

		this.callParent(arguments);
		var confirmButton = {
			xtype: "button",
			ui: "confirm",
			text: "Confirm and Save",
			align: 'right',
			handler: this.onConfirmButtonTap,
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
			title: 'Confirm and Save (5for (var i = Things.length - 1; i >= 0; i--) {
				Things[i]
			};/5)',
			items: [backButton, confirmButton]
		};

		this.add(titleBar);
	},
	onConfirmButtonTap: function() {
		this.fireEvent("confirmCommand", this);
	},
	onBackButtonTap: function() {
		this.fireEvent("backCommand", this);
	}
});