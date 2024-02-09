import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';

export default function Copyright(props: { sx: { mt?: number, mb?: number } } ) {
    const { t } = useTranslation()

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {t('copyright')}
          <Link color="inherit" href="https://mui.com/">
            Mateo León
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}