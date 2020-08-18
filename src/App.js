import React, {Suspense, lazy} from 'react';
const Main = lazy(()=>import('./components/Main'));

const App = () => {
  return (
    <Suspense fallback={false}>
    <Main/>
    </Suspense>
    
  );
}

export default App;
