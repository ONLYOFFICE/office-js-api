# SetApplicationId

Sets the application ID to the current OLE object.

## Syntax

expression.SetApplicationId(sAppId);

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAppId | Required | String | The application ID associated with the current OLE object. |

## Returns

Boolean

## Example

This example sets the application ID to the current OLE object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oOleObject.SetSize(200 * 36000, 130 * 36000);
oOleObject.SetPosition(70 * 36000, 30 * 36000);
oSlide.AddObject(oOleObject);
oOleObject.SetApplicationId("asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}");
builder.SaveFile("pptx", "SetApplicationId.pptx");
builder.CloseFile();
```