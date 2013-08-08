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
			name: 'MedicalCondition',
			label: 'Asthma',
			value: 'Asthma'
		}, {
			name: 'MedicalCondition',
			label: 'Bleeding Disorders',
			value: 'Bleeding Disorders'
		}, {
			name: 'MedicalCondition',
			label: 'Bruise Easily',
			value: 'Bruise Easily'
		}, {
			name: 'MedicalCondition',
			label: 'Cancer',
			value: 'Cancer'
		}, {
			name: 'MedicalCondition',
			label: 'Convulsions/Seizures',
			value: 'Convulsions/Seizures'
		}, {
			name: 'MedicalCondition',
			label: 'Diabetes/ Insolin',
			value: 'Diabetes/ Insolin'
		}, {
			name: 'MedicalCondition',
			label: 'Dry Eyes',
			value: 'Dry Eyes'
		}, {
			name: 'MedicalCondition',
			label: 'Fainting',
			value: 'Fainting'
		}, {
			name: 'MedicalCondition',
			label: 'Glaucoma',
			value: 'Glaucoma'
		}, {
			name: 'MedicalCondition',
			label: 'Heart Disease',
			value: 'Heart Disease'
		}, {
			name: 'MedicalCondition',
			label: 'Hepatitis',
			value: 'Hepatitis'
		}, {
			name: 'MedicalCondition',
			label: 'Herpes/Cold Sore/Fever Blister',
			value: 'Herpes/Cold Sore/Fever Blister'
		}, {
			name: 'MedicalCondition',
			label: 'High Blood Pressure',
			value: 'High Blood Pressure'
		}, {
			name: 'MedicalCondition',
			label: 'HIV/AIDS',
			value: 'HIV/AIDS'
		}, {
			name: 'MedicalCondition',
			label: 'Kidney Disease',
			value: 'Kidney Disease'
		}, {
			name: 'MedicalCondition',
			label: 'Lung Disease',
			value: 'Lung Disease'
		}, {
			name: 'MedicalCondition',
			label: 'Lupus',
			value: 'Lupus'
		}, {
			name: 'MedicalCondition',
			label: 'Smoker',
			value: 'Smoker'
		}, {
			name: 'MedicalCondition',
			label: 'Steroid Use',
			value: 'Steroid Use'
		}, {
			name: 'MedicalCondition',
			label: 'Thyroid Problems',
			value: 'Thyroid Problems'
		}, {
			name: 'MedicalCondition',
			label: 'Latex Allergy',
			value: 'Latex Allergy'
		}, {
			xtype: 'textareafield',
			name: 'Other',
			id: 'other',
			label: 'Other',
			placeHolder: 'Please enter all other medical conditions',
			maxRows: 5
		}, {
			xtype: 'textareafield',
			name: 'PriorSurgeries',
			id: 'priorSurgeries',
			label: 'List All Prior Surgeries',
			maxRows: 10
		}, {
			xtype: 'textareafield',
			name: 'DrugAllergies',
			id: 'drugAllergies',
			label: 'List All Drug Allergies',
			maxRows: 10
		}, {
			xtype: 'textareafield',
			name: 'Medications',
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