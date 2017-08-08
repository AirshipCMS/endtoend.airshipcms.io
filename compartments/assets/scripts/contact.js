$.ajax({
  url: "https://endtoend.airshipcms.io/api/aerostat_collections/373",
  method: "GET",
  success: function(data) {
    console.log(data)
    var collection = data;
  }
});

function validateForm() {
  var valid = true;
  $(".required").each(function(i, field) {
    var field = $(field)[0];
    switch(field.tagName) {
      case "INPUT":
        if(field.type === "radio") {
          if($("input[name='"+ $(field)[0].name + "']:checked")[0] === undefined) {
            valid = false;
          }
        } else {
          if(field.value === "") {
            valid = false;
          }
        }
        break;
      default:
        if(field.value === "") {
          valid = false;
        }
        break;
    }
  });
  if(valid) {
    submit();
    if(!$("#form-error").hasClass("hidden")) {
      $("#form-error").addClass("hidden");
    }
  } else {
    if($("#form-error").hasClass("hidden")) {
      $("#form-error").removeClass("hidden");
    }
  }
}

function submit() {
  console.log('submitting')
}