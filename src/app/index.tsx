import { ScrollView, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function HomeScreen() {
  const profiles = [
    {
      name: 'Rahul',
      age: 28,
      city: 'Kolkata',
      profession: 'Product Designer',
      bio: 'Loves travel and photography',
      interests: ['Fitness', 'Travel', 'Music'],
      image: 'https://picsum.photos/200?1',
    },
    {
      name: 'Priya',
      age: 25,
      city: 'Bangalore',
      profession: 'UX Researcher',
      bio: 'Coffee enthusiast and book lover',
      interests: ['Coffee', 'Books'],
      image: 'https://picsum.photos/200?2',
    },
    {
      name: 'Arjun',
      age: 30,
      city: 'Mumbai',
      profession: 'Product Manager',
      bio: 'Fitness and startups',
      interests: ['Fitness', 'Startups', 'Running'],
      image: 'https://picsum.photos/200?3',
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#282c34',
        paddingTop: 40,
      }}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            city={profile.city}
            profession={profile.profession}
            bio={profile.bio}
            interests={profile.interests}
            image={profile.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}