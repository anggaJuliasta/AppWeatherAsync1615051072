import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Header</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>slider</Text>
          </View>
          <View style={styles.box3}>
                <View style={styles.box6}>
                  <Text>1</Text>
                </View>
                <View style={styles.box6}>
                  <Text>2</Text>
                </View>
                <View style={styles.box6}>
                  <Text>3</Text>
                </View>
                <View style={styles.box6}>
                  <Text>4</Text>
                </View>
          </View>
          <View style={styles.box7}>
                <View style={styles.box6}>
                  <Text>5</Text>
                </View>
                <View style={styles.box6}>
                  <Text>6</Text>
                </View>
                <View style={styles.box6}>
                  <Text>7</Text>
                </View>
                <View style={styles.box6}>
                  <Text>8</Text>
                </View>
          </View>
          <View style={styles.box4}>
              <View style={styles.box6}>
                <Text>9</Text>
              </View>
              <View style={styles.box6}>
                <Text>10</Text>
              </View>
              <View style={styles.box6}>
                <Text>11</Text>
              </View>
              <View style={styles.box6}>
                <Text>12</Text>
              </View>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text1}>Footer</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#34495E',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#013243',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    backgroundColor: '#67809F',
    flex: 2,
    justifyContent: 'center'
  },

  box3: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box5: {
    backgroundColor: '#013243',
    flex: 1,
    margin: 10
  },

  box6: {
    width: 50,
     height: 50,
     backgroundColor: '#E4F1FE',
     justifyContent: 'center',
     alignItems: 'center',
  },

  box7: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  }

});
