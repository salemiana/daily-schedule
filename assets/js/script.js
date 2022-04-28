// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

localStorage


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function (event) {
        // Get nearby values of the description in JQuery
        var text = $(event.target).siblings(".description").val();
        //var time = $(event.target).parent().attr("id");
        var time = $(event.target).siblings(".hour").html();
console.log(time);
        //Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        console.log($('.row'))
        // loop over time blocks
        $(".row").each(function (element, j) {
            console.log(j)

            this.setAttribute("id", element)

            var blockTime = (parseInt($(this).attr("id"))+9);

            // To check the time and add the classes for background indicators
            for (var i = 0; i < 9; i++){
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                console.log();
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
          }
        })
    }
    timeTracker()

})


 

