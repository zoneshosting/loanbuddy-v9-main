import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Logo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: 228, // Match drawer width
      height: 48,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px'
    }}>
      <svg width="100%" height="32" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: 180}}>
        {/* Friendly mascot icon */}
        <g transform="translate(8, 8)">
          <circle cx="12" cy="12" r="12" fill={theme.palette.primary.main} />
          {/* Eyes */}
          <circle cx="8" cy="10" r="2" fill="white" />
          <circle cx="16" cy="10" r="2" fill="white" />
          {/* Smile */}
          <path d="M7 14 Q12 18 17 14" stroke="white" strokeWidth="2" fill="none" />
        </g>
        {/* LoanBuddy text */}
        <text x="40" y="25" fill={theme.palette.grey[900]} fontFamily="Roboto" fontSize="20" fontWeight="500">
          LoanBuddy
        </text>
      </svg>
    </Box>
  );
};

export default Logo;