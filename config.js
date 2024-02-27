const maps = {}

maps.normal = [
    // Help
    {
        oks: '<Alt-s>',
        nks: '',    
        hint: 'Toggle SurfingKeys on current site',
        domain: ''
    },
    {
        oks: '<Alt-i>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'p',
        nks: '',
        hint: 'Enter ephemeral pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '?',
        nks: '',
        hint: 'Show help',
        domain: ''
    },
    {
        oks: ';ql',
        nks: '',
        hint: 'Show last action',
        domain: ''
    },
    {
        oks: '.',
        nks: '',
        hint: 'Repeat last action',
        domain: ''
    },

    // Mouse Click
    {
        oks: 'cf',
        nks: '',
        hint: 'Open multiple links in a new tab',
        domain: ''
    },
    {
        oks: 'gi',
        nks: '',
        hint: 'Go to the first input field',
        domain: ''
    },
    {
        oks: 'gf',
        nks: '',
        hint: 'Open a link in a non-active new tab',
        domain: ''
    },
    {
        oks: '[[',
        nks: '',
        hint: 'Clicks the previous link on the current page',
        domain: ''
    },
    {
        oks: ']]',
        nks: '',
        hint: 'Clicks the next link on the current page',
        domain: ''
    },
    {
        oks: ';m',
        nks: '',
        hint: 'Mouse out final element',
        domain: ''
    },
    {
        oks: ';fs',
        nks: '',
        hint: 'Display hints to focus scrollable elements',
        domain: ''
    },
    {
        oks: ';di',
        nks: '',
        hint: 'Download image',
        domain: ''
    },
    {
        oks: 'i',
        nks: '',
        hint: 'Select input field',
        domain: ''
    },
    {
        oks: 'I',
        nks: '',
        hint: 'Open input field with vim editor',
        domain: ''
    },
    {
        oks: 'O',
        nks: '',
        hint: 'Open detected links from selected text',
        domain: ''
    },
    {
        oks: 'f',
        nks: '',
        hint: 'Open a link in the current tab',
        domain: ''
    },
    {
        oks: 'af',
        nks: '',
        hint: 'Open a link in an active new tab',
        domain: ''
    },
    {
        oks: 'C',
        nks: '',
        hint: 'Open a link in a non-active new tab',
        domain: ''
    },
    {
        oks: '<CTRL-h>',
        nks: '',
        hint: 'Mouse over element',
        domain: ''
    },
    {
        oks: '<CTRL-j>',
        nks: '',
        hint: 'Mouse out element',
        domain: ''
    },
    {
        oks: '<CTRL-i>',
        nks: '',
        hint: 'Open input field with vim editor',
        domain: ''
    },
    {
        oks: 'q',
        nks: '',
        hint: 'Click on an image or button',
        domain: ''
    },
    {
        oks: '<Ctrl-Alt-i>',
        nks: '',
        hint: 'Open input field with vim editor',
        domain: ''
    },
    {
        oks: 'F',
        nks: '',
        hint: 'Open a link in a non-active new tab',
        domain: ''
    },

    // Scroll Page / Element
    {
        oks: '0',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'cS',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'cs',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'e',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'U',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'd',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'P',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gg',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'G',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'j',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'k',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'h',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'l',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '$',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '%',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';w',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'w',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'u',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Tabs
    {
        oks: 'yT',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yv',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'g0',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'g$',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gx0',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gxt',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gxT',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gx$',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gxx',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gxp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'E',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'R',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'T',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';gt',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';gw',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zr',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zi',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zo',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-p>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-m>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'on',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'x',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'X',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'W',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<<',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '>>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Page Navigation
    {
        oks: 'gu',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gT',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gt',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'g?',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'g#',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gU',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';u',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';U',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'B',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-6>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'S',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'D',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'r',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Sessions
    {
        oks: 'ZZ',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ZR',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Search Selected With
    {
        oks: 'sg',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'sd',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'sb',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'se',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'sw',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ss',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'sh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'sy',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Clipboard
    {
        oks: 'yG',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yS',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ymv',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yma',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ymc',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yg',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ya',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yc',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yq',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yi',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ys',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yj',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yy',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yY',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yl',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yQ',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yf',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yd',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'yv',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'cq',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'cc',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pj',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pf',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';cq',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Vim-like Marks
    {
        oks: 'm',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '\'',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-\'',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Settings
    {
        oks: ';pm',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';e',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';v',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Chrome URLs
    {
        oks: 'ga',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gb',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gc',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gd',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gk',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ge',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gn',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gs',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';i',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';j',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Proxy
    {
        oks: 'cp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pa',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pb',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pd',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';ps',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';pc',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';cp',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';ap',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },

    // Misc
    {
        oks: 'gr',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';s',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';ph',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';t',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';dh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';db',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';yh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    }
]

maps.omnibar = [
    // Omnibar
    {
        oks: 'go',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'Q',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ab',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'oi',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'om',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'og',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'od',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ob',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'oe',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ow',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'os',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'oy',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'ox',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'oh',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ':',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 't',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'b',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-d>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-i>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-j>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-.>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-,>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-c>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-D>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-r>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Esc>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-m>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Tab>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Shift-Tab>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-\'>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<ArrowDown>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<ArrowUp>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-n>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-p>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    }
]

maps.visual = [
    // Visual Mode
    {
        oks: '/',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zv',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'V',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '*',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'v',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'n',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'N',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '0',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'l',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'h',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'j',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'k',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'w',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'e',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'b',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ')',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '(',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '}',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '{',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '$',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'G',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gg',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'gr',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'o',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '*',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Enter>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Shift-Enter>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zt',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zz',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'zb',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'f',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'F',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ';',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: ',',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'p',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'V',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-u>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-d>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 't',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'q',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    }
]

maps.insert = [
    // Insert Mode
    {
        oks: '<Ctrl-e>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-f>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-u>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-b>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-f>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-w>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Alt-d>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Esc>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-\'>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-i>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '<Ctrl-Alt-i>',
        nks: '',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    }
]

for (let i = 0; i < maps.normal.length; i++) {
    let oks = maps.normal[i].oks;
    let nks = maps.normal[i].nks;
    let hint = maps.normal[i].hint;
    let domain = maps.normal[i].domain;
    api.map(nks, oks, domain, hint);
};

api.map('<Alt-c>', '<Alt-s>');

api.mapkey('<Space>df', 'test', function() {
    console.log(maps.default[0].keystroke);
});
=======
// Netsuite

u = /netsuite\.com/;
k = leader + k;

mapKeysOld(k, h, c, u);

api.map('<Space>o', k);
api.unmap(k);
