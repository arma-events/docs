---
outline: deep
cSpell: locale de
---

# Events

## Event erstellen

Du kannst jederzeit ein Event für deine Community erstellen indem du das `+` Symbol neben deinem Profil-Avatar anklickst und **Event erstellen** auswählst.

![Event erstellen](../images/events/create-event.png "Event erstellen")

Ein Community-Event zu erstellen benötigt nur 4 einfache Schritte. Alles, was du hier einstellst, mit Ausnahme des gewählten Spiels, kann später geändert werden.

Wähle zuerst das Spiel aus, das in dem Event gespielt wird. Aktuell werden **Arma 3** und **Arma Reforger** unterstützt. Nach Veröffentlichung wird diese Liste auch **Arma 4** umfassen.

Wähle als nächstes die Community für dein Event. Du kannst aus einer Liste aller Communities wählen deren Mitglied du bist.

Nun wähle einen Event-Titel oder generiere einen Zufallstitel durch klicken auf das Würfel-Symbol.

> [!CAUTION]
> Die Länge des Event-Titels ist aktuell nicht beschränkt. Bitte beschränke dich auf eine Länge von weniger als 32 Unicode-Zeichen.

Der letzte Schritt ist die Auswahl von Datum und Uhrzeit, an der dein Event beginnt. Du kannst Datum und Uhrzeit manuell angeben oder den plattformabhängigen Dialog für Datum und Uhrzeit verwenden, um den Start deines Events festzulegen. Du kannst kein vergangenes Datum oder vergangene Uhrzeit wählen.

![Assistent Event erstellen](../images/events/create-event-workflow.png "Assistent Event erstellen")

Nach Abschluss des Assistenten befindet sich dein Event im **Entwurfsstatus**. Nun kannst du die Details deines Events festlegen. Im Entwurfsstatus wird dein Event nicht gelistet oder ist irgendwo sichtbar. Nur Autoren können auf das Event zugreifen.

Du kannst jederzeit deinen Entwurf schließen durch klicken auf die `X` Schaltfläche oder dein Event veröffentlichen durch klicken auf die **Veröffentlichen** Schaltfläche. Dadurch verlässt dein Event den Entwurfsstatus und ist für alle **arma.events** Benutzer und insbesondere für deine Community und für deine Gäste sichtbar.

Speichere deine Änderungen durch klicken auf die **Entwurf speichern** Schaltfläche und schau dir deine Änderungen im Vorschaumodus an durch klicken auf die **Vorschau** Schaltfläche.

![Preview-Wechsel](../images/events/preview-toggle.png "Preview-Wechsel")

### Event Details

Your given **event title** (1) was used in the event creation process to create an **event handle** (2) that is restricted to min. 5 and max. 32 web-friendly characters. Both can be changed but the event handle needs to be unique. You will get a feedback if the chosen name is available every time you try to change it.

The **summary** (3) is a max 280 unicode characters long description of your event. It's used in overviews but not in the detailed view of your event.

Every event can have one or more **authors** (4). Only authors and admins can change/manage the event settings. Add more authors by pressing the `+` button or remove existing authors including yourself by hovering with the mouse over the avatar image and pressing the trash can icon.

By default only members of your community can join your event but you can allow/invite more **communities** by clicking on the communities fold-out menu and hitting the **Add Community** button. You will get a search field to search for the community you want to invite. Guest community members can join your events like your origin community members.

If the chosen game supports DLCs like for example Arma 3 then you can set some or all of them as required for this event by clicking on the **DLCs** (6) fold-out menu. Here you can specify all required DLCs. Only DLCs that need to be purchased will be listed here. For example the Arma 3 Zeus DLC is not listed here because it's free.

The **date and time** (7) your event starts can be changed in the according fold-out menu. Choose a date that is in the future.

It's a good choice to add a teaser **image** (8). If you leave the image blank then the space is filled with the custom background color of your community.

You can also add **tags** to organize your event. In the future tags will be used as quick search terms.

![Event Details](../images/events/event-details.png "Event Details")

### Block Editor

The Block Editor finally allows you to create your event briefing or any kind of description or documentation that you want to provide with your newly created event.

Create text blocks and image blocks by pressing the corresponding buttons **Add Text** and **Add Image**. You can create as much blocks as you want. Use the four dots symbol to move the blocks around and change their order.

![Block Editor Order](../videos/events/block-editor-order.gif "Block Editor Order")

For every block you can decide to collapse or expand it by default. That way you can hide more detailed information and only show the most significant blocks. The user can expand or collapse every block while reading through the event documentation.

Every block consists of a heading part and a content part. Using the heading is completely optional.

#### Text Blocks

The text block supports Markdown in it's content part which enables you to use subheadlines, lists, links, images, text attributes and many more. See the [Markdown](./markdown "Markdown") article for more information.

The Text block ist resizeable while editing but will automatically adjust it's size in preview and when published based on it's content.

![Text Block](../images/events/text-block.png "Text Block")

#### Image Blocks

Image blocks allow you to embed one or more images. You can setup an image title for every image separately.

> [!IMPORTANT]
> Multi-Image upload is currently not supported. Upload your images separately.

![Image Block](../images/events/image-block.png "Image Block")

You can change the order of your images inside the image block.

![Image Block Order](../videos/events/image-block-order.gif "Image Block Order")

## Manage Slotlist

WIP

## Delete Event

You can simply delete your event by pressing the **Delete Event** button.

![Delete Event](../images/events/delete-event.png "Delete Event")
