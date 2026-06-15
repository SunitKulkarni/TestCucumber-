module.exports = {
  default: {
    format: [
      'progress',
      'allure-cucumberjs/reporter',
      'html:reports/cucumber-report.html',
    ]
  }
};