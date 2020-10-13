import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native'
import {
  View, Text
} from 'native-base'
// import color from 'theme/color'
// import {
//   get as getStore
// } from 'actions/location/storeAction'
// import {
//   get as getPromo
// } from 'actions/content/promoAction'
// import {
//   userData
// } from 'actions/auth/profile'
// import {
//   getProductCategory
// } from 'actions/product/categoryAction'
// import { getCountTransaction } from 'actions/transaction/countTransactionAction'

// import EmptyState from 'components/EmptyState'

// import Slider from './Slider'
// import BundleList from './BundleList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
  // separatorText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: color.primaryText,
  //   paddingVertical: 10,
  //   paddingHorizontal: 10
  // }
})

class HomeContainer extends Component {
  state = {
    refreshing: false
  }

  componentDidMount () {
    this._refresh()
  }

  _refresh = async () => {
    const { onRefresh } = this.props
    await onRefresh()
  }

  setCurrentReadOffset = (event) => {
    const { dataSet } = this.props
    let itemHeight = 300
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y)
    let currentItemIndex = Math.ceil(currentOffset / itemHeight)
    dataSet.setReadOffset(currentItemIndex)
  }

  render () {
    // const { currentItem } = this.props
    const {
      refreshing
    } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={300}
          removeClippedSubviews
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._refresh()}
            />
          )}
        >
          <Text>ini halaman home.</Text>
          {/* <Slider />
          <Text style={styles.separatorText}>Category</Text>
          {
            currentItem && currentItem.length > 0 ? (
              currentItem.map((record, index) => {
                return (
                  <BundleList
                    data={record}
                    indexData={index}
                    key={record.id}
                  />
                )
              })
            ) : (<EmptyState title="Product not found." />)
          } */}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingCategory: state.productCategoryStore.loading,
  meta: state.productCategoryStore.meta,
  currentItem: state.productCategoryStore.currentItem,
  dataSet: state.productCategoryStore.dataSet,
  errorMessageCategory: state.productCategoryStore.errorMessage
})

const mapDispatchToProps = () => ({
  onRefresh: () => {
    // dispatch(userData())
    // dispatch(getStore())
    // dispatch(getPromo())
    // dispatch(getCountTransaction())
    // dispatch(getProductCategory())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
