require 'redmine'

require_dependency "redmine_google_drive_preview_patch"
require_dependency "redmine_google_drive_preview_macros"

Redmine::Plugin.register :redmine_google_drive_preview do
  name 'Redmine Google Drive Preview'
  author 'Kevin Porras'
  url 'https://github.com/evolvingweb/redmine_google_drive_preview'
  author_url 'http://evolvingweb.ca'
  description 'Preview Google Drive documents directly in Redmine'
  version '0.0.1'
  requires_redmine :version_or_higher => '4.1'

  Redmine::WikiFormatting::Macros.register do
    desc "Redmine Google Drive Embed Macro (google_drive_embed)"
    macro :google_drive_embed do |obj, args|
      GoogleDrivePreviewMacros::Macros.google_drive_preview_macro(obj, args).html_safe
    end
  end
end
