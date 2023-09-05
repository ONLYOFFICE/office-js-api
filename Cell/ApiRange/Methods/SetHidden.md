# SetHidden

Sets the value hiding property. The specified range must span an entire column or row.

## Syntax

expression.SetHidden(isHidden);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isHidden | Required | Boolean | Specifies if the values in the current range are hidden or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the value hiding property.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRows("1:3");
oRange.SetHidden(true);
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var bHidden = oRange.GetHidden();
oWorksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + bHidden);
builder.SaveFile("xlsx", "SetHidden.xlsx");
builder.CloseFile();
```