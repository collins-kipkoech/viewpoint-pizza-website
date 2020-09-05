function User(first,last,id_no,phone,location){
    this.firstname = first;
    this.lastname = last;
    this.id_no = id_no;
    this.phone_number = phone;
    this.location = location;
};

$(document).ready(function() {
    $("form#myForm").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#fname").val();
      var inputtedLastName = $("input#lname").val();
      var inputtedIdNumber = $("input#id_no").val();
      var inputtedPhoneNumber = $("input#phone").val();
      var inputtedLocation = $("input#location").val();
  
      var newUser = new User(inputtedFirstName, inputtedLastName, inputtedIdNumber, inputtedPhoneNumber, inputtedLocation);
  
      
    });
  }); 