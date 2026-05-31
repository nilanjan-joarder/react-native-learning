import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

type ProfileCardProps = {
  name: string;
  age: number;
  city: string;
  profession: string;
  bio: string;
  interests: string[];
  image: string;
};

export default function ProfileCard({
  name,
  age,
  city,
  profession,
  bio,
  interests,
  image,
}: ProfileCardProps) {
  const [likes, setLikes] = useState(0);
  const [showBio, setShowBio] = useState(false);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>City: {city}</Text>
      <Text style={styles.text}>Profession: {profession}</Text>
      <Text style={styles.heading}>Interests</Text>
      {interests.map((interest, index) => (
        <Text key={index} style={styles.text}>
          • {interest}
        </Text>
      ))}

      <Button
        title={showBio ? 'Hide Bio' : 'Show Bio'}
        onPress={() => setShowBio(!showBio)}
      />

      {showBio && (
        <Text style={styles.bio}>
          {bio}
        </Text>
      )}

      <Text style={styles.likes}>
        ❤️ Likes: {likes}
      </Text>

      <Button
        title="Like"
        onPress={() => setLikes(likes + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    width: 300,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 12,
  },

  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  heading: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },

  text: {
    color: 'white',
    marginBottom: 4,
  },

  bio: {
    color: 'white',
    marginVertical: 10,
  },

  likes: {
    color: 'white',
    marginVertical: 10,
    fontSize: 16,
  },
});