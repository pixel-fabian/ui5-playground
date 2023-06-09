# footerCustomActions

Reproducing a error related to binding in `footerCustomActions` of `semantic:SemanticPage`.

Reproduce:

1. start app
2. press button "Go to Page1"
3. Page1 opens and `footerCustomActions` are loaded properly
4. press "go back"
5. MainView opens
6. press button "Go to Page1"
7. => Error

```bash
adding element with duplicate id
'__button0-container-ui5.playground.customfooteractions---Page1--page1-1'
```

The `footerCustomActions` are binded to `page1Model>/footerButtons`. The model data gets reset at one point. Without the reset this error does not occur.

## Credits

This project has been generated with 💙 and [Easy-UI5](https://github.com/SAP/generator-easy-ui5)
