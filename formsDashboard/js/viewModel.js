function getPatients(callback) {
    $.ajax({
        url: 'getPatients.php',
        type: 'post',
        dataType: "json",
        success: function(patients) {
            callback(patients);
        }
    });
}

function viewModel(patients) {
    var self = this;
    self.patients = ko.observableArray(patients);
    self.numPatients = ko.observable(self.patients().length);
    self.columns = ko.observableArray([
                                      'Id',
                                      'LastName',
                                      'FirstName',
                                      'Date of Visit',
                                      'Address',
                                      'Email',
                                      'BirthDate',
                                      'Gender',
                                      'PhoneNumber',
                                      'Procedure'
                                      ]);
    self.rows = ko.computed(function() {
        var users = [];
        $.each(self.patients(), function(ind, val) {
            var user = [];
            user.push(val.Id);
            user.push(val.LastName);
            user.push(val.FirstName);
            user.push(val.TodaysDate);
            user.push(val.Address + ", " + val.City + ", " + val.State + ", " + val.ZipCode);
            user.push(val.Email);
            // user.push(val.Age);
            user.push(val.BirthDate);
            user.push(val.Gender);
            // user.push(val.Height);
            // user.push(val.Weight);
            user.push(val.PhoneNumber);
            user.push(val.Procedure);
            // user.push(val.RecieveSpecials);
            // user.push(val.City);
            // user.push(val.State);
            // user.push(val.ZipCode);
            users.push(user);
        });
        return users;
    });
    // self.getRowId = function(row){
    //     console.log(row[0]);
    // };
    // self.getReport = function(row){
    //     console.log("row", row);
    //     console.log("report");
    // };
}