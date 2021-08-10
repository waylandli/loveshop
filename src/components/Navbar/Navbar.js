import React from 'react';
import { AppBar, Toolbar, IconButton, Typography , Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MarerialUIDrawer from '../Drawer/Drawer';

const Navbar = () => {

    const styles = {
        nav: {
            textAlign:'center',
            boxShadow:'none',
            background:'transparent',
            color:'black',
            height:'75px',
        },
    };

    return ( 
        <div>
            <AppBar style={styles.nav} position="static">
                <Typography variant="h7">
                    This Navbar should be transparent and have logo in middle
                </Typography>
            </AppBar>
            <MarerialUIDrawer/>
        </div>
     );
}
 
export default Navbar;