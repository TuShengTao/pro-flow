import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
    },
    stringNode: {
      width: '200px',
      height: '50px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid aqua',
      borderRadius: '4px',
      lineHeight: '50px',
    },
    selected: {
      border: '1px solid #007bff',
    },
    editNode: {
      width: '400px',
    },
  };
});
export default useStyles;
