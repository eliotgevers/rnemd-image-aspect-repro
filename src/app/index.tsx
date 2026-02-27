import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EnrichedMarkdownText } from 'react-native-enriched-markdown';

const MARKDOWN = `
# react-native-enriched-markdown image aspect ratio repro

This screen uses \`EnrichedMarkdownText\` directly with default configuration.

## Portrait image (2:3)
![Portrait 600x900](https://placehold.co/600x900/png?text=Portrait+600x900)

## Portrait image (3:5)
![Portrait 720x1200](https://placehold.co/720x1200/png?text=Portrait+720x1200)

## Square image (1:1)
![Square 800x800](https://placehold.co/800x800/png?text=Square+800x800)

## Landscape image (16:9)
![Landscape 1280x720](https://placehold.co/1280x720/png?text=Landscape+1280x720)
`;

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <EnrichedMarkdownText
            markdown={MARKDOWN}
            onLinkPress={({ url }) => {
              void Linking.openURL(url);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    backgroundColor: '#ffffff',
  },
});
