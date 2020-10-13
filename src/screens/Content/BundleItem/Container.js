import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native'
import {
  View
} from 'native-base'
import {
  getAllBundle
} from 'actions/product/bundleAction'

import EmptyState from 'components/EmptyState'

import CategoryList from './CategoryList'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class Container extends Component {
  state = {
    refreshing: false
  }

  componentDidMount () {
    this._refresh()
  }

  _refresh = async () => {
    const { dispatch, navigation } = this.props
    const { params } = navigation.state
    await dispatch(getAllBundle({ categoryId: params.id }))
  }

  setCurrentReadOffset = (event) => {
    const { dataSet } = this.props
    let itemHeight = 300
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y)
    let currentItemIndex = Math.ceil(currentOffset / itemHeight)
    dataSet.setReadOffset(currentItemIndex)
  }

  render () {
    const { bundleList } = this.props
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
          {
            bundleList && bundleList.length > 0 ? (
              bundleList.map((record, index) => {
                return (
                  <CategoryList
                    data={record}
                    indexData={index}
                    key={record.id}
                    categoryId={record.categoryId}
                  />
                )
              })
            ) : (<EmptyState title="Bundle not found." />)
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.bundleStore.loading,
  bundleList: state.bundleStore.bundleList,
  errorMessage: state.bundleStore.errorMessage
})

export default connect(mapStateToProps)(Container)
