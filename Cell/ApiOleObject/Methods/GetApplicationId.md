# GetApplicationId

Returns the application ID from the current OLE object.

## Syntax

expression.GetApplicationId();

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the application ID from the OLE object.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oOleObject = oWorksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
var sAppId = oOleObject.GetApplicationId();
oWorksheet.GetRange("A1").SetValue("The OLE object application ID: " + sAppId);
builder.SaveFile("xlsx", "GetApplicationId.xlsx");
builder.CloseFile();
```