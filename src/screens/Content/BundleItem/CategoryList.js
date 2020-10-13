import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import {
  Text
} from 'native-base'
import { currencyFormatter } from 'utils/string'

import color from 'theme/color'
import globalStyle from 'theme/style'

import FastImage from 'react-native-fast-image'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  txtProduct: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerText: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 10
  },
  txtStart: {
    fontSize: 12
  },
  txtPrice: {
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  picThumb: {
    borderRadius: 10,
    width: '100%',
    height: 100,
    zIndex: 0
  },
  containLeftImage: {
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute'
  },
  wrapperCategory: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.textIcons
  }
})

class BundleList extends Component {
  goToDetail = (id, key, categoryId) => {
    const { navigation } = this.props
    navigation.navigate('BundleDetail', {
      id, key, categoryId
    })
  }

  render () {
    const {
      indexData, data, key, categoryId
    } = this.props

    return (
      <View
        key={indexData}
        style={[globalStyle.borderRadius, styles.container]}
      >
        <TouchableWithoutFeedback
          onPress={() => this.goToDetail(data.id, key, categoryId)}
        >
          <View style={styles.wrapperCategory}>
            <View style={styles.containLeftImage}>
              <Text style={styles.txtProduct}>{data.name}</Text>
              <View style={styles.containerText}>
                <Text style={styles.txtStart}>Start from</Text>
                <Text style={styles.txtPrice}>{currencyFormatter(data.price)}</Text>
              </View>
            </View>
            {data && data.backgroundImage
              ? (
                <FastImage
                  style={styles.picThumb}
                  source={{
                    uri: data.backgroundImage.url,
                    priority: FastImage.priority.high
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
export default withNavigation(BundleList)
