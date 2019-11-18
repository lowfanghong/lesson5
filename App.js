/**
 * Lesson 05 Activities
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native';

let movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./src/img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./src/img/midway.jpg'),
  },
];
const App = () => {
  let movieArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    movieArr.push(<Text key={movie}>{movie.title}</Text>);
    movieArr.push(<Text key={movie}>{movie.year}</Text>);
    movieArr.push(<Image source={movie.poster} />);
    console.log(movieArr);
  }
  return (
    <ScrollView>
      <View>
        <View>{movieArr}</View>
      </View>
    </ScrollView>
  );
};

export default App;
