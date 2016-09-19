// @flow
import React from 'react'
import TextField from 'react-native-md-textinput'

import { INPUT_HIGHLIGHT_COLOR } from '../../styles'

type TextProps = {
  label: string,
  onChange: () => void,
  value: string,
  opts: Object
}

export default function (props: TextProps) {
  const { label, onChange, value, opts } = props

  return <TextField
    label={label}
    onChangeText={onChange}
    value={value}
    highlightColor={INPUT_HIGHLIGHT_COLOR}
    textColor='white'
    dense
    {...opts}
  />
}
