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

$(document).on("click", ".edit", function () {
  $id = $(this).attr("name");
  window.location = "edit/" + $id;
});

$("#update").on("click", function () {
  $first_name = $("#first_name").val();
  $last_name = $("#last_name").val();

  if ($first_name == "" || $last_name == "") {
    alert("Please complete the requirment filed");
  } else {
    $id = $("#member_id").val();
    $.ajax({
      url: "update/" + $id,
      type: "POST",
      data: {
        first_name: $first_name,
        last_name: $last_name,
        csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
      },
      success: function () {
        window.location = "/";
        alert("Updated!");
      },
    });
  }
});

$(document).on("click", ".delete", function () {
  $id = $(this).attr("name");
  $.ajax({
    url: "delete/" + $id,
    type: "POST",
    data: {
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    },
    success: function () {
      Read();
      alert("Deleted!");
    },
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
