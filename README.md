# PF2e Accursed Ancestries: Lycanthrope

> GM Warning: This is meant to be a roleplay heavy ancestry.
>
> Some examples of roleplay would be:
>
> - The average NPC would fear most Lycanthrope and that will affect relations, positively or negatively.
> - The characters would become more feral and their ferality continuing to rise would have the character act more bestial, eventually having them "black out" and their feral beast takes over. You've probably seen something like it in a bunch of Were-wolf movies

A custom Lycanthrope ancestry module for PF2e on Foundry VTT. This came about because of a few grievances:

- Becoming a Lycanthrope changes your entire physiology.
- A Dedication can only be taken every two levels and takes your class feats. This technically means you cannot start at level 1 as a Vampire.
- I actually like the majority of the Werecreature dedication and several of the feats were copied or used as a basis.

Token images for the Animal and Hybrid forms are defaulted to the Official [PF2E Tokens: Bestiaries](https://store.paizo.com/pathfinder-tokens-bestiaries-foundry-vtt-code/) Selachine (Were-sharks) do not have official art as of now. If you have custom images, update them in the rule elements of the heritages.

## Optional Additional Module

[Calendaria](https://github.com/Sayshal/Calendaria) - To help with tracking the phases of the moon.

## Installation

```
https://github.com/HavocsCall/FVTT_Pf2eAALycanthrope/releases/latest/download/module.json
```

## Currently Implemented

### Former ancestry support

The ability to select which ancestry you were before becoming a vampire. This will retain your former ancestry's HP, size, hands, reach, speed, boosts, flaws, languages, vision, traits, and items. You will be able to select both Vampire and your former ancestry's feats when gaining an Ancestry Feat.

### Ferality Tracking

I'll be honest, I have not figured out a good mechanical way to implement this idea. I don't want to burden the GM and players. The idea behind this is that the character would become more feral as it raises and would be forced into their Hybrid forms and `Confused` at a specified interval

- Based on the current moon phase: Requires the GM and player to track the phase of the moon... maybe, but Ferality meter would not be needed at that point and would require an additional module or I would need to make a moon tracking piece...
- Have it increase daily like hunger, but it be more fluid with what takes it down.

### Ancestry Feats

| Heritage     | Level 1 | Level 5 | Level 9 | Level 13 | Level 17 | Total |
| ------------ | ------: | ------: | ------: | -------: | -------: | ----: |
| Crocodiline  |       3 |       4 |       3 |        0 |        0 |    10 |
| Lupine       |       3 |       4 |       3 |        0 |        0 |    10 |
| Ursine       |       3 |       4 |       3 |        0 |        0 |    10 |
| Pantherine   |       3 |       4 |       3 |        0 |        0 |    10 |
| Suine        |       3 |       4 |       3 |        0 |        0 |    10 |
| Vespertiline |       3 |       4 |       2 |        0 |        0 |     9 |
| Selachine    |       3 |       4 |       3 |        0 |        0 |    10 |
| Murine       |       3 |       4 |       3 |        0 |        0 |    10 |

Counts include feats without a heritage-specific prerequisite for every heritage. Feats that name multiple heritages are included for each named heritage; all other prerequisites must still be met normally.

## Settings

- `Former Ancestry: Use expanded sync`
- `Former Ancestry: Available sources` (defaults to the PF2e Ancestries compendium)
- `Ferality Meter: Show character sheet panel`

See [CONTRIBUTING.md](CONTRIBUTING.md) for the version policy and release commands.

## Special Thanks

- [Mythkeeper](https://www.youtube.com/@TheMythkeeper) for their [Were-creature video](https://youtu.be/13cMpud6ugM)

## AI Acknowledgement

Codex was used to assist with documentation, consistency checking, and a few code fixes. The ideas for the Ancestry, Heritages, and feats were mine and my PF23 group's. All AI generations were checked and tested by me and my PF2e group.
