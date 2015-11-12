

app = angular.module("ComponentsService",["Filter","FontService", "StringService"]);


app.service("componentsService",function(fontService, sortByIndexArrayWithBlocksFilter, stringService){
    
    var availableComponents = {textArea:{type: "textArea", description: stringService.getNorwegianString("Textarea"), defaultValue: [stringService.getNorwegianString("Textarea")], maxNumber: -1, usedNumber: 0},
        textColumnArea:{type: "textColumnArea", description: stringService.getNorwegianString("Textarea two columns"), defaultValue: [stringService.getNorwegianString("Textarea first column"), stringService.getNorwegianString("Textarea second column")], maxNumber: -1, usedNumber: 0},
        line:{type: "line", description: stringService.getNorwegianString("Line"), defaultValue: [], maxNumber: -1, usedNumber: 0},
        symbol:{type: "symbol", description: stringService.getNorwegianString("Symbol"), defaultValue: [0], maxNumber: -1, usedNumber: 0},
        shortText:{type: "shortText", description: stringService.getNorwegianString("Short text"), defaultValue: [stringService.getNorwegianString("Short text")], maxNumber: -1, usedNumber: 0},
        name:{type: "name", description: stringService.getNorwegianString("Name"), defaultValue: [stringService.getNorwegianString("Name")], maxNumber: -1, usedNumber: 0},
        dateOfBirth:{type: "dateOfBirth", description: stringService.getNorwegianString("Date of birth"), defaultValue: [stringService.getNorwegianString("f. dd.MM.JJJJ")], maxNumber: -1, usedNumber: 0},
        explanation:{type: "explanation", description: stringService.getNorwegianString("Explanation"), defaultValue: [stringService.getNorwegianString("Explanation")], maxNumber: -1, usedNumber: 0},
        placeDate:{type: "placeDate", description: stringService.getNorwegianString("Place and date"), defaultValue: [stringService.getNorwegianString("Place, Date")], maxNumber: -1, usedNumber: 0},
        familyOneColumn:{type: "familyOneColumn", description: stringService.getNorwegianString("Family"), defaultValue: [stringService.getNorwegianString("Family")], maxNumber: -1, usedNumber: 0},
        familyTwoColumn:{type: "familyTwoColumn", description: stringService.getNorwegianString("Family two columns"), defaultValue: [stringService.getNorwegianString("Family first column"), stringService.getNorwegianString("Family second column")], maxNumber: -1, usedNumber: 0},
        poem:{type: "poem", description: stringService.getNorwegianString("Poem"), defaultValue: [stringService.getNorwegianString("Poem")], maxNumber: -1, usedNumber: 0},
        funeralInfo:{type: "funeralInfo", description: stringService.getNorwegianString("Information about funeral"), defaultValue: [stringService.getNorwegianString("Information about funeral")], maxNumber: -1, usedNumber: 0},
        giftsInfo:{type: "giftsInfo", description: stringService.getNorwegianString("Information about gifts"), defaultValue: [stringService.getNorwegianString("Information about gifts")], maxNumber: -1, usedNumber: 0}};
    
    var components = new Array();
    var linearizedComponents = new Array();
    var orderOfComponents = new Array();
    var blocks = new Array();
    var componentIdCounter = 0;
   
    // getter and setter
    this.getAvailableComponents = function() {
        return availableComponents;
    };
    
    this.setAvailableComponentsNumbersDuringLoading = function(typesNumbersObject) {
        for (var key in availableComponents) {
            if (key in typesNumbersObject) {
                availableComponents[key].maxNumber = typesNumbersObject[key].maxNumber;
            } else {
                alert(stringService.getNorwegianString("Could not load template due to wrong available components!"));
            }
        }
    };
    
    this.getComponents = function(){
        return components;
    };
    
    this.getLinearizedComponents = function() {
        return linearizedComponents;
    };
    
    this.getOrderOfComponents = function() {
        return orderOfComponents;
    };
    
    this.getBlocks = function() {
        return blocks;
    };
    
    // create component
    this.addComponent = function(type, valueOne, valueTwo, isGeneratedFromTemplate, active, fontIndex, sizeIndex){
        var component = null;
        switch (type) {
            case availableComponents.textArea.type:
                component = createTextArea( availableComponents.textArea.type, valueOne,  availableComponents.textArea.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.textColumnArea.type:
                component= createTextColumnArea(availableComponents.textColumnArea.type, valueOne, valueTwo, availableComponents.textColumnArea.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.line.type:
                component = createLine(isGeneratedFromTemplate, active);
                break;
            case availableComponents.symbol.type:
                component = createSymbol(valueOne, isGeneratedFromTemplate, active);
                break;
            case availableComponents.shortText.type:
                component = createTextArea(availableComponents.shortText.type, valueOne, availableComponents.shortText.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.name.type:
                component = createTextArea(availableComponents.name.type, valueOne, availableComponents.name.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.dateOfBirth.type:
                component = createTextArea(availableComponents.dateOfBirth.type, valueOne, availableComponents.dateOfBirth.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.explanation.type:
                component = createTextArea(availableComponents.explanation.type, valueOne, availableComponents.explanation.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.placeDate.type:
                component = createTextArea(availableComponents.placeDate.type, valueOne, availableComponents.placeDate.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.familyOneColumn.type:
                component = createTextArea(availableComponents.familyOneColumn.type, valueOne, availableComponents.familyOneColumn.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.familyTwoColumn.type:
                component = createTextColumnArea(availableComponents.familyTwoColumn.type, valueOne, valueTwo, availableComponents.familyTwoColumn.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.poem.type:
                component = createTextArea(availableComponents.poem.type, valueOne, availableComponents.poem.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.funeralInfo.type:
                component = createTextArea(availableComponents.funeralInfo.type, valueOne, availableComponents.funeralInfo.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            case availableComponents.giftsInfo.type:
                component = createTextArea(availableComponents.giftsInfo.type, valueOne, availableComponents.giftsInfo.description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
                break;
            default:
                break;
        }
        if (updateNumberOfAvailableComponentsIfAddingIsPossible(component.type)) {
            component.componentListIndex = blocks.length;
            components.push(component);
            linearizedComponents.push(component);
            orderOfComponents.push(blocks.length);
            blocks.push(-1);
        } else {
            alert(stringService.getNorwegianString("The component of type") + " " + component.type + " " + stringService.getNorwegianString("could not be added as there are no more fields of this type allowed."));
        }
    };
    
    function Component(id, type, description, isGeneratedFromTemplate, active) {
        this.id = id;
        this.type = type;
        this.viewType = type;
        this.description = description;
        this.isGeneratedFromTemplate = isGeneratedFromTemplate;
        this.setActiveAttribute = function(active){
            this.active = active;
            this.activeClass = !this.isGeneratedFromTemplate || this.active ? "active-component" : "inactive-component";
            this.activateButtonText = !this.isGeneratedFromTemplate ? stringService.getNorwegianString("delete") : (this.active ? stringService.getNorwegianString("deactivate") : stringService.getNorwegianString("reactivate"));
            this.activeButtonClass = this.active ? "btn btn-sm btn-danger" : "btn btn-sm btn-success";
        };
        this.setActiveAttribute(active);
        this.componentListIndex = 0;
        this.dragged = false;
        this.setDragableAttribute = function(dragable) {
            this.dragable = dragable;
            this.dragableClass = dragable ? "dragable-component" : "non-dragable-component";
        };
        this.setDragableAttribute(true);
    };
    
    TextAreaComponent.prototype = new Component();
    TextAreaComponent.prototype.constructor = TextAreaComponent;
    function TextAreaComponent(id, type, viewType, description, isGeneratedFromTemplate, active, fontIndex, sizeIndex) {
        Component.call(this, id, type, description, isGeneratedFromTemplate, active);
        this.viewType = viewType;
        this.font = fontService.getFonts()[fontIndex];
        this.fontSize = fontService.getFontsSize()[sizeIndex];
        this.contextMenuShowing = false;
        this.showContextMenu = function(){
            this.hideContextMenu();
            this.contextMenuShowing = true;  
        };
        this.hideContextMenu = function(){
            for(var i = 0; i < linearizedComponents.length; i++){
                linearizedComponents[i].contextMenuShowing = false;
            }
        };
    };
    
    var createTextArea = function(type, valueOne, description, isGeneratedFromTemplate, active, fontIndex, sizeIndex) {
        var field = new TextAreaComponent(componentIdCounter, type, "textArea", description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
        field.valueOne = valueOne;
        componentIdCounter++;
        return field;
    };

    var createTextColumnArea = function(type, valueOne, valueTwo, description, isGeneratedFromTemplate, active, fontIndex, sizeIndex) {
        var field = new TextAreaComponent(componentIdCounter, type, "textColumnArea", description, isGeneratedFromTemplate, active, fontIndex, sizeIndex);
        field.valueOne = valueOne;
        field.valueTwo = valueTwo;
        componentIdCounter++;
        return field;
    };
        
    var createLine = function(isGeneratedFromTemplate, active){
        var line = new Component(componentIdCounter, "line", availableComponents.line.description, isGeneratedFromTemplate, active);
        componentIdCounter++;
        return line;
    };
    
    var createSymbol = function(valueOne, isGeneratedFromTemplate, active){
        var symbol = new Component(componentIdCounter, "symbol", availableComponents.symbol.description, isGeneratedFromTemplate, active);
        symbol.valueOne = valueOne;
        componentIdCounter++;
        return symbol;
    };
       
    var updateNumberOfAvailableComponentsIfAddingIsPossible = function(type) {
        for (var key in availableComponents) {
            var component = availableComponents[key];
            if (component.type === type && (component.maxNumber === -1 || component.maxNumber - component.usedNumber > 0)) {
                component.usedNumber += 1;
                return true;
            }
        }
        return false;
    };
    
    // blocks
    this.addComponentsToBlock = function(componentA, componentB) {
        var blockIdA = blocks[componentA.componentListIndex];
        var blockIdB = blocks[componentB.componentListIndex];
        if (blockIdA === -1 && blockIdB === -1) {
            createBlock(componentA, componentB);
        } else if (blockIdA === -1) {
            addComponentToBlock(blockIdB, componentA);
        } else if (blockIdB === -1) {
            addComponentToBlock(blockIdA, componentB);
        } else {
            mergeBlocks(blockIdA, blockIdB);
        }
    };
    
    var createBlock = function(componentA, componentB) {
        var block = {};
        block.elements = [componentA, componentB];
        block.type = "block";
        block.viewType = "block";
        block.dragged = false;
        block.setDragableAttribute = function(dragable) {
            block.dragable = dragable;
            block.dragableClass = dragable ? "dragable-component" : "non-dragable-component";
        };
        block.setDragableAttribute(true);
        updateDragableAttributeOfBlockElements(block);
        block.id = Math.max.apply(Math, blocks)+1;
        blocks[componentA.componentListIndex] = block.id;
        blocks[componentB.componentListIndex] = block.id;
        deleteComponentThatIsMovedToBlock(componentA);
        deleteComponentThatIsMovedToBlock(componentB);
        components.push(block);
    };
    
    var addComponentToBlock = function(blockId, component) {
        var block = getBlockFromId(blockId);
        var positionOfComponent = orderOfComponents[component.componentListIndex];
        var positionOfFirstBlockComponent = orderOfComponents[block.elements[0].componentListIndex];
        if (positionOfComponent < positionOfFirstBlockComponent) {
            block.elements.unshift(component);
        } else {
            block.elements.push(component);
        }
        blocks[component.componentListIndex] = block.id;
        deleteComponentThatIsMovedToBlock(component);
        updateDragableAttributeOfBlockElements(block);
    };
        
    var mergeBlocks = function(blockIdA, blockIdB) {
        var blockA = getBlockFromId(blockIdA);
        var blockB = getBlockFromId(blockIdB);
        blockA.elements = blockA.elements.concat(blockB.elements);
        for (var i = 0; i < blockB.elements.length; i++) {
            blocks[blockB.elements[i].componentListIndex] = blockIdA;
        }
        deleteMergedBlock(blockB);
        updateDragableAttributeOfBlockElements(blockA);
    };
    
    var deleteComponentThatIsMovedToBlock = function(component){
        var indexOfComponent = components.indexOf(component);
        components.splice(indexOfComponent, 1);
    };
    
    this.getBlockFromId = function(blockId) {
        return getBlockFromId(blockId);
    };
    
    var getBlockFromId = function(blockId) {
        for (var i = 0; i < components.length; i++) {
            if (components[i].type === "block" && components[i].id === blockId) {
                return components[i];
            }
        }
    };
    
    var deleteMergedBlock = function(block) {
        var indexInComponentsArray = components.indexOf(block);
        components.splice(indexInComponentsArray, 1);
    };
        
    var updateDragableAttributeOfBlockElements = function(block) {
        for (var i = 0; i < block.elements.length; i++) {
            if (block.elements[i].dragable === false) {
                block.setDragableAttribute(false);
                updateDragableAttributeOfOtherBlockElements(block);
                return;
            }
        }
        block.setDragableAttribute(true);
    };
    
    var updateDragableAttributeOfOtherBlockElements = function(block) {
        for (var j = 0; j < block.elements.length; j++) {
            block.elements[j].setDragableAttribute(false);
        }
    };
    
    // delete component
    this.deleteComponent = function(component) {
        var oldPosition = orderOfComponents[component.componentListIndex];
        linearizedComponents.splice(component.componentListIndex, 1);
        orderOfComponents.splice(component.componentListIndex, 1);
        blocks.splice(component.componentListIndex, 1);
        deleteComponentFromComponentsWithBlocks(component);
        
        updateComponentListIndicesAfterDeletionOfComponent(component);
        updateOrderOfComponentsAfterDeletionOfComponent(oldPosition);
        updateNumberOfAvailableComponentsAfterDeletion(component.type);
    };
    
    var updateComponentListIndicesAfterDeletionOfComponent = function(component) {
        for (var i = component.componentListIndex; i < linearizedComponents.length; i++) {
            linearizedComponents[i].componentListIndex -= 1;
        }
    };
    
    var updateOrderOfComponentsAfterDeletionOfComponent = function(deletedPosition) {
        for (var i = 0; i < orderOfComponents.length; i++) {
            if (orderOfComponents[i] > deletedPosition) {
                orderOfComponents[i] -= 1;
            }
        }
    };
        
    var deleteComponentFromComponentsWithBlocks = function(component) {
        for (var i = 0; i < components.length; i++) {
            if (components[i] === component) {
                components.splice(i, 1);
                break;
            } else if(components[i].type === "block") {
                if(tryDeleteComponentFromBlock(components[i], component)) {
                    break;
                }
            }
        }
    };
    
    var tryDeleteComponentFromBlock = function(block, component) {
        for (var i = 0; i < block.elements.length; i++) {
            if (block.elements[i] === component) {
                block.elements.splice(i, 1);
                if (block.elements.length === 1) {
                    deleteBlock(block);
                } else {
                    updateDragableAttributeOfBlockElements(block);
                }
                return true;
            }
        }
        return false;
    };
    
    var deleteBlock = function(block) {
        var lastComponentInBlock = block.elements[0];
        components.push(lastComponentInBlock);
        var blockIndexInComponentsArray = components.indexOf(block);
        components.splice(blockIndexInComponentsArray, 1);
    };
    
    var updateNumberOfAvailableComponentsAfterDeletion = function(type) {
        for (var key in availableComponents) {
            var component = availableComponents[key];
            if (component.type === type && component.maxNumber !== -1) {
                component.usedNumber -=1;
            }
        }
    };
    
    // moving components
    this.changeOrderBy = function(orderOfComponentsManipulated, component, placeholderPosition) {
        if (orderOfComponentsManipulated === "currentOrder") {
            orderOfComponentsManipulated = orderOfComponents;
        }
        
        var oldIndexOfComponent = getOldIndexOfComponent(orderOfComponentsManipulated, component);
                
        var newIndexOfComponent = computeNewIndexOfComponent(placeholderPosition, oldIndexOfComponent, component);

        if (component.type === "block") {
            callChangeOrderByIterativelyForBlockElements(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated, component);
        } else {
            changeOrderBy(orderOfComponentsManipulated, component, newIndexOfComponent, oldIndexOfComponent);
        }
    };
    
    var callChangeOrderByIterativelyForBlockElements = function(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated, component) {
        if (newIndexOfComponent <= oldIndexOfComponent) {
            for (var i = 0; i < component.elements.length; i++) {
                changeOrderBy(orderOfComponentsManipulated, component.elements[i], newIndexOfComponent+i, oldIndexOfComponent+i);
            }
        } else {
            for (var i = component.elements.length-1; i >= 0; i--) {
                changeOrderBy(orderOfComponentsManipulated, component.elements[i], newIndexOfComponent+i, oldIndexOfComponent+i);
            }
        }
    };

    var changeOrderBy = function(orderOfComponentsManipulated, component, newIndexOfComponent, oldIndexOfComponent){
        updateIndicesOfComponentsInBetweenTheMove(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated);
        orderOfComponentsManipulated[component.componentListIndex] = newIndexOfComponent;
    };
    
    var getOldIndexOfComponent = function(orderOfComponentsManipulated, component) {
        if (component.type === "block") {
            return orderOfComponentsManipulated[component.elements[0].componentListIndex];
        } else {
            return orderOfComponentsManipulated[component.componentListIndex];
        }
    };
    
    var computeNewIndexOfComponent = function(placeholderIndex, oldIndex, component) {
        var sortedComponents = sortByIndexArrayWithBlocksFilter(components, orderOfComponents);
        
        var newIndex = 0;
        for (var i = 0; i < placeholderIndex; i++) {
            newIndex = increaseNewIndexByNumberOfElements(sortedComponents[i], newIndex);
        }
        newIndex = correctNewIndexWhenMovingUp(oldIndex, newIndex, component);
        return newIndex;
    };
    
    var increaseNewIndexByNumberOfElements = function(component, newIndex) {
        if (component.type === "block") {
            newIndex += component.elements.length;
        } else {
            newIndex++;
        }
        return newIndex;
    };
    
    var correctNewIndexWhenMovingUp = function(oldIndex, newIndex, component) {
        if (newIndex > oldIndex) {
            if (component.type === "block") {
                newIndex -= component.elements.length;
            } else {
                newIndex -= 1;
            }
        }
        return newIndex;
    };
    
    var updateIndicesOfComponentsInBetweenTheMove = function(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated){
        if (newIndexOfComponent <= oldIndexOfComponent) {
            moveComponentsInBetweenDown(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated);
        } else {
            moveComponentsInBetweenUp(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated);
        }
    };
    
    var moveComponentsInBetweenDown = function(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated) {
        for(var i = 0; i < orderOfComponentsManipulated.length; i++){
            if (orderOfComponentsManipulated[i] >= newIndexOfComponent && orderOfComponentsManipulated[i] < oldIndexOfComponent) {
                orderOfComponentsManipulated[i] += 1;
            }
        }
    };
    
    var moveComponentsInBetweenUp = function(newIndexOfComponent, oldIndexOfComponent, orderOfComponentsManipulated) {
        for(var i = 0; i < orderOfComponentsManipulated.length; i++){
            if (orderOfComponentsManipulated[i] <= newIndexOfComponent && orderOfComponentsManipulated[i] > oldIndexOfComponent) {
                orderOfComponentsManipulated[i] -= 1;
            }
        }
    };
    
    // function for loading
    this.resetComponents = function(){
        for(var i = orderOfComponents.length; i>0; i--){
            components.pop();
            linearizedComponents.pop();
            orderOfComponents.pop();
            blocks.pop();
        }
        for (var key in availableComponents) {
            availableComponents[key].usedNumber = 0;
        }
    };
});
