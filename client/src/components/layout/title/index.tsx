import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { compass } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={compass} alt="Compass small" width="60px" />
        ) : (
          <img src={compass} alt="Compass large" width="100px" />
        )}
      </Link>
    </Button>
  );
};
