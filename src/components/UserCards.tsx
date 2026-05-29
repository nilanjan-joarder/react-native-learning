import { StyleSheet, Text, View } from 'react-native';
type UserCardProps = {
  name: string;
  role: string;
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 20,
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
export default function UserCard({name,role,}: UserCardProps) {
  return (
    <View style={styles.card }>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}