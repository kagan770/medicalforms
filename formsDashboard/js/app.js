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
     null,
     null
     ]
 };
var target, spinner;
 $(document).ajaxStart(function() {
  target = document.getElementById('preloader');
  spinner = new Spinner().spin(target);
});
 $(document).ajaxStop(function() {
   setTimeout(function(){spinner.stop();}, 1000);
});

 function getPatients(callback) {
    $.ajax({
     url: 'getPatients.php',
     type: 'post',
     dataType: "json",
     success: function(patients) {

        getAttachments("", function(attachments){

            console.log('attachments',attachments);
            $.each(patients, function(i, patient){
                patient.Attachments = [];
                console.log("patients", patient);
                $.each(attachments, function(j, attachment){
                    if(attachment.UserId == patient.UserId){
                        patient.Attachments.push(attachment);
                    }
                });

                patient.Age = getAge(patient.BirthDate);

                if(patient.PrintedStatus){
                    patient.PrintedStatus = JSON.parse(patient.PrintedStatus);
                }
            });
            
            callback(patients);
        });
    }

});
}

function getAttachments(patientId, callback){


    $.ajax({
        url: 'getAttachments.php',
        data: 'id=' + patientId,
        dataType: 'JSON',
        success: function(response) {
            console.log("getAttachments");
            callback(response);
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
        var id = $(this).parent().parent("tr").attr("id");
        changePrintedStatus(id, status);
    });
}
function changePrintedStatus(id, status){
    $.ajax({
        url:"http://parallelable.com/medicalForms/patients.php?act=updatepatient", 
        type:'post', 
        data:'{"Id": ' + id + ', "PrintedStatus":  ' + status + ' }', 
        contentType: 'application/json'
    });
    console.log('userId', id);
    console.log('status', status);

}
$(function() {

 getPatients(function(patients) {
    console.log(patients);
    vm = new viewModel(patients);
    ko.applyBindings(vm);

    renderDataTable(tableOptions);
    vm.patients.subscribe(function() {
        console.log("changed");
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
         global: false, 
         success: function(numPatients) {
             console.log(numPatients);
             if (numPatients != vm.numPatients()) {
                 getPatients(function(patients) {
                     //alert("new patient");
                     vm.patients(patients);
                     vm.numPatients(numPatients);
                 });
             }
         }
     });
 }, 5000);

});

});