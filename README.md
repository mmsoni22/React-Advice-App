# This what I facing when deploying in netlify

* 1:58:45 PM: Build ready to start
* 1:58:47 PM: build-image version: 09c2cdcdf242cf2f57c9ee0fcad9d298fad9ad41
* 1:58:47 PM: build-image tag: v3.5.0
* 1:58:47 PM: buildbot version: e8698ce18800e33b39efc0aa823db3cdedfbee9e
* 1:58:47 PM: Fetching cached dependencies
* 1:58:47 PM: Failed to fetch cache, continuing with build
* 1:58:47 PM: Starting to prepare the repo for build
* 1:58:47 PM: No cached dependencies found. Cloning fresh repo
* 1:58:47 PM: git clone https://github.com/mmsoni22/React-Advice-App
* 1:58:48 PM: Preparing Git Reference refs/heads/master
* 1:58:49 PM: Different publish path detected, going to use the one specified in the Netlify configuration file: 'build' versus 'build/' in the Netlify UI
* 1:58:50 PM: Starting build script
* 1:58:50 PM: Installing dependencies
* 1:58:50 PM: Python version set to 2.7
* 1:58:51 PM: v12.18.0 is already installed.
* 1:58:52 PM: Now using node v12.18.0 (npm v6.14.4)
* 1:58:52 PM: Started restoring cached build plugins
* 1:58:52 PM: Finished restoring cached build plugins
* 1:58:52 PM: Attempting ruby version 2.7.1, read from environment
* 1:58:53 PM: Using ruby version 2.7.1
* 1:58:53 PM: Using PHP version 5.6
* 1:58:53 PM: Started restoring cached node modules
* 1:58:53 PM: Finished restoring cached node modules
* 1:58:54 PM: Installing NPM modules using NPM version 6.14.4
* 1:59:29 PM: > core-js@2.6.12 postinstall /opt/build/repo/node_modules/babel-runtime/node_modules/core-js
* 1:59:29 PM: > node -e "try{require('./postinstall')}catch(e){}"
* 1:59:29 PM: > core-js@3.8.1 postinstall /opt/build/repo/node_modules/core-js
* 1:59:29 PM: > node -e "try{require('./postinstall')}catch(e){}"
* 1:59:29 PM: > core-js-pure@3.8.1 postinstall /opt/build/repo/node_modules/core-js-pure
* 1:59:29 PM: > node -e "try{require('./postinstall')}catch(e){}"
* 1:59:29 PM: > ejs@2.7.4 postinstall /opt/build/repo/node_modules/ejs
* 1:59:29 PM: > node ./postinstall.js
*1:59:32 PM: npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
* 1:59:32 PM: npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
* 1:59:32 PM: npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
* 1:59:32 PM: npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
* 1:59:32 PM: npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.2.1 (node_modules/fsevents):
* 1:59:32 PM: npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.2.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
* 1:59:32 PM: npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules/chokidar/node_modules/fsevents):
* 1:59:32 PM: npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
* 1:59:32 PM: added 1935 packages from 753 contributors and audited 1939 packages in 37.475s
* 1:59:34 PM: 121 packages are looking for funding
* 1:59:34 PM:   run `npm fund` for details
1:59:34 PM: found 0 vulnerabilities
* 1:59:34 PM: NPM modules installed
* 1:59:34 PM: Started restoring cached go cache
* 1:59:34 PM: Finished restoring cached go cache
* 1:59:34 PM: go version go1.14.4 linux/amd64
* 1:59:34 PM: go version go1.14.4 linux/amd64
* 1:59:34 PM: Installing missing commands
* 1:59:34 PM: Verify run directory
* 1:59:36 PM: ​
* 1:59:36 PM: ────────────────────────────────────────────────────────────────
* 1:59:36 PM:   Netlify Build                                                 
* 1:59:36 PM: ────────────────────────────────────────────────────────────────
* 1:59:36 PM: ​
* 1:59:36 PM: ❯ Version
* 1:59:36 PM:   @netlify/build 5.5.7
* 1:59:36 PM: ​
* 1:59:36 PM: ❯ Flags
* 1:59:36 PM:   deployId: 5fce7b650dba2b00a25c0b1d
* 1:59:36 PM:   mode: buildbot
* 1:59:36 PM: ​
* 1:59:36 PM: ❯ Current directory
* 1:59:36 PM:   /opt/build/repo
* 1:59:36 PM: ​
* 1:59:36 PM: ❯ Config file
* 1:59:36 PM:   No config file was defined: using default values.
* 1:59:36 PM: ​
* 1:59:36 PM: ❯ Context
* 1:59:36 PM:   production
* 1:59:36 PM: ​
* 1:59:36 PM: ────────────────────────────────────────────────────────────────
* 1:59:36 PM:   1. Build command from Netlify app                             
* 1:59:36 PM: ────────────────────────────────────────────────────────────────
* 1:59:36 PM: ​
* 1:59:36 PM: $ npm run build
* 1:59:37 PM: > advice@0.1.0 build /opt/build/repo
* 1:59:37 PM: > react-scripts build
* 1:59:39 PM: Creating an optimized production build...
* 1:59:49 PM: 
* 1:59:49 PM: Treating warnings as errors because process.env.CI = true.
* 1:59:49 PM: Most CI servers set it automatically.
* 1:59:49 PM: 
* 1:59:49 PM: Failed to compile.
* 1:59:49 PM: 
* 1:59:49 PM: src/App.js
* 1:59:49 PM:   Line 1:8:  'Axios' is defined but never used  no-unused-vars
* 1:59:49 PM: npm ERR! code ELIFECYCLE
* 1:59:49 PM: npm ERR! errno 1
* 1:59:49 PM: npm ERR! advice@0.1.0 build: `react-scripts build`
* 1:59:49 PM: npm ERR! Exit status 1
* 1:59:49 PM: npm ERR!
* 1:59:49 PM: npm ERR! Failed at the advice@0.1.0 build script.
* 1:59:49 PM: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
* 1:59:49 PM: npm ERR! A complete log of this run can be found in:
* 1:59:49 PM: npm ERR!     /opt/buildhome/.npm/_logs/2020-12-07T18_59_49_648Z-debug.log
* 1:59:49 PM: ​
* 1:59:49 PM: ────────────────────────────────────────────────────────────────
* 1:59:49 PM:   "build.command" failed                                        
* 1:59:49 PM: ────────────────────────────────────────────────────────────────
* 1:59:49 PM: ​
* 1:59:49 PM:   Error message
* 1:59:49 PM:   Command failed with exit code 1: npm run build
* 1:59:49 PM: ​
* 1:59:49 PM:   Error location
* 1:59:49 PM:   In Build command from Netlify app:
* 1:59:49 PM:   npm run build
* 1:59:49 PM: ​
* 1:59:49 PM:   Resolved config
* 1:59:49 PM:   build:
* 1:59:49 PM:     command: npm run build
* 1:59:49 PM:     commandOrigin: ui
* 1:59:49 PM:     publish: /opt/build/repo/build
* *:59:49 PM: Caching artifacts
* 1:59:49 PM: Started saving node modules
* 1:59:49 PM: Finished saving node modules
* 1:59:49 PM: Started saving build plugins
* 1:59:49 PM: Finished saving build plugins
* 1:59:49 PM: Started saving pip cache
* 1:59:49 PM: Finished saving pip cache
* 1:59:49 PM: Started saving emacs cask dependencies
* 1:59:49 PM: Finished saving emacs cask dependencies
* 1:59:49 PM: Started saving maven dependencies
* 1:59:49 PM: Finished saving maven dependencies
* 1:59:49 PM: Started saving boot dependencies
* 1:59:50 PM: Finished saving boot dependencies
* 1:59:50 PM: Started saving go dependencies
* 1:59:50 PM: Finished saving go dependencies
* 1:59:52 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
* 1:59:52 PM: Failing build: Failed to build site
* 1:59:52 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2
* 1:59:52 PM: Finished processing build request in 1m5.784121877s