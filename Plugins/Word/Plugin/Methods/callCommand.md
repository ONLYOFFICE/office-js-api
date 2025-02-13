# callCommand

Defines the method used to send the data back to the editor.
It allows the plugin to send structured data that can be inserted to the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.).

The *callback* is the result that the command returns. It is an optional parameter. In case it is missing, the &#123;@link Plugin#onCommandCallback window.Asc.plugin.onCommandCallback&#125; function will be used to return the result of the command execution.
💡 **ONLYOFFICE Document Builder** commands can be only used to create content and insert it to the document editor (using the *Api.GetDocument().InsertContent(...)*).
This limitation exists due to the co-editing feature in the online editors. If it is necessary to create a plugin for desktop editors to work with local files, no such limitation is applied.

This method is executed in its own context isolated from other JavaScript data. If some parameters or other data need to be passed to this method, use &#123;@link /plugin/scope Asc.scope&#125; object.

## Syntax

```javascript
expression.callCommand(func, isClose, isCalc, callback);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| func | Required | function |  | Defines the command written in JavaScript which purpose is to form structured data which can be inserted to the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.). Then the data is sent to the editors. The command must be compatible with &#123;@link /docbuilder/basic ONLYOFFICE Document Builder&#125; syntax. |
| isClose | Required | boolean |  | Defines whether the plugin window must be closed after the code is executed or left open waiting for another command or action. The *true* value is used to close the plugin window after executing the function in the *func* parameter. The *false* value is used to execute the command and leave the window open waiting for the next command. |
| isCalc | Required | boolean |  | Defines whether the document will be recalculated or not. The *true* value is used to recalculate the document after executing the function in the *func* parameter. The *false* value will not recalculate the document (use it only when your edits surely will not require document recalculation). |
| callback | Required | function |  | The result that the method returns. Only the js standart types are available (any objects will be replaced with *undefined*). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.init = function () {
    this.callCommand(function() {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("Hello world!");
        oDocument.InsertContent([oParagraph]);
    }, true);
};
```
