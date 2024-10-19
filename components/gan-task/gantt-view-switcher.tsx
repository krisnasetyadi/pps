import React, { Fragment } from "react";
import "gantt-task-react/dist/index.css";

import { ViewMode } from "gantt-task-react";
import { Button } from "@/components/ui/button";
// import { Flex, Grid } from "@atlaskit/primitives";

type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};

export default function ViewSwitcher({
  onViewModeChange,
  onViewListChange,
  isChecked,
}: ViewSwitcherProps) {
  return (
    <div style={{ marginBottom: "1vh", paddingRight: "1%", paddingLeft: "1%" }}>
      <div style={{gridTemplateColumns: '1fr auto'}} >
        <div
          className="Switch"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label className="Switch_Toggle">
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onClick={() => onViewListChange(!isChecked)}
            />
            <span className="Slider" />
          </label>
          Show Task List
        </div>

        <div style={{display: 'flex', gap: '5px'}}>
          <Button
            variant="secondary"
            onClick={() => onViewModeChange(ViewMode.Hour)}
          >
            Hour
          </Button>
          <Button
           
            onClick={() => onViewModeChange(ViewMode.QuarterDay)}
          >
            Quarter of Day
          </Button>
          <Button
        
            onClick={() => onViewModeChange(ViewMode.HalfDay)}
          >
            Half of Day
          </Button>
          <Button

            onClick={() => onViewModeChange(ViewMode.Day)}
          >
            Day
          </Button>
          <Button

            onClick={() => onViewModeChange(ViewMode.Week)}
          >
            Week
          </Button>
          <Button

            onClick={() => onViewModeChange(ViewMode.Month)}
          >
            Month
          </Button>
        </div>
      </div>
    </div>
  );
}
