import toaster = require("./panelBuilder/toaster");
import PanelBuilder = require("./panelBuilder/PanelBuilder");
import PanelSpecificationCollection = require("./panelBuilder/PanelSpecificationCollection");
import PointrelClient = require("./pointrel20150417/PointrelClient");
import m = require("mithril");

"use strict";

var journalIdentifier = "NarraFirma-administration";
var projectAdministrationTopic = "ProjectAdministration";
var userIdentifier;

var pointrelClient: PointrelClient;

var allProjectsModel = {
    users: [],
    projects: []
};

// GUI
var serverStatusPane;

// TODO: Change this to use Mithril and update it to use new approach to projects, users, and roles
console.log("UNFINISHED!!!");
// alert("Unfinished");

var journalName = m.prop("");
var userName = m.prop("");
var userPassword = m.prop("");
var roleName = m.prop("");
var topicName = m.prop("");

var AdminPageDisplayer: any = {
    controller: function(args) {
        console.log("AdminPageDisplayer created");
    },
    
    view: function(controller, args) {
        var contentsDiv;
        
        console.log("&&&&&&&&&& view called in AdminPageDisplayer");
        
        return m("div.pageContents", {key: "pageContents"}, [
            m("div", [
                m("b", "Project Administration Tool"),
                " | Logged in as: " + userIdentifier + " ",
                m("a", {href: "/logout"}, "Log Out")
            ]),
            m("div", "Server status: unknown"),
            m("br"),
            m("br"),
            m("div", [
                m("label", {"for": "jn1"}, "Journal name: NarraFirma-"),
                m("input", {id: "jn1", value: journalName(), onchange: m.withAttr("value", journalName)}),
                m("br"),
                m("button", {onclick: addJournalClicked}, "Add journal"),
                m("button", {onclick: grantAnonymousAccessToJournalForSurveysClicked}, "Grant anonymous survey access"),
                m("br")
            ]),
            m("br"),
            m("br"),
            m("div", [
                m("label", {"for": "un2"}, "User name: "),
                m("input", {id: "un2", value: userName(), onchange: m.withAttr("value", userName)}),
                m("br"),
                m("label", {"for": "p2"}, "Password: "),
                m("input", {id: "p2", value: userPassword(), onchange: m.withAttr("value", userPassword)}),
                m("br"),
                m("button", {onclick: addUserClicked}, "Add user"),
                m("br")
            ]),
            m("br"),
            m("br"),
            m("div", [
                m("label", {"for": "un3"}, "User name: "),
                m("input", {id: "un3", value: userName(), onchange: m.withAttr("value", userName)}),
                m("br"),
                m("label", {"for": "r3"}, "Role: "),
                m("input", {id: "r3", value: roleName(), onchange: m.withAttr("value", roleName)}),
                m("br"),
                m("label", {"for": "jn3"}, "Journal: "),
                m("input", {id: "jn3", value: journalName(), onchange: m.withAttr("value", journalName)}),
                m("br"),
                m("label", {"for": "t3"}, "Topic: "),
                m("input", {id: "t3", value: topicName(), onchange: m.withAttr("value", topicName)}),
                m("br"),
                m("button", {onclick: accessClicked.bind(null, "grant")}, "Grant"),
                m("button", {onclick: accessClicked.bind(null, "evoke")}, "Revoke"),
                m("br")
            ])
        ]);
    }
};

function addJournalClicked() {
    console.log("addJournalClicked", journalName());
}

function addUserClicked() {
    console.log("addJournalClicked", userName(), userPassword());
}

function accessClicked(grantOrRevoke: string) {
    console.log("accessClicked", grantOrRevoke, userName(), roleName(), journalName(), topicName());
}

function grantAnonymousAccessToJournalForSurveysClicked() {
    console.log("grantAnonymousAccessToJournalForSurveysClicked", journalName());
}

