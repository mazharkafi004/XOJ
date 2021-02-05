const styles = {
    appbar: {
      alignItems: 'center', 
      justifyContent:'space-between', 
      height: 60, 
      paddingVertical: 0, 
      paddingHorizontal: 8,
      backgroundColor: 'black',
      overflowX: 'auto'
    },
    left: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent:'flex-start',
    },
    button: {
      height: 30, 
      alignSelf: 'center', 
      marginRight: 16
    },
  }
    
  render(
    <Appbar style={styles.appbar}>
    <View style={styles.left}>
      <Button text={'Home'} textColor="white" style={styles.button} />
      <Button text={'Install'} textColor="white" style={styles.button} />
      <Button text={'Docs'} textColor="white" style={styles.button} />
      <Button text={'About'} textColor="white" style={[styles.button, {marginRight: 0}]} />
    </View>
    <Button text={'Buy'} type={'contained'} textColor="white" containerStyle={[styles.button, {marginRight: 0}]} />
    </Appbar>
  )