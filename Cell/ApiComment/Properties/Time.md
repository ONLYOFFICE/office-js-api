# Time

Returns or sets the timestamp of the comment creation in the current time zone format.

## Syntax

expression.Time; &#124; expression.Time = nTimeStamp;

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number &#124; String | The timestamp of the comment creation in the current time zone format |

## Returns

Number

## Example

This example sets the timestamp of the comment creation in the current time zone format.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.", "John Smith");
oWorksheet.GetRange("A3").SetValue("Timestamp: ");
oComment.Time = Date.now();
oWorksheet.GetRange("B3").SetValue(oComment.Time);
builder.SaveFile("xlsx", "Time.xlsx");
builder.CloseFile();
```