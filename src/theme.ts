import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            dark: '#9c27b0',
            main: '#d500f9',
            light: '#f3e5f5',
            contrastText: '#fff',
        },
        background:{
            default:'#FFFBFE'
        },
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    margin: 4,
                    width: '100%',
                    maxWidth: 360,
                },
            },
        },
        MuiListItemText:{
            styleOverrides:{
                root:{
                    marginRight: 50,
                    maxWidth:200,
                    display: 'flex',
                    flexWrap:'wrap'
                }
            }
        },
        MuiIconButton:{
            styleOverrides:{
                root:{
                    margin:1,
                    '&.Mui-hover':{
                        color:'#fff',
                        
                    }
                }
            }
        },
        MuiCheckbox:{
            styleOverrides:{
                root:{
                    color: '#fff',
                    '&.Mui-checked': {
                        color: '#fff',
                      },
                },
            },
        },
    }
});

export default theme;