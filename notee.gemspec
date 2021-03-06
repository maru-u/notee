$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'notee/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'notee'
  s.version     = Notee::VERSION
  s.authors     = ['funaota']
  s.email       = ['takuji.funao@gmail.com']
  s.summary       = %q{【react&rails】notee is creating CMS(blog) gem by only one command.}
  s.description   = %q{【react&rails】notee is creating CMS(blog) gem by only one command.}
  s.homepage      = 'https://github.com/funaota/notee.git'
  s.license       = 'MIT'

  s.files = Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.rdoc']
  s.test_files = Dir['test/**/*']

  s.add_dependency 'rails'
  s.add_dependency 'sass'
  s.add_dependency 'redcarpet'
  s.add_dependency 'rb-readline'
  s.add_dependency 'whenever'

  s.add_development_dependency 'sqlite3'
  s.add_development_dependency 'pry-rails'
  s.add_development_dependency 'pry-doc'
  s.add_development_dependency 'pry-byebug'
  s.add_development_dependency 'pry-stack_explorer'
end
