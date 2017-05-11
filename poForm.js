/* global $ */
(function() {
    'use strict';

    var i = 0;

    $(document).click(e => {
        e.preventDefault();
    });

    $('#addItemButton').click(() => {
        let count = i++;
        $(  
            '<div id="' + count + '" class="col-md-8 col-md-offset-2 well well-lg">' +
                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Item:</label>' +
                        '<div class="col-md-8">' +
                            '<select class="form-control">' +
                                '<option>Coffee Grinder</option>' +
                                '<option>No-oil fryer (oxymoron)</option>' +
                                '<option>Ralph\'s Rotating Rotisserie</option>' +
                            '</select>' +
                        '</div>' +
                        '<div class="col-md-2">' +
                            '<button class="btn btn-success col-md-12">New Item</button>' +
                        '</div>' +
                    '</div>' +


                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Description:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="text" class="form-control" placeholder="Should automatically populate once the item module is complete"/>' +
                        '</div>' +
                    '</div>' +


                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Quantity:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="number" class="form-control" value="0"/>' +
                        '</div>' +
                    '</div>' +


                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Rate:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="number" class="form-control" value="0"/>' +
                        '</div>' +
                    '</div>' +


                    '<div class="form-group">' +
                        '<label class="col-md-2 control-label">Total:</label>' +
                        '<div class="col-md-10">' +
                            '<input type="text" class="form-control" value="Quantity * Rate (This field is Read Only)" readonly/>' +
                        '</div>' +
                    '</div>' +

                    '<div class="pull-right">' +
                        '<button id="addAnotherItemButton" class="btn btn-danger">Cancel</button>' +
                    '</div>' +

                '</div>' +
                '<div class="clearfix"></div>'
        )
        .appendTo($('#itemDiv'))
        .find('button:last')
        .click(() => {
            $('#' + count).remove();
        });
    });
}());
