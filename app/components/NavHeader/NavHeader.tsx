import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';

import { useAccessibilityFocus } from '../../hooks';
import type { NavHeaderProps } from './NavHeader.d';
import { mixins } from '../../styles';
import { AccessibleView } from '../';

export default function NavHeader({
  title,
  goBack,
  ...headerProps
}: NavHeaderProps): JSX.Element {
  const [headerRef, focusHeader] = useAccessibilityFocus<Text>();

  useEffect(focusHeader, []);

  const leftComponent = goBack ? (
    <AccessibleView 
      label="Back"
      accessibilityRole="button"
      onPress={goBack}
    >
      <MaterialIcons
        name="arrow-back"
        style={mixins.headerIcon}
      />
    </AccessibleView>
  ) : undefined; 

  const centerComponent = (
    <Text 
      style={mixins.headerTitle}
      accessibilityLabel={`${title} Screen`} 
      ref={headerRef}
    >
      {title}
    </Text>
  );

  return (
    <Header
      leftContainerStyle={mixins.headerComponentContainer}
      centerContainerStyle={mixins.headerComponentContainer}
      rightContainerStyle={mixins.headerComponentContainer}
      containerStyle={mixins.headerContainer}
      leftComponent={leftComponent}
      centerComponent={centerComponent}
      {...headerProps}
    />
  );
}
