import { CityCard } from '@/src/components/CityCard';
import { Icon } from '@/src/components/icon';
import { Screen } from '@/src/components/Screen';
import { Text } from '@/src/components/Text';
import { cityPreviewList } from '@/src/data/cities';
import { useAppTheme } from '@/src/theme/useAppTheme';
import { CityPreview } from '@/src/type';
import { useRouter } from 'expo-router';
import { FlatList, ListRenderItemInfo } from 'react-native';

export default function HomeScreen() {
  const router = useRouter()
  const { colors } = useAppTheme()

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return(
      <CityCard cityPreview={item} />
    )
  }

  return (
    <Screen>
      <Text variant='title28'>Barcelona</Text>

      <Icon name='Beach' color='text' />

      <FlatList
        data={cityPreviewList}
        renderItem={renderItem}
      />
    </Screen>
  );
}

