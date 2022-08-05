import React, { useEffect } from "react";

import Scrollbar from "smooth-scrollbar";

export const Scroll = () => {
  var options = {
    damping: 0.2,
  };
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);
  return null;
};
