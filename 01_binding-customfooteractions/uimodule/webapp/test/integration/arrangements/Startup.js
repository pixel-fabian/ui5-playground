sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("ui5.playground.customfooteractions.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "ui5.playground.customfooteractions",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
