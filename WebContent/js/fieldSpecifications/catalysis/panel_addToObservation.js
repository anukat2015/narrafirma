define([], function() {
    "use strict";
    return [
        {
            id: "panel_addToObservation",
            displayName: "Add to observation",
            displayType: "panel",
            section: "catalysis",
            modelClass: "ToObservationModel"
        },
        {
            id: "addToObservation_introduction",
            dataType: "none",
            displayType: "label",
            displayPrompt: "Note: You should not add any observations that depend on patterns among stories until after\nall stories have been entered."
        },
        {
            id: "observationsListChoose",
            dataType: "none",
            displayType: "observationsList",
            displayPrompt: "Choose an observation from this list to which to add the selected result, or create a new observation."
        },
        {
            id: "addToObservation_addResultToExistingObservationButton",
            dataType: "none",
            displayType: "button",
            displayPrompt: "Add result to selected observation"
        },
        {
            id: "addToObservation_createNewObservationWithResultButton",
            dataType: "none",
            displayType: "button",
            displayConfiguration: "panel_createNewObservation",
            displayPrompt: "Create new observation with this result"
        }
    ];
});