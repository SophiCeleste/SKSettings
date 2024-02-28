const maps = {}

maps.normal = [
    // Help
    {
        oks: '<Alt-s>',
        nks: '<Alt-;>',    
        hint: 'Toggle SurfingKeys on current site',
        domain: ''
    },
    {
        oks: '<Alt-i>',
        nks: 'p',
        hint: 'Enter pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: 'p',
        nks: 'ep',
        hint: 'Enter ephemeral pass through mode to temporarily suppress SurfingKeys',
        domain: ''
    },
    {
        oks: '?',
        nks: '?',
        hint: 'Show help',
        domain: ''
    },
    {
        oks: ';ql',
        nks: '<Space>.',
        hint: 'Show last action',
        domain: ''
    },
    {
        oks: '.',
        nks: '.',
        hint: 'Repeat last action',
        domain: ''
    },

    // Mouse Click
    {
        oks: 'cf',
        nks: ';f',
        hint: 'Open multiple links in a new tab',
        domain: ''
    },
    {
        oks: 'gi',
        nks: 'gi',
        hint: 'Go to the first input field',
        domain: ''
    },
    {
        oks: 'gf',
        nks: 'F',
        hint: 'Open a link in a non-active new tab',
        domain: ''
    },
    {
        oks: '[[',
        nks: '[[',
        hint: 'Clicks the previous link on the current page',
        domain: ''
    },
    {
        oks: ']]',
        nks: ']]',
        hint: 'Clicks the next link on the current page',
        domain: ''
    },
    {
        oks: ';m',
        nks: ';m',
        hint: 'Mouse out final element',
        domain: ''
    },
    {
        oks: ';fs',
        nks: 'sh',
        hint: 'Display hints to focus scrollable elements',
        domain: ''
    },
    {
        oks: ';di',
        nks: ';di',
        hint: 'Download image',
        domain: ''
    },
    {
        oks: 'i',
        nks: 'i',
        hint: 'Select input field',
        domain: ''
    },
    {
        oks: 'I',
        nks: 'I',
        hint: 'Open input field with vim editor',
        domain: ''
    },
    {
        oks: 'O',
        nks: 'O',
        hint: 'Open detected links from selected text',
        domain: ''
    },
    {
        oks: 'f',
        nks: 'f',
        hint: 'Open a link in the current tab',
        domain: ''
    },
    {
        oks: 'af',
        nks: '<Space>f',
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
        nks: 'mov',
        hint: 'Mouse over element',
        domain: ''
    },
    {
        oks: '<CTRL-j>',
        nks: 'mou',
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
        nks: 'ci',
        hint: 'Click on an image or button',
        domain: ''
    },
    {
        oks: '<Ctrl-Alt-i>',
        nks: '',
        hint: 'Open input field with vim editor',
        domain: ''
    },

    // Scroll Page / Element
    {
        oks: '0',
        nks: '<Space>h',
        hint: 'Scroll left end',
        domain: ''
    },
    {
        oks: 'cS',
        nks: 'sr',
        hint: 'Reset scroll target',
        domain: ''
    },
    {
        oks: 'cs',
        nks: 's;',
        hint: 'Change scroll target',
        domain: ''
    },
    {
        oks: 'e',
        nks: 'K',
        hint: 'Scroll half page up',
        domain: ''
    },
    {
        oks: 'U',
        nks: '<Space>k',
        hint: 'Scroll full page up',
        domain: ''
    },
    {
        oks: 'd',
        nks: 'J',
        hint: 'Scroll half page down',
        domain: ''
    },
    {
        oks: 'P',
        nks: '<Space>j',
        hint: 'Scroll full page down',
        domain: ''
    },
    {
        oks: 'gg',
        nks: 'gg',
        hint: 'Scroll to top',
        domain: ''
    },
    {
        oks: 'G',
        nks: 'G',
        hint: 'Scroll to bottom',
        domain: ''
    },
    {
        oks: 'j',
        nks: 'j',
        hint: 'Scroll down',
        domain: ''
    },
    {
        oks: 'k',
        nks: 'k',
        hint: 'Scroll up',
        domain: ''
    },
    {
        oks: 'h',
        nks: 'h',
        hint: 'Scroll left',
        domain: ''
    },
    {
        oks: 'l',
        nks: 'l',
        hint: 'Scroll right',
        domain: ''
    },
    {
        oks: '$',
        nks: '<Space>l',
        hint: 'Scroll right end',
        domain: ''
    },
    {
        oks: '%',
        nks: '%',
        hint: 'Scroll percentage',
        domain: ''
    },
    {
        oks: ';w',
        nks: '<Space>m',
        hint: 'Switch frames',
        domain: ''
    },
    {
        oks: 'w',
        nks: '<Space>M',
        hint: 'Focus top frame',
        domain: ''
    },

    // Tabs
    {
        oks: 'yT',
        nks: 'TT',
        hint: 'Duplicate tab, non active',
        domain: ''
    },
    {
        oks: 'yv',
        nks: 'tt',
        hint: 'Duplicate tab',
        domain: ''
    },
    {
        oks: 'g0',
        nks: 'th',
        hint: 'Go to first tab',
        domain: ''
    },
    {
        oks: 'g$',
        nks: 'tl',
        hint: 'Go to last tab',
        domain: ''
    },
    {
        oks: 'gx0',
        nks: 'CH',
        hint: 'Close all tabs on the left',
        domain: ''
    },
    {
        oks: 'gxt',
        nks: 'ch',
        hint: 'Close tab left',
        domain: ''
    },
    {
        oks: 'gxT',
        nks: 'cl',
        hint: 'Close tab right',
        domain: ''
    },
    {
        oks: 'gx$',
        nks: 'CL',
        hint: 'Close all tabs on the right',
        domain: ''
    },
    {
        oks: 'gxx',
        nks: 'CC',
        hint: 'Close all other tabs',
        domain: ''
    },
    {
        oks: 'gxp',
        nks: 'cs',
        hint: 'Close playing tab',
        domain: ''
    },
    {
        oks: 'E',
        nks: 'H',
        hint: 'Go tab left',
        domain: ''
    },
    {
        oks: 'R',
        nks: 'L',
        hint: 'Go tab right',
        domain: ''
    },
    {
        oks: 'T',
        nks: 't;',
        hint: 'Choose a tab',
        domain: ''
    },
    {
        oks: ';gt',
        nks: '',
        hint: 'Gather filtered tabs into current window',
        domain: ''
    },
    {
        oks: ';gw',
        nks: '',
        hint: 'Gather all tabs into current window',
        domain: ''
    },
    {
        oks: 'zr',
        nks: 'zr',
        hint: 'Zoom reset',
        domain: ''
    },
    {
        oks: 'zi',
        nks: 'zi',
        hint: 'Zoom in',
        domain: ''
    },
    {
        oks: 'zo',
        nks: 'zo',
        hint: 'Zoom out',
        domain: ''
    },
    {
        oks: '<Alt-p>',
        nks: 'tp',
        hint: 'Pin / unpin current tab',
        domain: ''
    },
    {
        oks: '<Alt-m>',
        nks: 'ms',
        hint: 'Mute / unmute current tab',
        domain: ''
    },
    {
        oks: 'on',
        nks: '<Space>g',
        hint: 'Open new tab',
        domain: ''
    },
    {
        oks: 'x',
        nks: 'x',
        hint: 'Close current tab',
        domain: ''
    },
    {
        oks: 'X',
        nks: 'X',
        hint: 'Reopen closed tab',
        domain: ''
    },
    {
        oks: 'W',
        nks: 'tm',
        hint: 'Move tab to another window',
        domain: ''
    },
    {
        oks: '<<',
        nks: '<Shift-Space>H',
        hint: 'Move tab left',
        domain: ''
    },
    {
        oks: '>>',
        nks: '<Shift-Space>L',
        hint: 'Move tab right',
        domain: ''
    },

    // Page Navigation
    {
        oks: 'gu',
        nks: '',
        hint: 'Go up one path in the URL',
        domain: ''
    },
    {
        oks: 'gT',
        nks: '',
        hint: 'Go to first activated tab',
        domain: ''
    },
    {
        oks: 'gt',
        nks: '',
        hint: 'Go to last activated tab',
        domain: ''
    },
    {
        oks: 'gp',
        nks: 'gs',
        hint: 'Go to playing tab',
        domain: ''
    },
    {
        oks: 'g?',
        nks: 'R?',
        hint: 'Reload current tab without query string',
        domain: ''
    },
    {
        oks: 'g#',
        nks: 'R#',
        hint: 'Reload current tab without hash fragment',
        domain: ''
    },
    {
        oks: 'gU',
        nks: '<Space>r',
        hint: 'Go to root URL',
        domain: ''
    },
    {
        oks: ';u',
        nks: '',
        hint: 'Edit URL and open in new tab',
        domain: ''
    },
    {
        oks: ';U',
        nks: '',
        hint: 'Edit URL and reload',
        domain: ''
    },
    {
        oks: 'B',
        nks: '',
        hint: 'Tab history back',
        domain: ''
    },
    {
        oks: 'F',
        nks: '',
        hint: 'Tab history forward',
        domain: ''
    },
    {
        oks: '<Ctrl-6>',
        nks: '',
        hint: 'Go to last used tab',
        domain: ''
    },
    {
        oks: 'S',
        nks: 'S',
        hint: 'History back',
        domain: ''
    },
    {
        oks: 'D',
        nks: 'D',
        hint: 'History forward',
        domain: ''
    },
    {
        oks: 'r',
        nks: 'r',
        hint: 'Reload current tab',
        domain: ''
    },

    // Sessions
    {
        oks: 'ZZ',
        nks: 'ZZ',
        hint: 'Save session and quit',
        domain: ''
    },
    {
        oks: 'ZR',
        nks: 'ZR',
        hint: 'Restore last session',
        domain: ''
    },

    // Search Selected With
    {
        oks: 'sg',
        nks: '',
        hint: 'Search Google',
        domain: ''
    },
    {
        oks: 'sd',
        nks: '',
        hint: 'Search Duckduckgo',
        domain: ''
    },
    {
        oks: 'sb',
        nks: '',
        hint: 'Search Baidu',
        domain: ''
    },
    {
        oks: 'se',
        nks: 'sk',
        hint: 'Search Wikipedia',
        domain: ''
    },
    {
        oks: 'sw',
        nks: '',
        hint: 'Search Bing',
        domain: ''
    },
    {
        oks: 'ss',
        nks: 'ss',
        hint: 'Search Stackoverflow',
        domain: ''
    },
    {
        oks: 'sh',
        nks: 'si',
        hint: 'Search Github',
        domain: ''
    },
    {
        oks: 'sy',
        nks: 'sy',
        hint: 'Search Youtube',
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