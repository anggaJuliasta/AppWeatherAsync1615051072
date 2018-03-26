import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput, Image } from 'react-native';

export default class BelajarLayout extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0,
          icon: '50n',
          sunrise: 0,
          sunset: 0,
          pressure: 0,
          humidity: 0,
          sea_level: 0,
          grnd_level: 0,
          speed: 0,
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=547e623a913f1fd7c15224590bcf2bfd&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          city: responseJson.name,
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          icon: responseJson.weather[0].icon,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          speed: responseJson.wind.speed
        }
      });
    });
    var date = new Date(this.state.forecast.sunrise);
    var timeSunrise = date.toLocaleTimeString();
  }

    render() {
      let pic = {
      uri: 'http://openweathermap.org/img/w/'+this.state.forecast.icon+'.png'
    };
      return (
        <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Prakiraan Cuaca</Text>
        </View>
        <View style={styles.box2}>
            <TextInput style = {styles.text1}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({city})}
            />

            <Button
            onPress={
              () => this.getWeather()
            }
            title="Lihat"
            color="#2E7D32"
            accessibilityLabel="Klik untuk melihat"
            />
        </View>
          <View style={styles.box3}>
                <View style={styles.box6}>
                  <Image source={require('img/temp.png')}
                  style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Temp : {this.state.forecast.temp} {"\n"}</Text>
                </View>
                <View style={styles.box6}>
                  <Image source={require('img/wind.png')}
                  style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text> Wind Speed :{ this.state.forecast.speed} </Text>
                </View>
          </View>
          <View style={styles.box7}>
                <View style={styles.box6}>
                  <Image source={pic} style={{width: 45, height: 45}}/>
                </View>
                <View style={styles.box8}>
                  <Text>Main : {this.state.forecast.main} {"\n"}</Text>
                </View>
                <View style={styles.box6}>
                <Image source={require('img/main.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Desc : {this.state.forecast.description} {"\n"}</Text>
                </View>
          </View>
          <View style={styles.box7}>
                <View style={styles.box6}>
                <Image source={require('img/sunrise.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Sunrise : {this.state.forecast.sunrise} {"\n"}</Text>
                </View>
                <View style={styles.box6}>
                <Image source={require('img/sunset.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Sunset : {this.state.forecast.sunset} {"\n"}</Text>
                </View>
          </View>
          <View style={styles.box7}>
                <View style={styles.box6}>
                <Image source={require('img/pressure.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Pressure : {this.state.forecast.pressure} {"\n"}</Text>
                </View>
                <View style={styles.box6}>
                <Image source={require('img/humidity.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Humidity : {this.state.forecast.humidity} {"\n"}</Text>
                </View>
          </View>
          <View style={styles.box4}>
                <View style={styles.box6}>
                <Image source={require('img/sea.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Sea Level : {this.state.forecast.sea_level} {"\n"}</Text>
                </View>
                <View style={styles.box6}>
                <Image source={require('img/ground.png')}
                style={styles.icon} />
                </View>
                <View style={styles.box8}>
                  <Text>Ground Level : {this.state.forecast.grnd_level} {"\n"}</Text>
                </View>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text1}>AnggaJuliasta-(React-Native)</Text>
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
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box5: {
    backgroundColor: '#013243',
    flex: 1,
    marginTop: 10,
  },

  box6: {
    width: 50,
     height: 50,
     backgroundColor: '#446CB3',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 2,
     marginTop: 2,
     marginBottom: 2,
  },
  box8: {
    width: 110,
     height: 50,
     backgroundColor: '#81CFE0',
     justifyContent: 'center',
     padding:2,
     marginTop: 2,
     marginBottom: 2,
     marginRight:5,
  },
  box7: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  },
  icon: {
    height: 45,
    width: 45,
  }
});
