import { useState } from 'react';
import { Button, Text, View } from 'react-native';
export default function HomeScreen() {
  const [likes, setLikes] = useState(0);
  function getLikeMessage() {
    return likes > 5 ? (
      <Text style={{ color: 'white', fontSize: 20 }}>Popular</Text>
    ) : (
      <Text style={{ color: 'white', fontSize: 20 }}>Not Popular</Text>
    );
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
      <Button
        title="Reset"
        onPress={() => {
          setLikes(0);
        }}
      />
      <Button
        title="DisLike"
        onPress={() => {
          if (likes > 0) {
            setLikes(likes - 1);
          }
        }}
      />
      <Text style={{ color: 'white', fontSize: 20 }}>Likes: {likes}</Text>
      {getLikeMessage()}
    </View>
  );
}