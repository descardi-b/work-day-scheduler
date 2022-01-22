// current time variable
var currentTime = moment();
console.log(currentTime);

// hours variable
var hours = $(".hour")
console.log(hours)

// target save button
var saveButton = $(".saveBtn");
console.log(saveButton);
 
// target textarea
var taskDescriptionInput = $("textarea")

// for loop for moment.js time comparison
for (var i = 0; i < hours.length; i++) {
    // parse the hour into the moment object
    var hourHTML = hours[i].innerHTML
    var taskTime = moment(hourHTML, "hA").hours();

    console.log(taskTime);

    if (moment(taskTime).isAfter(currentTime)) {
        $(".hour").addClass("future");
    }

    if (taskTime === currentTime) {
        $(".hour").addClass("present");
    }

    if (moment(taskTime).isBefore(currentTime)) {
        $(".hour").addClass("past");
    }
}

// all textareas are currently getting class of past
// how to pull text from textarea to save to local storage

saveButton.on("click", function() {
    // target text in textarea
    var storedTask = localStorage.setItem("Task", textArea.innerHTML)
    console.log(storedTask);
})
