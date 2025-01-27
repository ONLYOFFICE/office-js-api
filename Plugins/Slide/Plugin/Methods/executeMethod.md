# executeMethod

Defines the method used to execute certain editor methods using the plugin.

The callback is the result that the method returns. It is an optional parameter. In case it is missing, the &#123;@link Plugin#onMethodReturn window.Asc.plugin.onMethodReturn&#125; function will be used to return the result of the method execution.

## Syntax

expression.executeMethod(name, params, callback);

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the specific method that must be executed. |
| params | Required | Array |  | The arguments that the method in use has (if it has any). |
| callback | Required | function |  | The result that the method returns. |

## Returns

boolean

## Example

```javascript
var arrDocuments = [{
    "Props": {
        "Id": 100,
        "Tag": "CC_Tag",
        "Lock": 3
    },
    "Script": "var oParagraph = Api.CreateParagraph();oParagraph.AddText('Hello world!');Api.GetDocument().InsertContent([oParagraph]);"
}];
window.Asc.plugin.executeMethod ("InsertAndReplaceContentControls", [arrDocuments]);
```
