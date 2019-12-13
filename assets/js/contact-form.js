// This script alters the action attribute of the form on the /cotact page, which changes the email 
// address that the contents of the form are sent to. The action attribute and method setting for 
// the form on the /contact are based on FormSpree settings - please see https://formspree.io/library 
// for more information on changing the settings

$(document).ready(function() {

  $("select#contact-form-reason").on('change', function() {
    selectedValue = this.value;
    console.log(selectedValue);
     // $("#contactForm").attr("action", selectedValue);
  });

});