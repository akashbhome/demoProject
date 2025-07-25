
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import app from '../app'

describe('<app />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <app {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
