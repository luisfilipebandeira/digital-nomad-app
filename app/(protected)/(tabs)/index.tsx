import { Box } from '@/src/components/Box';
import { Text } from '@/src/components/Text';
import { useAppTheme } from '@/src/theme/useAppTheme';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter()
  const { colors } = useAppTheme()

  return (
    <Box flex={1} backgroundColor='mainBackground'>
      <Text margin='xl' color='text'>Home Screen</Text>
    </Box>
  );
}

