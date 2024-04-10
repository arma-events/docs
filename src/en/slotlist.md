---
outline: deep
---

# Slotlist

![Slotlist Overview](../images/slotlist/slotlist-overview.webp "Slotlist Overview")

Every new slotlist starts with a faction and a company in it. This is the required minimum. As long as you do not set the name of the dummy faction and the dummy company they will be hidden in the slotlist. You can't delete the dummy faction and the dummy company or move them around. They are always the last items. The dummy faction and the dummy company are indicated by a grey heading. All other factions and companies are deletable and moveable.

You can **undo or redo** every change inside the slotlist editor. The history has a limit of 20 steps. You can **add more factions, companies or groups** by pressing the `+` button. You can **change the order** of factions, companies inside factions, groups inside companies and groups inside groups by using the four dots handle. As long as the **names** are not set (grey heading) they will be hidden in the final slotlist. Every round `+` button in the slotlist indicates a position where **player slots** can be added.

## Organizational Units

| OU       | Parent                     | Children       | Slots | Properties   | Characteristics |
| ---      | ------                     | --------       | ----- | ----------   | --------------- |
| Faction* | none                       | Company        | no    | Color, Name  | Parties that are part of the conflict like OPFOR, BLUFOR, Independent |
| Company* | Faction                    | Group or Slot  | yes   | Name, Symbol | Highest organizational unit in a faction; can be Company, Platoon, Squad, Group or anything else |
| Group    | Company or Group           | Group or Slot  | yes   | Name, Symbol | Lower/Middle organizational unit; can host other groups; can be Platoon, Squad, Group or anything else |
| Fireteam | Group                      | Slot           | yes   | none         | Smallest organizational unit |
| Slot     | Company, Group or Fireteam | none           | no    | Name         | The player's slot |

\**There is always one dummy faction and one dummy company*

## Create Factions, Companies, Groups

You can create factions, companies and groups by clicking the square `+` button in the lower menu bar and then dragging and dropping the dedicated item onto one of the possible drop zones indicated by a grey bar. The currently active drop zone gets bigger and the color changes to a darker grey to indicate current selection. You can create groups inside of groups.

<video controls autoplay muted><source src="../videos/slotlist/create-factions-companies-groups.webm" type="video/webm">Your browser does not support the video tag.</video>

## Create Slots

Slots are created by pressing the round `+` symbol one or multiple times. There is no natural slot limit but keep your slotlist organized by creating not too big units. The first slot in a company or in a group is always a leader slot. The avatar is bigger and the default name is **CL** (Company Lead) or **SQL** (Squad Lead). You can change the slot names later. The first slot inside a fireteam is called **FTL** (Fireteam Lead) but the avatar size is not increased.

<video controls autoplay muted><source src="../videos/slotlist/create-slots.webm" type="video/webm">Your browser does not support the video tag.</video>

## Create Fireteams

Fireteams are a special type of unit. You can create the first fireteam only inside of a group by dragging an existing slot onto the bottom drop zone. One group can divide into multiple fireteams. Create additional fireteams by clicking on the three dots symbol.

<video controls autoplay muted><source src="../videos/slotlist/create-fireteams.webm" type="video/webm">Your browser does not support the video tag.</video>

## Move Factions, Companies, Groups

You can move factions, companies and groups by using the four dots icons. Grey drop zone bars indicate the valid positions where you can move the items to. The currently selected drop zone is rendered darker and bigger then the not selected ones.

<video controls autoplay muted><source src="../videos/slotlist/move-factions-companies-groups.webm">Your browser does not support the video tag.</video>

## Move Slots

You can move slots around by dragging and dropping them onto the highlighted drop zones. The currently selected drop zone is rendered darker and bigger then the not selected ones.

<video controls autoplay muted><source src="../videos/slotlist/move-slots.webm">Your browser does not support the video tag.</video>

> [!IMPORTANT]
> You can't move fireteams around. If you want to move a fireteam then you need to swap slots.

## Rename Factions, Companies, Groups

WIP

## Rename Slots

WIP

## Delete Factions, Companies, Groups

You can delete factions, companies and groups by dragging and dropping them on the trash can symbol. Child elements will be deleted as well. If you for example delete a faction then all companies and groups in that faction will be deleted accordingly.

<video controls autoplay muted><source src="../videos/slotlist/delete-factions-companies-groups.webm">Your browser does not support the video tag.</video>

## Delete Slots

WIP

> [!IMPORTANT]
> You can't delete fireteams. If you want to delete a fireteam then you need to delete it's slots.
