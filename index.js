const path = require('path');
const libCoverage = require('istanbul-lib-coverage');
const libReport = require('istanbul-lib-report');
const reports = require('istanbul-reports');

exports = module.exports = {
  beforeSession(config) {
    this.coverageOpts = Object.assign({
      includeDir: './',
      reportDir: './coverage',
      reporter: ['text'],
    }, config.babelPluginIstanbulOpts);
  },
  before() {
    this.coverageMap = libCoverage.createCoverageMap();
  },
  afterTest() {
    const coverage = browser.execute(() => (typeof __coverage__ === 'undefined' ? {} : __coverage__));
    this.coverageMap.merge(coverage.value);
    this.coverageMap.filter((filename) => !path.relative(this.coverageOpts.includeDir, filename).startsWith('..'));
  },
  after() {
    const context = libReport.createContext({
      dir: this.coverageOpts.reportDir,
    });
    const tree = libReport.summarizers.pkg(this.coverageMap);
    this.coverageOpts.reporter.forEach((report) => {
      if (report.startsWith('text')) console.log('\n');
      tree.visit(reports.create(report), context);
    });
  },
};
