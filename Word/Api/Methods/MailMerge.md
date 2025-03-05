# MailMerge

Starts the mail merge process.

## Syntax

```javascript
expression.MailMerge(startIndex, endIndex);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startIndex | Optional | number | 0 | The start index of the document for mail merge process. |
| endIndex | Optional | number | Api.GetMailMergeReceptionsCount() - 1 | The end index of the document for mail merge process. |

## Returns

boolean

## Example

This example shows how to start the mail merge process.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fields = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < fields.length; ++i) 
{
	let run = Api.CreateRun();
	run.AddText(fields[i]);
	paragraph.AddElement(run);
	run.WrapInMailMergeField();
	paragraph.AddText(" ");
}
paragraph.AddText("!");
Api.LoadMailMergeData([fields, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
Api.MailMerge(1);
```
