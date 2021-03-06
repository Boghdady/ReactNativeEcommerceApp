import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

import { PlatformTouchable } from '../PlatformTouchable';
import styles from './styles';

export class AppButton extends React.Component {
  render() {
    const {title, wrapperStyle, titleStyle, isLoading, ...rest} = this.props;

    return (
      <PlatformTouchable
        {...rest}
        style={[styles.wrapper, wrapperStyle]}
        disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </PlatformTouchable>
    );
  }
}
