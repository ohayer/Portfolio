import "./App.css";
import { I18nextProvider } from 'react-i18next';
import Main from './pageElements/Main'
import { ErrorBoundary } from 'react-error-boundary';
import i18n from './i18n'

function App() {

  return (
    <div className='bg-black sm:p-10 p-0 text-white font-rubik font max-w-[2400px]' id='app'>
      <ErrorBoundary fallback={<span>Ups... Something went wrong ;(</span>}>
        <I18nextProvider i18n={i18n}>
        <Main />
        </I18nextProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
