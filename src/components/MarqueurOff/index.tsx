import React from 'react';

import { motion } from 'framer-motion';

export const MarqueurOff = ({
  color,
  size,
  hovered,
}: {
  color?: string;
  size: number;
  hovered: boolean;
}) => {
  return (
    <motion.svg
      viewBox="0 0 21.7 18.9"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, fill: color }}
    >
      <motion.path
        animate={{ opacity: hovered ? 0 : 1 }}
        d="m20.7 7.5c0-.3 0-.8 0-1.1.1 0-.1-.2 0-.3-.1-.3-.1-.7-.2-1 .1 0 0-.2-.1 0-.1-.2 0-.3-.1-.4h-.1c0-.2.1-.3-.1-.3v-.1c-.1-.2-.4 0-.4-.4h.1c-.1-.2-.5-.1-.3-.5-.3-.3-.5-.4-.6-.7-.1-.4-1.1-.7-.9-1-.1 0-.2 0-.2-.1-.1 0-.1 0-.2 0v-.1h-.1v-.1c-.7-.8-2.8-.7-3.7-.1-.2-.2-.5-.1-.8-.1-.2-.2-.9 0-1 0 0-.1-.1 0-.1 0-.9.1-1.7 0-2.5.1-.2 0-.5-.1-.6 0h-.1c-.2.1-.8-.1-1 .1-.1-.1-.4 0-.5 0-.6 0-1.8.2-2.4.9h-.1v.1c-.5.1-1.3.8-1.4 1.2-.2.1-.5.4-.5.7.1 0 0-.1.1-.1v.1c-.1 0-.1 0-.2 0 0 .1 0 .1.1 0-.2.2-.5 1.3-.6 2h.1c-.1.2 0 .3-.1.4v.3c-.2 1.3-1 2.6-1.2 4 .1.5-.1 1.2.2 1.6v.2c.3.6.7 1.1 1.1 1.7-.1 0-.1-.1-.2-.1.2.2.3.5.5.7v.1c.4.3.7.8 1.1 1.1.6.6 2.1.6 2.7 1 .6.1 1.2.3 1.9.4h.1c.2.1.6 0 .8.1h.1c0 .1.1-.1.1 0 .5.1 1.1 0 1.4.1h.5c0 .1.1.1 0 0h.1c.1-.1.2 0 .3 0 .6-.1 1.7.2 2.3 0h.2c2.8 0 5.4-2.4 5.7-5.3 0-.1 0-.1 0-.2.2 0 0-.4.1-.4v-.1c.1 0 0-.2.1-.1v-.1c.1-.1 0-.4.1-.5v-.1c.1-1.2.7-2.3.5-3.6zm-18.8.8c.1 0 .1 0 0 0 0 0 .1.1 0 0zm.3 6c0-.1 0 0 0 0-.1 0-.1-.1 0 0zm11.4-13.1c.1 0 0 .1 0 0zm5.8 5.6v1.3h-.1c.1 1.1-.3 1.8-.5 2.6v.1c-.1.3-.4.9-.3 1.3-.1.4-.2.7-.2.9 0 .3 0 .6-.2.8v.2c-.2.3-.3.9-.6 1.1-.5 1.2-1.8 2.4-3.2 2.2-.1 0-.1 0-.2 0-.1-.1-.4 0-.5-.1-.4 0-1.4 0-1.9-.1-.1 0-.2 0-.2 0 0-.1-.2 0-.3 0-.2-.1-.5-.1-.9-.1-.5-.1-1.5-.2-1.9-.4h-.1c-2.5-.3-6.1-3.7-5.7-6.4 0-.9.7-1.6.7-2.6 0-.1 0-.1 0-.2h.1c0-.2.1-.4.1-.5 0-.3 0-.6.1-.8-.1-.8.3-1.5.6-2.1.2.1.2-.3.4-.4 1.7-2.5 5.3-1.4 8.3-1.8.2.1.6 0 .7 0 .6.1 1.2-.5 1.8-.4h.1c1 .2 2.1 1.3 2.7 2.2v.1c.1 0 .1.2.3.1-.1.5.5.9.5 1 0 .2.2.2.1.4.3.4.3 1 .3 1.6zm1.1-.1c-.1-.1.1-.2 0 0zm-1.5-.5c-.1-.6-.7-1.6-.9-1.8 0 0-.1-.1-.1-.1.2-.1-.3-.3-.1-.3-1.3-1.2-2.7-1.8-4.7-1.6-.5-.1-1 0-1.5-.1-2.8.2-5.2.9-6.9 3 .1 0 .1-.1.2-.1 0 .1-.1.3-.2.3v.3c-.1 0 0 .4-.2.4 0 .6 0 1-.3 1.3 0 .3.1.1.2.2 0 1.1-.4 1.9-.9 2.7v.1.4c-.2.1 0 .8-.2.9v.1c-.1 0 0 .2 0 .2v.2c.2.9 1.6 2.1 2 2.7 1.1.6 2.2 1 3.3 1.2h.1c.6.2 1.9 0 2.5 0h.7.3c1.9-.1 4.9-.6 5.5-3.2h-.1c0-.1.1-.1.2-.1 0-.1 0-.2 0-.3.1-1.7.7-3.3 1-4.9.1 0 0-.2.1 0 0-.1 0-.1 0-.2.1-.2.1-.8 0-1.3zm-13.2.2c.1 0 .1.3 0 .3-.1-.1-.1-.1 0-.3zm11.7 1.4c-.1 1-.7 1.7-1 2.5v.3c-.1 0-.1.3-.1.4.1 0 .1.1.1.1-.2.1 0 .5-.1.6v.4c-.2.1 0 .5-.1.5.1 1.1-.6 2.2-1.6 2.6-.8.1-2 .5-3.1.3h-.1c0-.1-.1 0-.2 0-1.7.2-3.8-.5-4.9-1.8-.9-.3-1.5-2.3-1.2-2.7-.1-.8.5-1.7.6-2.3v-.1c.1-.2 0-.6 0-.7h.1c0-.2-.1-.2 0-.4h-.1c-.1-.2-.1-.5.1-.5 0 0-.1-.1-.1-.1.1 0 .1-.1.1-.1 0-.2 0-.5.1-.6.2-.8 1.2-1.4 1.8-1.7.7-.4 1.4-.8 2.2-1 1.8.2 4.2-.8 5.4.3 1.1.7 1.8 1.9 2.1 2.8.1.4.1 1 0 1.2zm1.2-1.8c-.1 0-.1 0 0 0 0-.1 0-.1 0 0zm1-2.4c-.1 0-.1 0 0 0zm-4.4.2c.1.1 0 0 0 0 .1 0 .1 0 0 0zm1.6 3.1c0-.4 0-.6-.1-.9 0-.5-.2-1.2-.6-1.3v-.1c-.2-.2-.5-.2-.7-.4-.1 0-.1 0-.2 0-.4-.2-1.1 0-1.5-.2-.1 0-.1 0-.2 0-.7-.2-2 .4-2.6 0-.1.1-.4 0-.4.2-.2 0-.4-.1-.6-.1-2.3.8-4.5 3.1-3.5 5.4-.2.6-.5 1.4-1 1.8.1.5.2.9.5 1.3.8 1.9 2.9 2.3 4.9 2.5v-.1c.3.3 1-.1 1.4 0 .1-.1.5 0 .6-.2h.1c.7-.4 2-.8 2.3-1.7.6-.5.7-1.3.9-2.1-.1-.1 0-.3 0-.4h.1c-.1-.2.2-.3 0-.4.4-1.1.7-1.8.8-2.9-.3.1 0-.4-.2-.4zm-1.2 1.1c0 .3-.2.6-.3.9h-.1c-.6 1.3-.8 2.3-1 3.5-.1 1.6-2 2-3.3 1.9-1-.2-2-.5-2.7-1.3h-.1c-.3-.6-.8-1.1-1-1.8.1-.1 0-.2 0-.3.3-.4.3-.9.5-1.3v-.1c0-.1 0-.4 0-.5v-.1c-.2 0-.2-.3-.2-.6.1-1.2.9-2.5 2.2-2.9.1-.1.4-.3.5-.2 0-.1.5-.2.5-.2.2 0 1 0 .9-.1 0-.1.5-.2.5 0 2.7-.6 3.8.5 3.6 3.1zm4.7-3.2s0 .1 0 0zm-5 2.2c-.6-2.8-4-1.9-5.6-.6h-.1c-1.5.3-2.1 2.3-1.2 3.5v.1c-1.2 1.2-.8 2.4.5 3 1.4 1.5 3.6.5 4.4-1.1.7-.7.6-1.6.9-2.4 1.1-.5 1-1.5 1.1-2.5zm-2.3 2.8c0-.1 0 0 0 0zm1.2-2.5c-.1.7-.4 1.6-1 2 0-.1.1-.2.1-.2 0-.1-.1-.2 0-.3-.1 0 0-.2 0-.2.1-3-4.8-1.2-3.2 1v.3c0 .3-.7.8-.4 1.4.2-.1.3.6.5.7h.2c1.1.5 1.8-.9 2.4-1.5v-.1c.7-.8-.5 2.2-1.6 2.8h-.1c0 .1-.1 0-.1 0h-.1c-.4-.1-.6-.5-.9-.6 0 .1.2.1.1.2-.4-.3-.7-.6-1-1h.1c-.1-.2 0-.5 0-.7.2-.3.4-.7.6-.9 0-.1 0-.1 0-.2.1-.1 0-.4 0-.5-.4.2-.4-.5-.5-.6 0-.5.1.3.2.4-.2-.9-.3-2.7 1-2.4 1.1-1 3.7-1.9 3.7.4zm-1.9 1.7c-.6.4-.6 1.9-1.4 2.1 0-.1 0-.1 0-.2-.3-.7.8-1.6.1-1.9 0-.1 0-.1 0-.2-.1 0-.1-.3 0-.3-.2-.7.6-.6 1-.8.4.5.3.8.3 1.3zm-2.9.7c.1-.1.1.1.1.2-.1.1 0-.1-.1-.2zm-4.9-4.3c0 .1 0 .1 0 0 .1 0 .1.1 0 0zm14.3 3.1c-.1.2.2-.1 0 0zm-.1.2c.1 0 .1-.1.1-.1-.1 0-.1 0-.1.1zm-3.5 0s0 .1 0 0c.1 0 .1 0 0 0zm-3.8.8s0 .1 0 0zm0 .3c.1 0 .1-.1.1-.2-.1-.1-.1.1-.1.2zm-3.9.5c0 .1.1-.1 0 0zm10.6.1c0-.1 0-.1 0 0 .1 0 .1-.2 0 0zm-.4 2.6s0 .1 0 0c0 0 .1 0 0 0zm-12.8 1.8c.1.1 0 .1.1.1 0 0-.1 0-.1-.1zm.1.1c0 .1.1.1.2.2 0-.1-.1-.1-.2-.2z"
      />
      <motion.path
        animate={{ opacity: hovered ? 1 : 0 }}
        d="m5.8 6.4c-.1.2-.1.1 0 .3.1 0 .1-.2 0-.3zm12.4 4c0-.1 0-.1 0 0zm-5.1-.6c0-.1 0 0 0 0zm5.1.6c0-.1 0-.1 0 0zm-8.8-1.5c.1.1.1.8.3.5-.2-.1-.2-.9-.3-.5zm4.6 1.3s.1 0 0 0zm-.4-9s0 .1 0 0c0 .1.1 0 0 0zm-11.2 4.3s.1 0 0 0zm8.3 1.5c-1.4-.3-1.3 1.5-1 2.4.1.1.2.4 0 .5v.2c-.3.3-.5.7-.6.9 0 .2-.1.4 0 .7h-.1c.3.4.7.6 1 1 0-.1-.1-.1-.1-.2.4.2.6.5.9.6h.1c0 .1.1.1.1 0h.1c1-.5 2.3-3.6 1.6-2.8v.1c-.6.6-1.3 2-2.4 1.5-.1 0-.2 0-.2 0-.2-.1-.3-.7-.5-.7-.3-.6.4-1 .4-1.4 0-.1 0-.2 0-.3-1.5-2.3 3.3-4 3.2-1-.1 0-.1.2 0 .2-.1 0-.1.2 0 .3-.1 0-.1.1-.1.2.7-.4.9-1.2 1-2 .2-2.2-2.4-1.3-3.4-.2zm-8.5 7.3c-.1-.1-.1 0 0 0zm2.8.5c0 .1 0 .1 0 0 .1.1 0 .1 0 0zm.1.1s.1.1 0 0c.1.1 0 .1 0 0zm.2.2s-.1-.1-.1-.1.1.1.1.1zm-3.4-6.8c.1.1 0 0 0 0 .1 0 .1 0 0 0zm13.5-4.4c-.1-.1 0 0 0 0-.1-.1 0-.1 0 0-1.3-1.1-3.7-.1-5.4-.3-.8.1-1.5.5-2.2.8-.6.3-1.6.9-1.8 1.7-.1.1-.1.4-.1.6-.1 0 0 .1-.1.1 0 0 .1.1.1.1-.2.1-.2.4-.2.6h.1c-.1.2 0 .2 0 .4h-.1c.1.1.1.5 0 .7v.1c0 .6-.6 1.5-.5 2.3-.3.4.4 2.4 1.2 2.7 1.1 1.3 3.2 2 4.9 1.8h.2.1c1 .2 2.3-.2 3.1-.3 1-.3 1.7-1.5 1.6-2.6.1-.1 0-.4.1-.5 0-.1 0-.2 0-.4.2-.1 0-.5.1-.6 0 0 0-.2-.1-.1.1-.1 0-.4.1-.4 0-.1 0-.2 0-.3.4-.8 1-1.5 1-2.5.2-.3.1-.8.1-1.1-.3-.9-1.1-2.1-2.2-2.8zm1.5 3.4c-.1 1.1-.4 1.8-.8 2.9.2.1-.1.2 0 .4h-.1c.1.1-.1.3 0 .4-.2.7-.3 1.6-.9 2.1-.3.9-1.6 1.3-2.3 1.7h-.1c-.1.1-.5.1-.6.2-.3-.2-1.1.3-1.4 0v.1c-1.9-.2-4.1-.5-4.9-2.5-.3-.4-.4-.8-.5-1.3.6-.4.8-1.1 1-1.8-1-2.3 1.2-4.6 3.6-5.2.2 0 .4.1.6.1 0-.2.3-.1.4-.2.5.4 1.8-.3 2.6 0h.2c.4.1 1.1 0 1.5.2h.2c.2.2.5.1.7.4v.1c.4.1.7.9.6 1.3.2.3.1.5.1.9.3-.2 0 .3.1.2zm4.1 3.8c.2-1.2.9-2.4.6-3.9 0-.3 0-.8 0-1.2.2 0-.1-.2 0-.3-.1-.3-.1-.8-.2-1.1.1 0 0-.3-.1 0-.1-.2 0-.3-.1-.4h-.1c0-.2.1-.4-.1-.3v-.1c-.2-.2-.4 0-.5-.4h.1c-.1-.2-.6-.1-.3-.5-.3-.3-.5-.4-.6-.7-.1-.4-1.2-.8-.9-1.1-.1 0-.2 0-.2-.1-.1 0-.1 0-.2 0v-.1h-.1v-.1c-.8-.9-3.1-.8-4.1-.1-.2-.3-.5-.1-.8-.1-.2-.2-.9 0-1.1 0 0-.1-.1 0-.1 0-.9.1-1.9 0-2.7.1-.2-.1-.5-.1-.6 0h-.1c-.4.2-1-.1-1.2.1-.2-.1-.4 0-.5 0-.7 0-2 .3-2.7.9h-.1v.1c-.8 0-1.6.8-1.8 1.3-.2.1-.5.4-.5.7.1 0 0-.1.1-.1 0 .1-.1.1 0 .1-.1 0-.1 0-.2 0 0 .1 0 .1.1 0-.3.3-.6 1.4-.8 2.2h.1c-.1.2 0 .3-.1.4v.3c-.2 1.5-1.1 3-1.3 4.5.1.5-.1 1.3.2 1.8v.2c.3.6.7 1.2 1.2 1.9-.1 0-.1-.1-.2-.1.2.3.3.6.6.7v.1c.4.4.7.9 1.2 1.2.7.7 2.4.7 3 1.1.6.1 1.4.3 2.1.4h.1c.2.2.7 0 .9.1h.1c0 .1.2-.1.1 0 .6.1 1.2 0 1.6.1h.5c0 .1.1.1 0 0h.1c.1-.1.2 0 .3 0 .6-.1 1.9.2 2.6 0h.2c3.1 0 5.9-2.6 6.3-5.8 0-.1 0-.1 0-.2.2 0 0-.4.1-.5v-.1c.1 0 0-.2.1-.1v-.1c.2-.1 0-.5.1-.6 0-.1 0-.1-.1-.2zm-1.3-7.5c-.1 0-.1 0 0 0-.1 0 0 0 0 0zm-15.4-1.1c-.1 0 0 0 0 0zm15.9 8.6c-.1.1 0 .5-.1.5v.1c-.1 0 0 .2-.1.1v.1c-.1.1 0 .4-.1.4v.2c-.3 2.9-2.9 5.3-5.7 5.3-.1 0-.1 0-.2 0-.6.2-1.8 0-2.3 0-.1 0-.2-.1-.3 0h-.1c0 .1-.1.1 0 0-.1 0-.3 0-.5 0-.4-.1-.9 0-1.4-.1 0-.1-.2.1-.1 0h-.1c-.2-.1-.6 0-.8-.1h-.1c-.6-.1-1.3-.2-1.9-.4-.6-.4-2.1-.4-2.7-1-.4-.3-.7-.8-1.1-1.1v-.1c-.3 0-.3-.3-.6-.5.1 0 .1.1.2.1-.4-.6-.8-1.1-1.1-1.7 0-.1 0-.2 0-.2-.2-.5 0-1.2-.1-1.7.2-1.4 1-2.7 1.2-4.1 0-.1 0-.2 0-.3.1-.1 0-.2.1-.4h-.1c.1-.7.4-1.8.6-2-.1.1-.1.1-.1 0h.2c0-.1 0 0 0-.1-.1 0 0 .1-.1.1 0-.3.3-.6.5-.7.1-.5.9-1.1 1.4-1.3v-.1h.1c.6-.6 1.8-.9 2.4-.9.1 0 .3-.1.5 0 .2-.2.8 0 1.1-.1h.1c.1-.1.4 0 .6 0 .8-.1 1.6 0 2.5-.1 0 0 .1-.1.1 0 .2 0 .9-.2 1 0 .3 0 .6-.2.8.1.9-.6 3-.6 3.7.1v.1h.1v.1h.2c0 .1.1.1.2.1-.2.3.8.6.9 1 0 .5.2.6.5.9-.2.4.3.3.3.5h-.1c0 .3.3.1.4.3v.1c.2 0 .2.2.1.3h.1c.1.1 0 .2.1.4.1-.2.2 0 .1 0 .2.3.1.7.2 1-.1.1.1.2 0 .3.1.4 0 .8 0 1.1.2 1.3-.4 2.5-.6 3.5 0 .1 0 .2.1.2zm.2-4.4c.1 0 .1 0 0 0 .2-.2 0-.1 0 0zm-1 .1c0-.6 0-1.2-.3-1.6.1-.2-.1-.2-.1-.4 0-.1-.6-.6-.5-.9-.2.1-.2-.1-.3-.1v-.1c-.7-.9-1.8-2-2.7-2.2h-.1c-.6-.1-1.2.5-1.8.4-.1 0-.5.1-.7 0-3 .4-6.6-.8-8.3 1.8-.2 0-.3.4-.4.3-.3.6-.7 1.3-.6 2-.2.2-.1.5-.1.8 0 .1-.1.3-.1.5h-.1s0 .1 0 0v.2c0 1-.7 1.7-.7 2.6-.3 1.6.9 3.5 2.4 4.8.1 0 .1 0 .1.1.1 0 .2.1.2.2 1 .8 2 1.3 3 1.4h.1c.5.2 1.5.3 1.9.4.3 0 .7 0 .9.1.1 0 .3-.1.3 0h.2c.5.1 1.5.1 1.9.1.2 0 .5 0 .5.1h.2c1.5.2 2.7-1 3.2-2.2.3-.2.5-.9.6-1.1 0-.1 0-.1 0-.2.2-.2.2-.5.2-.8 0-.2.2-.6.2-.9-.2-.4.2-.9.3-1.3v-.1c.3-.7.6-1.5.5-2.6h.1c.1-.5 0-1 0-1.3zm-14.8-1.4c.1.1.1 0 0 0 0 .1 0 .1 0 0zm13.5 6.6c-.1 0 0 0 0 0 0-.1 0 0 0 0s0 .1 0 0zm.7-3.3c0-.1 0-.2.1-.1 0 0 0 .1-.1.1zm.1-.2c0-.1 0 0 0 0 .2-.1-.1.2 0 0zm.1-.8c-.2-.1 0 0-.1 0-.2.8-.4 1.7-.6 2.5v.1c-.2.7-.3 1.5-.4 2.3v.3c-.1 0-.2 0-.2.1h.1c-.5 2.6-3.6 3-5.5 3.2-.1 0-.2 0-.3 0-.2.1-.5 0-.7 0-.6 0-1.9.1-2.5 0h-.1c-1.1-.2-2.2-.5-3.3-1.2-.4-.6-1.8-1.8-2-2.7 0-.1 0-.1 0-.2 0 0-.1-.2 0-.2v-.1c.2-.1 0-.8.2-.9 0-.1 0-.3 0-.4v-.1c.4-.8.8-1.5.8-2.7-.2 0-.2.1-.2-.1.3-.3.3-.7.3-1.3.2 0 .1-.4.2-.4 0-.1 0-.2 0-.3.1 0 .2-.2.2-.3-.1 0-.1.1-.2.1 1.7-2.1 4.2-2.9 6.9-3 .5.1 1.1 0 1.5.1 2.1-.3 3.4.4 4.7 1.6-.1 0 .3.2.1.3 0 0 .1.1.1.1.2.1.8 1.2.9 1.8.1.4.1 1-.1 1.3.2 0 .2.1.2.1zm-1.1 5.3c-.1.1-.1 0 0 0zm.7-7.1c0 .1 0 .1 0 0 .1 0 .1 0 0 0zm-6.5-1c0-.2-.5-.1-.5 0 .1.1-.7.1-.9.1 0 0-.5.1-.5.2-.2 0-.4.1-.5.2-1.3.4-2 1.7-2.2 2.9 0 .3 0 .5.1.8v.1.5.1c-.2.4-.2.9-.5 1.3 0 .1.1.2 0 .3.2.6.7 1.1 1 1.8h.1c.8.6 1.8.9 2.8 1 1.3.1 3.2-.3 3.3-1.9.2-1.1.4-2.2 1-3.5h.1c.1-.3.3-.5.3-.9.2-2.5-.9-3.6-3.6-3zm-4.5 5.4c.1-.1 0 .1 0 0zm7.7-1.6c.1 0 .1 0 0 0zm.1-1.6c-.2.9-.1 2-1 2.4-.4.9-.2 1.7-.9 2.4-.7 1.6-3 2.6-4.4 1.1-1.3-.6-1.7-1.8-.5-3v-.1c-1-1.2-.4-3.2 1.2-3.6h.1c1.5-1.2 4.9-2.1 5.5.8 0-.1 0 0 0 0zm-5.9 2.6c.1.1 0 .3.1.2 0-.1.1-.3-.1-.2zm2.9-.7c-.1-.5.1-.8-.1-1.3-.4.2-1.2.1-1 .8-.1 0-.1.3 0 .3v.2c.6.3-.5 1.2-.1 1.9v.2c.6-.1.6-1.7 1.2-2.1zm-.8.6c0 .1 0 .2-.1.2 0-.1 0-.3.1-.2zm3.6-2.7s.1 0 0 0c0-.1 0 0 0 0z"
      />
    </motion.svg>
  );
};
