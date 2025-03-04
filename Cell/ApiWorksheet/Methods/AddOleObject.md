# AddOleObject

Adds an OLE object to the current sheet with the parameters specified.

## Syntax

```javascript
expression.AddOleObject(sImageSrc, nWidth, nHeight, sData, sAppId, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object height in English measure units. |
| sData | Required | string |  | The OLE object string data. |
| sAppId | Required | string |  | The application ID associated with the current OLE object. |
| nFromCol | Required | number |  | The number of the column where the beginning of the OLE object will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the OLE object measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the OLE object will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the OLE object measured in English measure units. |

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

This example adds an OLE object to the sheet with the parameters specified.

```javascript editor-xlsx
// How to add an OLE object to the worksheet specifying its url, size, etc.

// Insert an OLE object to the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
```
