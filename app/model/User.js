Ext.define('medicalForms.model.User', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
            {name:'id', type:'int'},
            {name: 'firstName', type: 'string'}, 
            {name: 'lastName', type: 'string'}, 
            {name: 'todaysDate', type: 'date'}, 
            {name: 'address', type: 'string'}, 
            {name: 'city', type: 'string'}, 
            {name: 'state', type: 'string'}, 
            {name: 'zipCode', type: 'string'}, 
            {name: 'phoneNumber', type: 'string'}, 
            {name: 'email', type: 'string'}, 
            {name: 'other', type: 'string'}, 
            {name: 'medications', type: 'string'}, 
            {name: 'priorSurgeries', type: 'string'}, 
            {name: 'drugAllergies', type: 'string'}, 
            {name: 'birthDate', type: 'date'}, 
            {name: 'height', type: 'string'}, 
            {name: 'weight', type: 'integer'}, 
            {name: 'referralSource'}, 
            {name: 'medicalCondition'}, 
            {name: 'gender', type: 'string'}, 
            {name: 'procedure', type: 'string'},
            {name: 'privacy', type: 'string'},
            {name: 'agent', type: 'string'},
            {name: 'title', type: 'string'},
            {name: 'terms', type:'string'},
            {name: 'confirm', type:'string'}
        ],
         proxy: {
            type: 'ajax',
            url:'patients.php',
            api: {
                create: 'patients.php?act=createpatient',
                read: 'patients.php?act=loadpatient',
                update: 'patients.php?act=updatepatient',
                destroy: 'patients.php?act=erasepatient'
            }
            // ,
            // reader: {
            //     type: 'json'
            // }
            // reader: {
            //     rootProperty:'hotels'
            // }
        }

    }
});
