// import {initializeApp} from 'firebase/app';

// import firebaseConfig from '../../firebaseConfig';

// const firebaseApp = initializeApp(firebaseConfig);

// export default { firebaseApp };

import { initializeApp } from 'firebase/app';

import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export default { firebaseApp };