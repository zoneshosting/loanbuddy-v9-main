import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Box } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  
  return (
    <Box 
      component={Link} 
      to={config.defaultPath}
      onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      sx={{
        display: 'flex',
        textDecoration: 'none',
        padding: '16px',
        width: '100%',
        height: '88px', // Match header height
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Logo />
    </Box>
  );
};

export default LogoSection;