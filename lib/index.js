"use strict";
/**
 * Data Binding module

 * @module data-binder
 */

/* 
* loading node modules dependencies
*/
var _ = require('underscore');



/** 
* applyBinding
*
* this should be done like so:
*   <div data-bind="action:callback"></div>
*
* @param {Object} view - Backbone view
* @param {Object} view.$el - Backbone view DOM element
* @param {Object} controller - contains all the callback functions
*/
module.exports.applyBinding = function(view, controller) {
        var dataBind = $(view.$el).find('[data-bind]');

        _.each(dataBind, function(el) {
            _.each(el.attributes, function(attr) {
                if (attr.name === "data-bind") {
                    var data = attr.value.split(':');
                    var e = data[0].trim();
                    var callback = data[1].trim();

                    $(el).on(e, function(e) {
                        if (Object.prototype.hasOwnProperty.call(controller, callback)) {
                            (function(el) {
                                controller[callback](el);
                            })(el);
                        }
                    }.bind(this));
                }
            })
        });
};


/** 
* removeBinding
*
*/
module.exports.removeBinding = function() {
        // still in working progress
}

