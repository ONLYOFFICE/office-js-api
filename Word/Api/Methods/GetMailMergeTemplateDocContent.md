# GetMailMergeTemplateDocContent

Returns the mail merge template document.

## Syntax

expression.GetMailMergeTemplateDocContent();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example gets mail merge template and paste some data of it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
	var oRun = Api.CreateRun();
	oRun.AddText(arrField[i]);
	oParagraph.AddElement(oRun);
	oRun.WrapInMailMergeField();
	oParagraph.AddText(" ");
}
oParagraph.AddText("!");
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
var oTemplateDocContent = Api.GetMailMergeTemplateDocContent();
var nReceptionsCount     = Api.GetMailMergeReceptionsCount();

var arrReceptions = [];
for (let nReception = 0; nReception < nReceptionsCount; nReception++) 
{
	Api.MailMerge(nReception, nReception);
	var oElement1 = oDocument.GetElement(0);
	arrReceptions.push(oElement1);
	Api.ReplaceDocumentContent(oTemplateDocContent);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddLineBreak();
oParagraph.AddText("Receptions");
oParagraph.SetBold(true);
oDocument.Push(oParagraph);
oDocument.Push(arrReceptions[0]);
oDocument.Push(arrReceptions[1]);
oParagraph = Api.CreateParagraph();
oParagraph.AddLineBreak();
oParagraph.AddText("The mail merge process was run twice for each mail merge reception. But the results were replaced with the mail merge template document content. This template allows you to save each mail merge reception to the separate file.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetMailMergeTemplateDocContent.docx");
builder.CloseFile();
```