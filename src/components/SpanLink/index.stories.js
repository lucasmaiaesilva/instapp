import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import SpanLink from '.'

storiesOf('SpanLink', module)
  .add('SpanLink default with no children', () => (
    <SpanLink />
  ))
  .add('SpanLink with children text', () => (
    <SpanLink>
      Cats
    </SpanLink>
  ))
