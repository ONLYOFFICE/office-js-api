# GetClassType

Returns a type of the ApiBullet class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiBullet](../ApiBullet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a type of ApiBullet class and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBullet = Api.CreateBullet("- ");
var sType = oBullet.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The ApiBullet class type: " + sType);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
```