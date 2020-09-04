const fs = require('fs-extra');

describe('CLI', () => {
  let temporaryFiles;

  function tempfile(extension, content) {
    const tempFilePath = require('tempfile')(extension);

    if (content) {
        fs.ensureFileSync(tempFilePath);
        fs.writeFileSync(tempFilePath, content);
    }

    temporaryFiles.push(tempFilePath);
  }

  async function run() {

  }

  function cliCall() {

  }

  beforeEach(() => {
    temporaryFiles = [];
  });

  afterEach(async () => {
    await Promise.all(temporaryFiles.map(name => fs.remove(name)));
  });

  test.each([['-C'], ['--config-path']])('%s <path> should take the config from that path', async (__configPath) => {
    const configPath = tempfile('.json', JSON.stringify({
      configurations: {
        ios: {
          type: 'ios.simulator',
          device: 'iPhone X',
        },
      },
    }));
    
    
    await run(`detox test ${__configPath} ${configPath}`);
    expect(cliCall()).toMatch(/^jest/)
  });

  test.each([['-c'], ['--configuration']])('%s <configuration> should choose that configuration', async () => {});
  test('--keepLockFile should be suppress clearing the device lock file', async () => {});
  test('--keepLockFile omission means clearing the device lock file', async () => {});
  test('--inspect-brk should prepend "node --inspect-brk" to the command', async () => {});
  test('-- <...explicitPassthroughArgs> should be forwarded to the test runner CLI as-is', async () => {});

  describe('(mocha)', () => {
    test('given no extra args, should spawn cmd', () => {});
    test.each([['-o'], ['--runner-config']])(', when omitted, should be point to e2e/mocha.opts', async () => {});
    test.each([['-o'], ['--runner-config']])('%s <path> should be aware of mocha.opts extension', async () => {});
    test.each([['-o'], ['--runner-config']])('%s <path> should be aware of .mocharc extension', async () => {});
    test.each([['-l'], ['--loglevel']])('%s <value> should be passed as CLI argument', async () => {});
    test('--no-color should be passed as CLI argument', async () => {});
    test.each([['-R'], ['--retries']])('%s <value> should print warning', async () => {});
    test.each([['-R'], ['--retries']])('%s <value> should be ignored', async () => {});
    test.each([['-r'], ['--reuse']])('%s <value> should be passed as CLI argument', async () => {});
    test.each([['-u'], ['--cleanup']])('%s <value> should be passed as CLI argument', async () => {});
    test.each([['-d'], ['--debug-synchronization']])('%s <value> should be passed as CLI argument', async () => {});
    test.each([['-d'], ['--debug-synchronization']])('%s <value> should have default value = 3000', async () => {});
    test.each([['-a'], ['artifacts-location']])('%s <value> should be passed as CLI argument', async () => {});
    test('--record-logs <value> should be passed as CLI argument', async () => {});
    test('--take-screenshots <value> should be passed as CLI argument', async () => {});
    test('--record-videos <value> should be passed as CLI argument', async () => {});
    test('--record-performance <value> should be passed as CLI argument', async () => {});
    test('--record-timeline <value> should be passed as CLI argument', async () => {});
    test.each([['-w'], ['workers']])('%s <value> should print "unsupported" warning', async () => {});
    test.each([['-H'], ['headless']])('%s <value> should be passed as CLI argument', async () => {});
    test('--gpu <value> should be passed as CLI argument', async () => {});
    test('--device-launch-args should be passed as CLI argument', async () => {});
    test('--use-custom-logger by default should be passed as CLI argument', async () => {});
    test('--no-use-custom-logger should be prevent passing CLI argument', async () => {});
    test('--no-use-custom-logger should be prevent passing CLI argument', async () => {});
    test('--force-adb-install should be passed as CLI argument', async () => {});
    test.each([['-n'], ['device-name']])('%s <value> should be passed as CLI argument', async () => {});

    test('specifying direct test paths', async () => {});
    test('e.g., --bail should be passed through', async () => {});
    test('e.g., --reporter spec should be passed through', async () => {});
    test('e.g., --bail e2e/Login.test.js should be split to --bail and e2e/Login.test.js', async () => {});
  });

  describe('(jest)', () => {
    test('given no extra args, should spawn cmd', async () => {});
    test.each([['-o'], ['--runner-config']])(', when omitted, should be point to e2e/config.json', async () => {});
    test.each([['-o'], ['--runner-config']])('%s <path> should be point to the specified Jest config', async () => {});
    test.each([['-l'], ['--loglevel']])('%s <value> should be passed as environment variable', async () => {});
    test('--no-color should be passed as CLI argument', async () => {});
    test.each([['-R'], ['--retries']])('%s <value> should execute successful run once', async () => {});
    test.each([['-R'], ['--retries']])('%s <value> should execute unsuccessful run N extra times', async () => {});
    test.each([['-R'], ['--retries']])('%s <value> should retain -- <...explicitPassthroughArgs>', async () => {});
    test.each([['-r'], ['--reuse']])('%s <value> should be passed as environment variable', async () => {});
    test.each([['-u'], ['--cleanup']])('%s <value> should be passed as environment variable', async () => {});
    test.each([['-d'], ['--debug-synchronization']])('%s <value> should be passed as environment variable', async () => {});
    test.each([['-d'], ['--debug-synchronization']])('%s <value> should have default value = 3000', async () => {});
    test.each([['-a'], ['artifacts-location']])('%s <value> should be passed as environment variable', async () => {});
    test('--record-logs <value> should be passed as environment variable', async () => {});
    test('--take-screenshots <value> should be passed as environment variable', async () => {});
    test('--record-videos <value> should be passed as environment variable', async () => {});
    test('--record-performance <value> should be passed as environment variable', async () => {});
    test('--record-timeline <value> should be passed as environment variable', async () => {});
    test.each([['-w'], ['workers']])('%s <value> should be passed as CLI argument', async () => {});
    test('--jest-report-specs should be passed by default as CLI argument', async () => {});
    test('--jest-report-specs should not be passed with multiple workers enabled', async () => {});
    test('--jest-report-specs should be passed with multiple workers if specified explicitly', async () => {});
    test.each([['-H'], ['headless']])('%s <value> should be passed as environment variable', async () => {});
    test('--gpu <value> should be passed as environment variable', async () => {});
    test('--device-launch-args should be passed as environment variable', async () => {});
    test('--use-custom-logger by default should be passed as environment variable', async () => {});
    test('--no-use-custom-logger should be prevent passing environment variable', async () => {});
    test('--no-use-custom-logger should be prevent passing environment variable', async () => {});
    test('--force-adb-install should be passed as environment variable', async () => {});
    test.each([['-n'], ['device-name']])('%s <value> should be passed as environment variable', async () => {});
    test('specifying direct test paths', async () => {});
    test('e.g., --debug should be passed through', async () => {});
    test('e.g., --coverageProvider v8 should be passed through', async () => {});
    test('e.g., --debug e2e/Login.test.js should be split to --debug and e2e/Login.test.js', async () => {});
  });
});
