define([], function() {
    "use strict";
    return [
        {
            id: "panel_newCollectionSessionConstruction",
            displayName: "Story collection construction",
            displayType: "panel",
            section: "collection_process",
            modelClass: "NewCollectionSessionConstructionModel"
        },
        {
            id: "collectionSessionRecord_construction_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this construction a name."
        },
        {
            id: "collectionSessionRecord_construction_type",
            dataType: "string",
            dataOptions: ["timeline","landscape","other"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of construction is it?"
        },
        {
            id: "collectionSessionRecord_construction_description",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Description",
            displayPrompt: "Please describe the construction (or include a description given by participants).\nYour description can include links to images or other documents."
        }
    ];
});