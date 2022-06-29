import React, { ComponentProps, forwardRef, Ref, useRef, RefObject } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AccessibleView } from '../';
import { mixins, theme } from '../../styles';

import styles from './PasswordInput.styles';

type TextInputProps = ComponentProps<typeof TextInput>;

export type PasswordInputProps = TextInputProps & {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  inputRef?: RefObject<RNTextInput>;
};

function PasswordInput({
  label,
  value,
  onChangeText,
  inputRef,
  ...textInputProps
}: PasswordInputProps, ref: Ref<View>): JSX.Element {
  const _inputRef = inputRef || useRef<RNTextInput>(null);

  return (
    <AccessibleView
      ref={ref}
      style={styles.container}
      label={`${label}, Input${value && `, containing ${value.length} characters`}`}
      onPress={() => _inputRef.current?.focus()}
    >
      <TextInput
        ref={_inputRef}
        style={mixins.input}
        autoCompleteType="off"
        textContentType="newPassword"
        passwordRules="minlength: 5;"
        secureTextEntry
        autoCorrect={false}
        value={value}
        outlineColor={theme.color.textPrimary}
        selectionColor={theme.color.foregroundPrimary}
        theme={{ colors: {
          placeholder: theme.color.textPrimary,
          text: theme.color.textPrimary,
          primary: theme.color.brightAccent,
        }}}
        label={label}
        mode="outlined"
        onChangeText={onChangeText}
        keyboardAppearance="dark"
        {...textInputProps}
      />
    </AccessibleView>
  );
}

export default forwardRef<View, PasswordInputProps>(PasswordInput);
