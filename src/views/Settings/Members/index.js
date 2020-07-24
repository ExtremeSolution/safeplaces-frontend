import React, { useState } from 'react';
import {
  container,
  title,
  membersContainer,
  itemContainer,
  subtitle,
  text,
  addMemberContainer,
  comboControl,
  textInput,
} from './styles.module.scss';
import { TextInput } from '@wfp/ui';
import emailValidator from '../../../helpers/emailValidator';
import Select from 'components/_shared/Select/Select';

const Members = () => {
  const fakeData = [
    { name: 'Darth Vader', role: 'Admin' },
    { name: 'Gandalf', role: 'Contact Tracer' },
  ];
  const options = [
    {
      value: 'tracer',
      label: 'Contact Tracer',
    },
    {
      value: 'admin',
      label: 'Administrator',
    },
  ];
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const onEmail = ({ target: { value } }) => {
    if (value.length) {
      setIsValidEmail(emailValidator(value));
    }
    setEmail(value);
  };

  return (
    <div className={container}>
      <h3 className={title}>Add new member</h3>
      <div className={addMemberContainer}>
        <div className={comboControl}>
          <TextInput
            className={textInput}
            id="email-input"
            hideLabel
            placeholder="Email address"
            labelText={null}
            onChange={onEmail}
            autoCorrect="off"
            autoCapitalize="off"
            name="email"
            invalid={email.length && !isValidEmail}
            invalidText={'Please enter a valid email'}
          />
          <Select options={options} />
        </div>
      </div>

      <div className={membersContainer}>
        <h3 className={title}>Existing members</h3>
        <div className={itemContainer}>
          <h3 className={subtitle}>Name</h3>
          <h3 className={subtitle}>Role</h3>
        </div>
        {fakeData.map(({ name, role }) => {
          return (
            <div className={itemContainer}>
              <div className={text}>{name}</div>
              <div className={text}>{role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
