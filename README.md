# Snowpack Microfrontend Static Content Example

This repo contains an example demonstrating the issue Snowpack currently has
with loading static content in a microfrontend environment.

To run this demo, simply run `yarn start` in both the `root-app` and
`microfrontend` folders (no need to install, this repo uses zero-installs Yarn
2), then navigate to `http://localhost:8000`. Notice how the "logo" image has
not loaded.
