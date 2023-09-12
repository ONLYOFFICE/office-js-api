# TimeUTC

Returns or sets the timestamp of the comment reply creation in UTC format.

## Syntax

expression.TimeUTC; &#124; expression.TimeUTC = nTimeStamp;

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number &#124; String | The timestamp of the comment reply creation in UTC format. |

## Returns

Number

## Example

This example sets the timestamp of the comment reply creation in UTC format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oComment.AddReply("Reply 1", "John Smith", "uid-1");
var oReply = oComment.GetReply();
oReply.TimeUTC = Date.now();
oWorksheet.GetRange("A3").SetValue("Comment's reply timestamp UTC: ");
oWorksheet.GetRange("B3").SetValue(oReply.TimeUTC);
builder.SaveFile("xlsx", "TimeUTC.xlsx");
builder.CloseFile();
```