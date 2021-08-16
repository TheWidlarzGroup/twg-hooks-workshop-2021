import React from 'react'
import {
  WithMemo,
  WithoutMemo,
  WithoutMemoButUserIsOutsideComponent,
} from '../../hooks/memo/ReferenceChangeExamples'

export default {
  title: 'Example/Memo',
}

export const WithoutMemo = WithoutMemo
export const WithoutMemoButUserIsOutsideComponent = WithoutMemoButUserIsOutsideComponent
export const WithMemo = WithMemo
