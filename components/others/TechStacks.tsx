import { options, OptionType } from '@/data/interviewfor';
import { UserProfile } from '@/types/user';
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
        width: '100%',
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
type TechStacksProps = {
    data: UserProfile;
    setData: React.Dispatch<React.SetStateAction<UserProfile>>;
};

const TechStacks: React.FC<TechStacksProps> = ({ data, setData }) => {
    return (
        <Select
            placeholder="Select your tech stacks"
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={data.techstacks?.map((techstack) => ({ label: techstack, value: techstack }))}
            isMulti
            options={options}
            styles={customStyles}
            onChange={(e) => setData({ ...data, techstacks: e.map((option) => option.value) })}
        />
    );
}

export default TechStacks;
