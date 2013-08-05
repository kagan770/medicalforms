Ext.define('medicalForms.view.PatientInfo', {
	extend: 'Ext.form.Panel',
	alias: "widget.patientinfo",
	config: {
		scrollable: 'vertical'
	},
	initialize: function() {

		this.callParent(arguments);
		var nextButton = {
			xtype: "button",
			ui: "forward",
			text: "Next",
			align: 'right',
			handler: this.onForwardButtonTap,
			scope: this
		};
		var titleBar = {
			xtype: 'titlebar',
			docked: 'top',
			title: 'Patient Info (1/5)',
			items: [nextButton]
		};
		var formItems = [{
			name: 'firstName',
			id: 'firstName',
			label: 'First Name',
			placeHolder: 'First Name'
		}, {
			name: 'lastName',
			id: 'lastName',
			label: 'Last Name',
			placeHolder: 'Last Name'
		}, {
			name: 'address',
			id: 'address',
			label: 'Address',
			placeHolder: 'Address'
		}, {
			name: 'city',
			id: 'city',
			label: 'City',
			placeHolder: 'City'
		}, {
			name: 'state',
			id: 'state',
			label: 'State',
			placeHolder: 'State'
		}, {
			name: 'zipCode',
			id: 'zipCode',
			label: 'Zip Code',
			placeHolder: 'Zip Code'
		}, {
			name: 'phoneNumber',
			id: 'phoneNumber',
			label: 'Phone Number',
			placeHolder: 'Please enter the best phone number for us to contact you'
		}, {
			xtype: 'emailfield',
			name: 'email',
			id: 'email',
			label: 'Email',
			placeHolder: 'Email Address'
		}, {
			xtype: 'datepickerfield',
			name: 'birthDate',
			id: 'birthDate',
			label: 'Date Of Birth',
			placeHolder: 'Date of Birth',
			value: new Date(1980, 0, 1, 0, 0, 0, 0),
			picker: {
				yearFrom: 1900
			},
			listeners: {
				change: function() {
					if (medicalForms.app.isValidated) {
						$('form').parsley('validate');
					}
				}
			}
		}, {
			name: 'height',
			xtype:'selectfield',
			id: 'height',
			label: 'Height',
			required: false,
			placeHolder: 'Height',
			usePicker:true,
			valueField: 'value',
			//autoSelect: false,
			value: "5' 4\"",
			options: (function(){var feet = ["1", "2", "3", "4", "5", "6", "7", "8"];
					var inches = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
					var array = [];
					$.each(feet, function(i, numFeet){
						$.each(inches, function(j, numInches){
							var heightStr = numFeet + "' " + numInches + "\"";
							array.push({text: heightStr, value:heightStr});
						});
					});
					console.log(JSON.stringify(array));
					return array;
				})()
				
            
		}, {
			xtype: 'numberfield',
			name: 'weight',
			id: 'weight',
			label: 'Weight (lbs)',
			minValue: 1,
			maxValue: 500,
			required: false,
			placeHolder: 'Weight'
		}, {
			xtype: 'selectfield',
			name: 'gender',
			id: 'gender',
			label: 'Gender',
			autoSelect: false,
			placeHolder: 'Select Gender',
			valueField: 'value',
			displayField: 'display',
			store: {
				data: [{

					value: 'option 0',
					display: 'Select Gender'
				}, {
					value: 'male',
					display: 'Male'
				}, {
					value: 'female',
					display: 'Female'
				}]
			},
			listeners: {
				change: function() {
					if (medicalForms.app.isValidated) {
						$('form').parsley('validate');
					}
				}
			}
		}, {
			name: 'procedure',
			id: 'procedure',
			label: 'Consulting for what procedure',
			placeHolder: 'What procedure are you here for?'
		}, {
			xtype: 'multiselectfield',
			name: 'referralSource',
			id: 'referralSource',
			label: 'How did you hear about us?',
			delimiter: ',',
			mode: 'MULTI', // default is MULTI,
			// value: ['first','second'] , init value with an array
			//value: '', //init value with a string
			listeners: {
				change: function() {
					if (medicalForms.app.isValidated) {
						$('form').parsley('validate');
					}
				}
			},
			options: [{
				text: 'TV',
				value: 'TV'
			}, {
				text: 'Radio',
				value: 'Radio'
			}, {
				text: 'Newspaper',
				value: 'Newspaper'
			}, {
				text: 'Magazine',
				value: 'Magazine'
			}, {
				text: 'Internet',
				value: 'Internet'
			}, {
				text: 'Friend',
				value: 'Friend'
			}, {
				text: 'Other',
				value: 'Other'
			}]
		}, {
			xtype: 'checkboxfield',
			name: 'revieveSpecials',
			id: 'revieveSpecials',
			label: 'I Would Like to Reviece Specials',
			value: 'true',
			required: false
		}];

		this.add([
			titleBar, {
				xtype: "fieldset",
				title: 'PATIENT INFORMATION',
				defaults: {
					required: true,
					xtype: 'textfield'
				},
				items: formItems
			}
		]);
	},
	onForwardButtonTap: function () {
        console.log("next");
        this.fireEvent("forwardCommand", this);
    }
});