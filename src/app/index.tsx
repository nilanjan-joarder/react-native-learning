import { Text, View } from 'react-native';
import UserCard from '../components/UserCards';
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
        backgroundColor: '#282c34',
      }}>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          role={user.role}
        />
      ))}
    </View>
  );
}