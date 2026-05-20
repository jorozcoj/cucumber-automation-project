module.exports = {
  default: {
    require: [
      "features/step_definitions/*.ts"
    ],

    requireModule: [
      "ts-node/register"
    ],

    paths: [
      "features/**/*.feature"
    ]
  }
};