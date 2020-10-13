import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import {
  Text
} from 'native-base'

import color from 'theme/color'
import globalStyle from 'theme/style'

import FastImage from 'react-native-fast-image'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  txtProduct: {
    fontSize: 20,
    color: color.smoothColor,
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
    paddingVertical: 40,
    paddingHorizontal: 20,
    position: 'absolute'
  },
  wrapperCategory: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.textIcons
  }
})

class ProductList extends Component {
  goToDetail = (id) => {
    const { navigation } = this.props
    navigation.navigate('BundleItem', { id })
  }

  render () {
    const { indexData, data } = this.props

    return (
      <View
        key={indexData}
        style={[globalStyle.borderRadius, styles.container]}
      >
        <TouchableWithoutFeedback
          onPress={() => this.goToDetail(data.id)}
        >
          <View style={styles.wrapperCategory}>
            <View style={styles.containLeftImage}>
              <Text style={styles.txtProduct}>{data.name}</Text>
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
export default withNavigation(ProductList)
