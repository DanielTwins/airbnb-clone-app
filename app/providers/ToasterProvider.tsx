"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;

//? only using <Toaster /> suppose to work in client libraries/frameworks
//? like Next.js 12 or in React. But since you add the <Toaster /> component
//? in "layout.tsx" which is a server-side rendering component should
//! at first <Toaster /> be wraped in a parent component like in this case
//! ToasterProvider and use "use client" to mark it as a client component

/* 
Toaster is a component provided by the react-hot-toast library that allows you 
to display notification messages in your React application.

When you use Toaster, it renders a notification container at the top-right corner 
of your application. You can then call the various methods provided by react-hot-toast
to show different types of notifications, such as success, error, or warning messages. 
The library provides several customization options for the appearance and behavior of 
the notification container, such as setting the position, timeout, or styling of the 
messages.

Using Toaster can make it easier to implement a consistent and user-friendly notification 
system in your React application without having to create your own custom solution from 
scratch. 
*/
