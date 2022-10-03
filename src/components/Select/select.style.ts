import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  container: {
    padding: 5,
    borderRadius: 13,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#28282850',
  },
  button: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginRight: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '85%',
  },
  settings: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    padding: 5,
  },
  remove: {},
  divider: {
    backgroundColor: '#28282850',
    alignSelf: 'stretch',
    width: 1,
    marginHorizontal: 10,
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#28282850',
    borderRadius: 13,
    padding: 10,
  },
  item: {
    display: 'flex',
    width: '100%',
    padding: 5,
    marginVertical: 2,
  },
  caret: {
    transform: [{ rotate: '180deg' }],
    marginBottom: 5,
  },
  caretOpen: {
    transform: [{ rotate: '0deg' }],
    marginBottom: -5,
  },
  placeholder: {
    color: '#28282850',
  },
});
