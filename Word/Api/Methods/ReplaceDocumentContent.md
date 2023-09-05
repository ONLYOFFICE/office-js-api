# ReplaceDocumentContent

Replaces the main document content with another document content.

## Syntax

expression.ReplaceDocumentContent(oApiDocumentContent);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiDocumentContent | Required | [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) | The document content which the main document content will be replaced with. |

## Returns

This method doesn't return any data.

## Example

This examle shows how to reaplace document content with mail merge data.

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
builder.SaveFile("docx", "ReplaceDocumentContent.docx");
builder.CloseFile();
```