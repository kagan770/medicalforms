Ext.define('medicalForms.view.Terms', {
	extend: 'Ext.form.Panel',
	xtype: 'termsCard',
	config: {
		iconCls: 'bookmarks',
		title: 'Terms',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Terms and Conditions (4/5)',
			items: [{
				xtype: 'button',
				id: 'termsBack',
				name: 'termsBack',
				text: 'Previous',
				ui: 'back',
				align: 'left'
			}, {
				xtype: 'button',
				id: 'termsFoward',
				name: 'termsBack',
				text: 'Next',
				ui: 'forward',
				align: 'right'
			}]
		}, {
			html: '<h3>PAYMENT/CANCELLATION/RESCHEDULING TERMS OF SUGERY</h3>',
			style: 'text-align:center; text-transform:uppercase;'
		}, {
			html: "<p></br>Here at Michigan Cosmetic Surgery Center, we value our patients.  In order to provide quality service, we require that you agree to the following terms regarding the payment and scheduling of your surgery.</br></br>Payment is due at the time of scheduling your procedure.</br>"
		}, {
			html: 'Cancellation Policy:',
			style: 'text-decoration:underline;'
		}, {
			html: '</br>A 25% cancellation fee (of your entire surgery cost) will result if surgery is cancelled prior to Three (3) weeks of your surgical date.</br></br>A 50% cancellation fee (of your entire surgery cost) will result if you cancel within Three (3) weeks of your surgical date.</br></br>A 100% cancellation fee will apply if surgery is cancelled less than 48 hours prior to your scheduled appointment time.</br></br>',
			style: 'margin-left:40px;'
		}, {
			html: 'Rescheduling Policy:',
			style: 'text-decoration:underline;'
		}, {
			html: '</br>We understand that emergencies arise, if such an emergency arises within 48 hours of your surgical date, $250.00 rescheduling fee will apply.</br></br>If you cancel, your surgery after you have rescheduled the date the cancellation fee will be based on your original surgical date.</br></br>We value our patients and will continue to provide them with our best professional care.</br></br>We would be happy to answer any questions you may have regarding these terms.</br></br>I have read, understand and agree to the terms regarding the payment for and timing of my surgery.</br></br>If you would like a copy of the policy, please ask the front desk.</br></br>'
		}, {
			xtype: 'fieldset',
			// title: 'PATIENT INFORMATION',
			items: [{
					xtype: 'checkboxfield',
					name: 'acceptTerms',
					id: 'acceptTerms',
					label: 'ACCEPTED AND AGREED',
					value: 'true'
				}
				// {
				// 	html:'ACCEPTED AND AGREED:</br></p>',
				// 	style: 'text-transform:uppercase;font-weight:bold'
				// }
				, {
					xtype: 'signaturefield',
					id: 'signatureField-terms',
					// sigWidth: 350,
					// sigHeight: 150,
					//docked: 'bottom',
					label: 'Enter Signature'
					// labelWidth: '20%'
				}
			]
		}]
	}
});