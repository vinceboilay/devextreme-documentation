---
id: dxAccordion.Options.onItemTitleClick
type: function(e) | String
default: null
EventForAction: dxAccordion.itemTitleClick
---
---
##### shortDescription
A function that is executed when an accordion item's title is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
