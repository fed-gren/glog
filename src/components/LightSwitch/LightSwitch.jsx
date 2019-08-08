import React from "react";
import Switch from "react-switch";
import config from "../../../data/SiteConfig";

const LightSwitch = props => {
  return (
    <Switch
      onChange={props.changeHandler}
      checked={props.checked}
      onColor={config.lightThemeBackgroundColor}
      offColor={config.themeBackgroundColor}
      uncheckedIcon={(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 20,
            fontWeight: 900,
            color: `${config.themeColor}`,
            paddingRight: 2
          }}
        >
          D
        </div>
)}
      checkedIcon={(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 20,
            fontWeight: 900,
            color: `${config.lightThemeColor}`,
            paddingRight: 2
          }}
        >
          L
        </div>
)}
    />
  );
};

export default LightSwitch;
