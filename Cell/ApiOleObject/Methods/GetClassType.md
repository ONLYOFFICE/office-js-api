# GetClassType

Returns a type of the ApiOleObject class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"oleObject"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let oleObject = worksheet.AddOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}", 0, 2 * 36000, 4, 3 * 36000);
let type = oleObject.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + type);
```
