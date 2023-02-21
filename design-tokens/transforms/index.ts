import StyleDictionary from 'style-dictionary'

export const ALLIUM_PX = 'allium/px'
export const ALLIUM_REM = 'allium/rem'
export const ALLIUM_SHADOW = 'allium/shadow'
export const ALLIUM_TYPOGRAPHY = 'allium/typography'

const remTransformer = (token: any) => Math.round((token.value / 10) * 100) / 100 + 'rem'
const pxTransformer = (token: any) => token.value + 'px'
const shadowTransformer = ({ value }: { value: any }) => {
  if (Array.isArray(value)) {
    return value
      .map(t => {
        return `${t.type === 'innerShadow' ? 'inset ' : ''}${t.x}px ${t.y}px ${t.blur}px ${t.spread}px ${t.color}`
      })
      .join(', ')
  } else {
    return `${value.type === 'innerShadow' ? 'inset ' : ''}${value.x}px ${value.y}px ${value.blur}px ${
      value.spread
    }px ${value.color}`
  }
}
const typographyTransformer = (token: any) => {
  return {
    ...token.value,
    fontSize: Math.round((token.value.fontSize / 10) * 100) / 100 + 'rem',
  }
}

export const registerTransforms = () => {
  // Pixels
  StyleDictionary.registerTransform({
    type: 'value',
    name: ALLIUM_PX,
    matcher: (token: any) => {
      return ['borderWidth', 'borderRadius'].includes(token.type)
    },
    transformer: pxTransformer,
  })

  // REM
  StyleDictionary.registerTransform({
    type: 'value',
    name: ALLIUM_REM,
    matcher: (token: any) => {
      return ['spacing', 'sizing', 'fontSizes'].includes(token.type)
    },
    transformer: remTransformer,
  })

  // Shadows
  StyleDictionary.registerTransform({
    type: 'value',
    name: ALLIUM_SHADOW,
    matcher: (token: any) => {
      return ['innerShadow', 'dropShadow', 'boxShadow'].includes(token.type)
    },
    transformer: shadowTransformer,
  })

  // Typography
  StyleDictionary.registerTransform({
    type: 'value',
    name: ALLIUM_TYPOGRAPHY,
    matcher: (token: any) => {
      return ['typography'].includes(token.type)
    },
    transformer: typographyTransformer,
  })
}
