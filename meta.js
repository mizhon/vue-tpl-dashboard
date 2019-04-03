const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./package.json')

const templateVersion = pkg.version

const {
  addTestAnswers
} = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    // before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },

  prompts: {
    name: {
      when: 'false',
      type: 'string',
      required: true,
      message: 'Project name',
    },
    author: {
      when: 'false',
      type: 'string',
      message: 'Author',
    },
    e2e: {
      when: 'false',
      type: 'confirm',
      message: 'Setup e2e tests with Nightwatch?',
    }
  },
  filters: {},
  complete: function (data, {
    chalk
  }) {

    const green = chalk.green
    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)
    // force auto install without user confirm
    data.autoInstall = 'npm'
    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  },
}