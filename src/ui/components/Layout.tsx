import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


export interface LayoutProps {
  title?: string;
}

export const Layout = ({
  children,
  title,
}: PropsWithChildren<LayoutProps>) => (
  <Container maxWidth="xl">
    <Head>
      <title>{title ?? 'Treemap'}</title>
    </Head>
    {
      title
        ? (
          <Typography variant="h4" component="h1" gutterBottom align="center">
            {title}
          </Typography>
        )
        : null
    }
    {children}
  </Container>
);
