sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5.playground.customfooteractions.controller.MainView", {
            onInit: function () {},

            onPressButton1() {
                this.getRouter().navTo("RoutePage1");
            },
        });
    }
);
