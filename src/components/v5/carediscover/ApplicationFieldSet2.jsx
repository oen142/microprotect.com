/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import InputField from '../../InputField';
import NextButton from './NextButton';

import { fields2 as fields } from './form.json';

export default function ApplicationFieldSet2({ t, onClick }) {
  return (
    <>
      {fields.map((field) => (
        <InputField
          key={`${field.type}-${field.name}`}
          field={field}
          t={t}
        />
      ))}
      <NextButton t={t} onClick={onClick} />
    </>
  );
}
