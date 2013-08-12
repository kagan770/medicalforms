Ext.define('medicalForms.model.User', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'Id',
        fields: [
            {name: 'Id', type:'int'},
            {name: 'UserId', type:'string'},
            {name: 'FirstName', type: 'string'}, 
            {name: 'LastName', type: 'string'}, 
            {name: 'Address', type: 'string'}, 
            {name: 'City', type: 'string'}, 
            {name: 'State', type: 'string'}, 
            {name: 'ZipCode', type: 'string'}, 
            {name: 'PhoneNumber', type: 'string'}, 
            {name: 'Email', type: 'string'}, 
            {name: 'Other', type: 'string'}, 
            {name: 'Medications', type: 'string'}, 
            {name: 'PriorSurgeries', type: 'string'}, 
            {name: 'DrugAllergies', type: 'string'}, 
            {name: 'BirthDate', type: 'date'}, 
            {name: 'DisplayBirthDate', type: 'string'}, 
            {name: 'Height', type: 'string'}, 
            {name: 'Weight', type: 'integer'}, 
            {name: 'ReferralSource'}, 
            {name: 'RecieveSpecials', type:'boolean'},
            {name: 'MedicalCondition'}, 
            {name: 'Gender', type: 'string'}, 
            {name: 'Procedure', type: 'string'},
            {name: 'Privacy', type: 'string'},
            {name: 'Agent', type: 'string'},
            {name: 'Title', type: 'string'},
            {name: 'Terms', type:'string'},
            {name: 'Confirm', type:'string'}
        ],
        proxy: {
            type: 'ajax',
            url:'patients.php',
            api: {
                create: 'patients.php?act=createpatient',
                read: 'patients.php?act=loadpatient',
                update: 'patients.php?act=createpatient',
                destroy: 'patients.php?act=erasepatient'
            },
            // ,
            reader: {
                type: 'json'
            }
            // reader: {
            //     rootProperty:'hotels'
            // }
        }

    },
    removeNulls:function(){
       var medicalCondition = this.get('medicalCondition');
       

       this.set('medicalCondition', medicalCondition.join('---'));
   }
});
