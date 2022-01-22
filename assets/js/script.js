
// edit task option event listener
$(".container").on("click", "div.task-box", function () {

    console.log($(this));

    var taskBoxClass = $(this).attr("class");

    var text = $(this)
        .text()
        .trim();
    console.log(text);

    var textInput = $("<textarea>")
        .addClass(`form-control ${taskBoxClass}`)
        .val(text);

    $(this).after(textInput).remove();

    textInput.trigger("focus");
});

$(".container").on("blur", "textarea", function () {
    // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();

    var taskBoxClass = $(this).attr("class");

    var taskP = $("<div>")
        .addClass(taskBoxClass)
        .removeClass("form-control")
        .html(text);

    $(this).after(taskP).remove();
});

 //  $(".container")
