# SetHyperlink

Adds a hyperlink to the specified range.

## Syntax

expression.SetHyperlink(sRange, sAddress, subAddress, sScreenTip, sTextToDisplay);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRange | Required | String | The range where the hyperlink will be added to. |
| sAddress | Required | String | The link address. |
| subAddress | Required | String | The link subaddress to insert internal sheet hyperlinks. |
| sScreenTip | Required | String | The screen tip text. |
| sTextToDisplay | Required | String | The link text that will be displayed on the sheet. |

## Returns

This method doesn't return any data.

## Example

This example adds a hyperlink to the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetHyperlink("A1", "https://api.onlyoffice.com/docbuilder/basic", "Api ONLYOFFICE", "ONLYOFFICE for developers");
builder.SaveFile("xlsx", "SetHyperlink.xlsx");
builder.CloseFile();
```