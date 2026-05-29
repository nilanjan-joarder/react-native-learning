import { Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
type UserCardProps = {
  name: string;
  role: string;
};
const styles = StyleSheet.create({
  card: {
  alignItems: 'center',
  marginBottom: 20,
  padding: 20,
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 12,
},
  name: {
    color: 'white',
    fontSize: 14,
  },
  role: {
    color: 'white',
    fontSize: 16,
  },
});
export default function UserCard({ name, role, }: UserCardProps) {
  const [clicks, setClicks] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <Pressable style={styles.card} onPress={() => {
      setClicks(clicks + 1);
      setSelected(!selected);
    }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.role}>
        Clicks: {clicks} </Text>
      <Text style={styles.role}>
        {selected ? 'Selected' : 'Not Selected'}
      </Text>
    </Pressable >
  );
}