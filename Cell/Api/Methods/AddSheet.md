# AddSheet

Creates a new worksheet. The new worksheet becomes the active sheet.

## Syntax

expression.AddSheet(sName);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The name of a new worksheet. |

## Returns

This method doesn't return any data.

## Example

This example creates a new worksheet.

```javascript
builder.CreateFile("xlsx");
var oSheet = Api.AddSheet("New sheet");
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();
```