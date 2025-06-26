# onMethodReturn

The function called to return the result of the previously executed method. It can be used to return data after executing the [executeMethod](../../Plugin/Methods/executeMethod.md) method.

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| returnValue |  | Defines the value that will be returned. |

```javascript
window.Asc.plugin.executeMethod("InsertAndReplaceContentControls", [_obj]);
window.Asc.plugin.onMethodReturn = function(returnValue) {
    if (window.Asc.plugin.info.methodName == "InsertAndReplaceContentControls") {
        window.Asc.plugin.executeMethod("GetAllContentControls");
    } else if ("GetAllContentControls") {
        window.Asc.plugin.executeCommand("close", console.log(JSON.stringify(returnValue)));
    }
};
```

