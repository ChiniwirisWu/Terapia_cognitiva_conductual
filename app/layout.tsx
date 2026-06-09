import React from 'react';

import Header from "@components/header";
import PageProvider from '@components/pageProvider';
import { dm_sans } from '@constants/fonts';
import '@constants/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className='scrollbar-gutter-stable'>
      <head></head>
      <body>
        {/* returns the current page to his children */}
        <PageProvider>
          <div className={`relative ${dm_sans.className}`}>

            <div className='absolute top-0 w-full'>
              <Header />
            </div>

            {children}

          </div>
        </PageProvider>
      </body>
    </html>
  )
}