function initialize(theUserIdentifier) {
    console.log("initialize called in site.js");
    toaster.createToasterWidget(document.getElementById("toasterDiv"));
    
    userIdentifier = theUserIdentifier;
    
    // turn off initial "please wait" display
    document.getElementById("pleaseWaitDiv").style.display = "none";
    document.getElementById("pageDiv").style.display = "block";
   
    toaster.toast("Running...");
    
    m.mount(document.getElementById("pageDiv"), AdminPageDisplayer);
    
    var userCredentials = {userIdentifier: userIdentifier};
    
    pointrelClient = new PointrelClient("/api/pointrel20150417", journalIdentifier, userCredentials, null, updateServerStatus);

    pointrelClient.reportJournalStatus(function(error, response) {
        console.log("reportJournalStatus response", error, response);
        if (error) {
            console.log("Failed to startup project", error);
            alert("Problem connecting to journal on server. Application will not run.");
            // document.getElementById("pleaseWaitDiv").style.display = "none";
            // TODO: Sanitize journalIdentifier
            document.body.innerHTML += '<br>Problem connecting to project journal on server for: "<b>' + journalIdentifier + '</b>"';
        } else {
            var permissions = response.permissions;
            if (!permissions.read) {
                alert("No read access -- try logging in first as an administrator");
                return;
            }
            if (!permissions.write) {
                alert("No write access -- try logging in first as an administrator");
            }
            /*
            loadAllProjectsModel(allProjectsModel, function (error) {
                if (error) {
                    // It is possible no data was ever set
                    console.log("error", error);
                }
                buildGUI(contentPane, allProjectsModel, permissions.write);
            });
            */
        }
    });
}

function updateServerStatus(status, text) {
    console.log("++++++++++++++++++++++++++++++++++++++++ updateServerStatus", text);
    // The serverStatusPane may be created only after we start talking to the server
    if (!serverStatusPane) return;
    serverStatusPane.set("content", "Server status: " + text);
}

