# GetAllOleObjects

Returns all OLE objects from the current sheet.

## Syntax

expression.GetAllOleObjects();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiOleObject](../../ApiOleObject/ApiOleObject.md)>

## Example

This example shows how to get all OLE objects from the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
var aOleObjects = oWorksheet.GetAllOleObjects();
var sAppId = aOleObjects[0].GetApplicationId();
oWorksheet.GetRange("A1").SetValue("The application ID for the current OLE object: " + sAppId);
builder.SaveFile("xlsx", "GetAllOleObjects.xlsx");
builder.CloseFile();
```