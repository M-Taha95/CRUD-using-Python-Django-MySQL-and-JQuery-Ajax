$(document).ready(function () {
  if ($("#result") != null) {
    Read();
  }

  $("#create").on("click", function () {
    $first_name = $("#first_name").val();
    $last_name = $("#last_name").val();

    if ($first_name == "" || $last_name == "") {
      alert("Please complete the required field");
    } else {
      $.ajax({
        url: "create/",
        type: "POST",
        data: {
          first_name: $first_name,
          last_name: $last_name,
          csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function () {
          Read();
          $("#first_name").val("");
          $("#last_name").val("");
          alert("New Member Successfully Added");
        },
      });
    }
  });
});

function Read() {
  $.ajax({
    url: "read/",
    type: "POST",
    async: false,
    data: {
      res: 1,
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    },
    success: function (response) {
      $("#result").html(response);
    },
  });
}
