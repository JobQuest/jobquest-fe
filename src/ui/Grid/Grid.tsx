import * as React from "react";

import './Grid.scss';

type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type GridSizes = 1 | 2

interface GridProps {
  alignItems?: GridItemsAlignment;
  column?: boolean;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  row?: boolean;
  sm?: GridSizes;
}

const Grid: React.SFC<GridProps> = props => {
  const {
    alignItems,
    children,
    column,
    expanded,
    justify,
    lg,
    md,
    row,
    sm
  } = props;

  const isRow: boolean = row || !column;

  const classes: string =
    (!isRow ? 'column' : 'row') +
    // Row styling
    (isRow && expanded ? ` 'expanded` : "") +
    (isRow && justify ? ` ${justify}` : "") +
    (isRow && alignItems ? ` ${"align-" + alignItems}` : "") +
    // Column styling
    (!isRow && sm ? ` ${"sm-" + sm}` : "") +
    (!isRow && md ? ` ${"md-" + md}` : "") +
    (!isRow && lg ? ` ${"lg-" + lg}` : "");

  return <div className={classes}>{children}</div>;
};

export default Grid;