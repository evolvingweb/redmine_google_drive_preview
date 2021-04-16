require 'redmine'

require_dependency "redmine_google_drive_preview_patch"

Redmine::Plugin.register :redmine_google_drive_preview do
  name 'Redmine Google Drive Preview'
  author 'Kevin Porras'
  url 'https://github.com/evolvingweb/redmine_google_drive_preview'
  author_url 'http://evolvingweb.ca'
  description 'Preview Google Drive documents directly in Redmine'
  version '0.0.1'
  requires_redmine :version_or_higher => '4.1'

end
