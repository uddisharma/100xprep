import { OptionType } from '@/data/interviewfor';
import { UserProfile } from '@/types/user';
import React from 'react';
import Select, { StylesConfig } from 'react-select';

const options: OptionType[] = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
]

const customStyles: StylesConfig<OptionType, true> = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#27272a',
        borderColor: state.isFocused ? '#71717a' : '#71717a',
        boxShadow: state.isFocused ? '0 0 0 1px #71717a' : 'none',
        '&:hover': {
            borderColor: '#71717a'
        },
        color: '#a3a3a3',
        height: '40px',
        border: '0.5px solid #71717a',
        borderRadius: '5px',
        marginTop: '2px'
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


export default function ReactSelectSingle({ data, setData }: { data: UserProfile, setData: any }) {

    return (
        <>
            <Select
                value={data?.isWorking ? { value: "Yes", label: "Yes" } : { value: "No", label: "No" }}
                onChange={() => {
                    setData({ ...data, isWorking: !data.isWorking })
                }}
                className="basic-single w-full"
                classNamePrefix="select"
                placeholder="Currently Working"
                name="color"
                options={options}
                styles={customStyles}
            />
        </>
    );
};