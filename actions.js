const actions = {}

// Global actions

// Scroll within current element
// dir - scroll direction. Options: down | up | pageDown | fullPageDown | pageUp | fullPageUp | top | bottom | left | right | leftmost | rightmost | byRatio
actions.scroll = dir => api.Normal.scroll(dir);

export default actions
