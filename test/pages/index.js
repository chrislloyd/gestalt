// @flow
import * as React from 'react';
import Link from 'next/link';

const pages = ['Masonry', 'FlexibleMasonry', 'A11y'];

export default function IndexPage() {
  return (
    <ul>
      {pages.map(page => (
        <li key={page}>
          <Link href={{ pathname: `/${page}` }}>
            <a href={`/${page}`}>{page}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}