# Slotlist

![Slotlist Overview](../images/slotlist-overview.png "Slotlist Overview")

Every new slotlist starts with a faction and a company in it. This is the required minimum. As long as you do not set the name of the dummy faction and the dummy company they will be hidden in the slotlist. You can't delete the dummy faction and the dummy company or move them around. They are always the last items. The dummy faction and the dummy company are always indicated by a grey heading. All other factions and companies are deleteable and moveable.

You can **undo or redo** (1) every change inside the slotlist editor. The history has a limit of 20 steps. You can **add more factions, companies or groups** by pressing the `+` button. You can **change the order** (4) of factions, companies inside factions, groups inside companies and groups inside groups by using the four dots handle. As long as the names (5) are not set (grey heading) they will be hidden in the final slotlist. Every round `+` button in the slotlist indicates a position where **player slots can be added** (6).

## Factions vs. Companies vs. Groups vs. Fireteams vs. Units

| OU*      | Optional | Parent                     | Children       | Slots | Properties   | Characteristics |
| ---      | -------- | ------                     | --------       | ----- | ----------   | --------------- |
| Faction  | no       | none                       | Company        | no    | Color, Name  | Parties that are part of the conflict like OPFOR, BLUFOR, Independant |
| Company  | no       | Faction                    | Group or Slot  | yes   | Name, Symbol | Highest organisational unit in a faction; can be Company, Platoon, Squad, Group or anything else |
| Group    | yes      | Company or Group           | Group or Slot  | yes   | Name, Symbol | Lower/Middle organisational unit; can host other groups; can be Platoon, Squad, Group or anything else |
| Fireteam | yes      | Group                      | Slot           | yes   | none         | Smallest organisational unit |
| Slot     | no       | Company, Group or Fireteam | none           | no    | Name         | The player's slot |

\**Organisational Unit*

## Create Factions, Companies and Groups

You can create factions, companies and groups by clicking the square `+` button in the lower menu bar and then dragging and dropping the dedicated item onto one of the possible drop zones indicated by a grey bar. The currently active drop zone gets bigger and a darker grey to indicate activation.

![Create Factions, Companies and Groups](../videos/create-factions-companies-groups.gif "Create Factions, Companies and Groups")

## Create Slots

Slots are created by pressing the round `+` symbol one or multiple times. The is no natural slot limit but keep your slotlist organized by creating not to big units. The first slot in a Company or a group is always a leader slot. The icon is bigger and the default name is **CL** (Company Lead) or **SQL** (Squad Lead). You can change the slot names later. The first slot inside a fireteam is called **FTL** (Fireteam Lead) but the icon size is not increased.

![Create Slots](../videos/create-slots.gif "Create Slots")

## Create Fireteams

Fireteams are a special type of unit. You can create fireteams only inside of groups by dragging existing slots at the bottom drop zone. One group can devide into multiple fireteams.

![Create Fireteams](../videos/create-fireteams.gif "Create Fireteams")

## Moving Factions, Companies, Groups

## Moving Slots

## Rename Factions, Companies and Groups

WIP

## Rename Slots

WIP

## Delete Factions, Companies and Groups

## Delete Slots

WIP

## Delete Fireteams

## Complex Slotlists
