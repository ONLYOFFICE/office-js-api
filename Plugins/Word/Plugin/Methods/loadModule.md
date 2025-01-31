# loadModule

Defines the method used to load a remotely located text resource.

## Syntax

```javascript
expression.loadModule(url, callback);
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | Required | string |  | The resource code URL. |
| callback | Required | function |  | The result that the method returns. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.loadModule("./vendor/highlight/styles/" + e.params.data.id , function(content) {
    var style_value = content;
    if (isDE || isFF) {
        $("#jq_color").spectrum("set", (hexc($(container).css('backgroundColor'))));
    } else {
        background_color.value = hexc($(container).css('backgroundColor'));
    }
});
```
