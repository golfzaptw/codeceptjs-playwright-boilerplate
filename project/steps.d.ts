/// <reference types='codeceptjs' />
type config = typeof import('./resources/config.js');
type steps_file = typeof import('./steps_file.js');
type pages = typeof import('./pages/pages_import.js');
type steps = typeof import('./steps/steps_import.js');
type api = typeof import('./api/index.js');
type translate = typeof import('./resources/translation/en');
type testData = typeof import('./resources/test_data/dev/test_data.js');
type CustomCommands = import('./helpers/custom_commands_helper.js');
type PlaywrightBrowser = import('./helpers/playwright_browser_helper.js');
type ChaiWrapper = import('./node_modules/codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, config: config, pages: pages, steps: steps, api: api, translate: translate, testData: testData }
  interface Methods extends Playwright, CustomCommands, PlaywrightBrowser, REST, ChaiWrapper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
