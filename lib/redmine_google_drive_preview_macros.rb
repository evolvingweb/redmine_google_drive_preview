require 'redmine'

module GoogleDrivePreviewMacros
  unloadable
  class Macros
    def self.google_drive_preview_macro(obj, args)
      url = args[0]
      match = url.match /^https:\/\/docs.google.com\/(?<type>spreadsheets|document|presentation)\/d\/(?<id>[A-Za-z\d_-]+)/
      return "Wrong document URL" unless match
      id = match[:id]
      type = match[:type]
      "<iframe src='https://docs.google.com/#{type}/d/#{id}/preview' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' width='800' height='400'></iframe><br/><a class='preview-view-link' href='#{url}'>View in Google Drive</a>"
    end
  end

end
