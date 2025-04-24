// This example gets commit on selection change prop from field with list of options.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetCommitOnSelChange(true);
comboboxField.SetValue('Commit on sel change is: ' + comboboxField.IsCommitOnSelChange());