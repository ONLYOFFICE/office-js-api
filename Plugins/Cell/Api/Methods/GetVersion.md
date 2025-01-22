# GetVersion

Returns the editor version.

## Syntax

expression.GetVersion();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

```javascript
window.Asc.plugin.executeMethod ("GetVersion", [], function (version) &#123;
    if (version === undefined) &#123;
        window.Asc.plugin.executeMethod ("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) &#123;
            paste_done = true;
        &#125;);
    &#125;
    else &#123;
        window.Asc.plugin.executeMethod ("GetSelectionType", [], function (sType) &#123;
            switch (sType) &#123;
                case "none":
                case "drawing":
                    window.Asc.plugin.executeMethod("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) &#123;
                        paste_done = true;
                    &#125;);
                    break;
                case "text":
                    window.Asc.plugin.callCommand (function () &#123;
                        Api.ReplaceTextSmart (Asc.scope.arr);
                    &#125;, undefined, undefined, function (result) &#123;
                        paste_done = true;
                    &#125;);
                    break;
            &#125;
        &#125;);
    &#125;
&#125;);
