# Cut

Cut a range to the specified range or clipboard or clipboard.

## Syntax

expression.Cut(destination);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| destination | Optional | [ApiRange](../ApiRange.md) | Specifies a new range to which the specified range will be cut. If this argument is omitted, the range will be copied to the clipboard. |

## Returns

This method doesn't return any data.

## Example

This example cuts a range to the clipboard.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is move to the range A3.");
oRange.Cut(oWorksheet.GetRange("A3"));
builder.SaveFile("xlsx", "Cut.xlsx");
builder.CloseFile();
```