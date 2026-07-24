export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],

  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'declaration-block-no-duplicate-properties': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'no-descending-specificity': null,
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'declarations',
        'rules',
        { type: 'at-rule', name: 'supports' },
        { type: 'at-rule', name: 'media' }
      ],
      { unspecified: 'bottom' }
    ],
    'order/properties-order': [
      [
        {
          groupName: 'Layout',
          emptyLineBefore: 'always',
          properties: [
            'position',
            'inset',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'visibility',
            'float',
            'clear',
            'flex',
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'justify-content',
            'align-content',
            'align-items',
            'align-self',
            'gap',
            'row-gap',
            'column-gap',
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'place-content',
            'place-items',
            'place-self',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'overflow',
            'overflow-x',
            'overflow-y'
          ]
        },
        {
          groupName: 'Visual',
          emptyLineBefore: 'always',
          properties: [
            'appearance',
            'background',
            'background-color',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-radius',
            'outline',
            'box-shadow',
            'opacity',
            'filter'
          ]
        },
        {
          groupName: 'Typography',
          emptyLineBefore: 'always',
          properties: [
            'font',
            'font-family',
            'font-feature-settings',
            'font-size',
            'font-style',
            'font-weight',
            'line-height',
            'letter-spacing',
            'text-align',
            'text-transform',
            'text-decoration',
            'text-overflow',
            'white-space',
            'word-break',
            'word-wrap',
            'hyphens',
            'color'
          ]
        },
        {
          groupName: 'Misc',
          emptyLineBefore: 'always',
          properties: [
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',
            'cursor',
            'pointer-events',
            'will-change',
            'content'
          ]
        }
      ],
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
        emptyLineMinimumPropertyThreshold: 2
      }
    ]
  },

  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**', '**/coverage/**']
};
