define([], function() {
    "use strict";
    return [
        {
            id: "page_recordInterventions",
            displayName: "Enter intervention records",
            displayType: "page",
            section: "intervention",
            modelClass: "ProjectModel"
        },
        {
            id: "project_interventionRecordsLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will enter records of your interventions."
        },
        {
            id: "project_interventionRecordsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addInterventionRecord",
            displayName: "Intervention records",
            displayPrompt: "Use this list to keep records of the interventions you carried out."
        }
    ];
});