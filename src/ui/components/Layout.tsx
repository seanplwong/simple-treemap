import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


export interface LayoutProps {
  title: string;
}

export const Layout = ({
  children,
  title,
}: PropsWithChildren<LayoutProps>) => (
  <Container maxWidth="sm">
    <Head>
      <title>{title}</title>
    </Head>
    <Typography variant="h4" component="h1" gutterBottom align="center">
      {title}
    </Typography>
    {children}
  </Container>
);
