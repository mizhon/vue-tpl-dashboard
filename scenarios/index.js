const scenarios = [
  'full',
  'full-karma-airbnb',
  'minimal'
]

const index = scenarios.indexOf(process.env.VUE_TEMPL_TEST)

const isTest = exports.isTest = index !== -1

const scenario = isTest && require(`./${scenarios[index]}.json`)

console.log(' INDEX in SCENARIOS: ', index)
console.log(' isTest: ', isTest)
console.log(' scenario: ', scenario)

exports.addTestAnswers = (metalsmith, options, helpers) => {
  Object.assign(
    metalsmith.metadata(), {
      isNotTest: !isTest
    },
    isTest ? scenario : {}
  )
}