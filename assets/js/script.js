$("[id=task-box]").click(function() {
    var inputBox = "<input>";
    $(inputBox).addClass("form-control");
    $(this).replaceWith(inputBox);

    $("[id=task-box]").change(function() {
    $(inputBox).replaceWith($(this));
    });
});

var saveTask = function() {
    $(".saveBtn").click(function() {
    var inputText = inputBox.text();
    localStorage.setItem(thisTask, inputText);
})
}

