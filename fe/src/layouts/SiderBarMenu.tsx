interface SideBarMenuProps {
  onClick: () => void,
}

export function SideBarMenu(props: SideBarMenuProps) {
  const { onClick } = props;

  return (
    <>
      <div
        className="app-sidebar-menu-wrapper"
        onClick={() => onClick()}>
          <div className="app-sidebar-menu" />
          <div className="app-sidebar-menu" />
          <div className="app-sidebar-menu" />
      </div>
    </>
  );
}