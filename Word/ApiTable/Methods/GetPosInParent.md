# GetPosInParent

Returns the table position within its parent element.

## Syntax

expression.GetPosInParent();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number (returns -1 if the table parent doesn't exist)

## Example

This example shows how to get the table position within its parent element.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("Number of paragraph elements at this point: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
oRun.AddText("Number of paragraph elements after we added a text run: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oDocument.AddElement(0, oParagraph);
var oTable = Api.CreateTable(3, 3);
oDocument.AddElement(0, oTable);
var nPosition = oTable.GetPosInParent();
oTable = oDocument.GetElement(nPosition);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
oTable.SetStyle(oTableStyle);
builder.SaveFile("docx", "GetPosInParent.docx");
builder.CloseFile();
```