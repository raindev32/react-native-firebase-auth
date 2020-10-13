import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  withNavigation
} from 'react-navigation'
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  View,
  Text,
  Card
} from 'native-base'

const styles = StyleSheet.create({
  content: {
    padding: 10
  },
  card: {
    padding: 10
  },
  cardItem: {
    padding: 10
  }
})

class Store extends PureComponent {
  render () {
    const {
      currentItem,
      navigation,
      list
    } = this.props

    if (currentItem && currentItem.store && currentItem.store.name) {
      return (
        <View style={styles.content}>
          <Card style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseStore')}
            >
              <View styles={styles.cardItem}>
                <Text>{currentItem.store.name}</Text>
                <Text note>{currentItem.store.address}</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      )
    }
    const item = list && list.length > 0 ? list[0] : {}

    return (
      <View style={styles.content}>
        <Card style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseStore')}
          >
            <View styles={styles.cardItem}>
              <Text>{item.name}</Text>
              <Text note>{item.address}</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  currentItem: state.authStore.currentItem,
  list: state.storeStore.list,
  listDropdown: state.storeStore.listDropdown
})

export default connect(mapStateToProps)(withNavigation(Store))
