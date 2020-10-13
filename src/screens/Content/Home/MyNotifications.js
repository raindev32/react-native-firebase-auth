import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
// import { connect } from 'react-redux'
import {
  Icon,
  Text,
  Badge
} from 'native-base'
import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: Dimensions.get('window').width / 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: 0,
    fontSize: 25,
    paddingVertical: 5,
    color: color.primaryColor
  },
  badge: {
    position: 'absolute',
    height: null,
    right: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingHorizontal: 1
  },
  badgeText: {
    lineHeight: null,
    fontSize: 10
  }
})

class MyNotification extends Component {
  render () {
    const { count, navigation } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Notification')}
      >
        <View style={styles.container}>
          <Icon name="bells" type="AntDesign" style={styles.icon} />
          {count > 0 && (
            <Badge style={styles.badge}>
              <Text style={styles.badgeText}>{count}</Text>
            </Badge>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(MyNotification)

// const mapStateToProps = state => ({
//   count: state.notificationStore.count
// })

// export default connect(mapStateToProps)(withNavigation(MyNotification))
