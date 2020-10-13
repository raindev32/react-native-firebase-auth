import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet
} from 'react-native'
import {
  View,
  Text
} from 'native-base'
import FastImage from 'react-native-fast-image'
import { getById } from 'actions/content/promoAction'
import color from 'theme/color'
import { normalTime } from 'utils/time'
import HTMLView from 'react-native-htmlview'

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  p: {
    color: color.secondaryText
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h1: {
    color: color.primaryText,
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  content: {
    padding: 10,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row'
  },
  contentText: {
    fontSize: 14,
    color: color.secondaryText
  }
})

class Container extends PureComponent {
  componentDidMount () {
    this._refresh()
  }

  _refresh () {
    const { navigation, getById } = this.props
    const { params } = navigation.state
    getById(params.id)
  }

  render () {
    const { loading, currentItem } = this.props

    if (loading) {
      return null
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {currentItem && currentItem.image ? (
            <FastImage
              source={{ uri: currentItem.image.url }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : null}
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{currentItem.name}</Text>
          <View style={styles.row}>
            <Text style={styles.contentText}>{normalTime(currentItem.startDate)}</Text>
            <Text style={styles.contentText}> - </Text>
            <Text style={styles.contentText}>{normalTime(currentItem.endDate)}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <HTMLView
            value={currentItem.content}
            stylesheet={styles}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.promoStore.loading,
  currentItem: state.promoStore.currentItem,
  errorMessage: state.promoStore.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
  getById: (data, navigation) => dispatch(getById(data, navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
