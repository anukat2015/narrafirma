define([], function() {
    "use strict";
    return [
        {
            id: "page_collectionDesign",
            displayName: "Collection design",
            displayType: "page",
            isHeader: true,
            section: "collection_design",
            modelClass: "ProjectModel"
        },
        {
            id: "project_collectionDesignStartLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "In the collection design phase of your PNI project, you will decide on story collection venues,\ncreate some story eliciting and story interpretation questions, design your story collection form, and plan any story collection sessions you want to hold."
        },
        {
            id: "project_generalNotes_collectionDesign",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Collection design notes",
            displayPrompt: "You can enter some general notes on collection design in this project here."
        }
    ];
});