window.Asc.plugin.executeMethod ("GetVBAMacros", null, function (data) {
    if (data && typeof data === 'string' && data.includes ('<Module')) {
        var arr = data.split ('<Module ').filter (function (el) {return el.includes ('Type="Procedural"')});
        arr.forEach (function (el) {
            var start = el.indexOf ('<SourceCode>') + 12;
            var end = el.indexOf ('</SourceCode>', start);
            var macros = el.slice (start, end);

            start = el.indexOf ('Name="') + 6;
            end = el.indexOf ('"', start);
            var name = el.slice (start, end);
            var index = Content.macrosArray.findIndex (function (macr) {return macr.name == name});
            if (index == -1) {
                macros = macros.replace (/&amp;/g,'&');
                macros = macros.replace (/&lt;/g,'<');
                macros = macros.replace (/&gt;/g,'>');
                macros = macros.replace (/&apos;/g,'\'');
                macros = macros.replace (/&quot;/g,'"');
                macros = macros.replace (/Attribute [\w \.="\\]*/g,'');
                Content.macrosArray.push (
                    {
                        name: name,
                        value: '(function ()\n{\n\t/* Enter your code here. */\n})();\n\n/*\nExecution of VBA commands does not support.\n' + macros + '*/',
                        guid: create_guid ()
                    }
                );
            }
        });
    }
    updateMenu ();
    window.CustomContextMenu.init ();
    if (Content.current === -1)
    {
        let event = new Event ("click");
        document.getElementById ("button_new").dispatchEvent (event);
    }
});