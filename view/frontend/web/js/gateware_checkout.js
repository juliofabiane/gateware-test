define([
    'ko',
    'uiComponent'
], function (ko, Component) {
    'use strict';
    return Component.extend({
        initialize: function () {
            this._super();
            this.qty = ko.observable(this.currentQty);
        },
        decreaseQty: function() {
            if(this.currentQty > 1){
                this.qty(this.currentQty -= 1);
            }
        },
        increaseQty: function() {
            this.qty(this.currentQty += 1);
        },
        onChangeQty: function(data, event) {
            let newQty = event.target.valueAsNumber;
            if(newQty && newQty > 0){
                this.currentQty = newQty
            }else{
                event.target.value = this.currentQty
            }
        }
    });
});
