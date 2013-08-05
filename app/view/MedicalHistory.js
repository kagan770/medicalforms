Ext.define('medicalForms.view.MedicalHistory', {
	extend: 'Ext.form.Panel',
	alias: "widget.medicalhistory",
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
			title: 'MedicalHistory (2/5)',
			items: [backButton, forwardButton]
		};
		var formItems =
			[{
			name: 'medicalCondition',
			label: 'Asthma',
			value: 'Asthma'
		}, {
			name: 'medicalCondition',
			label: 'Bleeding Disorders',
			value: 'Bleeding Disorders'
		}, {
			name: 'medicalCondition',
			label: 'Bruise Easily',
			value: 'Bruise Easily'
		}, {
			name: 'medicalCondition',
			label: 'Cancer',
			value: 'Cancer'
		}, {
			name: 'medicalCondition',
			label: 'Convulsions/Seizures',
			value: 'Convulsions/Seizures'
		}, {
			name: 'medicalCondition',
			label: 'Diabetes/ Insolin',
			value: 'Diabetes/ Insolin'
		}, {
			name: 'medicalCondition',
			label: 'Dry Eyes',
			value: 'Dry Eyes'
		}, {
			name: 'medicalCondition',
			label: 'Fainting',
			value: 'Fainting'
		}, {
			name: 'medicalCondition',
			label: 'Glaucoma',
			value: 'Glaucoma'
		}, {
			name: 'medicalCondition',
			label: 'Heart Disease',
			value: 'Heart Disease'
		}, {
			name: 'medicalCondition',
			label: 'Hepatitis',
			value: 'Hepatitis'
		}, {
			name: 'medicalCondition',
			label: 'Herpes/Cold Sore/Fever Blister',
			value: 'Herpes/Cold Sore/Fever Blister'
		}, {
			name: 'medicalCondition',
			label: 'High Blood Pressure',
			value: 'High Blood Pressure'
		}, {
			name: 'medicalCondition',
			label: 'HIV/AIDS',
			value: 'HIV/AIDS'
		}, {
			name: 'medicalCondition',
			label: 'Kidney Disease',
			value: 'Kidney Disease'
		}, {
			name: 'medicalCondition',
			label: 'Lung Disease',
			value: 'Lung Disease'
		}, {
			name: 'medicalCondition',
			label: 'Lupus',
			value: 'Lupus'
		}, {
			name: 'medicalCondition',
			label: 'Smoker',
			value: 'Smoker'
		}, {
			name: 'medicalCondition',
			label: 'Steroid Use',
			value: 'Steroid Use'
		}, {
			name: 'medicalCondition',
			label: 'Thyroid Problems',
			value: 'Thyroid Problems'
		}, {
			name: 'medicalCondition',
			label: 'Latex Allergy',
			value: 'Latex Allergy'
		}, {
			xtype: 'textareafield',
			name: 'otherMedicalCondition',
			id: 'otherMedicalCondition',
			label: 'Other',
			placeHolder: 'Please enter all other medical conditions',
			maxRows: 5
		}, {
			xtype: 'textareafield',
			name: 'priorSurgeries',
			id: 'priorSurgeries',
			label: 'List All Prior Surgeries',
			maxRows: 10
		}, {
			xtype: 'textareafield',
			name: 'drugAllergies',
			id: 'drugAllergies',
			label: 'List All Drug Allergies',
			maxRows: 10
		}, {
			xtype: 'textareafield',
			name: 'medications',
			id: 'medications',
			label: 'List All Medications',
			maxRows: 10
		}];
		this.add([
			titleBar, {
				xtype: 'fieldset',
				title: 'MEDICAL HISTORY',
				defaults: {
					xtype: 'checkboxfield'
				},
				items: formItems
			}
		]);
	},
	onForwardButtonTap: function () {
        console.log("next");
        this.fireEvent("forwardCommand", this);
    },
    onBackButtonTap: function () {
        console.log("back");
        this.fireEvent("backCommand", this);
    }
});