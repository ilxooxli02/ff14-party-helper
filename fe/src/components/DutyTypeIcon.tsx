import { Duty } from "ff14-party-helper-lib/dist/consts";

interface DutyIconProps { 
  type: Duty, 
  size?: "small" | "medium" | "large", 
  clickable?: boolean
};

export default function DutyTypeIcon(props: DutyIconProps) {
  return <div className={`duty-type-${props.type.toLocaleLowerCase()} --${props.size || "small"} ${props.clickable ? "--clickable" : ""}`} />
}
