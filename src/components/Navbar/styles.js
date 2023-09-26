import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container:{
    flex: 1,
    position: 'absolute',
    top: 100,
    width: '100%',
    backgroundColor: '#FF5800',
    paddingVertical: 16,
    alignItems: 'center'
  },
  navbar:{
    flexDirection: 'row',
    gap: 18
  },
  navBtn:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#FF5800',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    padding: 4,
    flexDirection: 'column'
  }
})
