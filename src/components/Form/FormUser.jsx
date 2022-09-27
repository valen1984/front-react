import {useState} from 'react';

const FormUser = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log('firstName 👉️', firstName);
    console.log('password 👉️', password);

    // 👇️ clear all input values in the form
    setFirstName('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          onChange={event => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default FormUser;