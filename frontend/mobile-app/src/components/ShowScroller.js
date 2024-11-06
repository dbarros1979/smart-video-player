import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors, gStyle, images } from '../constants';
import { fetchAllVideos } from '../api/videos';  // Import your API call function

function ShowScroller({ type }) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch data from API on component mount
  React.useEffect(() => {
    async function loadData() {
      try {
        const videos = await fetchAllVideos();  // Fetch videos from API
        //console.debug("Got videos...")
        //console.debug(videos)
        //console.debug("...")
        setData(videos);                     // Update state with fetched data
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);                   // Set loading to false
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={data}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        let renderItem = <View style={styles[type]} />;

        if (item.image) {
          renderItem = (
            <Image source={{ uri: item.image }} style={styles[`${type}Image`]} />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

ShowScroller.defaultProps = {
  type: 'rectangle'
};

ShowScroller.propTypes = {
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: 'contain',
    width: 91
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: 'contain',
    width: 96
  }
});

export default ShowScroller;
