'use client';

import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

const Page = () => {
  useEffect(() => {
    signOut({
      callbackUrl: '/login',
    });
    toast('Logging out!');
  }, []);

  return (
    <div>Invalid session</div>
  );
};

export default Page;
