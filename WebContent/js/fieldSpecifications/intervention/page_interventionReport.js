define([], function() {
    "use strict";
    return [
        {
            id: "page_interventionReport",
            displayName: "Read intervention report",
            displayType: "page",
            section: "intervention",
            modelClass: "ProjectModel"
        },
        {
            id: "interventionReportLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "This report shows all of the information entered in the pages grouped under \"Intervention.\""
        },
        {
            id: "interventionReport",
            dataType: "none",
            displayType: "report",
            displayConfiguration: "intervention",
            displayPrompt: "Intervention report"
        }
    ];
});