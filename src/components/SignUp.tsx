import React, { useState } from 'react';
// import firebase from '../firebaseConfig';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Handle successful registration
    } catch (error) {
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;





// import React from 'react';
// import firebase from '../firebaseConfig';
// import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';

// const RegisterPage: React.FC = () => {
//   return (
//     <div className='main-container'>
//       <div className='logo'>
//       <p>CareFinder</p>
//       </div>
      
//       <div className='image'>
//         <img/>
//       </div>

//       <h2>Create an account with Carefinder!</h2>
//       <form>
//       <label>Email: </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//         />
//         <label>Password: </label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//         />
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// };
// export default RegisterPage;
