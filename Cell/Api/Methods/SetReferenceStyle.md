# SetReferenceStyle

Sets freeze panes type.

## Syntax

expression.SetReferenceStyle(sReferenceStyle);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sReferenceStyle | Required | [ReferenceStyle](../../../Enumerations/ReferenceStyle.md) | The type of freezing ('null' to unfreeze). |

## Returns

This method doesn't return any data.

## Example

This example sets reference style.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
oWorksheet.GetRange("A1").SetValue(Api.GetRefereceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```