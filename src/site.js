require('./common')
require('./images/logo.png')
require('./images/acsr-logo.png')
require('./images/spd-tdf-logo.png')
require('./images/radar_legend.png')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build()
