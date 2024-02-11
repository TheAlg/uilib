import bootstrapKeyValues from './bootstrap.json'

export function initComponentDefault(props: object, options: string[]) {
  const dyOptions = {}
  const dyProps = {}

  if (props['playground']) {
    delete props['playground']
  }
  for (const key in props) {
    const prop = props[key]
    let type
    if (typeof prop.type === 'function') {
      type = prop.type.name.toLowerCase()
    } else if (typeof prop.type === 'object') {
      type = key
    }
    let value
    if (key === 'options') {
      type = 'select'
    }
    if (options[key]) {
      type = 'enum'
      value = options[key][0].toLowerCase()
    } else {
      switch (type) {
        case 'enum':
          value = []
          break
        case 'string':
          value = key
          break
        case 'boolean':
          value = false
          break
        case 'icon':
          value = 'check'
          break
        case 'img':
          value = 'http://fakeimg.pl/100x50/?text=Card Image'
          break
        case 'select':
          value = [
            { label: 'element 1', value: 1 },
            { label: 'element 2', value: 2 }
          ]
          break
        default:
          value = null
      }
    }
    dyProps[key] = value
    dyOptions[key] = { type, value }
    if (key === 'img') {
      dyOptions[key].position = {
        value: options.img_position[0],
        options: options.img_position
      }
    }
    if (key === 'icon') {
      dyOptions[key].position = {
        value: options.icon_position[0],
        options: options.icon_position
      }
    }

    if (options[key]) {
      dyOptions[key].options = options[key]
    }
  }

  console.log('default props initialized ', dyProps)
  return { dyProps, dyOptions }
}

export const boot = (path: string) => {
  let keys: string[] = path.split('.')
  let value = bootstrapKeyValues
  for (const key of keys) {
    if (value && value.hasOwnProperty(key.toUpperCase())) {
      value = value[key.toUpperCase()]
    } else {
      console.error('the key', key, "doesn't exist on object ", value, ' when accessing ', path)
      return ''
    }
  }
  if (value && typeof value === 'string') {
    return value.toLowerCase()
  }
  return value
}

export const getOptions = (path: string) => {
  const value = boot(path)
  return value ? Object.keys(value) : []
}

export const variant = (prefix: string, variantProp: string, outline: boolean = false): string => {
  if (!variantProp || variantProp === 'none') {
    return ''
  } else {
    const variantValue = boot(`variant.${variantProp}`)
    const prefixVar = prefix + (outline ? '-outline-' : '-')
    return prefixVar + variantValue
  }
}

export const size = (prefix: string, sizeProp: string) => {
  if (!sizeProp) {
    return ''
  }
  return prefix + '-' + boot(`size.${sizeProp}`)
}

export const icon = (iconProp: object | string | undefined, size: string = 'SMALL') => {
  let iconObj
  if (typeof iconProp === 'object') {
    iconObj = { ...iconProp }
  } else if (typeof iconProp === 'string') {
    iconObj = { src: iconProp }
  } else {
    return {}
  }
  switch (size) {
    case 'SMALL':
      iconObj.size = { fontSize: '18px' }
      iconObj.padding = { paddingTop: '0.5rem' }
      break
    case 'MEDIUM':
      iconObj.size = { fontSize: '24px' }
      iconObj.padding = { paddingTop: '0.6rem' }
      break
    case 'LARGE':
      iconObj.padding = { paddingTop: '0.7rem' }
      iconObj.size = { fontSize: '36px' }
      break
  }
  return iconObj
}

export const img = (imgProp: any) => {
  let src
  if (typeof imgProp === 'string') {
    src = imgProp
  } else if (typeof imgProp === 'object' && imgProp?.src) {
    src = imgProp.src
  } else {
    return undefined
  }

  const position = imgProp?.position ? imgProp.position : 'top'
  var style = 'card-img'
  if (position !== 'overlay' && position !== 'none') {
    style += '-' + position
  }
  return {
    style: style,
    position: position,
    src: src
  }
}
