Ext.define("medicalForms.store.Users", {
    extend: "Ext.data.Store",
    requires: ["Ext.data.proxy.LocalStorage", "Ext.data.proxy.Ajax"],
    config: {
      autoLoad: true,
      model: 'medicalForms.model.User',
      //data : data,
      proxy: {
        type: 'memory',
        // reader: {
        //     type: 'json',
        //     //root: 'users'
        // }
    }
        // model: "medicalForms.model.User",
        // proxy: {
        //     type: 'localstorage',
        //     id: 'user-app-store'
        //     // type:'ajax',
        //     // url:'savePatient.php',
        //     // reader: {
        //     //     type: 'json',
        //     //     rootProperty: 'users'
        //     // }
        //     // ,
        //     // filterParam: "id"
        // }
        // ,
        // sorters: [{ property: 'dateCreated', direction: 'DESC'}]
        /*grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }*/
    }
});