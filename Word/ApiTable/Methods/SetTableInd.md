# SetTableInd

Specifies the indentation which will be added before the leading edge of the current table in the document (the left edge in the left-to-right table, and the right edge in the right-to-left table).<br>Inherited From: [ApiTablePr#SetTableInd](../../ApiTablePr/Methods/SetTableInd.md)


## Syntax

expression.SetTableInd(nValue);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../../Enumerations/twips.md)  | The indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the indentation which will be added before the leading edge of the table in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the indent of 1 inch for the table:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oTable.SetTableInd(1440);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableInd.docx");
builder.CloseFile();
```