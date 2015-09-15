import m = require("mithril");
import PanelSetup = require("./PanelSetup");
import Globals = require("./Globals");

"use strict";

var panelSpecificationCollection;

var currentSectionID;
var currentPageSpecification;
var userIdentifier;

var navigationController = null;

/* jshint scripturl:true */
var launchHelpCommand = "javascript:narrafirma_helpClicked()";
var logoutCommand = "javascript:narrafirma_logoutClicked()";

var Navigation: any = {
    panelBuilder: null,
    
    controller: function(args) {
        // console.log("********************** Making new navigation pane");
        this.pageID = null;
        this.pageSpecification = null;
        this.panelBuilder = Navigation.panelBuilder;
    },
    
    view: function(controller, args) {
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&& View called for navigation pane");
        return m("div[id=narrafirma-navigation]", [
            m("span[id=narrafirma-name]", {
                "class": Globals.clientState().serverStatus(),
                "title": Globals.clientState().serverStatusText()
            }, "NarraFirma™"),
            m("span[id=narrafirma-breadcrumbs]", buildBreadcrumbs(controller)),
            Globals.project().readOnly ? m("span[id=narrafirma-read-only]", {title: "Project is read only for this user. Local changes can be made, but changes will not be saved on the server."}, "[READONLY!]") : [],
            // These next four links float right and so are added in reverse order
            m("a[id=narrafirma-logout-link]", {href: logoutCommand, title: "Logout the current user"}, 'Logout (' + userIdentifier + ')'),
            m("a[id=narrafirma-help-link]", {href: launchHelpCommand, title: "Open online help for this page"}, "Help"),
            m("a[id=narrafirma-next-page]", {href: nextPageLink(), title: nextPageTitle(), "class": nextPageClass()}, "=>"),
            m("a[id=narrafirma-previous-page]", {href: previousPageLink(), title:  previousPageTitle(), "class": previousPageClass()}, "<=")
        ]);
    }
};

function previousPageTitle() {
    if (!currentPageSpecification || !currentPageSpecification.previousPageID) return "No previous page";
    return "Previous page";
}

function previousPageClass() {
    if (!currentPageSpecification || !currentPageSpecification.previousPageID) return "narrafirma-link-disabled";
    return "narrafirma-link-enabled";
}

function previousPageLink() {
    if (!currentPageSpecification) return "#";
    return linkForPage(currentPageSpecification.previousPageID);
}

function nextPageTitle() {
    if (!currentPageSpecification || !currentPageSpecification.nextPageID) return "No next page";
    return "Next page";
}

function nextPageClass() {
    if (!currentPageSpecification || !currentPageSpecification.nextPageID) return "narrafirma-link-disabled";
    return "narrafirma-link-enabled";
}

function nextPageLink() {
    if (!currentPageSpecification) return "#";
    return linkForPage(currentPageSpecification.nextPageID);
}

export function initializeNavigationPane(thePanelSpecificationCollection, theUserIdentifier, panelBuilder) {
    panelSpecificationCollection = thePanelSpecificationCollection;
    userIdentifier = theUserIdentifier;
    
    Navigation.panelBuilder = panelBuilder;
    navigationController = m.mount(document.getElementById("navigationDiv"), Navigation);
}
    
export function setCurrentPageSpecification(pageID, pageSpecification) {
    currentPageSpecification = pageSpecification;
    
    navigationController.pageID = pageID;
    navigationController.pageSpecification = pageSpecification;
}

function buildBreadcrumbs(controller) {
    var pageID = controller.pageID;
    var pageSpecification = controller.pageSpecification;
    
    currentPageSpecification = pageSpecification;
    
    if (!pageSpecification) return ["Starting up..."];

    var breadcrumbs = [];
    if (pageID !== PanelSetup.startPage()) {
        breadcrumbs.push(htmlForBreadcrumb(PanelSetup.startPage(), "Home"));
        breadcrumbs .push(" > ");
        // console.log("pageSpecification", pageSpecification);
        // TODO: Should lookup name of section
        if (!pageSpecification.isHeader) {
            var sectionPageSpecification = panelSpecificationCollection.getPageSpecificationForPageID("page_" + pageSpecification.section);
            if (sectionPageSpecification) {
                breadcrumbs.push(htmlForBreadcrumb(sectionPageSpecification.id, sectionPageSpecification.displayName));
                breadcrumbs.push(" > ");
            } else {
                console.log("ERROR: could not find sectionPageSpecification for: ", pageSpecification.section, pageSpecification);
            }
        }
    }
    breadcrumbs.push(m("span", {id: "narrafirma-breadcrumb-current"}, pageSpecification.displayName));
    return breadcrumbs;
}

function linkForPage(pageIdentifier) {
    if (!pageIdentifier) return "javascript:void(0)";
    return "javascript:narrafirma_openPage(\'" + pageIdentifier + "\')";
}

function htmlForBreadcrumb(pageIdentifier, pageName) {
    return m("a", {href: linkForPage(pageIdentifier)}, pageName);
}

export function getCurrentPageSpecification() {
    return currentPageSpecification;
}