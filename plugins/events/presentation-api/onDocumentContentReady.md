# onDocumentContentReady

The function called when the document is completely loaded.

## Parameters

This event has no parameters.

```javascript
window.Asc.plugin.event_onDocumentContentReady = function() {
    var oProperties = {
        "searchString"  : "ONLYOFFICE",
        "replaceString" : "ONLYOFFICE is cool",
        "matchCase"     : false
    };

    window.Asc.plugin.executeMethod("SearchAndReplace", [oProperties], function() {
            window.Asc.plugin.executeCommand("close", "");
    });
};
```

