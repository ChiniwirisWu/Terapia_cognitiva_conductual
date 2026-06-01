import React from 'react';
import Header from '@/components/header';
import PageProvider from '@/components/pageProvider';
import './global.css';
import { dm_sans } from './fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
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
