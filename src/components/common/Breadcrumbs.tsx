"use client"; // This directive marks this file as a Client Component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink component={Link} href="/" color="inherit" underline="hover">
          <HomeIcon fontSize="small" />
        </MuiLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography variant='h6' color="textPrimary" key={to}>
              {capitalize(decodeURIComponent(value))}
            </Typography>
          ) : (
            <MuiLink component={Link} href={to} color="inherit" underline="hover" key={to}>
              {capitalize(decodeURIComponent(value))}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
  );
};

export default Breadcrumb;
