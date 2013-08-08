Ext.define('medicalForms.view.Confirm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.confirm',
	config: {
		scrollable: 'vertical',
		layout: 'fit'
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
			title: 'Confirm and Save',
			items: [backButton, confirmButton]
		};
		
		var list = Ext.create('Ext.DataView', {
			//fullscreen: true,
			id:'ConfirmReport',
			itemTpl: ['<div><table>',
			'<tr><td><strong>FirstName</strong></td><td> {FirstName}</td></tr>',
			'<tr><td><strong>LastName</strong></td><td> {LastName}</td></tr>',
			'<tr><td><strong>Address</strong></td><td> {Address}</td></tr>',
			'<tr><td><strong>City</strong></td><td> {City}</td></tr>',
			'<tr><td><strong>State</strong></td><td> {State}</td></tr>',
			'<tr><td><strong>ZipCode</strong></td><td> {ZipCode}</td></tr>',
			'<tr><td><strong>PhoneNumber</strong></td><td> {PhoneNumber}</td></tr>',
			'<tr><td><strong>Email</strong></td><td> {Email}</td></tr>',
			'<tr><td><strong>Other</strong></td><td> {Other}</td></tr>',
			'<tr><td><strong>Medications</strong></td><td> {Medications}</td></tr>',
			'<tr><td><strong>PriorSurgeries</strong></td><td> {PriorSurgeries}</td></tr>',
			'<tr><td><strong>DrugAllergies</strong></td><td> {DrugAllergies}</td></tr>',
			'<tr><td><strong>BirthDate</strong></td><td> {DisplayBirthDate}</td></tr>',
			'<tr><td><strong>Height</strong></td><td> {Height}</td></tr>',
			'<tr><td><strong>Weight</strong></td><td> {Weight}</td></tr>',
			'<tr><td><strong>ReferralSource</strong></td><td> {ReferralSource}</td></tr>',
			'<tr><td><strong>MedicalCondition</strong></td><td> {MedicalCondition}</td></tr>',
			'<tr><td><strong>Gender</strong></td><td> {Gender}</td></tr>',
			'<tr><td><strong>Procedure</strong></td><td> {Procedure}</td></tr>',
			'<tr><td><strong>Agreed to Privacy Statement</strong></td><td> <img src="{Privacy}"/></td></tr>',
			'<tr><td><strong>Agent</strong></td><td> {Agent}</td></tr>',
			'<tr><td><strong>Title</strong></td><td> {Title}</td></tr>',
			'<tr><td><strong>Agreed To Terms</strong></td><td> <img src="{Terms}"/></td></tr>',
			'</table></div>'].join(""),
			store: Ext.getStore("Users")

		});
this.add([titleBar, list]);
},
onConfirmButtonTap: function() {
	this.fireEvent("confirmCommand", this);
},
onBackButtonTap: function() {
	this.fireEvent("backCommand", this);
}
});