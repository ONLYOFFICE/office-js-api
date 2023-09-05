# SetVisible

Sets the state of sheet visibility.

## Syntax

expression.SetVisible(isVisible);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isVisible | Required | Boolean | Specifies if the sheet is visible or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the state of sheet visibility.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");
builder.SaveFile("xlsx", "SetVisible.xlsx");
builder.CloseFile();
```