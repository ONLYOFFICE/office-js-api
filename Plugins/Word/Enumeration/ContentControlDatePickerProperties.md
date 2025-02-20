# ContentControlDatePickerProperties

The content control datepicker properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| DateFormat | string | A format in which the date will be displayed. For example: *"MM/DD/YYYY", "dddd\,\ mmmm\ dd\,\ yyyy", "DD\ MMMM\ YYYY", "MMMM\ DD\,\ YYYY", "DD-MMM-YY", "MMMM\ YY", "MMM-YY", "MM/DD/YYYY\ hh:mm\ AM/PM", "MM/DD/YYYY\ hh:mm:ss\ AM/PM", "hh:mm", "hh:mm:ss", "hh:mm\ AM/PM", "hh:mm:ss:\ AM/PM"*. |
| Date | object | The current date and time. |
## Type

Object



## Example

```javascript editor-docx
let date = new window.Date();
let controlDatePickerPr = {
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : date
};
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [controlDatePickerPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
