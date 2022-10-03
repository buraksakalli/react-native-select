import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IColors, colorMatch } from '../../utils';
import { Button } from '../Button';
import { styles } from './select.style';

export type SelectOption = {
  label: string;
  value: string | number;
};

type ISelect = {
  search?: boolean;
};

interface MultipleSelectProps extends ISelect {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps extends ISelect {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

type SelectProps = {
  options: SelectOption[];
  color?: IColors;
  placeholder?: string;
} & (SingleSelectProps | MultipleSelectProps);

export const Select: React.FC<SelectProps> = ({
  multiple,
  value,
  onChange,
  options,
  color = 'blue',
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState<string>(colorMatch(color));

  useEffect(() => {
    setActiveColor(colorMatch(color));
  }, [color]);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) {
        onChange(option);
      }
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onBlur={() => setIsOpen(false)}
        style={styles.container}
        activeOpacity={0.7}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        {(!value || (multiple && value.length === 0)) && (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <View style={styles.buttons}>
          {multiple ? (
            value.map((v) => (
              <Button
                key={v.value}
                title={v.label}
                onPress={() => {
                  selectOption(v);
                }}
                borderColor={activeColor}
              />
            ))
          ) : (
            <Text style={styles.remove}>{value?.label}</Text>
          )}
        </View>

        <View style={styles.settings}>
          {multiple && value.length > 0 && (
            <TouchableOpacity style={styles.remove} onPress={clearOptions}>
              <Text>&times;</Text>
            </TouchableOpacity>
          )}
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => setIsOpen((prev) => !prev)}>
            <Text style={[styles.caret, isOpen ? styles.caretOpen : {}]}>
              ^
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.items}>
          {options.map((option) => (
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              key={option.value}
              style={[
                styles.item,
                isOptionSelected(option)
                  ? { backgroundColor: `${activeColor}24`, borderRadius: 3 }
                  : {},
              ]}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
