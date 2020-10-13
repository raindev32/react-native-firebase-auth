import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import ImageSlider from 'components/ImageSlider'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  slideShowStyle: {
    height: 200
  }
})

class Slider extends PureComponent {
  render () {
    const {
      navigation,
      listPromo
    } = this.props

    return (
      <View>
        {
          listPromo && listPromo.length > 0 ? (
            <View style={styles.slideShowStyle}>
              <ImageSlider
                arrow={false}
                height={200}
                onPress={({ index }) => {
                  navigation.navigate('PromoDetail', { id: index })
                }}
                dataSource={(listPromo || [])
                  .filter((filtered) => filtered.image)
                  .map((data) => (
                    {
                      name: data.id,
                      url: data.image.url
                    }
                  ))}
              />
            </View>
          ) : null
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  listPromo: state.promoStore.listSlider
})

export default connect(mapStateToProps)(withNavigation(Slider))
