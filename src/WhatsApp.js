// import React from 'react'
// import ReactWhatsapp from 'react-whatsapp'

// export default function WhatsApp() {

//     firebase.initializeApp({
//         // your config
//       })
      
//       const auth = firebase.auth();
//       const firestore = firebase.firestore();
//       const analytics = firebase.analytics();
//       const [user] = useAuthState(auth);

//       function SignIn() {

//         const signInWithGoogle = () => {
//           const provider = new firebase.auth.GoogleAuthProvider();
//           auth.signInWithPopup(provider);
//         }
      
//         return (
//           <>
//             <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//             <p>Do not violate the community guidelines or you will be banned for life!</p>
//           </>
//         )
      
//       }
      
//       function SignOut() {
//         return auth.currentUser && (
//           <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//         )
//       }

//       function ChatRoom() {
//         const dummy = useRef();
//         const messagesRef = firestore.collection('messages');
//         const query = messagesRef.orderBy('createdAt').limit(25);
      
//         const [messages] = useCollectionData(query, { idField: 'id' });
      
//         const [formValue, setFormValue] = useState('');
      
      
//         const sendMessage = async (e) => {
//           e.preventDefault();
      
//           const { uid, photoURL } = auth.currentUser;
      
//           await messagesRef.add({
//             text: formValue,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//             uid,
//             photoURL
//           })
      
//           setFormValue('');
//           dummy.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     function ChatMessage(props) {
//         const { text, uid, photoURL } = props.message;
      
//         const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
      
//         return (<>
//           <div className={`message ${messageClass}`}>
//             <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//             <p>{text}</p>
//           </div>
//         </>)
//       }
//   return (
//     <div className='get-cash-now-whats'>
//     <div className="App">
//       <header>
//         <h1>⚛️🔥💬</h1>
//         <SignOut />
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>

//     </div>
//     <main>

// {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

// <span ref={dummy}></span>

// </main>

// <form onSubmit={sendMessage}>

// <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

// <button type="submit" disabled={!formValue}>🕊️</button>

// </form>


//     </div>
//   )
// }
