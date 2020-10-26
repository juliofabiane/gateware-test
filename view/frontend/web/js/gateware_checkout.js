define([
    'jquery',
    'ko',
    'uiComponent'
], function ($, ko, Component) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
        },
        decreaseQty: function(data, event) {
            const input = $(event.target.offsetParent).find('input.qty')[0]
            if(input.value > 1){
                input.valueAsNumber -= 1
            }
        },
        increaseQty: function(data, event) {
            const input = $(event.target.offsetParent).find('input.qty')[0]
            input.valueAsNumber += 1
        },
        onChangeQty: function(data, event) {
            let newQty = event.target.valueAsNumber;
            if(!newQty || newQty <= 0){
                event.target.value = 1
            }
        }
    });
});
