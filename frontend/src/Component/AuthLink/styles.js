export default () => ({
  avatar: {
    width: 30,
    height: 30,
    marginLeft: '16px',
    borderRadius: '40px',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    border: '1px solid #1b1f2326',
    background: '#fff',
    minWidth: '160px',
    zIndex: '100',
    '& a': {
      display: 'block',
      cursor: 'pointer',
      color: '#24292e',
      padding: '10px',
      borderBottom: '1px solid #e1e4e8',
      '&:hover': {
        background: '#e1e4e8',
      },
    },
  },
  show: {
    display: 'block',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
  },
  dropdownIcon: {
    color: '#fff',
  },
  navItem: {
    marginLeft: '16px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
  menuPopover: {
    marginTop: 30,
  },
});
