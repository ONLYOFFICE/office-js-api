# Debugging

To debug ONLYOFFICE Builder scripts, follow the instructions below.

## Executing from a browser (for plugins and macros)

1. Open the **Plugins** tab and click **Macros**.
2. Use the **debugger** command in your script:

   ```javascript
   debugger;
   var oDocument = Api.GetDocument();
   var oParagraph = oDocument.GetElement(0);
   oParagraph.AddText("Hello world!");
   ```

3. Open the developer console by pressing the **F12** button.
4. Press the **Run** button to run your script.

    > Please note that the **debugger** command will only work if the development tools are open. Otherwise, the browser will ignore it.
    
    ![Debugger](https://api.onlyoffice.com/content/img/docbuilder/builder-debugger.png)

The **debugger** command works as a breakpoint and pauses the execution at the script point where this command is inserted.

## Executing from Builder.Framework or Builder.App

1. Open a terminal in the *DocumentBuilder* folder.
2. Set the **V8_USE_INSPECTOR** environment variable to 1:

   ```bash
   # For Windows
   SET V8_USE_INSPECTOR=1
   ```
   
   ```bash
   # For Linux
   export V8_USE_INSPECTOR=1
   ```

3. Run the Builder script with the docbuilder command:

   ```bash
   docbuilder script.docbuilder
   ```

4. A link will appear in the terminal. You must open it in your Chrome/Chromium browser to connect to the JavaScript context.

    ![Debugger](https://api.onlyoffice.com/content/img/docbuilder/terminal.png)

5. Set the breakpoints by clicking the line numbers and run your script again.
6. Now you can debug the executed methods.

    ![Debugger](https://api.onlyoffice.com/content/img/docbuilder/devtools.png)
