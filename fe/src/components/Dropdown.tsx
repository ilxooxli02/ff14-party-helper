import { useState } from "react";

export type Item = { key: string; order: number; label: { ko: string }};

interface DropdownProps {
  items: Array<Item>;
  onSelected: (item: Item) => void;
  className?: string;
  renderIcon?: (key: string) => JSX.Element;
}

export default function Dropdown(props: DropdownProps) {
  const { items, onSelected, className, renderIcon } = props;

  const [ dropdownVisibility, setDropdownVisibility ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState(items.slice(0, 1).pop());
  
  return (
    <>
      <div
        className={`${className} select-dropdown ${dropdownVisibility ? "--open" : ""}`}
        onClick={() => setDropdownVisibility(!dropdownVisibility)} >
        <div className="selected">
          { renderIcon && renderIcon(selectedItem?.key || "") }
          <span className="item-name"> { selectedItem?.label.ko } </span>
        </div>
        { 
          dropdownVisibility &&
          <div className="dropdown-list">
            { items.sort((a, b) => a.order - b.order).map((item, index) => 
              <div
                key={`${item.key}-${index}`} 
                className={`item-container ${ selectedItem?.key === item.key ? "--selected" : ""}`}
                onClick={() => {
                  setSelectedItem(items[index]);
                  onSelected && onSelected(items[index]);
                }} >
                { renderIcon && renderIcon(item.key) }
                <span className="item-name">{item.label.ko}</span>
              </div>)
            }
          </div>
        }
      </div>
    </>
  );
}