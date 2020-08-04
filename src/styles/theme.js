import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fcd947'
		},
		secondary: {
			main: '#13214a'
		},
		background: {
			default: '#f3f3f3'
		},
		error: {
			main: '#ff4a4a'
		}
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#e8e9ed'
				}
			}
		}
	},
	typography: {
		fontFamily: ['Exo']
	}
})

export default theme;