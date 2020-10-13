import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  View,
  Text
} from 'native-base'
import color from 'theme/color'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  textLink: {
    color: color.link,
    marginHorizontal: 5
  },
  textQuestion: {
    color: color.primaryText
  },
  bottomText: {
    marginVertical: 30,
    fontSize: 16,
    color: color.secondaryText
  },
  bottomTextContainer: {
    paddingVertical: 10
  }
})

class AuthRoute extends PureComponent {
  render () {
    const {
      navigation,
      text,
      route,
      name,
      forgot
    } = this.props
    return (
      <View>
        <View style={[styles.row, styles.center]}>
          <Text style={styles.textQuestion}>{text}</Text>
          <TouchableOpacity onPress={() => navigation.navigate(route)}>
            <Text style={styles.textLink}>{name || route}</Text>
          </TouchableOpacity>
        </View>

        {forgot && (
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Forget your password ?</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

AuthRoute.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string,
  forgot: PropTypes.bool
}

AuthRoute.defaultProps = {
  text: "Don't have an account ?",
  forgot: true
}

export default withNavigation(AuthRoute)
