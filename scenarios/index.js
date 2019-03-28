const scenarios = [
  'full',
  'full-karma-airbnb',
  'minimal'
]

const index = scenarios.indexOf(process.env.VUE_TEMPL_TEST)
console.log(' INDEX in SCENARIOS: ', index)

const isTest = exports.isTest = index !== -1

const scenario = isTest && require(`./${scenarios[index]}.json`)

exports.addTestAnswers = (metalsmith, options, helpers) => {
  Object.assign(
    metalsmith.metadata(), {
      isNotTest: !isTest
    },
    isTest ? scenario : {}
  )
}