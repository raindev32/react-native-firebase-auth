import React, { PureComponent } from 'react'
import color from 'theme/color'
import Container from './Container'

class PromoDetail extends PureComponent {
  static navigationOptions = () => {
    let headerTitle = 'Promo Detail'
    let headerTitleStyle = {
      fontSize: 20,
      color: color.smoothText,
      fontWeight: 'bold',
      marginTop: 0,
      marginHorizontal: 0,
      textAlign: 'center',
      paddingVertical: 0
    }
    let headerTintColor = color.smoothText
    let headerStyle = {
      elevation: 0,
      shadowOpacity: 0,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: color.textIcons // color.primaryColor
    }

    let headerBackTitle = ''
    return ({
      headerStyle,
      headerTitle,
      headerTitleStyle,
      headerTintColor,
      headerBackTitle,
      headerLayoutPreset: 'center'
    })
  }

  render () {
    const { navigation } = this.props
    return (
      <Container navigation={navigation} />
    )
  }
}

export default PromoDetail
