Ext.define('medicalForms.view.Main', {
    extend: 'Ext.Panel',
    //extend: 'Ext.Carousel',
    id: 'mainTabPanel',
    //xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'medicalForms.view.Terms',
        'medicalForms.view.Privacy',
        'medicalForms.view.PatientInfo',
        'medicalForms.view.MedicalHistory',
        'medicalForms.view.Confirm'
    ],
    config: {
        defaults: {
            scrollable: 'vertical'

        },
        tabBarPosition: 'bottom',
        layout: 'card',
        items: [{
                xtype: 'patientinfo'
            }, {
                xtype: 'medicalhistory'
            }, {
                xtype: 'privacy',
                styleHtmlContent: true
            }, {
                xtype: 'terms',
                styleHtmlContent: true
            }, {
                xtype: 'confirm',
                styleHtmlContent: true
            },
            {
                html:"<h1>Thank You</h1>"
            }

        ]
    }
});