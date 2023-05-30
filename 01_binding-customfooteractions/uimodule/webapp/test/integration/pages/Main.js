sap.ui.require(["sap/ui/test/Opa5", "sap/ui/test/actions/Press"], function (Opa5, Press) {
    "use strict";

    Opa5.createPageObjects({
        onTheMainPage: {
            viewName: "ui5.playground.customfooteractions.view.MainView",

            actions: {
                // add action functions here
                iPressTheButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        actions: new Press(),
                        errorMessage: "App does not have a button",
                    });
                },
            },

            assertions: {
                // add assertion functions here
                iShouldSeeTheTitle: function () {
                    return this.waitFor({
                        controlType: "sap.m.Title",
                        properties: {
                            text: "Title of ui5.playground.customfooteractions",
                        },
                        success: function () {
                            Opa5.assert.ok(true, "The page shows the correct title");
                        },
                        errorMessage: "App does not show the expected title ui5.playground.customfooteractions",
                    });
                },
            },
        },
    });
});
