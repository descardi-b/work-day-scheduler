// how do i get the local storage items to populate in the right
// divs when the user refreshes?

// current time variable
var currentTime = moment().hours();
console.log(currentTime);

// hours variable
var hours = $(".hour");
console.log(hours);

console.log(hours[0].dataset.id);
// var militaryTime = hours[0].getAttribute("data-type");
// console.log(militaryTime);

// target save button
var saveButton = $(".saveBtn");
console.log(saveButton);
 
// target textarea
var taskDescriptionInput = $("textarea").val();

saveButton.on("click", function() {

    // target the task in the sibling element with class "description"
    var thisTask = $(this).siblings(".description").val();
    console.log(thisTask);
    // target the id of the entire parent time block
    var thisTime = $(this).parent().attr("id");

    // save targeted task into local storage, with key as time and value as task
    localStorage.setItem(thisTime, thisTask);
});

// for loop to audit the hours and compare to the current time
for (var i = 0; i < hours.length; i++) {
    // parse the hour into integers
    var taskTime = parseInt(hours[i].dataset.id);

    if (taskTime > currentTime) {
        $(`#${hours[i].id}`).addClass("future");
        $(`#${hours[i].id}`).removeClass("past");
        $(`#${hours[i].id}`).removeClass("present");
    }

    if (taskTime === currentTime) {
        $(`#${hours[i].id}`).addClass("present");
        $(`#${hours[i].id}`).removeClass("future");
        $(`#${hours[i].id}`).removeClass("past");
    }

    if (taskTime < currentTime) {
        $(`#${hours[i].id}`).addClass("past");
        $(`#${hours[i].id}`).removeClass("future");
        $(`#${hours[i].id}`).removeClass("present");
    }
}

// load previous tasks if any are stored
var loadTasks = function() {
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
}

loadTasks();