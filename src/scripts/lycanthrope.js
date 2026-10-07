import { registerAncestryProfile } from "/modules/FVTT_Pf2eAALibrary/src/scripts/ancestry-registry.js";
import { MODULE_ID } from "./module-constants.js";

registerAncestryProfile({
    slug: "lycanthrope",
    meter: {
        moduleId: MODULE_ID,
        flag: "ferality",
        label: "FVTT_PF2EAALYCANTHROPE.METERS.FERALITY.LABEL",
        empty: "FVTT_PF2EAALYCANTHROPE.METERS.FERALITY.EMPTY",
        defaultMax: 7,
    },
});
