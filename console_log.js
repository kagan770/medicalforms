//Set checkbox
var form = Ext.ComponentQuery.query('formpanel')[1]

var store = store.getById(1375734512190)
store.set("medicalCondition", ["Asthma", "Cancer"])

store.data.medicalCondition["Asthma", "Cancer"]

form.setRecord(store)

//Save patient
var newUser = Ext.create("medicalForms.model.User", {
	id: 555,
	firstName: "Bradley",
	lastName: "",
	todaysDate: "",
	address: "",
	city: "",
	state: "",
	zipCode: "",
	phoneNumber: "",
	email: "",
	other: "other ",
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
undefined
newUser.save()
f {
	modified: Object,
	raw: Object,
	stores: Array[3],
	internalId: 555,
	data: Object…
}



//Load patient
var store = Ext.create("medicalForms.store.Users")

var user = store.load()

user
f {
	_data: f,
	data: f,
	removed: Array[0],
	initConfig: function,
	initialConfig: undefined…
}


var data = user.getData()

data.getAt(0).data
Object {
	drugAllergies: "",
	id: 555,
	lastName: "",
	todaysDate: null,
	address: ""…
}

//Load patient by Id
// var store = Ext.create("medicalForms.store.Users")

// var operation = Ext.create('Ext.data.Operation', {
//     action: 'read',
//     id  : 2
// });
// // action : String
// // The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'.

// var user = store.load(operation)

// user.getAt(0).data
// Object {drugAllergies: "", id: 555, lastName: "", todaysDate: null, address: ""…}

medicalForms.model.User.load(1, {
	success: function(record, operation) {
		console.log("record", record.get("id"));
		console.log("operation", operation);
	}
});