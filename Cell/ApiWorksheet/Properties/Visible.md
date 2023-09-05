# Visible

Returns or sets the state of sheet visibility.

## Syntax

expression.Visible &#124; expression.Visible = isVisible;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isVisible | Required | Boolean | Specifies if the sheet is visible or not. |

## Returns

Boolean

## Example

This example sets the state of sheet visibility.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.Visible = true;
oWorksheet.GetRange("A1").SetValue("The current worksheet is visible.");
builder.SaveFile("xlsx", "Visible.xlsx");
builder.CloseFile();
```