(function($) {
  if (typeof jsToolBar === 'undefined') return false;
  jsToolBar.prototype.elements.gdriveembed = {
    type: 'button',
    title: 'Embed Google Drive',
    fn: {
        wiki: function(event) {
          textField = this;
          if ($('#gDriveEmbedDialog').length) {
            $('#gDriveEmbedDialog').dialog('open');
          }
          else {
            var gDriveEmbedDialog = '<div id="gDriveEmbedDialog" title="Insert Google Drive document URL"></div>';
            $("#main").append(gDriveEmbedDialog);
            $('#gDriveEmbedDialog').append('<input type="text" class="gDriveEmbed-text"/>');
            $('#gDriveEmbedDialog').append('<button class="gDriveEmbed-button">Embed</button>');
            $('.gDriveEmbed-button').click(function() {
              var url = $('.gDriveEmbed-text').val();
              textField.encloseLineSelection(url, '');
              $('.gDriveEmbed-textarea').val('');
              $('#gDriveEmbedDialog').dialog('close');
            });
            $("#gDriveEmbedDialog").dialog({modal:true, width:'600px'});
          }
        }
    }
};
})(jQuery);