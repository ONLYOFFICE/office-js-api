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

```javascript
var Date = new window.Date();
var oControlDatePickerPr = &#123;
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : Date
&#125;;
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [oControlDatePickerPr, &#123;"Id" : 7, "Tag" : "&#123;tag&#125;", "Lock" : 0&#125;]);
