Ext.define('medicalForms.controller.Main', {
    extend: 'Ext.app.Controller',
    // Base Class functions.
    launch: function() {
        this.callParent(arguments);
        //New User instance
        var now = new Date();
        var userId = (now.getTime()).toString();
        console.log('userId', userId);
        Ext.getStore("Users").load();
         var newUser = Ext.create("medicalForms.model.User", {
            id: userId,
            firstName: "",
            lastName: "",
            todaysDate: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            phoneNumber: "",
            email: "",
            other: "",
            medications: "",
            priorSurgeries: "",
            drugAllergies: "",
            birthDate: "",
            height: "",
            weight: "",
            referralSource: [],
            medicalCondition: [],
            gender: "",
            procedure: "",
            privacy: "",
            agent: "",
            title: "",
            terms: "",
            confirm: ""
        });

        var patientInfoForm = this.getPatientInfo();
        
        patientInfoForm.setRecord(newUser);
    },
    init: function() {
        this.callParent(arguments);
        console.log("init");
    },

    id: "myController",
    config: {
        refs: {
            patientInfo: 'patientinfo',
            medicalHistory: 'medicalhistory',
            privacy: 'privacy',
            terms: 'terms',
            confirm: 'confirm'
        },
        control: {
            patientInfo: {
                forwardCommand: 'patientInfoFoward'
            },
            medicalHistory: {
                backCommand: 'medicalHistoryBack',
                forwardCommand: 'medicalHistoryFoward'
            },
            privacy: {
                backCommand: 'privacyBack',
                forwardCommand: 'privacyFoward'
            },
            terms: {
                backCommand: 'termsBack',
                forwardCommand: 'termsFoward'
            },
            confirm: {
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
        var usersStore = Ext.getStore("Users");

        record.set("firstName", values.firstName);
        record.set("lastName", values.lastName);
        record.set("todaysDate", values.todaysDate);
        record.set("address", values.address);
        record.set("city", values.city);
        record.set("state", values.state);
        record.set("zipCode", values.zipCode);
        record.set("phoneNumber", values.phoneNumber);
        record.set("email", values.email);   
        record.set("birthDate", values.birthDate);
        record.set("height", values.height);
        record.set("weight", values.weight);
        record.set("referralSource", values.referralSource);
        record.set("medicalCondition", values.medicalCondition);
        record.set("gender", values.gender);
        record.set("procedure", values.procedure);


        if (null == usersStore.findRecord('id', record.data.id)) {
            usersStore.add(record);
        }
       
        usersStore.sync();
        var medicalHistoryForm = this.getMedicalHistory();
        medicalHistoryForm.setRecord(record);
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
        $('input[name=referralSource]').parsley('addConstraint', {
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
        var medicalHistoryForm = this.getMedicalHistory();
        var record = medicalHistoryForm.getRecord();
        var values = medicalHistoryForm.getValues();
        console.log("record", record);
        console.log("values", values);

        record.set("medicalCondition", values.medicalCondition);
        record.set("other", values.other);
        record.set("medications", values.medications);
        record.set("priorSurgeries", values.priorSurgeries);
        record.set("drugAllergies", values.drugAllergies);


        var usersStore = Ext.getStore("Users");

        Ext.getCmp('mainTabPanel').animateActiveItem(2, {
            type: 'slide',
            direction: 'left',
            duration: 500
        });

        var PrivacyForm = this.getPrivacy();
        PrivacyForm.setRecord(record);

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
        var signature = Ext.getCmp("signatureField-privacy").getValue();
        //console.log("accepted: " + accepted + "signed: " + signed);
        if (signature && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(3, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept and sign.");
        }
        record.set("privacy", signature);
        record.set("agent", values.agent);
        record.set("title", values.title);

        var TermsForm = this.getTerms();
        TermsForm.setRecord(record);
    },
    termsFoward: function() {
        // alert("termsFoward");
        var form = this.getTerms();
        var record = form.getRecord();
        var accepted = Ext.getCmp("acceptTerms").getChecked();
        var signature = Ext.getCmp("signatureField-terms").getValue();
        //console.log("accepted: " + accepted + "signed: " + signed);
        if (signature && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(4, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept and sign.");
        }

      /*  var formValues = [];
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
*/
        record.set("terms", signature);

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
            recieveSpecials: Ext.getCmp('revieveSpecials').getChecked() ? 'yes' : 'no',
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