import { Text, View } from 'react-native';

export default function HomeScreen() {
  const users = [
    {
      name: "Rahul",
      role: "Engineer"
    },
    {
      name: "Priya",
      role: "Designer"
    },
    {
      name: "Arjun",
      role: "Product Manager"
    }
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {users.map((user, index) => (
        <View key={index}>
          <Text style={{ color: 'white' }}>
            {user.name}
          </Text>

          <Text style={{ color: 'white' }}>
            {user.role}
          </Text>
        </View>
      ))}
    </View>
  );
}