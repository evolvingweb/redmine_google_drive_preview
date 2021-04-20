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
          $('#gDriveEmbedDialog').append('<span class="gDriveEmbed-help">Remember to set the right access permissions to the document that you are sharing.</span>');
          $('#gDriveEmbedDialog').append('<button class="gDriveEmbed-button">Embed</button>');
          $('.gDriveEmbed-button').click(function() {
            var url = $('.gDriveEmbed-text').val();
            var macro = "{{google_drive_embed(" + url + ")}}"
            textField.encloseLineSelection(macro, '');
            $('.gDriveEmbed-text').val('');
            $('#gDriveEmbedDialog').dialog('close');
          });
          $("#gDriveEmbedDialog").dialog({modal:true, width:'600px'});
        }
      }
    }
  };
  $(document).ready(function() {
    $("a[href^='https://docs.google.com']:not(.preview-view-link)").each(function () {
      var href = $(this).attr('href');
      matches = href.match(/^https:\/\/docs.google.com\/.*\/[0-9A-Za-z-_]+\//);
      if (matches && matches[0]) {
        href = matches[0] + 'preview';
      }
      var previewContainer = $('<div class="preview-content open"></div>');
      var collapseItem = $('<button class="toggle">Hide Google Drive preview</button>');
      $(collapseItem).click(function() {
        if ($(this).parent().hasClass('open')) {
          $(this).parent().removeClass('open');
          $(this).html('Show Google Drive preview');
        }
        else {
          $(this).parent().addClass('open');
          $(this).html('Hide Google Drive preview');
        }
      });
      previewContainer.append(collapseItem);
      $(previewContainer).append("<iframe src='" + href + "' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' width='800' height='400'></iframe>");

      $(this).after(previewContainer);
    });
  });

})(jQuery);