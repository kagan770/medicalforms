 var tableOptions = {
     "bAutoWidth": false,
     //"bStateSave": true
     "aaSorting": [
     [0, "desc"]
     ],
     "aoColumns": [{
         "bSearchable": true,
         "bVisible": false
     },
     null,
     null,
     null, {
         "bVisible": false
     }, {
         "bVisible": false
     },
     null,
     null, {
         "bVisible": false
     },
     null,
     null,
     null,
     null
     ]
 };

 function getPatients(callback) {
     $.ajax({
         url: 'getPatients.php',
         type: 'post',
         dataType: "json",
         success: function(patients) {
            $.each(patients, function(index, patient){
                patient.Age = getAge(patient.BirthDate);
            });
            callback(patients);
        }

    });
 }

 function getNumPatients(callback) {
     $.ajax({
         url: 'getNumPatients.php',
         success: function(response) {
             callback(response);
         }
     });
 }
 function renderDataTable(tableOptions){
    $("table").dataTable(tableOptions);
    $("[id^=fileupload]").ajaxForm({
        success:function(response){
            getPatients(function(patients) {
             vm.patients(patients);
         });
        }
    });
    $("[id^=fileupload] input[type=file]").change(function(){
        $(this).parent("form").submit();
    });
    $(".printed_status").change(function(){
        var status = $(this).is(':checked');
        var userId = $(this).parent().parent("tr").attr("id");
        changePrintedStatus(userId, status);
    });
}
function changePrintedStatus(userId, status){
    //TODO:
    console.log('userId', userId);
    console.log('status', status);

}
$(function() {

 getPatients(function(patients) {
    console.log(patients);
    vm = new viewModel(patients);
    ko.applyBindings(vm);

    renderDataTable(tableOptions);
    vm.patients.subscribe(function() {
     if (vm.patients().length) {
         $.each(vm.patients(), function() {
             $("table").dataTable().fnDeleteRow(0);
         });
         $("table").dataTable().fnDestroy();
     }
 }, null, 'beforeChange');
    vm.patients.subscribe(function() {
     if (vm.patients().length) {
      renderDataTable(tableOptions);
  }

});
    getNumPatients(function(numPatients) {
     vm.numPatients(numPatients);
 });
    setInterval(function() {
     $.ajax({
         url: 'getNumPatients.php',
         success: function(numPatients) {
             console.log(numPatients);
             if (numPatients != vm.numPatients()) {
                 getPatients(function(patients) {
                     alert("new patient");
                     vm.patients(patients);
                     vm.numPatients(numPatients);
                 });
             }
         }
     });
 }, 5000);

});

});