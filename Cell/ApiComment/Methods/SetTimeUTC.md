# SetTimeUTC

Sets the timestamp of the comment creation in UTC format.

## Syntax

expression.SetTimeUTC(nTimeStamp);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number &#124; String | The timestamp of the comment creation in UTC format. |

## Returns

This method doesn't return any data.

## Example

This example sets the timestamp of the comment creation in UTC format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Timestamp UTC: ");
oComment.SetTimeUTC(Date.now());
oWorksheet.GetRange("B3").SetValue(oComment.GetTimeUTC());
builder.SaveFile("xlsx", "SetTimeUTC.xlsx");
builder.CloseFile();
```