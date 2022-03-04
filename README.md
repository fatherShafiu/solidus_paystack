# Solidus Paystack
[![JuliusNM](https://circleci.com/gh/JuliusNM/solidus_paystack.svg?style=svg)](https://app.circleci.com/pipelines/github/JuliusNM)

<!-- Explain what your extension does. -->

## Installation

Add solidus_paystack to your Gemfile:

```ruby
gem 'solidus_paystack'
```

Bundle your dependencies and run the installation generator:

```shell
bin/rails generate solidus_paystack:install
```

### Paystack Configuration
Navigate to admin/payment_methods/new.
Paystack should now appear on the list of payment methods. 
1. Set the Preference Source to custom
2. Copy the private and public keys from the paystack dashboard and paste them on their respective fields.
3. Set Auto Capture to true
4. Set Currency code

Lastly we need to set the callback url to enable paystack to update the order once processed.
On the paystack dashboard, under https://dashboard.paystack.com/#/settings/developer, append
 /paystack/confirm/  after your store HOST url. like so

https://horrible-frog-27.loca.lt/paystack/confirm/

## Usage

<!-- Explain how to use your extension once it's been installed. -->

## Development

### Testing the extension

First bundle your dependencies, then run `bin/rake`. `bin/rake` will default to building the dummy
app if it does not exist, then it will run specs. The dummy app can be regenerated by using
`bin/rake extension:test_app`.

```shell
bin/rake
```

To run [Rubocop](https://github.com/bbatsov/rubocop) static code analysis run

```shell
bundle exec rubocop
```

When testing your application's integration with this extension you may use its factories.
Simply add this require statement to your `spec/spec_helper.rb`:

```ruby
require 'solidus_paystack/testing_support/factories'
```

Or, if you are using `FactoryBot.definition_file_paths`, you can load Solidus core
factories along with this extension's factories using this statement:

```ruby
SolidusDevSupport::TestingSupport::Factories.load_for(SolidusPaystack::Engine)
```

### Running the sandbox

To run this extension in a sandboxed Solidus application, you can run `bin/sandbox`. The path for
the sandbox app is `./sandbox` and `bin/rails` will forward any Rails commands to
`sandbox/bin/rails`.

Here's an example:

```
$ bin/rails server
=> Booting Puma
=> Rails 6.0.2.1 application starting in development
* Listening on tcp://127.0.0.1:3000
Use Ctrl-C to stop
```

### Updating the changelog

Before and after releases the changelog should be updated to reflect the up-to-date status of
the project:

```shell
bin/rake changelog
git add CHANGELOG.md
git commit -m "Update the changelog"
```

### Releasing new versions

Please refer to the dedicated [page](https://github.com/solidusio/solidus/wiki/How-to-release-extensions) on Solidus wiki.

## License

Copyright (c) 2021 [Julius Ngigi], released under the New BSD License.
