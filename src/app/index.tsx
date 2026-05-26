import { Button, View } from 'react-native';

export default function HomeScreen() {
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
      <Button  title="Like"  onPress={sayHello}
/>
    </View>
  );
}