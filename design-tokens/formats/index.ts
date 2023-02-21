import util from 'node:util'
import StyleDictionary from 'style-dictionary'

export const ALLIUM_FORMAT_ES6 = 'allium/es6'

export const registerFormat = () => {
  StyleDictionary.registerFormat({
    name: ALLIUM_FORMAT_ES6,
    formatter: function ({ dictionary, file }) {
      return (
        StyleDictionary.formatHelpers.fileHeader({ file }) +
        'export default ' +
        util.inspect(dictionary.tokens, { compact: false, depth: 10, breakLength: 80 }) +
        ';'
      )
    },
  })
}
