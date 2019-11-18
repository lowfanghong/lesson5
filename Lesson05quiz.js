import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native';

const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  image: require('./src/img/bird.jpg'),
};
const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'gold',
};
const Lesson05quiz = () => {
  let PetArr = [];

  PetArr.push(<Text key={Pets.name}>{Pets.name}</Text>);
  PetArr.push(<Text key={Pets.age}>{Pets.age}</Text>);
  PetArr.push(<Image source={Pets.image} />);
  console.log(PetArr);
}
return (
    <ScrollView>
      <View>
        <View></View>
      </View>
    </ScrollView>
);
};




export default Lesson05quiz;
