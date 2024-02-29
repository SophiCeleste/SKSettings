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
        hint: 'Yank full page',
        domain: ''
    },
    {
        oks: 'yS',
        nks: '',
        hint: 'Yank scrollable element',
        domain: ''
    },
    {
        oks: 'ymv',
        nks: '',
        hint: 'Yank text multiple elements',
        domain: ''
    },
    {
        oks: 'yma',
        nks: '',
        hint: 'Yank multiple URLs',
        domain: ''
    },
    {
        oks: 'ymc',
        nks: '',
        hint: 'Yank multiple columns',
        domain: ''
    },
    {
        oks: 'yg',
        nks: '',
        hint: 'Yank current page',
        domain: ''
    },
    {
        oks: 'ya',
        nks: '',
        hint: 'Yank link URL',
        domain: ''
    },
    {
        oks: 'yc',
        nks: '',
        hint: 'Yank column',
        domain: ''
    },
    {
        oks: 'yq',
        nks: '',
        hint: 'Yank pre text',
        domain: ''
    },
    {
        oks: 'yi',
        nks: 'yi',
        hint: 'Yank input',
        domain: ''
    },
    {
        oks: 'ys',
        nks: '',
        hint: 'Yank source',
        domain: ''
    },
    {
        oks: 'yj',
        nks: '',
        hint: 'Yank settings',
        domain: ''
    },
    {
        oks: 'yt',
        nks: 'yt',
        hint: 'Yank text',
        domain: ''
    },
    {
        oks: 'yy',
        nks: 'yy',
        hint: 'Yank current URL',
        domain: ''
    },
    {
        oks: 'yY',
        nks: '',
        hint: 'Yank URL of all tabs',
        domain: ''
    },
    {
        oks: 'yh',
        nks: '',
        hint: 'Yank host',
        domain: ''
    },
    {
        oks: 'yl',
        nks: '',
        hint: 'Yank title',
        domain: ''
    },
    {
        oks: 'yQ',
        nks: '',
        hint: 'Yank query history of OmniQuery',
        domain: ''
    },
    {
        oks: 'yf',
        nks: 'yf',
        hint: 'Yank form JSON',
        domain: ''
    },
    {
        oks: 'yp',
        nks: '',
        hint: 'Yank form POST',
        domain: ''
    },
    {
        oks: 'yd',
        nks: '',
        hint: 'Yank downloading URL',
        domain: ''
    },
    {
        oks: 'cq',
        nks: '',
        hint: 'Query word with hints',
        domain: ''
    },
    {
        oks: 'cc',
        nks: '',
        hint: 'Open link clipboard / selected',
        domain: ''
    },
    {
        oks: ';pp',
        nks: '',
        hint: 'Paste HTML to current page',
        domain: ''
    },
    {
        oks: ';pj',
        nks: '',
        hint: 'Restore settings from keyboard',
        domain: ''
    },
    {
        oks: ';pf',
        nks: '',
        hint: 'Fill form from clipboard',
        domain: ''
    },
    {
        oks: ';cq',
        nks: '',
        hint: 'Clear all URLs in queue',
        domain: ''
    },

    // Vim-like Marks
    {
        oks: 'm',
        nks: 'm',
        hint: 'Add URL to marks',
        domain: ''
    },
    {
        oks: '\'',
        nks: 'M',
        hint: 'Jump to mark',
        domain: ''
    },
    {
        oks: '<Ctrl-\'',
        nks: '<Space>m',
        hint: 'Jump to mark new tab',
        domain: ''
    },

    // Settings
    {
        oks: ';pm',
        nks: '',
        hint: 'Preview markdown',
        domain: ''
    },
    {
        oks: ';e',
        nks: ';e',
        hint: 'Edit settings',
        domain: ''
    },
    {
        oks: ';v',
        nks: ';v',
        hint: 'Open neovim',
        domain: ''
    },

    // Chrome URLs
    {
        oks: 'ga',
        nks: '',
        hint: 'Open Chrome about',
        domain: ''
    },
    {
        oks: 'gb',
        nks: '',
        hint: 'Open Chrome bookmarks',
        domain: ''
    },
    {
        oks: 'gc',
        nks: '',
        hint: 'Open Chrome cache',
        domain: ''
    },
    {
        oks: 'gd',
        nks: '',
        hint: 'Open Chrome downloads',
        domain: ''
    },
    {
        oks: 'gh',
        nks: '',
        hint: 'Open Chrome history',
        domain: ''
    },
    {
        oks: 'gk',
        nks: '',
        hint: 'Open Chrome cookies',
        domain: ''
    },
    {
        oks: 'ge',
        nks: '',
        hint: 'Open Chrome extensions',
        domain: ''
    },
    {
        oks: 'gn',
        nks: '',
        hint: 'Open Chrome net-internals',
        domain: ''
    },
    {
        oks: 'gs',
        nks: 'gs',
        hint: 'View page source',
        domain: ''
    },
    {
        oks: ';i',
        nks: ';i',
        hint: 'Open Chrome inspect',
        domain: ''
    },
    {
        oks: ';j',
        nks: ';j',
        hint: 'Close downloads',
        domain: ''
    },

    // Proxy
    {
        oks: 'cp',
        nks: '',
        hint: 'Toggle proxy',
        domain: ''
    },
    {
        oks: ';pa',
        nks: '',
        hint: 'Proxy always',
        domain: ''
    },
    {
        oks: ';pb',
        nks: '',
        hint: 'Proxy byhost',
        domain: ''
    },
    {
        oks: ';pd',
        nks: '',
        hint: 'Proxy direct',
        domain: ''
    },
    {
        oks: ';ps',
        nks: '',
        hint: 'Proxy system',
        domain: ''
    },
    {
        oks: ';pc',
        nks: '',
        hint: 'Proxy clear',
        domain: ''
    },
    {
        oks: ';cp',
        nks: '',
        hint: 'Copy proxy info',
        domain: ''
    },
    {
        oks: ';ap',
        nks: '',
        hint: 'Apply proxy info from clipboard',
        domain: ''
    },

    // Misc
    {
        oks: 'gr',
        nks: '',
        hint: 'Read text from clipboard / selected',
        domain: ''
    },
    {
        oks: ';s',
        nks: ';s',
        hint: 'Toggle PDF viewer',
        domain: ''
    },
    {
        oks: ';ph',
        nks: '',
        hint: 'Paste history form clipboard',
        domain: ''
    },
    {
        oks: ';t',
        nks: ';t',
        hint: 'Translate selected text',
        domain: ''
    },
    {
        oks: ';dh',
        nks: ';dh',
        hint: 'Delete history older than 30 days',
        domain: ''
    },
    {
        oks: ';db',
        nks: ';xb',
        hint: 'Remove current bookmark',
        domain: ''
    },
    {
        oks: ';yh',
        nks: '',
        hint: 'Yank history',
        domain: ''
    }
];
/*
maps.omnibar = [
    // Omnibar
    {
        oks: 'go',
        nks: 'go',
        hint: 'Open URL in current tab',
        domain: ''
    },
    {
        oks: 'Q',
        nks: '',
        hint: 'Open omnibar for translation',
        domain: ''
    },
    {
        oks: 'ab',
        nks: 'ab',
        hint: 'Bookmark page to folder',
        domain: ''
    },
    {
        oks: 'oi',
        nks: 'oi',
        hint: 'Incognito',
        domain: ''
    },
    {
        oks: 'om',
        nks: '',
        hint: 'Open URL from marks',
        domain: ''
    },
    {
        oks: 'og',
        nks: 'og',
        hint: 'Open search g',
        domain: ''
    },
    {
        oks: 'od',
        nks: 'od',
        hint: 'Open search d',
        domain: ''
    },
    {
        oks: 'ob',
        nks: 'ob',
        hint: 'Open search b',
        domain: ''
    },
    {
        oks: 'oe',
        nks: 'oe',
        hint: 'Open search e',
        domain: ''
    },
    {
        oks: 'ow',
        nks: 'ow',
        hint: 'Open search w',
        domain: ''
    },
    {
        oks: 'os',
        nks: 'os',
        hint: 'Open search s',
        domain: ''
    },
    {
        oks: 'oy',
        nks: 'oy',
        hint: 'Open search y',
        domain: ''
    },
    {
        oks: 'ox',
        nks: 'ox',
        hint: 'Open recently closed URL',
        domain: ''
    },
    {
        oks: 'oh',
        nks: 'oh',
        hint: 'Open URL from history',
        domain: ''
    },
    {
        oks: ':',
        nks: ':',
        hint: 'Open commands',
        domain: ''
    },
    {
        oks: 't',
        nks: 't',
        hint: 'Open URL',
        domain: ''
    },
    {
        oks: 'b',
        nks: 'b',
        hint: 'Open a bookmark',
        domain: ''
    },
    {
        oks: '<Ctrl-d>',
        nks: '',
        hint: 'Delete focused item from bookmark / history',
        domain: ''
    },
    {
        oks: '<Ctrl-i>',
        nks: '<Ctrl-i>',
        hint: 'Edit URL with vim then open',
        domain: ''
    },
    {
        oks: '<Ctrl-j>',
        nks: '<Ctrl-j>',
        hint: 'Toggle omnibar\'s position',
        domain: ''
    },
    {
        oks: '<Ctrl-.>',
        nks: '',
        hint: 'Show results of next page',
        domain: ''
    },
    {
        oks: '<Ctrl-,>',
        nks: '',
        hint: 'Show results of previous page',
        domain: ''
    },
    {
        oks: '<Ctrl-c>',
        nks: '',
        hint: 'Copy selected item URL',
        domain: ''
    },
    {
        oks: '<Ctrl-D>',
        nks: '',
        hint: 'Delete all listed items from bookmark / history',
        domain: ''
    },
    {
        oks: '<Ctrl-r>',
        nks: '',
        hint: 'Resort history by visit count or time',
        domain: ''
    },
    {
        oks: '<Esc>',
        nks: '<Esc>',
        hint: 'Close omnibar',
        domain: ''
    },
    {
        oks: '<Ctrl-m>',
        nks: '<Ctrl-m>',
        hint: 'Mark selected item',
        domain: ''
    },
    {
        oks: '<Tab>',
        nks: '<Tab>',
        hint: 'Cycle through candidates',
        domain: ''
    },
    {
        oks: '<Shift-Tab>',
        nks: '<Shift-Tab>',
        hint: 'Cycle backwards through candidates',
        domain: ''
    },
    {
        oks: '<Ctrl-\'>',
        nks: '<Ctrl-\'>',
        hint: 'Toggle quotes',
        domain: ''
    },
    {
        oks: '<ArrowDown>',
        nks: '',
        hint: 'Cycle through candidates',
        domain: ''
    },
    {
        oks: '<ArrowUp>',
        nks: '',
        hint: 'Cycle backwards through candidates',
        domain: ''
    },
    {
        oks: '<Ctrl-n>',
        nks: '',
        hint: 'Cycle through candidates',
        domain: ''
    },
    {
        oks: '<Ctrl-p>',
        nks: '',
        hint: 'Cycle backwards through candidates',
        domain: ''
    }
];

maps.visual = [
    // Visual Mode
    {
        oks: '/',
        nks: '/',
        hint: 'Find',
        domain: ''
    },
    {
        oks: 'zv',
        nks: 'zv',
        hint: 'Enter visual mode and select entire element',
        domain: ''
    },
    {
        oks: 'V',
        nks: '',
        hint: 'Restore visual mode',
        domain: ''
    },
    {
        oks: '*',
        nks: '*',
        hint: 'Find selected text',
        domain: ''
    },
    {
        oks: 'v',
        nks: 'v',
        hint: 'Toggle visual mode',
        domain: ''
    },
    {
        oks: 'n',
        nks: 'n',
        hint: 'Find next match',
        domain: ''
    },
    {
        oks: 'N',
        nks: 'N',
        hint: 'Find previous match',
        domain: ''
    },
    {
        oks: '0',
        nks: 'H',
        hint: 'Go to beginning / end of previous line',
        domain: ''
    },
    {
        oks: 'l',
        nks: 'l',
        hint: 'Cursor right',
        domain: ''
    },
    {
        oks: 'h',
        nks: 'h',
        hint: 'Cursor left',
        domain: ''
    },
    {
        oks: 'j',
        nks: 'j',
        hint: 'Cursor down',
        domain: ''
    },
    {
        oks: 'k',
        nks: 'k',
        hint: 'Cursor up',
        domain: ''
    },
    {
        oks: 'w',
        nks: 'w',
        hint: 'Go to beginning of next word',
        domain: ''
    },
    {
        oks: 'e',
        nks: 'e',
        hint: 'Go to beginning of next word',
        domain: ''
    },
    {
        oks: 'b',
        nks: 'W',
        hint: 'Go to the beginning of previous word',
        domain: ''
    },
    {
        oks: ')',
        nks: '',
        hint: 'Forward sentence',
        domain: ''
    },
    {
        oks: '(',
        nks: '',
        hint: 'Backward sentence',
        domain: ''
    },
    {
        oks: '}',
        nks: '',
        hint: 'Forward paragraph',
        domain: ''
    },
    {
        oks: '{',
        nks: '',
        hint: 'Backward paragraph',
        domain: ''
    },
    {
        oks: '$',
        nks: 'L',
        hint: 'Go to beginning / end of next line',
        domain: ''
    },
    {
        oks: 'G',
        nks: '',
        hint: 'Forward document boundary',
        domain: ''
    },
    {
        oks: 'gg',
        nks: '',
        hint: 'Backward document boundary',
        domain: ''
    },
    {
        oks: 'gr',
        nks: '',
        hint: 'Read selected text',
        domain: ''
    },
    {
        oks: 'o',
        nks: 'o',
        hint: 'Go to other end of selection',
        domain: ''
    },
    {
        oks: '<Enter>',
        nks: '<Enter>',
        hint: 'Click element under cursor',
        domain: ''
    },
    {
        oks: '<Shift-Enter>',
        nks: '<Shift-Enter>',
        hint: 'Click element under cursor new tab',
        domain: ''
    },
    {
        oks: 'zt',
        nks: 'zt',
        hint: 'Move cursor to top of window',
        domain: ''
    },
    {
        oks: 'zz',
        nks: 'zz',
        hint: 'Move cursor to center of window',
        domain: ''
    },
    {
        oks: 'zb',
        nks: 'zb',
        hint: 'Move cursor to bottom of window',
        domain: ''
    },
    {
        oks: 'f',
        nks: 'f',
        hint: 'Jump to next <char>',
        domain: ''
    },
    {
        oks: 'F',
        nks: 'F',
        hint: 'Jump to previous <char>',
        domain: ''
    },
    {
        oks: ';',
        nks: '.',
        hint: 'Repeat last f / F',
        domain: ''
    },
    {
        oks: ',',
        nks: ',',
        hint: 'Repeat last f / F in opposite direction',
        domain: ''
    },
    {
        oks: 'p',
        nks: 'p',
        hint: 'Expand selection to parent element',
        domain: ''
    },
    {
        oks: 'V',
        nks: 'V',
        hint: 'Select a (w)ord, (l)ine, (s)entence, or (p)aragraph',
        domain: ''
    },
    {
        oks: '<Ctrl-u>',
        nks: '<Ctrl-j>',
        hint: 'Jump 20 lines up',
        domain: ''
    },
    {
        oks: '<Ctrl-d>',
        nks: '<Ctrl-k>',
        hint: 'Jump 20 lines down',
        domain: ''
    },
    {
        oks: 't',
        nks: 'Q',
        hint: 'Translate selected text',
        domain: ''
    },
    {
        oks: 'q',
        nks: 'q',
        hint: 'Translate selected word',
        domain: ''
    }
];

maps.insert = [
    // Insert Mode
    {
        oks: '<Ctrl-e>',
        nks: '<Ctrl-j>',
        hint: 'Move cursor to end of line',
        domain: ''
    },
    {
        oks: '<Ctrl-f>',
        nks: '<Ctrl-k>',
        hint: 'Move cursor to beginning of line',
        domain: ''
    },
    {
        oks: '<Ctrl-u>',
        nks: '<Ctrl-dd>',
        hint: 'Delete all characters before the cursor',
        domain: ''
    },
    {
        oks: '<Alt-b>',
        nks: '<Ctrl-h>',
        hint: 'Jump back a word',
        domain: ''
    },
    {
        oks: '<Alt-f>',
        nks: '<Ctrl-l>',
        hint: 'Jump forward a word',
        domain: ''
    },
    {
        oks: '<Alt-w>',
        nks: '<Alt-h>',
        hint: 'Delete previous word',
        domain: ''
    },
    {
        oks: '<Alt-d>',
        nks: '<Alt-l>',
        hint: 'Delete next word',
        domain: ''
    },
    {
        oks: '<Esc>',
        nks: '<Esc>',
        hint: 'Exit insert mode',
        domain: ''
    },
    {
        oks: '<Ctrl-\'>',
        nks: '<Ctrl-\'>',
        hint: 'Toggle quotes',
        domain: ''
    },
    {
        oks: '<Ctrl-i>',
        nks: '<Ctrl-i>',
        hint: 'Open vim for current field',
        domain: ''
    },
    {
        oks: '<Ctrl-Alt-i>',
        nks: '',
        hint: 'Open neovim for current field',
        domain: ''
    }
];
*/

console.log(maps.normal.length);

function test(temp) {
    console.log(temp.length);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].nks == '') {
            api.unmap(temp[i].oks);
            continue;
        }
        api.map(temp[i].nks, temp[i].oks, temp[i].domain, temp[i].hint);
    }
}

test(maps.normal);

/*
function createMap(a) {
    console.log(a.length);
    for (let i = 0; i < a.length; i++) {
        if a[i].nks == '' {
            api.unmap(a[i].oks);
            continue;
        }
        api.map(a[i].eks, a[i].oks, a[i].hint, a[i].domain);
        //api.unmap(map[i].oks);
    }
}

createMap(maps.normal[]);
*/
//createMap(maps.omnibar);
//createMap(maps.visual);
//createMap(maps.insert);

//api.mapkey('<Space>df', 'test', function() {
//    console.log('this is just a test');
//});
// Netsuite

//u = /netsuite\.com/;
//k = leader + k;

//mapKeysOld(k, h, c, u);

//api.map('<Space>o', k);
//api.unmap(k);
