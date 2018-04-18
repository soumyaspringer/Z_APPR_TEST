/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"cus/crm/test/integration/NavigationJourneyPhone",
		"cus/crm/test/integration/NotFoundJourneyPhone",
		"cus/crm/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});