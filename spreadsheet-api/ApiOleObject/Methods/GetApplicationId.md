# GetApplicationId

Returns the application ID from the current OLE object.

## Syntax

```javascript
expression.GetApplicationId();
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the application ID from the OLE object.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
let appId = oleObject.GetApplicationId();
worksheet.GetRange("A1").SetValue("The OLE object application ID: " + appId);
```
