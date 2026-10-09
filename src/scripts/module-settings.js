import { reconcileFormerAncestryMode } from "/modules/FVTT_Pf2eAALibrary/src/scripts/former-ancestry-sync.js";
import { refreshFormerAncestryChoices } from "/modules/FVTT_Pf2eAALibrary/src/scripts/former-ancestry-choices.js";
import {
	FERALITY_METER_SETTING,
	FORMER_ANCESTRY_SETTING,
	FORMER_ANCESTRY_SOURCE_SETTING,
	MODULE_ID,
} from "./module-constants.js";

export function registerSettings() {
	game.settings.register(MODULE_ID, FORMER_ANCESTRY_SETTING, {
		name: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYMODE.NAME",
		hint: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYMODE.HINT",
		scope: "world",
		config: true,
		type: Boolean,
		default: true,
		onChange: () => {
			if (!game.user?.isGM) return;
			void reconcileFormerAncestryMode("lycanthrope");
		},
	});

	game.settings.register(MODULE_ID, FORMER_ANCESTRY_SOURCE_SETTING, {
		name: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYSOURCE.NAME",
		hint: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYSOURCE.HINT",
		scope: "world",
		config: true,
		type: String,
		choices: {
			pf2e: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYSOURCE.PF2E",
			all: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FORMERANCESTRYSOURCE.ALL",
		},
		default: "pf2e",
		onChange: () => void refreshFormerAncestryChoices("lycanthrope"),
	});

	game.settings.register(MODULE_ID, FERALITY_METER_SETTING, {
		name: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FERALITYMETER.NAME",
		hint: "FVTT_PF2EAALYCANTHROPE.SETTINGS.FERALITYMETER.HINT",
		scope: "world",
		config: true,
		type: Boolean,
		default: true,
		onChange: rerenderOpenActorWindows,
	});
}

export function isFormerAncestrySyncEnabled() {
	return game.settings.get(MODULE_ID, FORMER_ANCESTRY_SETTING) === true;
}

export function getFormerAncestrySource() {
	return game.settings.get(MODULE_ID, FORMER_ANCESTRY_SOURCE_SETTING);
}

export function isFeralityMeterEnabled() {
	return game.settings.get(MODULE_ID, FERALITY_METER_SETTING) === true;
}

function rerenderOpenActorWindows() {
	for (const app of Object.values(ui.windows)) {
		if (app.document?.documentName === "Actor") app.render(true);
	}
}
