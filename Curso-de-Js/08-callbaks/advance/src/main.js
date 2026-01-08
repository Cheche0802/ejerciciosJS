import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponets } from './concepts/01-environments'
import { callabaksComponent } from './concepts/02-callbaks'
import { promisesComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promise-race'
import { asyncComponent } from './concepts/05-async'
import { asyncawaitComponent } from './concepts/06-async-await'
import { asyncawait2Component } from './concepts/07-async-await'
import { forAwaitComponent } from './concepts/08-for-await'
import { functionGeneratorComponent } from './concepts/09-generators'
import { generatorAsyncComponent } from './concepts/10-generatos-async'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
    
  </div>
`
const element = document.querySelector('.card');

//enviromentsComponets(element);
//callabaksComponent(element);
//promisesComponent(element);
//promiseRaceComponent(element);
//asyncComponent(element);
//asyncawaitComponent(element);
//asyncawait2Component(element);
//forAwaitComponent(element);
//functionGeneratorComponent(element);
generatorAsyncComponent(element);

