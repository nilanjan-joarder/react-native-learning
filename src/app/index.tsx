import { Button, View, Text } from 'react-native';
import { useState } from 'react';
export default function HomeScreen() {
  const [likes, setLikes] = useState(0);
  function sayHello() {
    console.log("Button Pressed");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Like"
        onPress={() => {
          setLikes(likes + 1);
        }}
      />
      <Text style={{ color: 'white', fontSize: 20 }}>Likes: {likes}</Text>
    </View>
  );
}