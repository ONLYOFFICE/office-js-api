# SetData

Sets the data to the current OLE object.

## Syntax

```javascript
expression.SetData(sData);
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sData | Required | string |  | The OLE object string data. |

## Returns

boolean

## Example

This example sets the data to the current OLE object.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
oleObject.SetData("https://youtu.be/eJxpkjQG6Ew");
```
