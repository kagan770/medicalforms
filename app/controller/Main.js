Ext.define('medicalForms.controller.Main', {
    extend: 'Ext.app.Controller',
    // Base Class functions.
    launch: function(id) {
        console.log(id);
        this.callParent(arguments);


        $('input[name=ZipCode]').mask("99999");
        $('input[name=PhoneNumber]').mask("(999) 999-9999");
        window.history.forward();
    },
    init: function() {
        this.callParent(arguments);

    },

    id: "myController",
    config: {
        routes: {
            'user/:id': 'savedPatientLaunch',
            'newPatient': 'newPatientLaunch'
        },
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
    newPatientLaunch: function() {
        var MilliSecTime = (new Date()).getTime();
        var RandomNum = (Math.floor(Math.random() * 100) + 1);
        console.log("noid");
        Ext.getStore("Users").load();
        var patientInfoForm = this.getPatientInfo();
        var newUser = Ext.create("medicalForms.model.User", {
            UserId: MilliSecTime.toString() + RandomNum.toString(),
            FirstName: "",
            LastName: "",
            Address: "",
            City: "",
            State: "",
            ZipCode: "",
            PhoneNumber: "",
            Email: "",
            Other: "",
            Medications: "",
            PriorSurgeries: "",
            DrugAllergies: "",
            BirthDate: new Date(1980, 0, 1, 0, 0, 0, 0),
            DisplayBirthDate: "",
            Height: "",
            Weight: "",
            ReferralSource: [],
            RecieveSpecials: false,
            MedicalCondition: ["Asthma"],
            Gender: "",
            Procedure: "",
            Privacy: "",
            Agent: "",
            Title: "",
            Terms: "",
            Confirm: ""
        });
        console.log("newUser", newUser);
        console.log("UserId", newUser.get("UserId"));

        patientInfoForm.setRecord(newUser);
    },
    savedPatientLaunch: function(id) {
        console.log(id);
        Ext.getStore("Users").load();
        var patientInfoForm = this.getPatientInfo();
        medicalForms.model.User.load(id, {
            callback: function(response, operation) {
                console.log("record", record);
                var record = response;
                record.set('MedicalCondition', record.get("MedicalCondition").split(","));
                var newUser = Ext.create("medicalForms.model.User",record.getData());
                console.log("newUser", newUser);
                patientInfoForm.setRecord(newUser);
            }
        });
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

        record.set("FirstName", values.FirstName);
        record.set("LastName", values.LastName);
        record.set("Address", values.Address);
        record.set("City", values.City);
        record.set("State", values.State);
        record.set("ZipCode", values.ZipCode);
        record.set("PhoneNumber", values.PhoneNumber);
        record.set("Email", values.Email);
        record.set("BirthDate", values.BirthDate);
        record.set("DisplayBirthDate", values.BirthDate.getMonth() + 1 + "/" + values.BirthDate.getDay() + "/" + values.BirthDate.getFullYear());
        record.set("Height", values.Height);
        record.set("Weight", values.Weight);
        record.set("ReferralSource", values.ReferralSource);
        record.set("RecieveSpecials", values.RecieveSpecials);
        //record.set("MedicalCondition", values.medicalCondition);
        record.set("Gender", values.Gender);
        record.set("Procedure", values.Procedure);


        if (null == usersStore.findRecord('id', record.data.id)) {
            usersStore.add(record);
        }

        usersStore.sync();
        //usersStore.save();
        //record.save();
        // var writer = usersStore.getWriter();
        // writer.write();

        var medicalHistoryForm = this.getMedicalHistory();
        medicalHistoryForm.setRecord(record);
        applyValidation();
        $('input[name=FirstName]').parsley('addConstraint', {
            required: true
        });
        $('input[name=LastName]').parsley('addConstraint', {
            required: true
        });
        $('input[name=Address]').parsley('addConstraint', {
            required: true
        });
        $('input[name=City]').parsley('addConstraint', {
            required: true
        });
        $('input[name=State]').parsley('addConstraint', {
            required: true
        });
        $('input[name=ZipCode]').parsley('addConstraint', {
            required: true
        });
        $('input[name=PhoneNumber]').parsley('addConstraint', {
            required: true,
            type: 'phone'
        });
        $('input[name=Email]').parsley('addConstraint', {
            required: true
        });
        $('input[name=BirthDate]').parsley('addConstraint', {
            required: true
        });
        $('input[name=ReferralSource]').parsley('addConstraint', {
            required: true
        });
        $('input[name=Gender]').parsley('addConstraint', {
            required: true,
            inlist: ["Male", "Female"]
        });
        //Doesn't work:
        // $('input[name=Weight]').parsley('addConstraint', {
        //     type: 'numeric'
        // });
$('input[name=Procedure]').parsley('addConstraint', {
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
        if(values.MedicalCondition)
        {
            record.set("MedicalCondition", values.MedicalCondition.filter(function(n) {
                return n;
            }));
        }
        record.set("Other", values.Other);
        record.set("Medications", values.Medications);
        record.set("PriorSurgeries", values.PriorSurgeries);
        record.set("DrugAllergies", values.DrugAllergies);


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
        var accepted = values.AcceptPrivacy;
        var signature = Ext.getCmp("signatureField-privacy").getValue();
        console.log('accepted', accepted);
        console.log('signature', signature);

        //console.log("accepted: " + accepted + "signed: " + signed);
        if (signature && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(3, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept the privacy notice.");
        }
        record.set("Privacy", signature);
        record.set("Agent", values.Agent);
        record.set("Title", values.Title);

        var TermsForm = this.getTerms();
        TermsForm.setRecord(record);
    },
    termsFoward: function() {
        // alert("termsFoward");
        var form = this.getTerms();
        var record = form.getRecord();
        console.log("record", record);
        var accepted = Ext.getCmp("AcceptTerms").getChecked();
        var signature = Ext.getCmp("signatureField-terms").getValue();
        //console.log("accepted: " + accepted + "signed: " + signed);
        if (signature && accepted) {
            Ext.getCmp('mainTabPanel').animateActiveItem(4, {
                type: 'slide',
                direction: 'left',
                duration: 500
            });
        } else {
            Ext.Msg.alert("Please accept the terms.");
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
        record.set("Terms", signature);
        var ConfirmationForm = this.getConfirm();
        ConfirmationForm.setRecord(record);
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
        var confirm = this.getConfirm();

        confirm.setMasked({
            xtype: 'loadmask',
            message: 'Saving...'
        });
        var form = this.getTerms();
        var id = form.getRecord().data.Id;
        var store = Ext.getStore("Users");
        var patient = store.getById(id);
        patient.save({
            success: function() {
                confirm.setMasked(false);
                Ext.getCmp('mainTabPanel').animateActiveItem(5, {
                    type: 'slide',
                    direction: 'left',
                    duration: 500
                });
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