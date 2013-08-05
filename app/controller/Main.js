Ext.define('medicalForms.controller.Main', {
    extend: 'Ext.app.Controller',
    launch: function() {

        // this.callParent();

        console.log("launch");


    },

    init: function() {

        // this.callParent();

        console.log("init");

    },

    id: "myController",
    config: {
        refs: {
            patientInfo: 'patientinfo',
            medicalHistory: 'medicalhistory',
            privacy: 'privacy',
            terms:'terms',
           confirm:'confirm'
        },
        control: {
            patientInfo:{
                forwardCommand: 'patientInfoFoward'
            },
            medicalHistory:{
                backCommand: 'medicalHistoryBack',
                forwardCommand: 'medicalHistoryFoward'
            },
            privacy:{
                backCommand: 'privacyBack',
                forwardCommand: 'privacyFoward'
            },
            terms:{
                backCommand: 'termsBack',
                forwardCommand: 'termsFoward'
            },
           confirm:{
             backCommand: 'confirmBack',
                confirmCommand: 'confirmAndSave'
           }
        }
    },
    patientInfoFoward: function() {
        // alert("patientInfoFoward");
        var patientInfoForm = this.getPatientInfo();
        console.log("patientInfoForm", patientInfoForm);
        var record = patientInfoForm.getRecord();
        console.log("record", record);
        var values = patientInfoForm.getValues();
        console.log("values", values);
        applyValidation();
        $('input[name=firstName]').parsley('addConstraint', {
            required: true
        });
        $('input[name=lastName]').parsley('addConstraint', {
            required: true
        });
        $('input[name=address]').parsley('addConstraint', {
            required: true
        });
        $('input[name=city]').parsley('addConstraint', {
            required: true
        });
        $('input[name=state]').parsley('addConstraint', {
            required: true
        });
        $('input[name=zipCode]').parsley('addConstraint', {
            required: true
        });
        $('input[name=phoneNumber]').parsley('addConstraint', {
            required: true
        });
        $('input[name=email]').parsley('addConstraint', {
            required: true
        });
        $('input[name=birthDate]').parsley('addConstraint', {
            required: true
        });
        $('input[name=refferalSource]').parsley('addConstraint', {
            required: true
        });
        $('input[name=gender]').parsley('addConstraint', {
            required: true,
            inlist: ["Male", "Female"]
        });
        $('input[name=procedure]').parsley('addConstraint', {
            required: true
        });
        if ($('form').parsley('validate')) {
            Ext.getCmp('mainTabPanel').animateActiveItem(1, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            $('form').parsley('validate');
            medicalForms.app.isValidated = true;
            Ext.Msg.alert("Please fix the required fields");
        }

    },
    medicalHistoryFoward: function() {
        // alert("medicalHistoryFoward");
        Ext.getCmp('mainTabPanel').animateActiveItem(2, {
            type: 'slide',
            direction: 'left',
            duration: 500
        });
    },
    privacyFoward: function() {
        var form = this.getPrivacy();
        console.log("form", form);
        var record = form.getRecord();
        console.log("record", record);
        var values = form.getValues();
        console.log("values", values);
        // alert("privacyFoward");
        var accepted = values.acceptTerms;
        var signed = Ext.getCmp("signatureField-privacy").getValue() ? true : false;
        console.log("accepted: " + accepted + "signed: " + signed);
        if (signed && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(3, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept and sign.");
        }

    },
    termsFoward: function() {
        // alert("termsFoward");
        var accepted = Ext.getCmp("acceptTerms").getChecked();
        var signed = Ext.getCmp("signatureField-terms").getValue() ? true : false;
        console.log("accepted: " + accepted + "signed: " + signed);
        if (signed && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(4, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept and sign.");
        }

        var formValues = [];
        // $.each(Ext.getCmp('patientInfoForm').getFieldsAsArray(), function(index, field) {
        //     var key = field.getName();
        //     var value = field.getValue();
        //     var label = field.getLabel();
        //     formValues.push(label + ": " + value);
        // });
        // var medicalHistory = ;
        // var medicalConditions = [];

        // $.each(medicalHistory.medicalCondition, function(index, value) {
        //     if (value) {
        //         medicalConditions.push(value);
        //     }
        // });Ext.getCmp('medicalHistoryForm').getValues()
        // formValues.push("Medical Conditions: " + medicalConditions.join());


        Ext.getCmp("confirmCard").setHtml(formValues.join("</br>"));
        console.log(formValues);
    },
    medicalHistoryBack: function() {
        Ext.getCmp('mainTabPanel').animateActiveItem(0, {
            type: 'slide',
            direction: 'right',
            duration: 500
        });
    },
    privacyBack: function() {
        Ext.getCmp('mainTabPanel').animateActiveItem(1, {
            type: 'slide',
            direction: 'right',
            duration: 500
        });
    },
    termsBack: function() {
        Ext.getCmp('mainTabPanel').animateActiveItem(2, {
            type: 'slide',
            direction: 'right',
            duration: 500
        });
    },
    confirmBack: function() {
        Ext.getCmp('mainTabPanel').animateActiveItem(3, {
            type: 'slide',
            direction: 'right',
            duration: 500
        });
    },
    confirmAndSave: function() {
        Ext.getCmp("confirmCard").setMasked({
            xtype: 'loadmask',
            message: 'Saving...'
        });
        var data = {
            firstName: Ext.getCmp('firstName').getValue(),
            lastName: Ext.getCmp('lastName').getValue(),
            address: Ext.getCmp('address').getValue(),
            city: Ext.getCmp('city').getValue(),
            state: Ext.getCmp('state').getValue(),
            zipCode: Ext.getCmp('zipCode').getValue(),
            phoneNumber: Ext.getCmp('phoneNumber').getValue(),
            email: Ext.getCmp('email').getValue(),
            birthDate: Ext.getCmp('birthDate').getFormattedValue(),
            height: Ext.getCmp('height').getValue(),
            weight: Ext.getCmp('weight').getValue(),
            gender: Ext.getCmp('gender').getValue(),
            procedure: Ext.getCmp('procedure').getValue(),
            referralSource: Ext.getCmp('referralSource').getValue(),
            recieveSpecials: Ext.getCmp('revieveSpecials').getChecked()? 'yes' : 'no',
            medicalCondition: Ext.getCmp('medicalHistoryForm').getValues().medicalCondition,
            otherMedicalCondition: Ext.getCmp('otherMedicalCondition').getValue(),
            priorSurgeries: Ext.getCmp('priorSurgeries').getValue(),
            drugAllergies: Ext.getCmp('drugAllergies').getValue(),
            medications: Ext.getCmp('medications').getValue(),
            signature: Ext.getCmp('signatureField-terms').getValue()
        };
        console.log(data);
        $.ajax({
            url: 'testAjax.php',
            type: 'post',
            data: data,
            success: function(response) {
                console.log(response);
                Ext.Msg.alert("Thank You");
                Ext.getCmp("confirmCard").unmask();
            }
        });

    }
    
});

function applyValidation() {

    $('form').parsley({
        // basic data-api overridable properties here..
        inputs: 'input, textarea, select ',
        excluded: 'input[type = hidden]',
        trigger: true,
        focus: 'first ',
        validationMinlength: 3,
        successClass: 'parsley-success',
        errorClass: 'parsley-error',
        validators: {},
        showErrors: true,
        messages: {
            required: ""
        }
    });
}