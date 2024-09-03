import { options, OptionType } from '@/data/interviewfor';
import React from 'react';
import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles: StylesConfig<OptionType, true> = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#27272a',
        borderColor: state.isFocused ? '#71717a' : '#71717a',
        boxShadow: state.isFocused ? '0 0 0 1px #71717a' : 'none',
        '&:hover': {
            borderColor: '#71717a'
        },
        color: '#fff',
        height: 'full',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#27272a',
        color: '#fff',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#27272a' : state.isFocused ? '#27272a' : '#27272a',
        color: state.isSelected ? '#fff' : '#e5e7eb',
        '&:hover': {
            backgroundColor: '#4B5563',
            color: '#fff',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#fff',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#71717a',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#71717a',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#374151',
        color: '#fff',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#fff',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#374151',
            color: '#fff',
        },
    }),
};

const ReactSelect: React.FC = () => {
    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={options}
            isMulti
            options={options}
            styles={customStyles}
        />
    );
}

export default ReactSelect;
