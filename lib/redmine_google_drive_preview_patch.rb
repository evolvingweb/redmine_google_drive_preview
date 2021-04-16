# Google Drive preview patch

require_dependency 'application_helper'

class RedmineGoogleDrivePreviewPatch < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "redmine_google_drive_preview/redmine_google_drive_preview_partial"
end
