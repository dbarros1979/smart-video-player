import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { gStyle, images } from '../constants';
import { fetchVideoById } from '../api/videos';

// components
import PromotionPlay from './PromotionPlay';
import TouchTextIcon from './TouchTextIcon';

// icons
import SvgCheck from '../assets/icons/Svg.Check';
import SvgInfo from '../assets/icons/Svg.Info';
import SvgPlus from '../assets/icons/Svg.Plus';

function PromotionBanner() {
  // local state
  const [video, setVideo] = React.useState(null);
  const [added, setAdded] = React.useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;

  React.useEffect(() => {
    async function loadVideo() {
      const videoData = await fetchVideoById("1");
      if (videoData) {
        console.debug("showing title");
        console.debug(videoData.title);
        setVideo(videoData);
      }
    }
    loadVideo();
  }, []);

  const imageUri = video ? `data:image/png;base64,${video.image}` : null;

  return (
    <View>
      <Image source={imageUri ? { uri: imageUri } : null} style={styles.imageBackground} />

      <View style={styles.containerContent}>
        <View style={gStyle.flexRowSpace}>
          <TouchTextIcon
            icon={icon}
            onPress={() => setAdded(!added)}
            text="My List"
          />

          <PromotionPlay onPress={() => null} />

          <TouchTextIcon icon={<SvgInfo />} onPress={() => null} text="Info" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 480,
    width: '100%',
  },
  containerContent: {
    paddingTop: 16,
    paddingHorizontal: 24,
    width: '100%',
  },
  image: {
    alignSelf: 'center',
    height: 69,
    marginBottom: 24,
    width: 291,
  },
});

export default React.memo(PromotionBanner);
