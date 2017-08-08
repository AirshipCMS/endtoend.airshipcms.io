var collection;

function getCollection() {
  // GET api/aerostat_collections/{id} to pull from desired collection
  // Contact Form Example's ID is 342
  $.ajax({
    url: "https://endtoend.airshipcms.io/api/aerostat_collections/373",
    method: "GET",
    success: function(data) {
      collection = data;
    }
  });

  return collection;
}
getCollection();

function validateForm() {
  var valid = true;
  $(".required").each(function(i, field) {
    field = $(field)[0];
    switch (field.tagName) {
      case "INPUT":
        if (field.type === "radio") {
          if (
            $("input[name='" + $(field)[0].name + "']:checked")[0] === undefined
          ) {
            valid = false;
          }
        } else {
          if (field.value === "") {
            valid = false;
          }
        }
        break;
      default:
        if (field.value === "") {
          valid = false;
        }
        break;
    }
  });
  if (valid) {
    submit();
    if (!$("#form-error").hasClass("hidden")) {
      $("#form-error").addClass("hidden");
    }
  } else {
    if ($("#form-error").hasClass("hidden")) {
      $("#form-error").removeClass("hidden");
    }
  }
}

function submit() {
  // Set aerostat_collection_id to the desired Collection's ID
  var payload = {
    aerostat_collection_id: collection.id,
    fields: []
  };

  payload.fields = collection.fields.map(function(collectionField) {
    $("input,select,textarea").each(function(i, field) {
      field = $(field)[0];
      if (collectionField.variable_name === field.name) {
        switch (field.tagName) {
          case "INPUT":
            if (
              (field.type === "radio" || field.type === "checkbox") &&
              $("input[name='" + $(field)[0].name + "']:checked")[0]
            ) {
              if (field.type === "radio") {
                collectionField.value = $(
                  "input[name='" + $(field)[0].name + "']:checked"
                )[0].value;
              } else {
                collectionField.value = true;
              }
            } else {
              collectionField.value = field.value;
            }
            break;
          default:
            collectionField.value = field.value;
            break;
        }
      }
    });
    return collectionField;
  });

  // POST /api/aerostats
  $.ajax({
    url: "https://endtoend.airshipcms.io/api/aerostats",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(payload),
    success: function() {
      $("form")[0].reset();
      $("#submission-message").toggleClass("hidden");
      setTimeout(function() {
        $("#submission-message").toggleClass("hidden");
      }, 3000);
    }
  });
}
