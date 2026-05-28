import { Text, View } from 'react-native';

export default function UserCard(props: any) {
  return (
    <View
  style={{
    alignItems: 'center',
    marginBottom: 20,
  }}>
  <Text style={{ color: 'white' }}>
    {props.name}
  </Text>

  <Text style={{ color: 'white' }}>
    {props.role}
  </Text>
</View>
  );
}