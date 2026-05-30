import { Text, View } from 'react-native';
import { useState } from 'react';
import UserCard from '../components/UserCards';
export default function HomeScreen() {
  const [selectedUser, setSelectedUser] = useState('');
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
      <Text style={{ color: 'white', fontSize: 20 }}>
        Selected: {selectedUser}
      </Text>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          role={user.role}
          onSelect={() => setSelectedUser(user.name)}
        />
      ))}

    </View>
  );
}