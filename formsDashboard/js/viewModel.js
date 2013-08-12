function getAge(bd){
        var birthday = new Date(bd);

        var today = new Date();

        var difference = new Date(today-birthday);
        var age = difference / 1000 / 60 / 60 /24 /365;
        return Math.floor(age);
    }

function viewModel(patients) {
    var self = this;
    self.patients = ko.observableArray(patients);
    self.numPatients = ko.observable();
    
}