/*

function loadAllProjectsModel(model, callback) {
    console.log("loadAllProjectsModel initial", model);
    
    pointrelClient.fetchLatestMessageForTopic(projectAdministrationTopic, function(error, response) {
        if (error) {
            callback(error);
        } else {
            var message = null;
            if (response.latestRecord) {
                message = response.latestRecord.messageContents;
            }
            if (!message) {
                console.log("No latest message was available");
                callback(null);
                return;
            }
            if (message.messageType !== "ProjectAdministration-SetAll") {
                console.log("Unexpected response messageType", response);
                callback("Unexpected response messageType");
            } else {
                var newModel = message.change;
                for (var key in newModel) {
                    model.set(key, newModel[key]);
                }
                callback(null);
            }
        }
    });
}

function saveButtonClicked(model) {
    var plainValue = getPlainValue(model);
    console.log("saveButtonClicked plainValue", plainValue);
    toaster.toast("Saving...");
    
    // TODO: Need callback to report status on save...
    pointrelClient.createAndSendChangeMessage(projectAdministrationTopic, "ProjectAdministration-SetAll", model, null, function (error, response) {
        console.log("createAndSendChangeMessage", error, response);
        if (error) {
            toaster.toast("Save failed; see console for details");
        } else {
            // TODO: Maybe need to check response status?
            toaster.toast("Saved OK");
        }
    });
}

var userRoles = [
    "admin",
    "editor",
    "author",
    "contributor",
    "subscriber",
    "anonymous"
];

// TODO: Translate
var userPanelSpecification = {
    "id": "panel_user",
    "displayName": "User",
    "displayType": "panel",
    "section": "admin",
    "modelClass": "User",
    "panelFields": [
        {
            "id": "id",
            "valueType": "string",
            "displayType": "text",
            "displayName": "System user identifier",
            "displayPrompt": "System user identifier",
            "displayReadOnly": true
        },
        {
            "id": "email",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Email",
            "displayPrompt": "Email"
        },
        // TODO: Use password hash! Add button to set it.
        {
            "id": "password",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Password",
            "displayPrompt": "Password"
        },
        {
            "id": "groups",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Groups",
            "displayPrompt": "Groups (space separated; standard groups include admin, editor, author, contributor, and subscriber)"
        },
        {
            "id": "fullName",
            "valueType": "string",
            "displayType": "text",
            "displayName": "User name",
            "displayPrompt": "User name"
        }
    ]
};

// TODO: Translate
var projectDescriptionPanelSpecification = {
    "id": "panel_projectDescription",
    "displayName": "Project description",
    "displayType": "panel",
    "section": "admin",
    "modelClass": "ProjectDescription",
    "panelFields": [
        {
            "id": "id",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Project identifier",
            "displayPrompt": "Project identifier"
            // "displayReadOnly": true
        },
        {
            "id": "name",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Name",
            "displayPrompt": "Project Name"
        },
        {
            "id": "description",
            "valueType": "string",
            "displayType": "textarea",
            "displayName": "Description",
            "displayPrompt": "Project Description"
        },
        {
            "id": "editors",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Editors",
            "displayPrompt": "Editors (space separated; can be group like admin, editor, author, contributor, subscriber, or anonymous)"
        },
        {
            "id": "viewers",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Viewers",
            "displayPrompt": "Viewers (space separated; can be group)"
        },
        {
            "id": "surveyTakers",
            "valueType": "string",
            "displayType": "text",
            "displayName": "Survey takers",
            "displayPrompt": "Survey takers (space separated; can be group)"
        }
    ]
};

function buildGUI(mainContentPane, model, writeAccess) {
    var panelSpecificationCollection = new PanelSpecificationCollection();
    
    // Add panels to be looked up by panel builder for grid
    panelSpecificationCollection.addPanelSpecification(userPanelSpecification);
    panelSpecificationCollection.addPanelSpecification(projectDescriptionPanelSpecification);

    var panelBuilder = new PanelBuilder({panelSpecificationCollection: panelSpecificationCollection});
    
    var panelContentPane = panelBuilder.newContentPane();
    
    var userGridSpecification = {
        id: "users",
        valueType: "array",
        displayType: "grid",
        displayConfiguration: {
            itemPanelID: "panel_user",
            idProperty: "id",
            gridConfiguration: {
                viewButton: true,
                editButton: true,
                addButton: true,
                removeButton: true,
                includeAllFields: ["id", "fullName", "email", "groups"]
            }
            // , customButton: {customButtonLabel: "Open panel", callback: _.partial(openPanel, panelContentPane, panelSpecificationCollection, panelBuilder)}}
        },
        displayName: "Users",
        displayPrompt: "Users"
    };
    
    var userGrid = panelBuilder.buildField(model, userGridSpecification);
    userGrid.grid.set("selectionMode", "single");
        
    var projectGridSpecification = {
        id: "projects",
        valueType: "array",
        displayType: "grid",
        displayConfiguration: {
            itemPanelID: "panel_projectDescription",
            idProperty: "id",
            gridConfiguration: {
                viewButton: true,
                editButton: true,
                addButton: true,
                removeButton: true,
                includeAllFields: ["id", "name", "description"]
            }
            // , customButton: {customButtonLabel: "Open panel", callback: _.partial(openPanel, panelContentPane, panelSpecificationCollection, panelBuilder)}}
        },
        displayName: "Projects",
        displayPrompt: "Projects"
    };
    
    var projectGrid = panelBuilder.buildField(model, projectGridSpecification);
    projectGrid.grid.set("selectionMode", "single");
    
    var saveButtonSpecification = {
        id: "saveButton",
        displayType: "button",
        displayName: "Save",
        displayPrompt: "Save",
        displayConfiguration: function() {
            saveButtonClicked(model);
        }
    };
    
    if (writeAccess) {
        var saveButton = panelBuilder.buildField(model, saveButtonSpecification);
    }
    
    panelContentPane.placeAt(mainContentPane);
}

*/
// Throwaway single-use pointrel client instance which does not access a specific journal
var singleUsePointrelClient = new PointrelClient("/api/pointrel20150417", "unused", {});
singleUsePointrelClient.getCurrentUserInformation(function(error, response) {
    if (error) {
        console.log("error", error, response);
        alert("Something went wrong determining the current user identifier");
        return;
    }
    initialize(response.userIdentifier);
});

