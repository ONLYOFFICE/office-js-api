# GetElementsCount

Returns a number of elements in the current inline text content control. The text content control is created with one text run present in it by default, so even without any element added this method will return the value of '1'.

## Syntax

expression.GetElementsCount();

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of elements in the inline text content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oParagraph.AddLineBreak();
oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddText("Number of elements in oInlineLvlSdt (before adding anything) = " + oInlineLvlSdtCount);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control. ");
oInlineLvlSdt.AddElement(oRun, 0);
oParagraph.AddLineBreak();
var oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddText("Number of elements in oInlineLvlSdt (after adding one element) = " + oInlineLvlSdtCount);
var oRun1 = Api.CreateRun();
oRun1.AddText("One more element of the inline text content control.");
oInlineLvlSdt.AddElement(oRun1, 1);
oInlineLvlSdtCount = oInlineLvlSdt.GetElementsCount();
oParagraph.AddLineBreak();
oParagraph.AddText("Number of elements in oInlineLvlSdt (after adding one more element) = " + oInlineLvlSdtCount);
builder.SaveFile("docx", "GetElementsCount.docx");
builder.CloseFile();
```