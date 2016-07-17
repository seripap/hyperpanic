
const backgroundColor = '#152638'
const foregroundColor = '#F8F7F1'
const cursorColor = '#BA1F72'

const colors = [
  backgroundColor,
  '#CA2E50',
  '#48A85C',
  '#E4B97A',
  '#5D747F',
  '#D22B72',
  '#6FBDB1',
  '#7C8481',
  '#454947',
  '#CA2E50', 
  '#48A85C',
  '#E4B97A', 
  '#5D747F', 
  '#D22B72',
  '#6FBDB1',
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
