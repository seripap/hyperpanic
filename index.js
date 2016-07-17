
const backgroundColor = '#152638'
const foregroundColor = '#F8F7F1'
const cursorColor = '#ff43a1'

const colors = [
  backgroundColor,
  '#fc4349',
  '#40ea37',
  '#fecb57',
  '#6391bf',
  '#ff43a1',
  '#73d5e9',
  '#7C8481',
  '#454947',
  '#fc4349', 
  '#40ea37',
  '#fecb57', 
  '#6391bf', 
  '#ff43a1',
  '#73d5e9',
  '#ffffff',
  foregroundColor
]

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        font-weight: bold;
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
      }
    `
  })
}
