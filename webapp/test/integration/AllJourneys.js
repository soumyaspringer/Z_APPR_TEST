/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ApprovalHeaderSet in the list
// * All 3 ApprovalHeaderSet have at least one ApprovalItemSet

sap.ui.require([
	"sap/ui/test/Opa5",
	"cus/crm/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"cus/crm/test/integration/pages/App",
	"cus/crm/test/integration/pages/Browser",
	"cus/crm/test/integration/pages/Master",
	"cus/crm/test/integration/pages/Detail",
	"cus/crm/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cus.crm.view."
	});

	sap.ui.require([
		"cus/crm/test/integration/MasterJourney",
		"cus/crm/test/integration/NavigationJourney",
		"cus/crm/test/integration/NotFoundJourney",
		"cus/crm/test/integration/BusyJourney",
		"cus/crm/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});