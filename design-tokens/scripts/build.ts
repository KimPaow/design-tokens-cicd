import StyleDictionary from 'style-dictionary'
import { ALLIUM_FORMAT_ES6, registerFormat } from '../formats'
import { ALLIUM_PX, ALLIUM_REM, ALLIUM_SHADOW, ALLIUM_TYPOGRAPHY, registerTransforms } from '../transforms'

registerTransforms()
registerFormat()

const options = {
  showFileHeader: false,
}

const extend = (source: string, outputName: string) =>
  StyleDictionary.extend({
    source: [source],
    platforms: {
      styledComponents: {
        transforms: [
          'attribute/cti',
          'name/cti/pascal',
          'color/hex',
          ALLIUM_PX,
          ALLIUM_REM,
          ALLIUM_SHADOW,
          ALLIUM_TYPOGRAPHY,
        ],
        buildPath: 'src/themes/',
        options: options,
        files: [
          {
            destination: `${outputName}.ts`,
            format: ALLIUM_FORMAT_ES6,
          },
        ],
      },
    },
  })

const lightTheme = extend('sd-tokens/sd-light.json', 'light')
const darkTheme = extend('sd-tokens/sd-dark.json', 'dark')

lightTheme.buildAllPlatforms()
darkTheme.buildAllPlatforms()
