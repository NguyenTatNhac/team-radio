export default ({ breakpoints, palette, spacing, transitions }) => ({
  modalHeadline: {
    borderBottom: '1px solid #f2f2f2',
    paddingBottom: 9,
    marginBottom: 10,
    paddingLeft: 20,
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1p solid #f2f2f2',
  },
  actions: {
    display: 'flex',
  },
  buttonEditProfile: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  secondButton: {
    position: 'relative',
    '& .backdrop': {
      display: 'none',
    },
    '&:hover > .backdrop': {
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      position: 'absolute',
      content: ' ',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
    },
  },
  content: {
    display: 'flex',
    '& div': {
      flexDirection: 'flex-start',
    },
  },
  formInformation: {
    paddingLeft: 20,
  },
});