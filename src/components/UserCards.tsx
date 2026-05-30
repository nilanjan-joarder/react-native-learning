import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

type UserCardProps = {
  name: string;
  role: string;
  onSelect: () => void;
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
  },

  selected: {
    borderColor: 'green',
  },

  large: {
    padding: 40,
  },

  disabled: {
    opacity: 0.3,
  },

  text: {
    color: 'white',
  },
});

export default function UserCard({ name, role, onSelect }: UserCardProps) {
  const [selected, setSelected] = useState(false);
  const [large, setLarge] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <View>
      <Pressable
        style={[
          styles.card,
          selected && styles.selected,
          large && styles.large,
          disabled && styles.disabled,
        ]}
        onPress={() => {
          setSelected(!selected);
          onSelect();
        }}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{role}</Text>
      </Pressable>

      <Button
        title="Toggle Large"
        onPress={() => setLarge(!large)}
      />

      <Button
        title="Toggle Disabled"
        onPress={() => setDisabled(!disabled)}
      />
    </View>
  );
}