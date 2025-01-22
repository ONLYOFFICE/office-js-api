let date = new window.Date();
let controlDatePickerPr = {
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : date
};
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [controlDatePickerPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);