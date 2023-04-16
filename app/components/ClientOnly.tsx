"use client";
//? the component makes sure to not show any unexpected error when the
//? page reloads - in layout.tsx you should wrap the client components 
//? within ClientOnly 
//! this might be a Next.js experimental issue for now

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hastMounted, setHastMounted] = useState(false);

  useEffect(() => {
    setHastMounted(true);
  }, []);

  if (!hastMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
