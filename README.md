# PF2e Accursed Ancestries: Lycanthrope

A custom lycanthrope ancestry module for PF2e on Foundry VTT. It was created to address a few concerns with representing lycanthropes through an archetype:

- Becoming a lycanthrope changes your entire physiology.
- A dedication uses class-feat selections and generally grants feats only at even-numbered levels, so it does not allow a character to begin as a lycanthrope at level 1.
- I like most of the werecreature dedication, and several of its feats were adapted or used as inspiration.

Token images for the animal and hybrid forms default to artwork from the official [Pathfinder Tokens: Bestiaries](https://store.paizo.com/pathfinder-tokens-bestiaries-foundry-vtt-code/). Selachine (were-sharks) do not currently have official artwork. To use custom images, update the rule elements in the corresponding heritages.

> GM Warning: This ancestry is intended for roleplay-heavy campaigns.
>
> Some potential roleplaying considerations include:
>
> - The average NPC may fear lycanthropes, affecting their interactions with lycanthrope characters both positively and negatively.
> - As a character's Ferality rises, they may act more bestially and eventually black out as their feral nature takes over, much like portrayals in werewolf movies.

## Optional Additional Module

[Calendaria](https://github.com/Sayshal/Calendaria) can help track the phases of the moon.

## Installation

```
https://github.com/HavocsCall/FVTT_Pf2eAALycanthrope/releases/latest/download/module.json
```

## Currently Implemented

### Former Ancestry Support

Select the ancestry your character had before becoming a lycanthrope. This retains the former ancestry's HP, size, hands, reach, speed, boosts, flaws, languages, vision, traits, and items. When gaining an ancestry feat, you can select from both lycanthrope feats and your former ancestry's feats.

### Ferality Tracking

Ferality currently provides a manually adjusted meter on the character sheet. A broader mechanical implementation has not been finalized because it should not overburden GMs or players. The concept is that increasing Ferality would make a character more bestial, potentially forcing them into hybrid form or applying conditions at defined intervals.

Potential approaches include:

- Basing Ferality on the current moon phase. This would require moon-phase tracking, such as the optional Calendaria integration, and might make the Ferality meter unnecessary.
- Increasing Ferality daily, like Hunger, while providing more flexible ways to reduce it.

### Ancestry Feats

| Heritage     | Level 1 | Level 5 | Level 9 | Level 13 | Level 17 | Total |
| ------------ | ------: | ------: | ------: | -------: | -------: | ----: |
| Crocodiline  |       3 |       4 |       2 |        0 |        0 |     9 |
| Lupine       |       3 |       4 |       2 |        0 |        0 |     9 |
| Ursine       |       3 |       4 |       2 |        0 |        0 |     9 |
| Pantherine   |       3 |       4 |       2 |        0 |        0 |     9 |
| Suine        |       3 |       4 |       2 |        0 |        0 |     9 |
| Vespertiline |       3 |       4 |       2 |        0 |        0 |     9 |
| Selachine    |       3 |       4 |       2 |        0 |        0 |     9 |
| Murine       |       3 |       4 |       2 |        0 |        0 |     9 |

Counts include feats without a heritage-specific prerequisite for every heritage. Feats that name multiple heritages are included for each named heritage; all other prerequisites must still be met normally.

## Settings

- `Former Ancestry: Use expanded sync`
- `Former Ancestry: Available sources` (defaults to the PF2e Ancestries compendium)
- `Ferality Meter: Show character sheet panel`

See [CONTRIBUTING.md](CONTRIBUTING.md) for the version policy and release commands.

## Special Thanks

- [Mythkeeper](https://www.youtube.com/@TheMythkeeper) for their [Werecreature video](https://youtu.be/13cMpud6ugM).

## AI Acknowledgement

AI was used to assist with documentation, consistency checks, and a few code fixes. The ancestry, heritages, and feats were created by me and my PF2e group. All AI-generated output was reviewed and tested by me and my PF2e group.
