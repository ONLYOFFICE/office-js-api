# SetApplicationId

Sets the application ID to the current OLE object.

## Syntax

expression.SetApplicationId(sAppId);

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAppId | Required | String | The application ID associated with the curent OLE object. |

## Returns

Boolean

## Example

This example sets the application ID to the current OLE object.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oOleObject = oWorksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
oOleObject.SetApplicationId("asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}");
builder.SaveFile("xlsx", "SetApplicationId.xlsx");
builder.CloseFile();
```