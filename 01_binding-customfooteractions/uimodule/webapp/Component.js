/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "ui5/playground/customfooteractions/model/models", "ui5/playground/customfooteractions/model/Page1.model"],
    function (UIComponent, Device, models, Page1Model) {
        "use strict";

        return UIComponent.extend("ui5.playground.customfooteractions.Component", {
            metadata: {
                manifest: "json",
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this.setModel(new Page1Model(), "page1Model");
            },
        });
    }
);
